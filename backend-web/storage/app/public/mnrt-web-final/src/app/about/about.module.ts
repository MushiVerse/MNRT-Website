import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { MinistryoverviewComponent } from './pages/ministryoverview/ministryoverview.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { OrganisationstructureComponent } from './pages/organisationstructure/organisationstructure.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    IndexComponent,
    MinistryoverviewComponent,
    ContactusComponent,
    OrganisationstructureComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    TranslocoModule,
    PdfViewerModule
  ],
  providers: [
    {provide: TRANSLOCO_SCOPE,useValue: 'about'}
  ]
})
export class AboutModule { }
