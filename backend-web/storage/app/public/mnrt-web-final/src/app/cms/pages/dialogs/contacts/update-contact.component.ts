import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import * as moment from 'moment';
import { AddContactComponent } from './add-contact.component';



@Component({
  selector: 'mnrt-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<UpdateContactComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }


  ContactForm!: FormGroup;
  //contactPicFile:any = null;
  fromDate = {year: 2021, month: 11, day: 5 };
  categorys: any[] = [{ id:0, selected: true, text:'-Select title-', value:'null'},
  { id:1, selected: false, text:'Tourism', value:'Tourism'},
  { id:2, selected: false, text:'Forests and Bees', value:'Forests and Bees'},
  { id:3, selected: false, text:'Antiquities', value:'Antiquities'},
  { id:4, selected: false, text:'Wild Life', value:'Wild Life'}];
  //pictureurl: any = null;
  user:any = "default";
  
  record_id: any = null;


  ngOnInit(): void {

    //Get current data
    //console.log(this.data.row);
    //Get record id
    //this.pictureurl = this.data.row.picture;
    this.record_id = this.data.row.id;
    this.user = localStorage.getItem('user');
    
    
    //Get title
    let cur_objIndex = this.categorys.findIndex((obj => obj.id == 0));
    let new_objIndex = this.categorys.findIndex((obj => obj.value == this.data.row.category));
    this.categorys[cur_objIndex].selected = false;
    this.categorys[new_objIndex].selected = true;
    //Get dates
    /*let cur_start_date: any;
    let cur_end_date: any;
    if(this.data.row.start_date != null){
      cur_start_date = this.data.row.start_date.split('-')
      cur_start_date = {year: Number(cur_start_date[0]), month: Number(cur_start_date[1]), day: Number(cur_start_date[2]) }
    }
    else{
      cur_start_date = null;
    }
    if(this.data.row.end_date != null){
      cur_end_date = this.data.row.end_date.split('-')
      cur_end_date = {year: Number(cur_end_date[0]), month: Number(cur_end_date[1]), day: Number(cur_end_date[2]) }
    }
    else{
      cur_end_date = null;
    }*/
    //Form Validations
    this.ContactForm = new FormGroup({
      contact_des: new FormControl(this.data.row.contact_des,[Validators.required, Validators.maxLength(100)]),
      category: new FormControl(this.data.row.category,[Validators.required, Validators.minLength(5)]),
      mobile: new FormControl(this.data.row.mobile,[Validators.required, Validators.minLength(5)]),
      email: new FormControl(this.data.row.email,[Validators.required, Validators.minLength(5)]),
      fax: new FormControl(this.data.row.fax,[Validators.required, Validators.minLength(5)])
      
    });
  }


  onSubmit(){
    
    let dateTime = new Date()
   // dateTime=moment(dateTime).format('MM-DD-YYYY HH:mm');
    console.log(moment(dateTime).format('dddd'))
    console.log(moment(dateTime).format('MM-DD-YYYY HH:mm'))
   
    let contactObj = '{"contact_des": "'+this.ContactForm.value.contact_des.replace(/"/g, "'")+'",'+
      '"category": "'+this.ContactForm.value.category+'",'+
     '"mobile": "'+this.ContactForm.value.mobile.replace(/"/g, "'")+'",'+
     '"email": "'+this.ContactForm.value.email.replace(/"/g, "'")+'",'+
     '"fax": "'+this.ContactForm.value.fax.replace(/"/g, "'")+'",'+
      '"created_by": null,'+
      '"updated_by": "'+this.user+'",'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "1981-07-04T04:07:26.000000Z",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let contactJSON = JSON.parse(contactObj);
    //console.log(contactJSON);
    this.updateContact(this.record_id, contactJSON);
  }


  updateContact(id:any, obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.updateContactById(id, obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Contact updated sucessifully!");
      this.matDialogRef.close();

    },errorResponse=>{
      this.matDialogRef.close();
      console.log("Error: "+ errorResponse)
    });
  }

  onClose(){
    this.matDialogRef.close();
  }

  
}
