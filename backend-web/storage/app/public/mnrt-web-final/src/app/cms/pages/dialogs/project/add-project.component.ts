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
  selector: 'mnrt-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<AddProjectComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }


  ProjectForm!: FormGroup;
  /*projectPicFile:any = null;
  fromDate = {year: 2021, month: 11, day: 5 };
  titles: any[] = [{ id:0, selected: true, text:'-Select title-', value:'null'},
  { id:1, selected: false, text:'Minister', value:'Minister'},
  { id:2, selected: false, text:'Deputy Minister', value:'Deputy Minister'},
  { id:3, selected: false, text:'Permanent Secretary', value:'Permanent Secretary'},
  { id:4, selected: false, text:'Deputy Permanent Secretary', value:'Deputy Permanent Secretary'}];
  pictureurl: any = null;*/

  user:any = "default";

  ngOnInit(): void {
    //Form Validations
    this.user = localStorage.getItem('user');
    this.ProjectForm = new FormGroup({
      project_title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      project_details: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      project_cost: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      project_funder: new FormControl(null,[Validators.required, Validators.minLength(5)])
      
    });
  }

  onSubmit(){
    let  siku: any;
    let dateTime = new Date();
   
   siku=moment(dateTime).format('MM-DD-YYYY HH:mm');
    console.log(moment(dateTime).format('dddd'));
    console.log(moment(dateTime).format('YYYY-MM-DD HH:mm:ss'));
    /*let end_date:any;
    if(this.ProjectForm.value.end_date == null){ 
      end_date = null; 
    }else{ 
      end_date = '"'+this.ProjectForm.value.end_date.year+'-'+this.ProjectForm.value.end_date.month+'-'+this.ProjectForm.value.end_date.day+'"';
    }*/
    let projectObj = '{"project_title": "'+this.ProjectForm.value.project_title.replace(/"/g, "'")+'",'+
      '"project_details": "'+this.ProjectForm.value.project_details.replace(/"/g, "'")+'",'+
      '"project_cost": "'+this.ProjectForm.value.project_cost+'",'+
      '"project_funder": "'+this.ProjectForm.value.project_funder.replace(/"/g, "'")+'",'+
      /*'"twitter_link": "'+this.ProjectForm.value.twitter_link+'",'+
      '"start_date": "'+this.ProjectForm.value.start_date.year+'-'+this.ProjectForm.value.start_date.month+'-'+this.ProjectForm.value.start_date.day+'",'+
      '"end_date": '+end_date+','+
      '"picture": null,'+
      '"project_details": "'+this.ProjectForm.value.biography.replace(/"/g, "'")+'",'+*/
      
      '"created_by": "'+this.user+'",'+
      '"updated_by": null,'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let projectJSON = JSON.parse(projectObj);
    console.log(projectJSON);
    
    this.addProject(projectJSON);
  }

  addProject(obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.addProject(obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Project added sucessifully!");
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
