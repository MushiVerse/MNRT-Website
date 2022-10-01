import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateDirectorComponent } from '../dialogs/directors/update-director.component';
import { DeleteDirectorComponent } from '../dialogs/directors/delete-director.component';
import { AddDirectorComponent } from '../dialogs/directors/add-director.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewDirectorComponent } from '../dialogs/directors/view-director.component';


@Component({
  selector: 'mnrt-cmsdirectors',
  templateUrl: './cmsdirectors.component.html',
  styleUrls: ['./cmsdirectors.component.scss']
})
export class CmsdirectorsComponent implements OnInit {


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('directorstable') directorstable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService) { }


  data: any = []
  directorsArray = new MatTableDataSource<any>();
  directorsdisplayedColumns = ["sn","dir_name","dir_title","action"];
  ngOnInit(): void {
    
    this.getDirectors();
  }

  getDirectors(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getDirectors().subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.directorsArray.data = result.data;
      this.directorsArray.sort = this.sort;
      this.directorsArray.paginator = this.paginator;
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
    this.dialog.open(AddDirectorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getDirectors();
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
     this.dialog.open(UpdateDirectorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getDirectors();
     });
 
   }
   onDelete(row:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";
    //dialogConfig.height="90%";
    dialogConfig.data = {"row":row};
     this.dialog.open(DeleteDirectorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
     this.getDirectors();
   });
   }

   onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
  this.dialog.open(ViewDirectorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  //this.getDirectors();
  });
  }

  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.directorsArray.filter = filtertext.trim().toLowerCase();
  }

  //Test method
  onTestButton(){
    this.messagesService.openFailureSnackBar("Message!")
  }
   
}
