import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { CmsAntiquitiesAboutAddComponent } from '../../dialogs/cmsantiquities/about/cms-antiquities-about-add.component';
import { CmsAntiquitiesCardAddComponent } from '../../dialogs/cmsantiquities/card/cms-antiquities-card-add.component';
import { CmsAntiquitiesMediaAddComponent } from '../../dialogs/cmsantiquities/media/cms-antiquities-media-add.component';
import { CmsAntiquitiesSliderAddComponent } from '../../dialogs/cmsantiquities/slider/cms-antiquities-slider-add.component';

@Component({
  selector: 'mnrt-cmsantiquities',
  templateUrl: './cmsantiquities.component.html',
  styleUrls: ['./cmsantiquities.component.scss']
})
export class CmsantiquitiesComponent implements OnInit {

  constructor(private cmsService: CmsserviceService, private messagesService: CmsserviceService, private dialog: MatDialog, public spinner: SpinnerService) { }

  ngOnInit(): void {
  }
// adding forest slider contents

  onAddslider(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsAntiquitiesSliderAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
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
    this.dialog.open(CmsAntiquitiesMediaAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onAddcard(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsAntiquitiesCardAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onAddabout(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsAntiquitiesAboutAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

}
