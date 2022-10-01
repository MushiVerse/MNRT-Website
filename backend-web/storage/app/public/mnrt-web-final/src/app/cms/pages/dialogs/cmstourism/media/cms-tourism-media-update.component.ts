import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-cms-tourism-media-update',
  templateUrl: './cms-tourism-media-update.component.html',
  styleUrls: ['./cms-tourism-media-update.component.scss']
})
export class CmsTourismMediaUpdateComponent implements OnInit {

  //2
constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, 
public matDialogRef: MatDialogRef<CmsTourismMediaUpdateComponent>, 
private spinner: SpinnerService, private cmsService: CmsserviceService, 
private message: MessagesService, private httpClient: HttpClient) { }

//3
NewForm!: FormGroup;
newPicFile:any = null;
fromDate = {year: 2021, month: 11, day: 5 };
image_linkurl: any = null;
record_id: any = null;
user:any = "default";



ngOnInit(): void {
  this.user = localStorage.getItem('user');
  this.image_linkurl = this.data.row.media_video;
  this.record_id = this.data.row.id;
  
  let cur_pub_date: any;
  let cur_exp_date: any;
  if(this.data.row.pub_date != null){
    cur_pub_date = this.data.row.pub_date.split('-')
    cur_pub_date = {year: Number(cur_pub_date[0]), month: Number(cur_pub_date[1]), day: Number(cur_pub_date[2]) }
  }
  else{
    cur_pub_date = null;
  }
  if(this.data.row.exp_date != null){
    cur_exp_date = this.data.row.exp_date.split('-')
    cur_exp_date = {year: Number(cur_exp_date[0]), month: Number(cur_exp_date[1]), day: Number(cur_exp_date[2]) }
  }
  else{
    cur_exp_date = null;
  }
  //Form Validations
  this.NewForm = new FormGroup({
    news_title: new FormControl(this.data.row.media_title,[Validators.required, Validators.maxLength(100)]),
    news_des: new FormControl(this.data.row.media_description,[Validators.required, Validators.minLength(5)]),
    
  });
}

//4
onSubmit(){
  let  siku: any;
      let dateTime = new Date();
     siku=moment(dateTime).format('MM-DD-YYYY HH:mm');
      
  let newObj = '{"media_title": "'+this.NewForm.value.news_title.replace(/"/g, "'")+'",'+
    '"media_description": "'+this.NewForm.value.news_des+'",'+
    '"media_video": "'+this.data.row.media_video +'",'+
    '"created_by": null,'+
    '"updated_by": "'+this.user+'",'+
    '"deleted_by": null,'+
    '"status": true,'+
    '"updated_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
    '"updated_at": null,'+
    '"deleted_at": null}';

  let newJSON = JSON.parse(newObj);
  //console.log(newJSON);
  this.updateNew(this.record_id, newJSON);
}
//update new
updateNew(id:any, obj:any){
  this.spinner.isCMSLoading.next(true);
  this.cmsService.updateTourismById(id, obj).subscribe(result=>{
    this.spinner.isCMSLoading.next(false);
    //console.log(result);
    this.message.openSnackBar("New updated sucessifully!");
    this.matDialogRef.close();

  },errorResponse=>{
    this.matDialogRef.close();
    console.log("Error: "+ errorResponse)
  });
}



//6
onClose(){
  this.matDialogRef.close();
}


//7
//url: any = null;
onFileSelected(event: any){
  //console.log(event);
  // this.newPicFile = event.target.files[0];
  // console.log(this.newPicFile);
  this.newPicFile = event.target.files;
  if (this.newPicFile.length === 0)
      return;

  //Display Image
  const reader = new FileReader();
  reader.readAsDataURL(this.newPicFile[0]); 
  reader.onload = (_event) => { 
  this.image_linkurl = reader.result; 
    
  }



}
}
