import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HifadhiComponent } from './pages/hifadhi/hifadhi.component';
import { MalikaleComponent } from './pages/malikale/malikale.component';
import { MaporiComponent } from './pages/mapori/mapori.component';
import { MisituComponent } from './pages/misitu/misitu.component';

const routes: Routes = [
  {
    path:'mapori',
    component:MaporiComponent
  },
  {
    path:'hifadhi',
    component:HifadhiComponent
  },
  {
    path:'malikale',
    component:MalikaleComponent
  },
  {
    path:'misitu',
    component:MisituComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttractionsRoutingModule { }
