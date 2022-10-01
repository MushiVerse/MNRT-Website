import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForestRoutingModule } from './forest-routing.module';
import { IndexComponent } from './pages/home/index/index.component';
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
    ForestRoutingModule,
    SharedModule,
    MatExpansionModule 
  ]
})
export class ForestModule { }
