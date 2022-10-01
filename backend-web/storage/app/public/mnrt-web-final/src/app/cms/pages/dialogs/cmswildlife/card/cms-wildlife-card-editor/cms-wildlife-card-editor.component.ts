import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewNewComponent } from '../../../news/view-new.component';
import { CmsWildlifeCardUpdateComponent } from '../cms-wildlife-card-update.component';

@Component({
  selector: 'mnrt-cms-wildlife-card-editor',
  templateUrl: './cms-wildlife-card-editor.component.html',
  styleUrls: ['./cms-wildlife-card-editor.component.scss']
})
export class CmsWildlifeCardEditorComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('newstable') newstable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService) { }

  data: any = []
  newsArray = new MatTableDataSource<any>();
  newsdisplayedColumns = ["sn","Card_image","Card_link","action"];

  ngOnInit(): void {
    
    this.getTourismAbout();
  }

  getTourismAbout(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getTourismCardData().subscribe(result=>{
      this.spinner.isCMSLoading.next(false);
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
     this.dialog.open(CmsWildlifeCardUpdateComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getTourismAbout();
     });
 
   }



   onView(row:any){
    const dialogConfig = new MatDialogConfig();
   dialogConfig.disableClose = false;
   dialogConfig.autoFocus = true;
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