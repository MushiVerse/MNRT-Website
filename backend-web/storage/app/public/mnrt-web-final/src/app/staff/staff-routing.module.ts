import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './pages/biography/biography.component';
import { LeadersComponent } from './pages/leaders/leaders.component';
import { ManagementComponent } from './pages/management/management.component';

const routes: Routes = [
  {
    path:'leaders',
    component:LeadersComponent
  },
  {
    path:'management',
    component:ManagementComponent
  },
  {
    path:'biography/:id',
    component:BiographyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
