import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateStakeholderComponent } from '../dialogs/stakeholder/update-stakeholder.component';
import { DeleteStakeholderComponent } from '../dialogs/stakeholder/delete-stakeholder.component';
import { AddStakeholderComponent } from '../dialogs/stakeholder/add-stakeholder.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewStakeholderComponent } from '../dialogs/stakeholder/view-stakeholder.component';

@Component({
  selector: 'mnrt-cmsstakeholders',
  templateUrl: './cmsstakeholders.component.html',
  styleUrls: ['./cmsstakeholders.component.scss']
})
export class CmsstakeholdersComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('stakeholdertable') stakeholdertable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService, private changeDetectorRef: ChangeDetectorRef) { }

  data: any = []
  stakeholderArray = new MatTableDataSource<any>();
  stakeholderdisplayedColumns = ["sn","sthdr_name","category","email","postal_address","country","website","action"];
  
  
  ngOnInit(): void {
    
    this.getStakeholder();
  }



  getStakeholder(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getStakeholder().subscribe(result=>{
    this.spinner.isCMSLoading.next(false);
      console.log(result);
      this.stakeholderArray.data = result.data;
      this.stakeholderArray.sort = this.sort;
      this.stakeholderArray.paginator = this.paginator;
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
    this.dialog.open(AddStakeholderComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getStakeholder();
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
     this.dialog.open(UpdateStakeholderComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getStakeholder();
     });
 
   }

   onDelete(row:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";
    //dialogConfig.height="90%";
    dialogConfig.data = {"row":row};
     this.dialog.open(DeleteStakeholderComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
     this.getStakeholder();
   });
   }


   onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
  this.dialog.open(ViewStakeholderComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  //this.getStakeholder();
  });
  }

  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.stakeholderArray.filter = filtertext.trim().toLowerCase();
  }

  //Test method
  onTestButton(){
    this.messagesService.openFailureSnackBar("Message!")
  }
   

}
