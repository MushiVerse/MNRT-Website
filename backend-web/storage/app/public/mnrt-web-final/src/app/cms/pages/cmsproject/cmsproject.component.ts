import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateProjectComponent } from '../dialogs/project/update-project.component';
import { DeleteProjectComponent } from '../dialogs/project/delete-project.component';
import { AddProjectComponent } from '../dialogs/project/add-project.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewProjectComponent } from '../dialogs/project/view-project.component';

@Component({
  selector: 'mnrt-cmsproject',
  templateUrl: './cmsproject.component.html',
  styleUrls: ['./cmsproject.component.scss']
})
export class CmsprojectComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('projecttable') projecttable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService, private changeDetectorRef: ChangeDetectorRef) { }

  data: any = []
  projectArray = new MatTableDataSource<any>();
  projectdisplayedColumns = ["sn","project_title","project_details","project_cost","project_funder","action"];
 
  
  ngOnInit(): void {
    
    this.getProjects();
  }


  getProjects(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getProjects().subscribe(result=>{
    this.spinner.isCMSLoading.next(false);
      console.log(result);
      this.projectArray.data = result.data;
      this.projectArray.sort = this.sort;
      this.projectArray.paginator = this.paginator;
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
    this.dialog.open(AddProjectComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getProjects();
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
     this.dialog.open(UpdateProjectComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getProjects();
     });
 
   }
   onDelete(row:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";
    //dialogConfig.height="90%";
    dialogConfig.data = {"row":row};
     this.dialog.open(DeleteProjectComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
     this.getProjects();
   });
   }
   
   onView(row:any){
     const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";
    //dialogConfig.height="90%";
    dialogConfig.data = {"row":row};
   this.dialog.open(ViewProjectComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
   //this.getProjects();
   });
   }

    //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.projectArray.filter = filtertext.trim().toLowerCase();
  }

  //Test method
  onTestButton(){
    this.messagesService.openFailureSnackBar("Message!")
  }



}
