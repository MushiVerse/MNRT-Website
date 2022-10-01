import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MnrtunitsRoutingModule } from './mnrtunits-routing.module';
import { IndexComponent } from './pages/home/index/index.component';
import { SharedModule } from '../shared/shared.module';
import { IctAboutComponent } from './pages/units/ict-about/ict-about.component';
import { LigalAboutComponent } from './pages/units/ligal-about/ligal-about.component';
import { PmuAboutComponent } from './pages/units/pmu-about/pmu-about.component';


@NgModule({
  declarations: [
    IndexComponent,
    IctAboutComponent,
    LigalAboutComponent,
    PmuAboutComponent
  ],
  imports: [
    CommonModule,
    MnrtunitsRoutingModule,
    SharedModule
  ]
})
export class MnrtunitsModule { }
