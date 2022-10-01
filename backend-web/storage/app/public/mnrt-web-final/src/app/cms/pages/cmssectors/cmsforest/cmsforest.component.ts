import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { CmsForestAboutAddComponent } from '../../dialogs/cmsforest/about/cms-forest-about-add.component';
import { CmsForestAboutEditorComponent } from '../../dialogs/cmsforest/about/cms-forest-about-editor/cms-forest-about-editor.component';
import { CmsForestCardAddComponent } from '../../dialogs/cmsforest/card/cms-forest-card-add.component';
import { CmsForestCardEditorComponent } from '../../dialogs/cmsforest/card/cms-forest-card-editor/cms-forest-card-editor.component';
import { CmsForestMediaAddComponent } from '../../dialogs/cmsforest/media/cms-forest-media-add.component';
import { CmsForestMediaEditorComponent } from '../../dialogs/cmsforest/media/cms-forest-media-editor/cms-forest-media-editor.component';
import { CmsForestSliderAddComponent } from '../../dialogs/cmsforest/slider/cms-forest-slider-add.component';
import { CmsForestSliderEditorComponent } from '../../dialogs/cmsforest/slider/cms-forest-slider-editor/cms-forest-slider-editor.component';
import { AddNewComponent } from '../../dialogs/news/add-new.component';
@Component({
  selector: 'mnrt-cmsforest',
  templateUrl: './cmsforest.component.html',
  styleUrls: ['./cmsforest.component.scss']
})
export class CmsforestComponent implements OnInit {

  constructor(private cmsService: CmsserviceService, private messagesService: CmsserviceService, private dialog: MatDialog, public spinner: SpinnerService) { }

  ngOnInit(): void {
  }
// adding forest slider contents

onEditAbout(){
  const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      // dialogConfig.height="90%";
  this.dialog.open(CmsForestAboutEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  // this.getNews();
  });

}

onEditCard(){
  const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      // dialogConfig.height="90%";
  this.dialog.open(CmsForestCardEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  // this.getNews();
  });

}

onEditMedia(){
  const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      // dialogConfig.height="90%";
  this.dialog.open(CmsForestMediaEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  // this.getNews();
  });

}

onEditSlider(){
  const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      // dialogConfig.height="90%";
  this.dialog.open(CmsForestSliderEditorComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
  // this.getNews();
  });

}

  onAddslider(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsForestSliderAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }


// adding forest media contents
  onAddmedia(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsForestMediaAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onAddcard(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsForestCardAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onAddabout(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsForestAboutAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }


}
