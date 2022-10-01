import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { AddDocumentComponent } from './add-document.component';

@Component({
  selector: 'mnrt-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.scss']
})
export class UpdateDocumentComponent implements OnInit {

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<UpdateDocumentComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }

  DocumentForm!: FormGroup;
  documentPicFile:any = null;
 // fromDate = {year: 2021, month: 11, day: 5 };
  /*categories: any[] = [{ id:0, selected: true, text:'-Select title-', value:'null'},
  { id:1, selected: false, text:'general', value:'general'},
  { id:2, selected: false, text:'Antiquities', value:'Antiquities'},
  { id:3, selected: false, text:'Tourism', value:'Tourism'},
  { id:4, selected: false, text:'Wild Life', value:'Wild Life'}];*/
  doc_linkurl: any = null;
  record_id: any = null;
  user:any = "default";




  ngOnInit(): void {
    this.user = localStorage.getItem('user');

    //Get current data
    //console.log(this.data.row);
    //Get record id
    this.doc_linkurl = this.data.row.doc_link;
    this.record_id = this.data.row.id;
    //Get category
    /*let cur_objIndex = this.categories.findIndex((obj => obj.id == 0));
    let new_objIndex = this.categories.findIndex((obj => obj.value == this.data.row.doc_category));
    this.categories[cur_objIndex].selected = false;
    this.categories[new_objIndex].selected = true;*/
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
    this.DocumentForm = new FormGroup({
      doc_title: new FormControl(this.data.row.doc_title,[Validators.required, Validators.maxLength(100)]),
      doc_category: new FormControl(this.data.row.doc_category,[Validators.required, Validators.minLength(5)])
     
    });
  }


  onSubmit(){
    
    let documentObj = '{"doc_title": "'+this.DocumentForm.value.doc_title.replace(/"/g, "'")+'",'+
      '"doc_category": "'+this.DocumentForm.value.doc_category+'",'+
      '"doc_link": "'+this.data.row.doc_link+'",'+
      '"created_by": null,'+
      '"updated_by": "'+this.user+'",'+
      '"deleted_by": null,'+
      '"status": true,'+
      '"created_at": "1981-07-04T04:07:26.000000Z",'+
      '"updated_at": null,'+
      '"deleted_at": null}';

    let documentJSON = JSON.parse(documentObj);
    //console.log(documentJSON);
    this.updateDocument(this.record_id, documentJSON);
  }

  updateDocument(id:any, obj:any){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.updateDocumentById(id, obj).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.message.openSnackBar("Document updated sucessifully!");
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
    // this.documentPicFile = event.target.files[0];
    // console.log(this.documentPicFile);
    this.documentPicFile = event.target.files;
    if (this.documentPicFile.length === 0)
        return;

    //Display Image
    const reader = new FileReader();
    reader.readAsDataURL(this.documentPicFile[0]); 
    reader.onload = (_event) => { 
    this.doc_linkurl = reader.result; 
      
    }



  }


}
