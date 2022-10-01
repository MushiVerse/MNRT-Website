import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsnewRoutingModule } from './whatsnew-routing.module';
import { NewsandeventsComponent } from './pages/newsandevents/newsandevents.component';
import { PressreleasesComponent } from './pages/pressreleases/pressreleases.component';
import { TendersandvacanciesComponent } from './pages/tendersandvacancies/tendersandvacancies.component';
import { CampainsComponent } from './pages/campains/campains.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { CustomeMaterialsModule } from '../materials/custome-materials.module';
import { ViewnewsandeventComponent } from './pages/newsandevents/viewnewsandevent/viewnewsandevent.component';


@NgModule({
  declarations: [
    NewsandeventsComponent,
    PressreleasesComponent,
    TendersandvacanciesComponent,
    CampainsComponent,
    GalleryComponent,
    ViewnewsandeventComponent
  ],
  imports: [
    CommonModule,
    WhatsnewRoutingModule,
    SharedModule,
    CustomeMaterialsModule
  ]
})
export class WhatsnewModule { }
