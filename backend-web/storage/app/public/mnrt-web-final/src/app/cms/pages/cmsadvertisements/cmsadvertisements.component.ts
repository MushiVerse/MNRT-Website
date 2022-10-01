import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateAdvertisementComponent } from '../dialogs/advertisements/update-advertisement.component';
import { DeleteAdvertisementComponent } from '../dialogs/advertisements/delete-advertisement.component';
import { AddAdvertisementComponent } from '../dialogs/advertisements/add-advertisement.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewAdvertisementComponent } from '../dialogs/advertisements/view-advertisement.component';

@Component({
  selector: 'mnrt-cmsadvertisements',
  templateUrl: './cmsadvertisements.component.html',
  styleUrls: ['./cmsadvertisements.component.scss']
})
export class CmsadvertisementsComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('advertisementstable') advertisementstable!: MatTable<any>;


  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService) { }


  data: any = []
  advertisementsArray = new MatTableDataSource<any>();
  advertisementsdisplayedColumns = ["sn","adv_title","adv_des","action"];

  ngOnInit(): void {
    
    this.getAdvertisements();
  }

  getAdvertisements(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getAdvertisements().subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.advertisementsArray.data = result.data;
      this.advertisementsArray.sort = this.sort;
      this.advertisementsArray.paginator = this.paginator;
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
    this.dialog.open(AddAdvertisementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getAdvertisements();
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
     this.dialog.open(UpdateAdvertisementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getAdvertisements();
     });
 
   }

   onDelete(row:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";
    //dialogConfig.height="90%";
    dialogConfig.data = {"row":row};
     this.dialog.open(DeleteAdvertisementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
     this.getAdvertisements();
   });
   }

   onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
  this.dialog.open(ViewAdvertisementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  //this.getAdvertisements();
  });
  }
  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.advertisementsArray.filter = filtertext.trim().toLowerCase();
  }

  onTestButton(){
    this.messagesService.openFailureSnackBar("Message!")
  }


}
