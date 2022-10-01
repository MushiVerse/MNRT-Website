import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StakeholdersRoutingModule } from './stakeholders-routing.module';
import { ToursComponent } from './pages/tours/tours.component';
import { HuntingcompaniesComponent } from './pages/huntingcompanies/huntingcompanies.component';
import { TrophydealdersComponent } from './pages/trophydealders/trophydealders.component';
import { LicencedresearchesComponent } from './pages/licencedresearches/licencedresearches.component';
import { ForestexpotersComponent } from './pages/forestexpoters/forestexpoters.component';
import { CustomeMaterialsModule } from '../materials/custome-materials.module';
import { ViewstakeholdersComponent } from './pages/viewstakeholders/viewstakeholders.component';


@NgModule({
  declarations: [
    ToursComponent,
    HuntingcompaniesComponent,
    TrophydealdersComponent,
    LicencedresearchesComponent,
    ForestexpotersComponent,
    ViewstakeholdersComponent
  ],
  imports: [
    CommonModule,
    StakeholdersRoutingModule,
    CustomeMaterialsModule
  ]
})
export class StakeholdersModule { }
