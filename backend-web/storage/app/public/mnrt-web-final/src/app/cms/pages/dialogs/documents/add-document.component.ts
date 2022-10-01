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
  selector: 'mnrt-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<AddDocumentComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }

  DocumentForm!: FormGroup;
  documentPicFile:any = null;
  doc_linkurl: any = null;

  user:any = "default";
  fileFormData: any = null;
  fileName: any = null;
  canAttach: boolean = false;




  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    //Form Validations
    this.DocumentForm = new FormGroup({
      doc_title: new FormControl(null,[Validators.required, Validators.maxLength(100)]),
      doc_category: new FormControl(null,[Validators.required, Validators.minLength(5)])
      
    });
  }

  onSubmit(){
    
    
    let documentObj = '{"doc_title": "'+this.DocumentForm.value.doc_title.replace(/"/g, "'")+'",'+
      '"doc_category": "'+this.DocumentForm.value.doc_category+'",'+
      '"doc_link": "/assets/attachments/'+this.fileName+'",'+
      '"created_by": "'+this.user+'",'+
      '"updated_by": null,'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "1981-07-04T04:07:26.000000Z",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let documentJSON = JSON.parse(documentObj);
    console.log(documentJSON);
    
    this.addDocument(documentJSON);
  }

  addDocument(obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.addDocument(obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Document added sucessifully!");
      this.matDialogRef.close();

    },errorResponse=>{
      this.matDialogRef.close();
      console.log("Error: "+ errorResponse)
    });
  }

  onClose(){
    this.matDialogRef.close();
  }


   //6
   onFileSelected(event: any){
    
    //console.log(event);
    // this.leaderPicFile = event.target.files[0];
    //console.log(event.target.files);
    this.documentPicFile = event.target.files;
    if (this.documentPicFile.length === 0){
      this.canAttach = false;
      return;
    }
    else if(this.documentPicFile[0].size > 500000){
      this.message.openFailureSnackBar("File too large!");
      this.canAttach = false;
      return;
    }
    else{

      this.canAttach = true;
        //Display Image
      const reader = new FileReader();
      reader.readAsDataURL(this.documentPicFile[0]); 
      reader.onload = (_event) => { 
        this.doc_linkurl = reader.result; 

        //--send file
        this.fileFormData = new FormData();
        this.fileFormData.append("image", this.documentPicFile[0]);

        console.log(this.documentPicFile[0]);
        this.fileName = this.documentPicFile[0].name.replace(/\s/g, '');
        //this.attachFile(this.fileFormData);
        
      }
    }
   

  }

  attachFile(formData:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.attachNewsPic(formData).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      console.log(result);
      this.message.openSnackBar("News added sucessifully!");
      //this.matDialogRef.close();

    },errorResponse=>{
      this.matDialogRef.close();
      console.log("Error: "+ errorResponse)
    });

  }



}
