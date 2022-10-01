import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LeadersComponent } from './pages/leaders/leaders.component';

const routes: Routes = [
  {
    path:'',
    component: IndexComponent
  },
  {
    path:'leaders',
    component: LeadersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
