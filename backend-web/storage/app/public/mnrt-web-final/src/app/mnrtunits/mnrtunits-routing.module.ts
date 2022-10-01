import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/home/index/index.component';
import { IctAboutComponent } from './pages/units/ict-about/ict-about.component';
import { LigalAboutComponent } from './pages/units/ligal-about/ligal-about.component';
import { PmuAboutComponent } from './pages/units/pmu-about/pmu-about.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'ict',
    component:IctAboutComponent
  },
  {
    path:'ligal',
    component:LigalAboutComponent
  },
  {
    path:'pmu',
    component:PmuAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MnrtunitsRoutingModule { }
