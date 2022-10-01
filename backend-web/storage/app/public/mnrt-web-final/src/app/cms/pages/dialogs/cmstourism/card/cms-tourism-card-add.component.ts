import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-cms-tourism-card-add',
  templateUrl: './cms-tourism-card-add.component.html',
  styleUrls: ['./cms-tourism-card-add.component.scss']
})
export class CmsTourismCardAddComponent implements OnInit {

  constructor(
    public matDialogRef: MatDialogRef<CmsTourismCardAddComponent>,
    private spinner: SpinnerService,
    private cmsService: CmsserviceService,
    private message: MessagesService,
    private httpClient: HttpClient
  ) {}

  //2
  NewForm!: FormGroup;
  newPicFile: any = null;
  user: any = 'default';
  url: any = null;
  fileFormData: any = null;
  fileName: any = null;
  canAttach: boolean = false;

  //3
  ngOnInit(): void {
    this.user = localStorage.getItem('user');

    this.NewForm = new FormGroup({
      link: new FormControl(null, [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
  }
  //4
  onSubmit() {
    let siku: any;
    let dateTime = new Date();
    siku = moment(dateTime).format('MM-DD-YYYY HH:mm');
    
   
    let newObj =
      '{"card_link": "' + this.NewForm.value.link.replace(/"/g, "'") +
      '",' +
      '"card_img": "/assets/images/tourism/' + this.fileName +
      '",' +
      '"created_by": "' + this.user +
      '",' +
      '"updated_by": "' + this.user +
      '",' +
      '"status": true,' +
      '"created_at": "' + moment(dateTime).format('YYYY-MM-DD HH:mm:ss') +
      '",' +
      '"updated_at": null,' +
      '"deleted_at": null}';

    let newJSON = JSON.parse(newObj);
    console.log(newJSON);

    //add news data
    this.addNew(newJSON);
  }
  //5
  addNew(obj: any) {
    this.spinner.isCMSLoading.next(true);
    this.cmsService.addTourismData(obj).subscribe(
      (result) => {
        this.spinner.isCMSLoading.next(false);
        
        this.attachFile(this.fileFormData);

        this.matDialogRef.close();
      },
      (errorResponse) => {
        this.matDialogRef.close();
        console.log('Error: ' + errorResponse);
      }
    );
  }

  onClose() {
    this.matDialogRef.close();
  }

  //6
  onFileSelected(event: any) {
    
    this.newPicFile = event.target.files;
    if (this.newPicFile.length === 0) {
      this.canAttach = false;
      return;
    } else if (this.newPicFile[0].size > 500000) {
      this.message.openFailureSnackBar('File too large!');
      this.canAttach = false;
      return;
    } else {
      this.canAttach = true;
      //Display Image
      const reader = new FileReader();
      reader.readAsDataURL(this.newPicFile[0]);
      reader.onload = (_event) => {
        this.url = reader.result;

        //--send file
        this.fileFormData = new FormData();
        this.fileFormData.append('image', this.newPicFile[0]);

        console.log(this.newPicFile[0]);
        this.fileName = this.newPicFile[0].name.replace(/\s/g, '');
      };
    }
  }

  attachFile(formData: any) {
    this.spinner.isCMSLoading.next(true);
    this.cmsService.attachTourismPic(formData).subscribe(
      (result) => {
        this.spinner.isCMSLoading.next(false);
        console.log(result);
        this.message.openSnackBar('Card Contents Added!');
        //this.matDialogRef.close();
      },
      (errorResponse) => {
        this.matDialogRef.close();
        console.log('Error: ' + errorResponse);
      }
    );
  }
}
