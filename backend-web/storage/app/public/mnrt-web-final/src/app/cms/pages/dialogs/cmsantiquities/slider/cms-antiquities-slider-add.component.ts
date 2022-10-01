import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
@Component({
  selector: 'mnrt-cms-antiquities-slider-add',
  templateUrl: './cms-antiquities-slider-add.component.html',
  styleUrls: ['./cms-antiquities-slider-add.component.scss']
})
export class CmsAntiquitiesSliderAddComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<CmsAntiquitiesSliderAddComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }
  AntiquitiesForm!: FormGroup;
  AntiquitiesPicFile:any = null;
  user:any = "default";
  url: any = null;
  fileFormData: any = null;
  fileName: any = null;
  canAttach: boolean = false;

  ngOnInit(): void {
    this.user = localStorage.getItem('user');

    this.AntiquitiesForm = new FormGroup({
      des: new FormControl(null,[Validators.required, Validators.minLength(20)]),
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      //biography: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      pub_date: new FormControl(null,[Validators.required]),
      exp_date: new FormControl()
    });
  }

  onSubmit(){
    let  siku: any;
    let dateTime = new Date();
   // dateTime=moment(dateTime).format('MM-DD-YYYY HH:mm');
   siku=moment(dateTime).format('MM-DD-YYYY HH:mm');
    console.log(moment(dateTime).format('dddd'));
    console.log(moment(dateTime).format('YYYY-MM-DD HH:mm:ss'));

    let exp_date:any;
    if(this.AntiquitiesForm.value.end_date == null){
      exp_date = null;
    }else{
      exp_date = '"'+this.AntiquitiesForm.value.end_date.year+'-'+this.AntiquitiesForm.value.end_date.month+'-'+this.AntiquitiesForm.value.end_date.day+'"';
    }
    let antiqObj = '{"news_des": "'+this.AntiquitiesForm.value.des.replace(/"/g, "'")+'",'+
      '"news_title": "'+this.AntiquitiesForm.value.title+'",'+
      '"pub_date": "'+this.AntiquitiesForm.value.pub_date.year+'-'+this.AntiquitiesForm.value.pub_date.month+'-'+this.AntiquitiesForm.value.pub_date.day+'",'+
      '"exp_date": '+exp_date+','+
      '"video_link": null,'+
      '"image_link": "/assets/images/news/'+this.fileName+'",'+
      '"created_by": "'+this.user+'",'+
      '"updated_by": null,'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

      let antiqJSON = JSON.parse(antiqObj);
      console.log(antiqJSON);

      //add antiquities data
      this.addAntiq(antiqJSON);

}

addAntiq(obj:any){
  this.spinner.isCMSLoading.next(true);
  this.cmsService.addAntiquitiesSlider(obj).subscribe(result=>{
    this.spinner.isCMSLoading.next(false);
    //console.log(result);
    //this.message.openSnackBar("News added sucessifully!");

    //attach File
    this.attachFile(this.fileFormData);

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
  // this.leaderPicFile = event.target.files[0];
  //console.log(event.target.files);
  this.AntiquitiesPicFile = event.target.files;
  if (this.AntiquitiesPicFile.length === 0){
    this.canAttach = false;
    return;
  }
  else if(this.AntiquitiesPicFile[0].size > 500000){
    this.message.openFailureSnackBar("File too large!");
    this.canAttach = false;
    return;
  }
  else{

    this.canAttach = true;
      //Display Image
    const reader = new FileReader();
    reader.readAsDataURL(this.AntiquitiesPicFile[0]);
    reader.onload = (_event) => {
      this.url = reader.result;

      //--send file
      this.fileFormData = new FormData();
      this.fileFormData.append("image", this.AntiquitiesPicFile[0]);

      console.log(this.AntiquitiesPicFile[0]);
      this.fileName = this.AntiquitiesPicFile[0].name.replace(/\s/g, '');
      //this.attachFile(this.fileFormData);

    }
  }

}

attachFile(formData:any){
  this.spinner.isCMSLoading.next(true);
  this.cmsService.attachAntiquitiesSliderPic(formData).subscribe(result=>{
    this.spinner.isCMSLoading.next(false);
    console.log(result);
    this.message.openSnackBar("Slider added sucessifully!");
    //this.matDialogRef.close();

  },errorResponse=>{
    this.matDialogRef.close();
    console.log("Error: "+ errorResponse)
  });

}

}
