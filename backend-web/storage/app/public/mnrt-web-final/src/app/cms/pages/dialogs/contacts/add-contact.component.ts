import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<AddContactComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }

  ContactForm!: FormGroup;
  //contactPicFile:any = null;
  categories: any[] = [{ id:0, selected: true, text:'-Select title-', value:'null'},
  { id:1, selected: false, text:'Tourism', value:'Tourism'},
  { id:2, selected: false, text:'Forests and Bees', value:'Forests and Bees'},
  { id:3, selected: false, text:'Antiquities', value:'Antiquities'},
  { id:4, selected: false, text:'Wild Life', value:'Wild Life'}];
  //pictureurl: any = null;
  ngOnInit(): void {
    //Form Validations
    this.ContactForm = new FormGroup({
      contact_des: new FormControl(null,[Validators.required, Validators.maxLength(100)]),
      category: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      mobile: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      email: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      fax: new FormControl(null,[Validators.required, Validators.minLength(5)])
      
    });
  }


  onSubmit(){
    let  siku: any;
    let dateTime = new Date();
   // dateTime=moment(dateTime).format('MM-DD-YYYY HH:mm');
   siku=moment(dateTime).format('MM-DD-YYYY HH:mm');
    console.log(moment(dateTime).format('dddd'));
    console.log(moment(dateTime).format('YYYY-MM-DD HH:mm:ss'));
   
    let contactObj = '{"contact_des": "'+this.ContactForm.value.contact_des.replace(/"/g, "'")+'",'+
      '"category": "'+this.ContactForm.value.category+'",'+
      '"mobile": "'+this.ContactForm.value.mobile.replace(/"/g, "'")+'",'+
      '"email": "'+this.ContactForm.value.email.replace(/"/g, "'")+'",'+
      '"fax": "'+this.ContactForm.value.fax.replace(/"/g, "'")+'",'+
      '"created_by": null,'+
      '"updated_by": null,'+
      '"deleted_by": null,'+
      '"status": true,'+
      //'"created_at": "1981-07-04T04:07:26.000000Z",'+"'+this.user+'",'+
      '"created_at": "2021-11-19 23:35:00",'+
      '"created_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

      
    let contactJSON = JSON.parse(contactObj);
    console.log(contactJSON);
    
    this.addContact(contactJSON);
  }

  addContact(obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.addContact(obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Contact added sucessifully!");
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
