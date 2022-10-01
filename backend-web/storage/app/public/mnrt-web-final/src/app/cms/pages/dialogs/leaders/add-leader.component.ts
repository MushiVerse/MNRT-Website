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
  selector: 'mnrt-add-leader',
  templateUrl: './add-leader.component.html',
  styleUrls: ['./add-leader.component.scss']
})
export class AddLeaderComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<AddLeaderComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }
  LeaderForm!: FormGroup;
  leaderPicFile:any = null;
  fromDate = {year: 2021, month: 11, day: 5 };
  titles: any[] = [{ id:0, selected: true, text:'-Select title-', value:'null'},
  { id:1, selected: false, text:'Minister', value:'Minister'},
  { id:2, selected: false, text:'Deputy Minister', value:'Deputy Minister'},
  { id:3, selected: false, text:'Permanent Secretary', value:'Permanent Secretary'},
  { id:4, selected: false, text:'Deputy Permanent Secretary', value:'Deputy Permanent Secretary'}];
  pictureurl: any = null;

  user:any = "default";



  ngOnInit(): void {
    //Form Validations
    this.user = localStorage.getItem('user');
    this.LeaderForm = new FormGroup({
      name: new FormControl(null,[Validators.required, Validators.maxLength(100)]),
      title: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      facebook_link: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      instagram_link: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      twitter_link: new FormControl(null,[Validators.required, Validators.minLength(5)]),
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
      '"picture": null,'+
      '"biography": "'+this.LeaderForm.value.biography.replace(/"/g, "'")+'",'+
      
      '"created_by": "'+this.user+'",'+
      '"updated_by": null,'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "'+moment(dateTime).format('YYYY-MM-DD HH:mm:ss')+'",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let leaderJSON = JSON.parse(leaderObj);
    console.log(leaderJSON);
    
    this.addLeader(leaderJSON);
  }

  addLeader(obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.addLeader(obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Leader added sucessifully!");
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
