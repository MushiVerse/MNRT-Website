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
  selector: 'mnrt-add-management',
  templateUrl: './add-management.component.html',
  styleUrls: ['./add-management.component.scss']
})
export class AddManagementComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<AddManagementComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }

  ManagementForm!: FormGroup;
  ManagementPicFile:any = null;
  fromDate = {year: 2021, month: 11, day: 5 };
 departments: any[] = [{ id:0, selected: true, text:'-Select department-', value:'null'},
  { id:1, selected: false, text:'Wild Life', value:'Wild Life'},
  { id:2, selected: false, text:'Tourism', value:'Tourism'},
  { id:3, selected: false, text:'Forestry And Bee Keeping ', value:'Forestry And Bee Keeping'},
  { id:4, selected: false, text:'Antiquities', value:'Antiquities'}];
  pictureurl: any = null;

  user:any = "default";



   ngOnInit(): void {
    //Form Validations
    this.user = localStorage.getItem('user');
    this.ManagementForm = new FormGroup({
      name: new FormControl(null,[Validators.required, Validators.maxLength(100)]),
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      facebook_link: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      instagram_link: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      twitter_link: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      department: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      biography: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      start_date: new FormControl(null,[Validators.required]),
      end_date: new FormControl()
    });
  }

  onSubmit(){
    let  siku: any;
    let dateTime = new Date();
   
   siku=moment(dateTime).format('MM-DD-YYYY HH:mm');
    console.log(moment(dateTime).format('dddd'));
    console.log(moment(dateTime).format('YYYY-MM-DD HH:mm:ss'));
    let end_date:any;
    if(this.ManagementForm.value.end_date == null){ 
      end_date = null; 
    }else{ 
      end_date = '"'+this.ManagementForm.value.end_date.year+'-'+this.ManagementForm.value.end_date.month+'-'+this.ManagementForm.value.end_date.day+'"';
    }
    let managementObj = '{"name": "'+this.ManagementForm.value.name.replace(/"/g, "'")+'",'+
      '"title": "'+this.ManagementForm.value.title+'",'+
      '"facebook_link": "'+this.ManagementForm.value.facebook_link+'",'+
      '"instagram_link": "'+this.ManagementForm.value.instagram_link+'",'+
      '"twitter_link": "'+this.ManagementForm.value.twitter_link+'",'+
      '"department": "'+this.ManagementForm.value.department.replace(/"/g, "'")+'",'+
      '"start_date": "'+this.ManagementForm.value.start_date.year+'-'+this.ManagementForm.value.start_date.month+'-'+this.ManagementForm.value.start_date.day+'",'+
      '"end_date": '+end_date+','+
      '"picture": null,'+
      '"biography": "'+this.ManagementForm.value.biography.replace(/"/g, "'")+'",'+
      
      '"created_by": "'+this.user+'",'+
      '"updated_by": null,'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let managementJSON = JSON.parse(managementObj);
    console.log(managementJSON);
    
    this.addManagement(managementJSON);
  }

  addManagement(obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.addManagement(obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Management added sucessifully!");
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
