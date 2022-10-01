import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateManagementComponent } from '../dialogs/management/update-management.component';
import { DeleteManagementComponent } from '../dialogs/management/delete-management.component';
import { AddManagementComponent } from '../dialogs/management/add-management.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewManagementComponent } from '../dialogs/management/view-management.component';

@Component({
  selector: 'mnrt-cmsmanagement',
  templateUrl: './cmsmanagement.component.html',
  styleUrls: ['./cmsmanagement.component.scss']
})
export class CmsmanagementComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('managementtable') managementtable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService, private changeDetectorRef: ChangeDetectorRef) { }

  data: any = []
  managementArray = new MatTableDataSource<any>();
  managementdisplayedColumns = ["sn","management_pic","management_name","management_title","start_date","end_date","action"];

  ngOnInit(): void {
    
    this.getManagement();
  }

  getManagement(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getManagement().subscribe(result=>{
    this.spinner.isCMSLoading.next(false);
      console.log(result);
      this.managementArray.data = result.data;
      this.managementArray.sort = this.sort;
      this.managementArray.paginator = this.paginator;
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
    this.dialog.open(AddManagementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getManagement();
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
     this.dialog.open(UpdateManagementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getManagement();
     });
 
   }

   onDelete(row:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";
    //dialogConfig.height="90%";
    dialogConfig.data = {"row":row};
     this.dialog.open(DeleteManagementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
     this.getManagement();
   });
   }

   onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
  this.dialog.open(ViewManagementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  //this.getManagement();
  });
  }

  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.managementArray.filter = filtertext.trim().toLowerCase();
  }

  //Test method
  onTestButton(){
    this.messagesService.openFailureSnackBar("Message!")
  }

}
