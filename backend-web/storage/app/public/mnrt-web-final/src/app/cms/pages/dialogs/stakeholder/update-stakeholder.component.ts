import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { AddStakeholderComponent } from './add-stakeholder.component';


@Component({
  selector: 'mnrt-update-stakeholder',
  templateUrl: './update-stakeholder.component.html',
  styleUrls: ['./update-stakeholder.component.scss']
})
export class UpdateStakeholderComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<UpdateStakeholderComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }

  StakeholderForm!: FormGroup;
  //stakeholderPicFile:any = null;
  fromDate = {year: 2021, month: 11, day: 5 };
  categorys: any[] = [{ id:0, selected: true, text:'-Select category-', value:'null'},
  { id:1, selected: false, text:'Tour Operators', value:'Tour Operators'},
  { id:2, selected: false, text:'Hunting Companies', value:'Hunting Companies'},
  { id:3, selected: false, text:'licensed-researches', value:'licensed-researches'},
  { id:4, selected: false, text:'forest-products-exporters', value:'forest-products-exporters'},
  { id:5, selected: false, text:'Trophy Dealers', value:'Trophy Dealers'}];
  //pictureurl: any = null;
  record_id: any = null;

  user:any = "default";


   ngOnInit(): void {

    //Get current data
    //console.log(this.data.row);
    //Get record id
    this.user = localStorage.getItem('user');
    //this.pictureurl = this.data.row.picture;
    this.record_id = this.data.row.id;
    //Get category
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
    this.StakeholderForm = new FormGroup({
      sthdr_name: new FormControl(this.data.row.sthdr_name,[Validators.required, Validators.maxLength(100)]),
      category: new FormControl(this.data.row.category,[Validators.required, Validators.minLength(5)]),
      phone: new FormControl(this.data.row.phone,[Validators.required, Validators.minLength(10)]),
      email: new FormControl(this.data.row.email,[Validators.required, Validators.minLength(5)]),
      postal_address: new FormControl(this.data.row.postal_address,[Validators.required, Validators.minLength(5)]),
      physical_address: new FormControl(this.data.row.physical_address,[Validators.required, Validators.minLength(5)]),
      country: new FormControl(this.data.row.country,[Validators.required, Validators.minLength(5)]),
      website: new FormControl(this.data.row.website,[Validators.required, Validators.minLength(5)])
    });
  }


  onSubmit(){

    let  siku: any;
    let dateTime = new Date();
   // dateTime=moment(dateTime).format('MM-DD-YYYY HH:mm');
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
      '"created_by":  "'+this.data.row.created_by+'",'+
      '"updated_by": "'+this.user+'",'+
      '"deleted_by": null,'+
      '"licence_status": "active",'+
      '"status": true,'+
      '"created_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let stakeholderJSON = JSON.parse(stakeholderObj);
    //console.log(stakeholderJSON);
    this.updateStakeholder(this.record_id, stakeholderJSON);
  }

   //update stakeholder
   updateStakeholder(id:any, obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.updateStakeholderById(id, obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Stakeholder updated sucessifully!");
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
