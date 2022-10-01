import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateAnnouncementComponent } from '../dialogs/announcements/update-announcement.component';
import { DeleteAnnouncementComponent } from '../dialogs/announcements/delete-announcement.component';
import { AddAnnouncementComponent } from '../dialogs/announcements/add-announcement.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewAnnouncementComponent } from '../dialogs/announcements/view-announcement.component';


@Component({
  selector: 'mnrt-cmsannouncements',
  templateUrl: './cmsannouncements.component.html',
  styleUrls: ['./cmsannouncements.component.scss']
})
export class CmsannouncementsComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('announcementstable') announcementstable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService) { }

  data: any = []
  announcementsArray = new MatTableDataSource<any>();
  
  announcementsdisplayedColumns = ["sn","ann_title","ann_des","action"];

  ngOnInit(): void {

    
    
    this.getAnnouncements();
  }

  getAnnouncements(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getAnnouncements().subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.announcementsArray.data = result.data;
      this.announcementsArray.sort = this.sort;
      this.announcementsArray.paginator = this.paginator;
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
    this.dialog.open(AddAnnouncementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getAnnouncements();
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
     this.dialog.open(UpdateAnnouncementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getAnnouncements();
     });
 
   }

   onDelete(row:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";
    //dialogConfig.height="90%";
    dialogConfig.data = {"row":row};
     this.dialog.open(DeleteAnnouncementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
     this.getAnnouncements();
   });
   }

   onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
  this.dialog.open(ViewAnnouncementComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  //this.getAnnouncements();
  });
  }

  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.announcementsArray.filter = filtertext.trim().toLowerCase();
  }
  onTestButton(){
    this.messagesService.openFailureSnackBar("Message!")
  }

}
