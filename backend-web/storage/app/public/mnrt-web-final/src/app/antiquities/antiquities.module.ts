import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntiquitiesRoutingModule } from './antiquities-routing.module';
import { IndexComponent } from './pages/home/index/index.component';
import { SharedModule } from '../shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { AboutFullComponent } from './pages/about/about-full/about-full.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    IndexComponent,
    AboutFullComponent
  ],
  imports: [
    CommonModule,
    AntiquitiesRoutingModule,
    SharedModule,
    MatExpansionModule,
    MatTableModule
  ]
})
export class AntiquitiesModule { }
