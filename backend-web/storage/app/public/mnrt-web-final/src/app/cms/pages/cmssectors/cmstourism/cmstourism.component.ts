import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { CmsTourismAboutAddComponent } from '../../dialogs/cmstourism/about/cms-tourism-about-add.component';
import { CmsTourismAboutEditorComponent } from '../../dialogs/cmstourism/about/cms-tourism-about-editor/cms-tourism-about-editor.component';
import { CmsTourismCardAddComponent } from '../../dialogs/cmstourism/card/cms-tourism-card-add.component';
import { CmsTourismCardEditorComponent } from '../../dialogs/cmstourism/card/cms-tourism-card-editor/cms-tourism-card-editor.component';
import { CmsTourismMediaAddComponent } from '../../dialogs/cmstourism/media/cms-tourism-media-add.component';
import { CmsTourismMediaEditorComponent } from '../../dialogs/cmstourism/media/cms-tourism-media-editor/cms-tourism-media-editor.component';
import { CmsTourismSliderAddComponent } from '../../dialogs/cmstourism/slider/cms-tourism-slider-add.component';
import { CmsTourismSliderEditorComponent } from '../../dialogs/cmstourism/slider/cms-tourism-slider-editor/cms-tourism-slider-editor.component';

@Component({
  selector: 'mnrt-cmstourism',
  templateUrl: './cmstourism.component.html',
  styleUrls: ['./cmstourism.component.scss']
})

export class CmstourismComponent implements OnInit {

  constructor(private cmsService: CmsserviceService, private messagesService: MessagesService, private dialog: MatDialog, public spinner: SpinnerService) { }

  onView(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    // this.dialog.open(SectorsViewerComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // // this.getNews();
    // });

  }

  onEditAbout(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsTourismAboutEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });
  
  }
  
  onEditCard(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsTourismCardEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });
  
  }
  
  onEditMedia(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsTourismMediaEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });
  
  }
  
  onEditSlider(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsTourismSliderEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });
  
  }

  onAddslider(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsTourismSliderAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }



  onAddmedia(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsTourismMediaAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onAddcard(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsTourismCardAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onAddabout(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsTourismAboutAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }


  ngOnInit(): void {
  }

}