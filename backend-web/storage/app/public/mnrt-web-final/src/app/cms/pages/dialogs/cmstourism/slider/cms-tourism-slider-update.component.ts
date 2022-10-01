import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-cms-tourism-slider-update',
  templateUrl: './cms-tourism-slider-update.component.html',
  styleUrls: ['./cms-tourism-slider-update.component.scss']
})
export class CmsTourismSliderUpdateComponent implements OnInit {

      //2
constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, 
public matDialogRef: MatDialogRef<CmsTourismSliderUpdateComponent>, 
private spinner: SpinnerService, 
private cmsService: CmsserviceService, 
private message: MessagesService) { }

//3
NewForm!: FormGroup;
newPicFile:any = null;
fromDate = {year: 2021, month: 11, day: 5 };

image_linkurl: any = null;
record_id: any = null;
user:any = "default";



ngOnInit(): void {
  this.user = localStorage.getItem('user');

  
  this.image_linkurl = this.data.row.image_slider;
  this.record_id = this.data.row.id;
 
  
  //Form Validations
  this.NewForm = new FormGroup({
    slider_description: new FormControl(this.data.row.image_slider_description,[Validators.required, Validators.minLength(5)]),
   
  });
}

//4
onSubmit(){

  let  siku: any;
      let dateTime = new Date();
     siku=moment(dateTime).format('MM-DD-YYYY HH:mm');
      console.log(moment(dateTime).format('dddd'));
      console.log(moment(dateTime).format('YYYY-MM-DD HH:mm:ss'));


  let newObj = '{"image_slider_description": "'+this.NewForm.value.slider_description.replace(/"/g, "'")+'",'+
    '"image_slider": "'+this.data.row.image_slider+'",'+
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
