import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ViewNewComponent } from '../../../news/view-new.component';
import { CmsForestSliderUpdateComponent } from '../cms-forest-slider-update.component';

@Component({
  selector: 'mnrt-cms-forest-slider-editor',
  templateUrl: './cms-forest-slider-editor.component.html',
  styleUrls: ['./cms-forest-slider-editor.component.scss']
})
export class CmsForestSliderEditorComponent implements OnInit {


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('newstable') newstable!: MatTable<any>;

  constructor(private cmsService: CmsserviceService,
     private dialog: MatDialog, public spinner: SpinnerService) { }

  data: any = []
  newsArray = new MatTableDataSource<any>();
  newsdisplayedColumns = ["sn","Slider_image","Slider_des","action"];

  ngOnInit(): void {
    
    this.getTourism();
  }

  getTourism(){
    this.spinner.isCMSLoading.next(true);
    this.cmsService.getTourismSliderData().subscribe(result=>{
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
     this.dialog.open(CmsForestSliderUpdateComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
       this.getTourism();
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
