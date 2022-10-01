import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-cms-wildlife-card-update',
  templateUrl: './cms-wildlife-card-update.component.html',
  styleUrls: ['./cms-wildlife-card-update.component.scss']
})
export class CmsWildlifeCardUpdateComponent implements OnInit {

  
    //2
constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, 
public matDialogRef: MatDialogRef<CmsWildlifeCardUpdateComponent>, 
private spinner: SpinnerService, 
private cmsService: CmsserviceService, 
private message: MessagesService, 
private httpClient: HttpClient) { }

//3
NewForm!: FormGroup;
newPicFile:any = null;
fromDate = {year: 2021, month: 11, day: 5 };

image_linkurl: any = null;
record_id: any = null;
user:any = "default";



ngOnInit(): void {
  this.user = localStorage.getItem('user');

  
  this.image_linkurl = this.data.row.card_img;
  this.record_id = this.data.row.id;
 
  
  //Form Validations
  this.NewForm = new FormGroup({
    // news_title: new FormControl(this.data.row.news_title,[Validators.required, Validators.maxLength(100)]),
    about_description: new FormControl(this.data.row.card_link,[Validators.required, Validators.minLength(5)]),
    // pub_date: new FormControl(cur_pub_date,[Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
    // exp_date: new FormControl(cur_exp_date)
  });
}

//4
onSubmit(){

  let  siku: any;
      let dateTime = new Date();
     siku=moment(dateTime).format('MM-DD-YYYY HH:mm');
      console.log(moment(dateTime).format('dddd'));
      console.log(moment(dateTime).format('YYYY-MM-DD HH:mm:ss'));


  let newObj = '{"card_link": "'+this.NewForm.value.about_description.replace(/"/g, "'")+'",'+
    '"card_img": "'+this.data.row.about_img+'",'+
    '"created_by": null,'+
    '"updated_by": "'+this.user+'",'+
    '"deleted_by": null,'+
    '"status": true,'+
    '"created_at": null,'+
    '"updated_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
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
    this.message.openSnackBar("About Contents Updated!");
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
