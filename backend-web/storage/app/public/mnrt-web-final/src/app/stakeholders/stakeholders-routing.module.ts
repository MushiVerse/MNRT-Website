import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForestexpotersComponent } from './pages/forestexpoters/forestexpoters.component';
import { HuntingcompaniesComponent } from './pages/huntingcompanies/huntingcompanies.component';
import { LicencedresearchesComponent } from './pages/licencedresearches/licencedresearches.component';
import { ToursComponent } from './pages/tours/tours.component';
import { TrophydealdersComponent } from './pages/trophydealders/trophydealders.component';

const routes: Routes = [
 
  {
    path:'tours',
    component:ToursComponent
  },
  {
    path:'forestexport',
    component:ForestexpotersComponent
  },
  {
    path:'huntingcompanies',
    component:HuntingcompaniesComponent
  },
  {
    path:'licencedresearches',
    component:LicencedresearchesComponent
  },
  {
    path:'trophydealers',
    component:TrophydealdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StakeholdersRoutingModule { }
