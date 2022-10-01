import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-delete-new',
  templateUrl: './delete-new.component.html',
  styleUrls: ['./delete-new.component.scss']
})
export class DeleteNewComponent implements OnInit {

  row: any = [];
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any, public matDialogRef: MatDialogRef<DeleteNewComponent>, private messages: MessagesService, private cmsService: CmsserviceService, public spinner: SpinnerService ) { 
    
  }

  ngOnInit(): void {
    this.row = this.data.row;
    //console.log(this.data.row);
  }


  onDelete(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.deleteNewById(this.row.id).subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      if(result.data.id == this.row.id){
        this.messages.openSnackBar("Successifully deleted!")
      }
      else{
        this.messages.openSnackBar("Error! Not Deleted.")
      }
      //Close dialog
      this.matDialogRef.close();

    },errorResponse=>{
      this.messages.openSnackBar("Error! Not Deleted.")
      console.log("Error: "+ errorResponse)
      //Close dialog
      this.matDialogRef.close();
    });
  }

  onClose(){
    this.matDialogRef.close();
  }
}
