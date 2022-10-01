import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmshomeComponent } from './pages/cmshome/cmshome.component';
import { CmsleadersComponent } from './pages/cmsleaders/cmsleaders.component';
import { CmsnewsComponent } from './pages/cmsnews/cmsnews.component';
import { CmsadvertisementsComponent } from './pages/cmsadvertisements/cmsadvertisements.component';
import { CmsannouncementsComponent } from './pages/cmsannouncements/cmsannouncements.component';
import { CmscontactsComponent } from './pages/cmscontacts/cmscontacts.component';
import { CmsdepartmentsComponent } from './pages/cmsdepartments/cmsdepartments.component';
import { CmsdirectorsComponent } from './pages/cmsdirectors/cmsdirectors.component';
import { CmsdocumentsComponent } from './pages/cmsdocuments/cmsdocuments.component';
import { CmsmanagementComponent } from './pages/cmsmanagement/cmsmanagement.component';
import { CmsstakeholdersComponent } from './pages/cmsstakeholders/cmsstakeholders.component';
import { CmsprojectComponent } from './pages/cmsproject/cmsproject.component';
import { CmstourismComponent } from './pages/cmssectors/cmstourism/cmstourism.component';
import { CmswildlifeComponent } from './pages/cmssectors/cmswildlife/cmswildlife.component';
import { CmsforestComponent } from './pages/cmssectors/cmsforest/cmsforest.component';
import { CmsbeekeepingComponent } from './pages/cmssectors/cmsbeekeeping/cmsbeekeeping.component';
import { CmsantiquitiesComponent } from './pages/cmssectors/cmsantiquities/cmsantiquities.component';

const routes: Routes = [
  {
    path: '',
    component:CmshomeComponent
  },
  {
    path: 'leaders',
    component:CmsleadersComponent
  },
  {
    path: 'news',
    component:CmsnewsComponent
  },
  {
    path: 'advertisements',
    component:CmsadvertisementsComponent
  },

  {
    path: 'announcements',
    component:CmsannouncementsComponent
  },

  {
    path: 'contacts',
    component:CmscontactsComponent
  },
  {
    path: 'departments',
    component:CmsdepartmentsComponent
  },
  {
    path: 'directors',
    component:CmsdirectorsComponent
  },

  {
    path: 'documents',
    component:CmsdocumentsComponent
  },
  {
    path: 'management',
    component:CmsmanagementComponent
  },
  {
    path: 'stakeholders',
    component:CmsstakeholdersComponent
  },
  {
    path: 'projects',
    component:CmsprojectComponent
  },

  // sector routes starts

  {
    path: 'cmstourism',
    component: CmstourismComponent
  },
  {
    path: 'cmswildlife',
    component: CmswildlifeComponent
  },

{
  path: 'cmsforest',
  component: CmsforestComponent
},
{
  path: 'cmsbeekeeping',
  component: CmsbeekeepingComponent
},
{
  path: 'cmsantiquities',
  component: CmsantiquitiesComponent
}

// sector routes ends



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
