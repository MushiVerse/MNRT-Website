import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampainsComponent } from './pages/campains/campains.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NewsandeventsComponent } from './pages/newsandevents/newsandevents.component';
import { ViewnewsandeventComponent } from './pages/newsandevents/viewnewsandevent/viewnewsandevent.component';
import { PressreleasesComponent } from './pages/pressreleases/pressreleases.component';
import { TendersandvacanciesComponent } from './pages/tendersandvacancies/tendersandvacancies.component';

const routes: Routes = [
  {
    path:'campains',
    component:CampainsComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'newsandevents',
    children:[
      {
      path:'',
      component:NewsandeventsComponent
      },
      {
        path:'view/:id',
        component:ViewnewsandeventComponent
      }
    ]
    
  },
  {
    path:'pressreleases',
    component:PressreleasesComponent
  },
  {
    path:'tendersandvacancies',
    component:TendersandvacanciesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatsnewRoutingModule { }
