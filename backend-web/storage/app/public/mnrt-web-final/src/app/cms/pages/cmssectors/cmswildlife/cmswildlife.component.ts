import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { CmsWildlifeAboutAddComponent } from '../../dialogs/cmswildlife/about/cms-wildlife-about-add.component';
import { CmsWildlifeAboutEditorComponent } from '../../dialogs/cmswildlife/about/cms-wildlife-about-editor/cms-wildlife-about-editor.component';
import { CmsWildlifeCardAddComponent } from '../../dialogs/cmswildlife/card/cms-wildlife-card-add.component';
import { CmsWildlifeCardEditorComponent } from '../../dialogs/cmswildlife/card/cms-wildlife-card-editor/cms-wildlife-card-editor.component';
import { CmsWildlifeMediaAddComponent } from '../../dialogs/cmswildlife/media/cms-wildlife-media-add.component';
import { CmsWildlifeMediaEditorComponent } from '../../dialogs/cmswildlife/media/cms-wildlife-media-editor/cms-wildlife-media-editor.component';
import { CmsWildlifeSliderAddComponent } from '../../dialogs/cmswildlife/slider/cms-wildlife-slider-add.component';
import { CmsWildlifeSliderEditorComponent } from '../../dialogs/cmswildlife/slider/cms-wildlife-slider-editor/cms-wildlife-slider-editor.component';

@Component({
  selector: 'mnrt-cmswildlife',
  templateUrl: './cmswildlife.component.html',
  styleUrls: ['./cmswildlife.component.scss']
})
export class CmswildlifeComponent implements OnInit {

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

  onAddslider(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsWildlifeSliderAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }



  onAddmedia(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsWildlifeMediaAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onAddcard(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsWildlifeCardAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onAddabout(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsWildlifeAboutAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onEditAbout(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsWildlifeAboutEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });
  
  }
  
  onEditCard(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsWildlifeCardEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });
  
  }
  
  onEditMedia(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsWildlifeMediaEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });
  
  }
  
  onEditSlider(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsWildlifeSliderEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });
  
  }


  ngOnInit(): void {
  }

}
