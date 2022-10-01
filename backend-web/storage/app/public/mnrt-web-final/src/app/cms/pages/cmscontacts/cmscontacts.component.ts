import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateContactComponent } from '../dialogs/contacts/update-contact.component';
import { DeleteContactComponent } from '../dialogs/contacts/delete-contact.component';
import { AddContactComponent } from '../dialogs/contacts/add-contact.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewContactComponent } from '../dialogs/contacts/view-contact.component';

@Component({
  selector: 'mnrt-cmscontacts',
  templateUrl: './cmscontacts.component.html',
  styleUrls: ['./cmscontacts.component.scss']
})
export class CmscontactsComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('contactstable') contactstable!: MatTable<any>;
  
  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService) { }

  data: any = []
  contactsArray = new MatTableDataSource<any>();
  contactsdisplayedColumns = ["sn","contact_des","category","mobile","email","fax","action"];
  
  
  ngOnInit(): void {
    
    this.getContacts();
  }


  getContacts(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getContacts().subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.contactsArray.data = result.data;
      this.contactsArray.sort = this.sort;
      this.contactsArray.paginator = this.paginator;
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
    this.dialog.open(AddContactComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getContacts();
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
     this.dialog.open(UpdateContactComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getContacts();
     });
 
   }

   onDelete(row:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";
    //dialogConfig.height="90%";
    dialogConfig.data = {"row":row};
     this.dialog.open(DeleteContactComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
     this.getContacts();
   });
   }
  
   onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
  this.dialog.open(ViewContactComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  //this.getContacts();
  });
  }

  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.contactsArray.filter = filtertext.trim().toLowerCase();
  }

  //Test method
  onTestButton(){
    this.messagesService.openFailureSnackBar("Message!")
  }


}
