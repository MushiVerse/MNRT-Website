import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { CmsComponent } from './layouts/cms/cms.component';
import { NotfoundComponent } from './layouts/notfound/notfound.component';
import { QuicklinksComponent } from './layouts/quicklinks/quicklinks.component';
import { SiteComponent } from './layouts/site/site.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('./home/home.module').then((module) => module.HomeModule)
      },
      {
        path: 'home',
        redirectTo:'', pathMatch: 'full'
        //loadChildren: () => import('./home/home.module').then((module) => module.HomeModule)
      },
      {
        path: 'forest',
        loadChildren: () => import('./forest/forest.module').then((module) => module.ForestModule)
      },
      {
        path: 'wildlife',
        loadChildren: () => import('./wildlife/wildlife.module').then((module) => module.WildlifeModule)
      },
      {
        path: 'tourism',
        loadChildren: () => import('./tourism/tourism.module').then((module) => module.TourismModule)
      },
      {
        path: 'antiquities',
        loadChildren: () => import('./antiquities/antiquities.module').then((module) => module.AntiquitiesModule)
      },
      {
        path: 'bees',
        loadChildren: () => import('./bees/bees.module').then((module) => module.BeesModule)
      },
      {
        path: 'units',
        loadChildren: () => import('./mnrtunits/mnrtunits.module').then((module) => module.MnrtunitsModule)
      }
    ]
  },
  {
    path: 'stakeholders',
    component: QuicklinksComponent,
    loadChildren: () => import('./stakeholders/stakeholders.module').then((module) => module.StakeholdersModule)
  },
  {
    path: 'resources',
    component: QuicklinksComponent,
    loadChildren: () => import('./resources/resources.module').then((module) => module.ResourcesModule)
  },
  {
    path: 'whatsnew',
    component: QuicklinksComponent,
    loadChildren: () => import('./whatsnew/whatsnew.module').then((module) => module.WhatsnewModule)
  },
  {
    path: 'staff',
    component: QuicklinksComponent,
    loadChildren: () => import('./staff/staff.module').then((module) => module.StaffModule)
  },
  {
    path: 'aboutus',
    component: QuicklinksComponent,
    loadChildren: () => import('./about/about.module').then((module) => module.AboutModule)
  },
  {
    path: 'attractions',
    component: QuicklinksComponent,
    loadChildren: () => import('./attractions/attractions.module').then((module) => module.AttractionsModule)
  },
  {
    path: 'services',
    component: QuicklinksComponent,
    loadChildren: () => import('./services/services.module').then((module) => module.ServicesModule)
  },
  {
    path:'cms',
    children:[
      {
        path: '',
        component: AuthComponent,
        loadChildren: () => import('./authentication/authentication.module').then((module) => module.AuthenticationModule)
      },
      {
        path:'home',
        component:CmsComponent,
        loadChildren: () => import('./cms/cms.module').then((module) => module.CmsModule)
      }
    ]
  },
  {
    path:'**',
    component:NotfoundComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
