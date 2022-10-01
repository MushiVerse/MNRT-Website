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
  selector: 'mnrt-add-stakeholder',
  templateUrl: './add-stakeholder.component.html',
  styleUrls: ['./add-stakeholder.component.scss']
})
export class AddStakeholderComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<AddStakeholderComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }


  StakeholderForm!: FormGroup;
  //StakeholderPicFile:any = null;
  fromDate = {year: 2021, month: 11, day: 5 };
  categorys: any[] = [{ id:0, selected: true, text:'-Select category-', value:'null'},
  { id:1, selected: false, text:'Tour Operators', value:'Tour Operators'},
  { id:2, selected: false, text:'Hunting Companies', value:'Hunting Companies'},
  { id:3, selected: false, text:'licensed-researches', value:'licensed-researches'},
  { id:4, selected: false, text:'forest-products-exporters', value:'forest-products-exporters'},
  { id:5, selected: false, text:'Trophy Dealers', value:'Trophy Dealers'}];
  //pictureurl: any = null;

  user:any = "default";



  ngOnInit(): void {
    //Form Validations
    this.user = localStorage.getItem('user');
    this.StakeholderForm = new FormGroup({
      sthdr_name: new FormControl(null,[Validators.required, Validators.maxLength(100)]),
      category: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      phone: new FormControl(null,[Validators.required, Validators.minLength(10)]),
      email: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      postal_address: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      physical_address: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      country: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      website: new FormControl(null,[Validators.required, Validators.minLength(5)])
      
    });
  }


  onSubmit(){
    let  siku: any;
    let dateTime = new Date();
   
   siku=moment(dateTime).format('MM-DD-YYYY HH:mm');
    console.log(moment(dateTime).format('dddd'));
    console.log(moment(dateTime).format('YYYY-MM-DD HH:mm:ss'));
    /*let end_date:any;
    if(this.StakeholderForm.value.end_date == null){ 
      end_date = null; 
    }else{ 
      end_date = '"'+this.StakeholderForm.value.end_date.year+'-'+this.StakeholderForm.value.end_date.month+'-'+this.StakeholderForm.value.end_date.day+'"';
    }*/
    let stakeholderObj = '{"sthdr_name": "'+this.StakeholderForm.value.sthdr_name.replace(/"/g, "'")+'",'+
      '"category": "'+this.StakeholderForm.value.category+'",'+
      '"phone": "'+this.StakeholderForm.value.phone+'",'+
      '"email": "'+this.StakeholderForm.value.email+'",'+
      '"postal_address": "'+this.StakeholderForm.value.postal_address+'",'+
      '"physical_address": "'+this.StakeholderForm.value.postal_address+'",'+
      '"country": "'+this.StakeholderForm.value.country.replace(/"/g, "'")+'",'+
      '"website": "'+this.StakeholderForm.value.website.replace(/"/g, "'")+'",'+
      '"created_by": "'+this.user+'",'+
      '"updated_by": null,'+
      '"deleted_by": null,'+
      '"licence_status": "active",'+
      '"status": true,'+
      '"created_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let stakeholderJSON = JSON.parse(stakeholderObj);
    console.log(stakeholderJSON);
    
    this.addStakeholder(stakeholderJSON);
  }


  addStakeholder(obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.addStakeholder(obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Stakeholder added sucessifully!");
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
