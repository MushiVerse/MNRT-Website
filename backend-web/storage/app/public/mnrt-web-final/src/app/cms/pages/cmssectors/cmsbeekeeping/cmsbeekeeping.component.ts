import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CmsserviceService } from 'src/app/cms/services/cmsservice.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { CmsBeekeeepingAboutAddComponent } from '../../dialogs/cmsbeekeeping/about/cms-beekeeeping-about-add.component';
import { CmsBeekeeepingCardAddComponent } from '../../dialogs/cmsbeekeeping/card/cms-beekeeeping-card-add.component';
import { CmsBeekeeepingMediaAddComponent } from '../../dialogs/cmsbeekeeping/media/cms-beekeeeping-media-add.component';
import { CmsBeekeeepingSliderAddComponent } from '../../dialogs/cmsbeekeeping/slider/cms-beekeeeping-slider-add.component';

@Component({
  selector: 'mnrt-cmsbeekeeping',
  templateUrl: './cmsbeekeeping.component.html',
  styleUrls: ['./cmsbeekeeping.component.scss']
})
export class CmsbeekeepingComponent implements OnInit {

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
    this.dialog.open(CmsBeekeeepingSliderAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
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
    this.dialog.open(CmsBeekeeepingMediaAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onAddcard(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        //dialogConfig.height="90%";
    this.dialog.open(CmsBeekeeepingCardAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

  onAddabout(){
    const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "80%";
        // dialogConfig.height="90%";
    this.dialog.open(CmsBeekeeepingAboutAddComponent, dialogConfig).afterClosed().subscribe(dialogData=>{
    // this.getNews();
    });

  }

}
