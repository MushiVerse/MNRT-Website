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
  selector: 'mnrt-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.scss']
})
export class AddAdvertisementComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<AddAdvertisementComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }
  

  AdvertisementForm!: FormGroup;
  advertisementPicFile:any = null;
  attachmenturl: any = null;
  user:any = "default";


  ngOnInit(): void {
    //Form Validations
    this.user = localStorage.getItem('user');
    this.AdvertisementForm = new FormGroup({
      adv_title: new FormControl(null,[Validators.required, Validators.maxLength(200)]),
      adv_des: new FormControl(null,[Validators.required, Validators.minLength(5)])
      
      
      
    });
  }

  onSubmit(){
    
    let advertisementObj = '{"adv_title": "'+this.AdvertisementForm.value.adv_title.replace(/"/g, "'")+'",'+
    '"adv_des": "'+this.AdvertisementForm.value.adv_des.replace(/"/g, "'")+'",'+
      '"attachment": "www/pic/doc",'+
      '"created_by": null,'+
      '"updated_by": null,'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "1981-07-04T04:07:26.000000Z",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let advertisementJSON = JSON.parse(advertisementObj);
    console.log(advertisementJSON);
    
    this.addAdvertisement(advertisementJSON);
  }

  addAdvertisement(obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.addAdvertisement(obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Advertisement added sucessifully!");
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
    // this.advertisementPicFile = event.target.files[0];
    // console.log(this.advertisementPicFile);
    this.advertisementPicFile = event.target.files;
    if (this.advertisementPicFile.length === 0)
        return;

    //Display Image
    const reader = new FileReader();
    reader.readAsDataURL(this.advertisementPicFile[0]); 
    reader.onload = (_event) => { 
    this.attachmenturl = reader.result; 
      
    }



  }

}
