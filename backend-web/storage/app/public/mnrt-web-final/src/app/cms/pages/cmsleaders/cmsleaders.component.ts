import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateLeaderComponent } from '../dialogs/leaders/update-leader.component';
import { DeleteLeaderComponent } from '../dialogs/leaders/delete-leader.component';
import { AddLeaderComponent } from '../dialogs/leaders/add-leader.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewLeaderComponent } from '../dialogs/leaders/view-leader.component';


@Component({
  selector: 'mnrt-cmsleaders',
  templateUrl: './cmsleaders.component.html',
  styleUrls: ['./cmsleaders.component.scss']
})
export class CmsleadersComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('leaderstable') leaderstable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService, private changeDetectorRef: ChangeDetectorRef) { }
  data: any = []
  leadersArray = new MatTableDataSource<any>();
  leadersdisplayedColumns = ["sn","leader_pic","leader_name","leader_title","start_date","end_date","action"];

  ngOnInit(): void {
    
    this.getLeaders();
  }

  getLeaders(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getLeaders().subscribe(result=>{
    this.spinner.isCMSLoading.next(false);
      console.log(result);
      this.leadersArray.data = result.data;
      this.leadersArray.sort = this.sort;
      this.leadersArray.paginator = this.paginator;
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
    this.dialog.open(AddLeaderComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getLeaders();
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
    this.dialog.open(UpdateLeaderComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
      this.getLeaders();
    });

  }
  onDelete(row:any){
   const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
    this.dialog.open(DeleteLeaderComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getLeaders();
  });
  }
  
  onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
  this.dialog.open(ViewLeaderComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  //this.getLeaders();
  });
  }

  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.leadersArray.filter = filtertext.trim().toLowerCase();
  }

  //Test method
  onTestButton(){
    this.messagesService.openFailureSnackBar("Message!")
  }
}

