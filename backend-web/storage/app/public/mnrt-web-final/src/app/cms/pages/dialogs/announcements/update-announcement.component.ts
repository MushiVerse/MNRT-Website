import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';


@Component({
  selector: 'mnrt-update-announcement',
  templateUrl: './update-announcement.component.html',
  styleUrls: ['./update-announcement.component.scss']
})
export class UpdateAnnouncementComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<UpdateAnnouncementComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }


  AnnouncementForm!: FormGroup;
  announcementPicFile:any = null;
  fromDate = {year: 2021, month: 11, day: 5 };
  /*titles: any[] = [{ id:0, selected: true, text:'-Select title-', value:'null'},
  { id:1, selected: false, text:'Minister', value:'Minister'},
  { id:2, selected: false, text:'Deputy Minister', value:'Deputy Minister'},
  { id:3, selected: false, text:'Permanent Secretary', value:'Permanent Secretary'},
  { id:4, selected: false, text:'Deputy Permanent Secretary', value:'Deputy Permanent Secretary'}];*/
  attachmenturl: any = null;
  record_id: any = null;

  user:any = "default";




   ngOnInit(): void {

    //Get current data
    //console.log(this.data.row);
    //Get record id
    this.attachmenturl = this.data.row.attachment;
    this.record_id = this.data.row.id;
    this.user = localStorage.getItem('user');
    //Get title
    /*
    let cur_objIndex = this.titles.findIndex((obj => obj.id == 0));
    let new_objIndex = this.titles.findIndex((obj => obj.value == this.data.row.announcement_title));
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
    this.AnnouncementForm = new FormGroup({
      ann_title: new FormControl(this.data.row.ann_title,[Validators.required, Validators.maxLength(100)]),
      ann_des: new FormControl(this.data.row.ann_des,[Validators.required, Validators.minLength(5)])
      
    });
  }

  onSubmit(){
    let announcementObj = '{"ann_title": "'+this.AnnouncementForm.value.ann_title.replace(/"/g, "'")+'",'+
    '"ann_des": "'+this.AnnouncementForm.value.ann_des.replace(/"/g, "'")+'",'+
      '"attachment": null,'+
      '"created_by": null,'+
      '"updated_by": "'+this.user+'",'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "1981-07-04T04:07:26.000000Z",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let announcementJSON = JSON.parse(announcementObj);
    console.log(announcementJSON);
    this.updateAnnouncement(this.record_id, announcementJSON);
  }


  updateAnnouncement(id:any, obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.updateAnnouncementById(id, obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Announcement updated sucessifully!");
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
    // this.announcementPicFile = event.target.files[0];
    // console.log(this.announcementPicFile);
    this.announcementPicFile = event.target.files;
    if (this.announcementPicFile.length === 0)
        return;

    //Display Image
    const reader = new FileReader();
    reader.readAsDataURL(this.announcementPicFile[0]); 
    reader.onload = (_event) => { 
    this.attachmenturl = reader.result; 
      
    }



  }


}
