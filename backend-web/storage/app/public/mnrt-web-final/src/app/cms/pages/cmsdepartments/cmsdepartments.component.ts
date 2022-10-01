import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { CmsserviceService } from '../../services/cmsservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateDepartmentComponent } from '../dialogs/departments/update-department.component';
import { DeleteDepartmentComponent } from '../dialogs/departments/delete-department.component';
import { AddDepartmentComponent } from '../dialogs/departments/add-department.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewDepartmentComponent } from '../dialogs/departments/view-department.component';

@Component({
  selector: 'mnrt-cmsdepartments',
  templateUrl: './cmsdepartments.component.html',
  styleUrls: ['./cmsdepartments.component.scss']
})
export class CmsdepartmentsComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('departmentstable') departmentstable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService) { }


  data: any = []
  departmentsArray = new MatTableDataSource<any>();
  departmentsdisplayedColumns = ["sn","dept_vote","dept_subvote","dept_name","action"];

  ngOnInit(): void {
    
    this.getDepartments();
  }

  getDepartments(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getDepartments().subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      //console.log(result);
      this.departmentsArray.data = result.data;
      this.departmentsArray.sort = this.sort;
      this.departmentsArray.paginator = this.paginator;
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
    this.dialog.open(AddDepartmentComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    this.getDepartments();
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
     this.dialog.open(UpdateDepartmentComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getDepartments();
     });
 
   }


   onDelete(row:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    //dialogConfig.width = "80%";
    //dialogConfig.height="90%";
    dialogConfig.data = {"row":row};
     this.dialog.open(DeleteDepartmentComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
     this.getDepartments();
   });
   }

   onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
  this.dialog.open(ViewDepartmentComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  //this.getDepartments();
  });
  }

   //Filtering
   applyFilter(filtertext: string){
    console.log(filtertext);
    this.departmentsArray.filter = filtertext.trim().toLowerCase();
  }



}
