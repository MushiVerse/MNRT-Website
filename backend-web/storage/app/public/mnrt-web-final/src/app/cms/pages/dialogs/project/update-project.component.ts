import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss']
})
export class UpdateProjectComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<UpdateProjectComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }


  ProjectForm!: FormGroup;
  /*projectPicFile:any = null;
  fromDate = {year: 2021, month: 11, day: 5 };
  titles: any[] = [{ id:0, selected: true, text:'-Select title-', value:'null'},
  { id:1, selected: false, text:'Minister', value:'Minister'},
  { id:2, selected: false, text:'Deputy Minister', value:'Deputy Minister'},
  { id:3, selected: false, text:'Permanent Secretary', value:'Permanent Secretary'},
  { id:4, selected: false, text:'Deputy Permanent Secretary', value:'Deputy Permanent Secretary'}];
  pictureurl: any = null;*/
  record_id: any = null;

  user:any = "default";

   ngOnInit(): void {

    //Get current data
    //console.log(this.data.row);
    //Get record id
    this.user = localStorage.getItem('user');
    //this.pictureurl = this.data.row.picture;
    this.record_id = this.data.row.id;
    //Get title
    /*let cur_objIndex = this.titles.findIndex((obj => obj.id == 0));
    let new_objIndex = this.titles.findIndex((obj => obj.value == this.data.row.project_title));
    this.titles[cur_objIndex].selected = false;
    this.titles[new_objIndex].selected = true;*/
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
    this.ProjectForm = new FormGroup({
      project_title: new FormControl(this.data.row.project_title,[Validators.required, Validators.minLength(5)]),
      project_details: new FormControl(this.data.row.project_details,[Validators.required, Validators.minLength(5)]),
      project_cost: new FormControl(this.data.row.project_cost,[Validators.required, Validators.minLength(5)]),
      project_funder: new FormControl(this.data.row.project_funder,[Validators.required, Validators.minLength(5)])
      
      
    });
  }

  onSubmit(){

    let  siku: any;
    let dateTime = new Date();
   // dateTime=moment(dateTime).format('MM-DD-YYYY HH:mm');
   siku=moment(dateTime).format('MM-DD-YYYY HH:mm');
    console.log(moment(dateTime).format('dddd'));
    console.log(moment(dateTime).format('YYYY-MM-DD HH:mm:ss'));

    let end_date:any;
    if(this.ProjectForm.value.end_date == null){ 
      end_date = null; 
    }else{ 
      end_date = '"'+this.ProjectForm.value.end_date.year+'-'+this.ProjectForm.value.end_date.month+'-'+this.ProjectForm.value.end_date.day+'"';
    }
    let projectObj = '{"project_title": "'+this.ProjectForm.value.project_title.replace(/"/g, "'")+'",'+
      '"project_details": "'+this.ProjectForm.value.project_details.replace(/"/g, "'")+'",'+
      '"project_cost": "'+this.ProjectForm.value.project_cost+'",'+
      '"project_funder": "'+this.ProjectForm.value.project_funder.replace(/"/g, "'")+'",'+
      /*'"facebook_link": "'+this.ProjectForm.value.facebook_link+'",'+
      '"instagram_link": "'+this.ProjectForm.value.instagram_link+'",'+
      '"twitter_link": "'+this.ProjectForm.value.twitter_link+'",'+
      '"start_date": "'+this.ProjectForm.value.start_date.year+'-'+this.ProjectForm.value.start_date.month+'-'+this.ProjectForm.value.start_date.day+'",'+
      '"end_date": '+end_date+','+
      '"picture": "'+this.data.row.picture+'",'+
      '"project_details": "'+this.ProjectForm.value.project_details.replace(/"/g, "'")+'",'+*/
      '"created_by": null,'+
      '"updated_by": "'+this.user+'",'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "'+this.data.row.created_at+'",'+
      
      '"updated_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
      '"deleted_at": null}';

    let projectJSON = JSON.parse(projectObj);
    //console.log(projectJSON);
    this.updateProject(this.record_id, projectJSON);
  }

  //update leader
  updateProject(id:any, obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.updateProjectById(id, obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Project updated sucessifully!");
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
