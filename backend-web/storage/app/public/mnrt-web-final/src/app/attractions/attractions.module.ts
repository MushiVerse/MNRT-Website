import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttractionsRoutingModule } from './attractions-routing.module';
import { MaporiComponent } from './pages/mapori/mapori.component';
import { HifadhiComponent } from './pages/hifadhi/hifadhi.component';
import { MisituComponent } from './pages/misitu/misitu.component';
import { MalikaleComponent } from './pages/malikale/malikale.component';
import { CustomeMaterialsModule } from '../materials/custome-materials.module';


@NgModule({
  declarations: [
    MaporiComponent,
    HifadhiComponent,
    MisituComponent,
    MalikaleComponent
  ],
  imports: [
    CommonModule,
    AttractionsRoutingModule,
    CustomeMaterialsModule
  ]
})
export class AttractionsModule { }
