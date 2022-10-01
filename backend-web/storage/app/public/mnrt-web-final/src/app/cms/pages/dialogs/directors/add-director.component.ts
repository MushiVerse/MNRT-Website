import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';


@Component({
  selector: 'mnrt-add-director',
  templateUrl: './add-director.component.html',
  styleUrls: ['./add-director.component.scss']
})
export class AddDirectorComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<AddDirectorComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }


  DirectorForm!: FormGroup;
  directorPicFile:any = null;
  image_linkurl: any = null;
  user:any = "default";

 

   ngOnInit(): void {
    this.user = localStorage.getItem('user');
    //Form Validations
    this.DirectorForm = new FormGroup({
      dir_name: new FormControl(null,[Validators.required, Validators.maxLength(100)]),
      dir_title: new FormControl(null,[Validators.required, Validators.minLength(5)])
     
    });
  }

  onSubmit(){
    
    let directorObj = '{"dir_name": "'+this.DirectorForm.value.dir_name.replace(/"/g, "'")+'",'+
      '"dir_title": "'+this.DirectorForm.value.dir_title+'",'+
       '"image_link": "assets/images/directors/default.jpg",'+
      '"created_by":  "'+this.user+'",'+
      '"updated_by": null,'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "1981-07-04T04:07:26.000000Z",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let directorJSON = JSON.parse(directorObj);
    console.log(directorJSON);
    
    this.addDirector(directorJSON);
  }

  addDirector(obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.addDirector(obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Director added sucessifully!");
      this.matDialogRef.close();

    },errorResponse=>{
      this.matDialogRef.close();
      console.log("Error: "+ errorResponse)
    });
  }

  onClose(){
    this.matDialogRef.close();
  }

  url: any = null;

  //6
  onFileSelected(event: any){
    
    //console.log(event);
    // this.leaderPicFile = event.target.files[0];
    // console.log(this.leaderPicFile);
    this.directorPicFile = event.target.files;
    if (this.directorPicFile.length === 0)
        return;

    //Display Image
    const reader = new FileReader();
    reader.readAsDataURL(this.directorPicFile[0]); 
    reader.onload = (_event) => { 
    this.url = reader.result; 
      
    }



}
}
