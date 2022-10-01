import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateDocumentComponent } from '../dialogs/documents/update-document.component';
import { DeleteDocumentComponent } from '../dialogs/documents/delete-document.component';
import { AddDocumentComponent } from '../dialogs/documents/add-document.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewDocumentComponent } from '../dialogs/documents/view-document.component';


@Component({
  selector: 'mnrt-cmsdocuments',
  templateUrl: './cmsdocuments.component.html',
  styleUrls: ['./cmsdocuments.component.scss']
})
export class CmsdocumentsComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('documentstable') documentstable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService) { }

  data: any = []
  documentsArray = new MatTableDataSource<any>();
  documentsdisplayedColumns = ["sn","doc_title","doc_category","action"];

  ngOnInit(): void {
    
    this.getDocuments();
  }

  getDocuments(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getDocuments().subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.documentsArray.data = result.data;
      this.documentsArray.sort = this.sort;
      this.documentsArray.paginator = this.paginator;
      //this.changeDetectorRef.detectChanges();

    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(AddDocumentComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getDocuments();
    });

  }

  onUpdate(row:any){
    //this.messagesService.openSnackBar("Update id"+id);
    const dialogConfig = new MatDialogConfig();
         dialogConfig.disableClose = false;
         dialogConfig.autoFocus = true;
         dialogConfig.width = "80%";
         //dialogConfig.height="90%";
         dialogConfig.data = {"row":row};
     this.dialog.open(UpdateDocumentComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getDocuments();
     });
 
   }

   onDelete(row:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";
    //dialogConfig.height="90%";
    dialogConfig.data = {"row":row};
     this.dialog.open(DeleteDocumentComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
     this.getDocuments();
   });
   }

   onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
  this.dialog.open(ViewDocumentComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  //this.getDocuments();
  });
  }

  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.documentsArray.filter = filtertext.trim().toLowerCase();
  }

  onTestButton(){
    this.messagesService.openFailureSnackBar("Message!")
  }
   

}
