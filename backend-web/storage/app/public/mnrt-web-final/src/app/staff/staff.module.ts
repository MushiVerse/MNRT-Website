import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { LeadersComponent } from './pages/leaders/leaders.component';
import { ManagementComponent } from './pages/management/management.component';
import { BiographyComponent } from './pages/biography/biography.component';


@NgModule({
  declarations: [
    LeadersComponent,
    ManagementComponent,
    BiographyComponent
    
  ],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }
