import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardsComponent } from './components/sections/home-cards/home-cards.component';
import { HomeMediaPlayComponent } from './components/sections/home-media-play/home-media-play.component';
import { MaterialModule } from '../core/material/material.module';
import { HomeSliderComponent } from './components/sections/home-slider/home-slider.component';
import { HomeAboutComponent } from './components/sections/home-about/home-about.component';
import { RouterModule } from '@angular/router';
import { UnitSliderComponent } from './components/mnrtunits/unit-slider/unit-slider.component';
import { UnitDescComponent } from './components/mnrtunits/unit-desc/unit-desc.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CmsspinnerComponent } from './components/cmsspinner/cmsspinner.component';
import { CustomeMaterialsModule } from '../materials/custome-materials.module';
import { ResourcesComponent } from './components/resources/resources.component';
import { WhatsnewComponent } from './components/whatsnew/whatsnew.component';




@NgModule({
  declarations: [
    HomeCardsComponent,
    HomeMediaPlayComponent,
    HomeSliderComponent,
    HomeAboutComponent,
    UnitSliderComponent,
    UnitDescComponent,
    CmsspinnerComponent,
    ResourcesComponent,
    WhatsnewComponent
  ],
  imports: [
    CommonModule, MaterialModule, RouterModule, FlexLayoutModule, CustomeMaterialsModule
  ],
  exports:[HomeCardsComponent,HomeMediaPlayComponent,HomeAboutComponent,HomeSliderComponent,UnitSliderComponent,UnitDescComponent,ResourcesComponent, WhatsnewComponent]
})
export class SharedModule { }
