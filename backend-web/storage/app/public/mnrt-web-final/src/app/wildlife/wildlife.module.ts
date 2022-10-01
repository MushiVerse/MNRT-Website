import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WildlifeRoutingModule } from './wildlife-routing.module';
import { IndexComponent } from './pages/home/index/index.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutFullComponent } from './pages/about/about-full/about-full.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    IndexComponent,
    AboutFullComponent
  ],
  imports: [
    CommonModule,
    WildlifeRoutingModule,
    MatIconModule,
    MatExpansionModule,
    SharedModule 
  ]
})
export class WildlifeModule { }
