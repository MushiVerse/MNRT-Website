import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActsandpoliciesComponent } from './pages/actsandpolicies/actsandpolicies.component';
import { DocumentandformsComponent } from './pages/documentandforms/documentandforms.component';
import { LawsandregulationsComponent } from './pages/lawsandregulations/lawsandregulations.component';
import { OtherpublicationsComponent } from './pages/otherpublications/otherpublications.component';
import { ProjectsandprogramsComponent } from './pages/projectsandprograms/projectsandprograms.component';
import { ReportsandbdgetsComponent } from './pages/reportsandbdgets/reportsandbdgets.component';

const routes: Routes = [
  {
    path:'actsandpolicies',
    component: ActsandpoliciesComponent
  },
  {
    path:'documentandforms',
    component: DocumentandformsComponent
  },
  {
    path:'lawsandregulations',
    component: LawsandregulationsComponent
  },
  {
    path:'otherpublications',
    component: OtherpublicationsComponent
  },
  {
    path:'projectsandprograms',
    component: ProjectsandprogramsComponent
  },
  {
    path:'reportsandbudgets',
    component: ReportsandbdgetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
