import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<AddAnnouncementComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }

  AnnouncementForm!: FormGroup;
  announcementPicFile:any = null;
  pictureurl: any = null;

  ngOnInit(): void {
    //Form Validations
    this.AnnouncementForm = new FormGroup({
      ann_title: new FormControl(null,[Validators.required, Validators.maxLength(200)]),
      ann_des: new FormControl(null,[Validators.required, Validators.minLength(5)])
    });
  }

  onSubmit(){
    
    let announcementObj = '{"ann_title": "'+this.AnnouncementForm.value.ann_title.replace(/"/g, "'")+'",'+
    '"ann_des": "'+this.AnnouncementForm.value.ann_des.replace(/"/g, "'")+'",'+
      '"picture": null,'+
      '"created_by": null,'+
      '"updated_by": null,'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "1981-07-04T04:07:26.000000Z",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let announcementJSON = JSON.parse(announcementObj);
    console.log(announcementJSON);
    
    this.addAnnouncement(announcementJSON);
  }

  addAnnouncement(obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.addAnnouncement(obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Announcement added sucessifully!");
      this.matDialogRef.close();

    },errorResponse=>{
      this.matDialogRef.close();
      console.log("Error: "+ errorResponse)
    });
  }

  onClose(){
    this.matDialogRef.close();
  }

  onFileSelected(event: any){
    
    //console.log(event);
    // this.announcementPicFile = event.target.files[0];
    // console.log(this.announcementPicFile);
    this.announcementPicFile = event.target.files;
    if (this.announcementPicFile.length === 0)
        return;

    //Display Image
    const reader = new FileReader();
    reader.readAsDataURL(this.announcementPicFile[0]); 
    reader.onload = (_event) => { 
    this.pictureurl = reader.result; 
      
    }



  }




}
