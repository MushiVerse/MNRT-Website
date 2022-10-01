import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ActsandpoliciesComponent } from './pages/actsandpolicies/actsandpolicies.component';
import { LawsandregulationsComponent } from './pages/lawsandregulations/lawsandregulations.component';
import { ReportsandbdgetsComponent } from './pages/reportsandbdgets/reportsandbdgets.component';
import { DocumentandformsComponent } from './pages/documentandforms/documentandforms.component';
import { ProjectsandprogramsComponent } from './pages/projectsandprograms/projectsandprograms.component';
import { OtherpublicationsComponent } from './pages/otherpublications/otherpublications.component';
import { CustomeMaterialsModule } from '../materials/custome-materials.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ActsandpoliciesComponent,
    LawsandregulationsComponent,
    ReportsandbdgetsComponent,
    DocumentandformsComponent,
    ProjectsandprogramsComponent,
    OtherpublicationsComponent
  ],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    CustomeMaterialsModule,
    SharedModule
  ]
})
export class ResourcesModule { }
