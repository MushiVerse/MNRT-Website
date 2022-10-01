import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutFullComponent } from './pages/about/about-full/about-full.component';
import { IndexComponent } from './pages/home/index/index.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'about',
    component: AboutFullComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WildlifeRoutingModule { }
