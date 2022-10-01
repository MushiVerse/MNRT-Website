import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourismRoutingModule } from './tourism-routing.module';
import { IndexComponent } from './pages/home/index/index.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { AboutFullComponent } from './pages/about/about-full/about-full.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    IndexComponent,
    AboutFullComponent
  ],
  imports: [
    CommonModule,
    TourismRoutingModule,
    MatIconModule,
    SharedModule,
    MatExpansionModule
  ]
})
export class TourismModule { }
