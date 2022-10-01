import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesComponent } from './pages/fees/fees.component';
import { HotelgradingComponent } from './pages/hotelgrading/hotelgrading.component';
import { HuntingblockComponent } from './pages/huntingblock/huntingblock.component';
import { TourlicensingComponent } from './pages/tourlicensing/tourlicensing.component';
import { TrophylicensingComponent } from './pages/trophylicensing/trophylicensing.component';

const routes: Routes = [
  {
    path:'fees',
    component:FeesComponent
  },
  {
    path:'hotelgrading',
    component:HotelgradingComponent
  },
  {
    path:'huntingblockapplication',
    component:HuntingblockComponent
  },
  {
    path:'tourlicensing',
    component:TourlicensingComponent
  },
  {
    path:'trophylicensing',
    component: TrophylicensingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
