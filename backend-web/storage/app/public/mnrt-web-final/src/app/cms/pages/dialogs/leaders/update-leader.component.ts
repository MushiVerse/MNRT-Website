import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { AddLeaderComponent } from './add-leader.component';

@Component({
  selector: 'mnrt-update-leader',
  templateUrl: './update-leader.component.html',
  styleUrls: ['./update-leader.component.scss']
})
export class UpdateLeaderComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<UpdateLeaderComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }
  LeaderForm!: FormGroup;
  leaderPicFile:any = null;
  fromDate = {year: 2021, month: 11, day: 5 };
  titles: any[] = [{ id:0, selected: true, text:'-Select title-', value:'null'},
  { id:1, selected: false, text:'Minister', value:'Minister'},
  { id:2, selected: false, text:'Deputy Minister', value:'Deputy Minister'},
  { id:3, selected: false, text:'Permanent Secretary', value:'Permanent Secretary'},
  { id:4, selected: false, text:'Deputy Permanent Secretary', value:'Deputy Permanent Secretary'}];
  pictureurl: any = null;
  record_id: any = null;

  user:any = "default";



  ngOnInit(): void {

    //Get current data
    //console.log(this.data.row);
    //Get record id
    this.user = localStorage.getItem('user');
    this.pictureurl = this.data.row.picture;
    this.record_id = this.data.row.id;
    //Get title
    let cur_objIndex = this.titles.findIndex((obj => obj.id == 0));
    let new_objIndex = this.titles.findIndex((obj => obj.value == this.data.row.leader_title));
    this.titles[cur_objIndex].selected = false;
    this.titles[new_objIndex].selected = true;
    //Get dates
    let cur_start_date: any;
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
    }
    //Form Validations
    this.LeaderForm = new FormGroup({
      name: new FormControl(this.data.row.leader_name,[Validators.required, Validators.maxLength(100)]),
      title: new FormControl(this.data.row.leader_title,[Validators.required, Validators.minLength(5)]),
      facebook_link: new FormControl(this.data.row.facebook_link,[Validators.required, Validators.minLength(5)]),
      instagram_link: new FormControl(this.data.row.instagram_link,[Validators.required, Validators.minLength(5)]),
      twitter_link: new FormControl(this.data.row.twitter_link,[Validators.required, Validators.minLength(5)]),
      biography: new FormControl(this.data.row.biography,[Validators.required, Validators.minLength(5)]),
      start_date: new FormControl(cur_start_date,[Validators.required,Validators.minLength(10), Validators.maxLength(10)]),
      end_date: new FormControl(cur_end_date)
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
    if(this.LeaderForm.value.end_date == null){ 
      end_date = null; 
    }else{ 
      end_date = '"'+this.LeaderForm.value.end_date.year+'-'+this.LeaderForm.value.end_date.month+'-'+this.LeaderForm.value.end_date.day+'"';
    }
    let leaderObj = '{"leader_name": "'+this.LeaderForm.value.name.replace(/"/g, "'")+'",'+
      '"leader_title": "'+this.LeaderForm.value.title+'",'+
      '"facebook_link": "'+this.LeaderForm.value.facebook_link+'",'+
      '"instagram_link": "'+this.LeaderForm.value.instagram_link+'",'+
      '"twitter_link": "'+this.LeaderForm.value.twitter_link+'",'+
      '"start_date": "'+this.LeaderForm.value.start_date.year+'-'+this.LeaderForm.value.start_date.month+'-'+this.LeaderForm.value.start_date.day+'",'+
      '"end_date": '+end_date+','+
      '"picture": "'+this.data.row.picture+'",'+
      '"biography": "'+this.LeaderForm.value.biography.replace(/"/g, "'")+'",'+
      '"created_by": null,'+
      '"updated_by": "'+this.user+'",'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "'+this.data.row.created_at+'",'+
      
      '"updated_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
      '"deleted_at": null}';

    let leaderJSON = JSON.parse(leaderObj);
    //console.log(leaderJSON);
    this.updateLeader(this.record_id, leaderJSON);
  }
  //update leader
  updateLeader(id:any, obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.updateLeaderById(id, obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Leader updated sucessifully!");
      this.matDialogRef.close();

    },errorResponse=>{
      this.matDialogRef.close();
      console.log("Error: "+ errorResponse)
    });
  }

  onClose(){
    this.matDialogRef.close();
  }

  
  onFileSelected(event: any){
    //console.log(event);
    // this.leaderPicFile = event.target.files[0];
    // console.log(this.leaderPicFile);
    this.leaderPicFile = event.target.files;
    if (this.leaderPicFile.length === 0)
        return;

    //Display Image
    const reader = new FileReader();
    reader.readAsDataURL(this.leaderPicFile[0]); 
    console.log(this.leaderPicFile)
    reader.onload = (_event) => { 
    this.pictureurl = reader.result; 
      
    }



  }

}