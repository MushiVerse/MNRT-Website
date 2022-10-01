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
  selector: 'mnrt-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {

  constructor(public matDialogRef: MatDialogRef<AddDepartmentComponent>, private spinner: SpinnerService, private cmsService: CmsserviceService, private message: MessagesService, private httpClient: HttpClient) { }


  DepartmentForm!: FormGroup;
  user:any = "default";
  //departmentPicFile:any = null;
 // pictureurl: any = null;
 ngOnInit(): void {
  this.user = localStorage.getItem('user');
  //Form Validations
  this.DepartmentForm = new FormGroup({
    dept_vote: new FormControl(null,[Validators.required, Validators.maxLength(100)]),
    dept_subvote: new FormControl(null,[Validators.required, Validators.maxLength(100)]),
    dept_name: new FormControl(null,[Validators.required, Validators.minLength(5)])
    
  });
}

onSubmit(){
  
  let departmentObj = '{"dept_vote": "'+this.DepartmentForm.value.dept_vote.replace(/"/g, "'")+'",'+
  '"dept_subvote": "'+this.DepartmentForm.value.dept_subvote.replace(/"/g, "'")+'",'+
    '"dept_name": "'+this.DepartmentForm.value.dept_name+'",'+
    '"created_by": "'+this.user+'",'+
    '"updated_by": null,'+
    '"deleted_by": null,'+
    '"status": true,'+
    '"created_at": "1981-07-04T04:07:26.000000Z",'+
    '"updated_at": null,'+
    '"deleted_at": null}';

  let departmentJSON = JSON.parse(departmentObj);
  console.log(departmentJSON);
  
  this.addDepartment(departmentJSON);
}

addDepartment(obj:any){
  this.spinner.isCMSLoading.next(true);
  this.cmsService.addDepartment(obj).subscribe(result=>{
    this.spinner.isCMSLoading.next(false);
    //console.log(result);
    this.message.openSnackBar("Department added sucessifully!");
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
