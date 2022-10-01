import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { MinistryoverviewComponent } from './pages/ministryoverview/ministryoverview.component';
import { OrganisationstructureComponent } from './pages/organisationstructure/organisationstructure.component';

const routes: Routes = [
  {
    path:'ministryoverview',
    component:MinistryoverviewComponent
  },
  {
    path:'contacts',
    component:ContactusComponent
  },
  {
    path:'structure',
    component:OrganisationstructureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
