//import { Component, OnInit } from '@angular/core';
//1
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { AddNewComponent } from './add-new.component';


@Component({
  selector: 'mnrt-update-new',
  templateUrl: './update-new.component.html',
  styleUrls: ['./update-new.component.scss']
})
export class UpdateNewComponent implements OnInit {
//2
constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<UpdateNewComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }

  //3
  NewForm!: FormGroup;
  newPicFile:any = null;
  fromDate = {year: 2021, month: 11, day: 5 };
  /*titles: any[] = [{ id:0, selected: true, text:'-Select title-', value:'null'},
  { id:1, selected: false, text:'Minister', value:'Minister'},
  { id:2, selected: false, text:'Deputy Minister', value:'Deputy Minister'},
  { id:3, selected: false, text:'Permanent Secretary', value:'Permanent Secretary'},
  { id:4, selected: false, text:'Deputy Permanent Secretary', value:'Deputy Permanent Secretary'}];*/
  image_linkurl: any = null;
  record_id: any = null;
  user:any = "default";



  ngOnInit(): void {
    this.user = localStorage.getItem('user');

    //Get current data
    //console.log(this.data.row);
    //Get record id
    this.image_linkurl = this.data.row.image_link;
    this.record_id = this.data.row.id;
    //Get title
    /*let cur_objIndex = this.titles.findIndex((obj => obj.id == 0));
    let new_objIndex = this.titles.findIndex((obj => obj.value == this.data.row.news_title));
    this.titles[cur_objIndex].selected = false;
    this.titles[new_objIndex].selected = true;*/
    //Get dates
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
      news_title: new FormControl(this.data.row.news_title,[Validators.required, Validators.maxLength(100)]),
      news_des: new FormControl(this.data.row.news_des,[Validators.required, Validators.minLength(5)]),
      pub_date: new FormControl(cur_pub_date,[Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
      exp_date: new FormControl(cur_exp_date)
    });
  }

  //4
  onSubmit(){
    let exp_date:any;
    if(this.NewForm.value.exp_date == null){ 
      exp_date = null; 
    }else{ 
      exp_date = '"'+this.NewForm.value.exp_date.year+'-'+this.NewForm.value.exp_date.month+'-'+this.NewForm.value.exp_date.day+'"';
    }
    let newObj = '{"news_title": "'+this.NewForm.value.news_title.replace(/"/g, "'")+'",'+
      '"news_des": "'+this.NewForm.value.news_des+'",'+
      '"pub_date": "'+this.NewForm.value.pub_date.year+'-'+this.NewForm.value.pub_date.month+'-'+this.NewForm.value.pub_date.day+'",'+
      '"exp_date": '+exp_date+','+
      '"image_link": "'+this.data.row.image_link+'",'+
      '"created_by": null,'+
      '"updated_by": "'+this.user+'",'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "1981-07-04T04:07:26.000000Z",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let newJSON = JSON.parse(newObj);
    //console.log(newJSON);
    this.updateNew(this.record_id, newJSON);
  }
  //update new
  updateNew(id:any, obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.updateNewById(id, obj).subscribe(result=>{
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
