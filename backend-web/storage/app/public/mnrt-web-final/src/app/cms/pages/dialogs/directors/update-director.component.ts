import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { AddDirectorComponent } from './add-director.component';

@Component({
  selector: 'mnrt-update-director',
  templateUrl: './update-director.component.html',
  styleUrls: ['./update-director.component.scss']
})
export class UpdateDirectorComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<UpdateDirectorComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }

  DirectorForm!: FormGroup;
  directorPicFile:any = null;
  //fromDate = {year: 2021, month: 11, day: 5 };
  /*titles: any[] = [{ id:0, selected: true, text:'-Select title-', value:'null'},
  { id:1, selected: false, text:'Minister', value:'Minister'},
  { id:2, selected: false, text:'Deputy Minister', value:'Deputy Minister'},
  { id:3, selected: false, text:'Permanent Secretary', value:'Permanent Secretary'},
  { id:4, selected: false, text:'Deputy Permanent Secretary', value:'Deputy Permanent Secretary'}];*/
  image_linkurl: any = null;
  record_id: any = null;
  user:any = "default";
  


  ngOnInit(): void {

    //Get current data
    //console.log(this.data.row);
    //Get record id
    this.user = localStorage.getItem('user');
    this.image_linkurl = this.data.row.image_link;
    this.record_id = this.data.row.id;
    //Get title
    /*let cur_objIndex = this.titles.findIndex((obj => obj.id == 0));
    let new_objIndex = this.titles.findIndex((obj => obj.value == this.data.row.director_title));
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
    this.DirectorForm = new FormGroup({
      dir_name: new FormControl(this.data.row.dir_name,[Validators.required, Validators.maxLength(100)]),
      dir_title: new FormControl(this.data.row.dir_title,[Validators.required, Validators.minLength(5)])
      
    });
  }

  onSubmit(){
   /* let end_date:any;
    if(this.DirectorForm.value.end_date == null){ 
      end_date = null; 
    }else{ 
      end_date = '"'+this.DirectorForm.value.end_date.year+'-'+this.DirectorForm.value.end_date.month+'-'+this.DirectorForm.value.end_date.day+'"';
    }*/
    let directorObj = '{"dir_name": "'+this.DirectorForm.value.dir_name.replace(/"/g, "'")+'",'+
      '"dir_title": "'+this.DirectorForm.value.dir_title+'",'+
      '"image_link": "'+this.data.row.image_link+'",'+
     '"created_by": null,'+
     '"updated_by": "'+this.user+'",'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "1981-07-04T04:07:26.000000Z",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let directorJSON = JSON.parse(directorObj);
    //console.log(directorJSON);
    this.updateDirector(this.record_id, directorJSON);
  }

  updateDirector(id:any, obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.updateDirectorById(id, obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Director updated sucessifully!");
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
    // this.directorPicFile = event.target.files[0];
    // console.log(this.directorPicFile);
    this.directorPicFile = event.target.files;
    if (this.directorPicFile.length === 0)
        return;

    //Display Image
    const reader = new FileReader();
    reader.readAsDataURL(this.directorPicFile[0]); 
    reader.onload = (_event) => { 
    this.image_linkurl = reader.result; 
      
    }



  }

}
