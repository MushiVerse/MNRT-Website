import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewNewComponent } from '../../../news/view-new.component';
import { CmsTourismAboutUpdateComponent } from '../cms-tourism-about-update.component';

@Component({
  selector: 'mnrt-cms-tourism-about-editor',
  templateUrl: './cms-tourism-about-editor.component.html',
  styleUrls: ['./cms-tourism-about-editor.component.scss']
})
export class CmsTourismAboutEditorComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('newstable') newstable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService) { }

  data: any = []
  newsArray = new MatTableDataSource<any>();
  newsdisplayedColumns = ["sn","About_pic","About_des","action"];

  ngOnInit(): void {
    
    this.getTourismAbout();
  }

  getTourismAbout(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getTourismAboutData().subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
      console.log(result.data);
      this.newsArray.data = result.data;
      this.newsArray.sort = this.sort;
      this.newsArray.paginator = this.paginator;

    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }


 

  onUpdate(row:any){
    const dialogConfig = new MatDialogConfig();
         dialogConfig.disableClose = false;
         dialogConfig.autoFocus = true;
         dialogConfig.width = "80%";
         dialogConfig.data = {"row":row};
     this.dialog.open(CmsTourismAboutUpdateComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getTourismAbout();
     });
 
   }



   onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
   //dialogConfig.width = "80%";
   //dialogConfig.height="90%";
   dialogConfig.data = {"row":row};
  this.dialog.open(ViewNewComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  //this.getNews();
  });
  }

  applyFilter(filtertext: string){
    console.log(filtertext);
    this.newsArray.filter = filtertext.trim().toLowerCase();
  }
}
