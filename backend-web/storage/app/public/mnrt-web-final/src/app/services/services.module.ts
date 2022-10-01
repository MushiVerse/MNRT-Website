import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { FeesComponent } from './pages/fees/fees.component';
import { HotelgradingComponent } from './pages/hotelgrading/hotelgrading.component';
import { HuntingblockComponent } from './pages/huntingblock/huntingblock.component';
import { TourlicensingComponent } from './pages/tourlicensing/tourlicensing.component';
import { TrophylicensingComponent } from './pages/trophylicensing/trophylicensing.component';


@NgModule({
  declarations: [
    FeesComponent,
    HotelgradingComponent,
    HuntingblockComponent,
    TourlicensingComponent,
    TrophylicensingComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
