import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from '../shared/shared.module';
import { SliderComponent } from './pages/slider/slider.component';
import { NewsComponent } from './pages/news/news.component';
import { MnrtSectionsComponent } from './pages/mnrt-sections/mnrt-sections.component';
import { LeadersComponent } from './pages/leaders/leaders.component';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesComponent } from './pages/articles/articles.component';
import { MaterialModule } from '../core/material/material.module';
import { CountersComponent } from './pages/counters/counters.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { MapsComponent } from './pages/maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from '../shared/services/interceptor.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NewsandleadersComponent } from './pages/newsandleaders/newsandleaders.component';
import { SectionsComponent } from './pages/sections/sections.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

@NgModule({
  declarations: [
    IndexComponent,
    SliderComponent,
    NewsComponent,
    MnrtSectionsComponent,
    LeadersComponent,
    ArticlesComponent,
    CountersComponent,
    MapsComponent,
    StatisticsComponent,
    ProjectsComponent,
    NewsandleadersComponent,
    SectionsComponent,
    AboutusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    MaterialModule,
    TranslocoModule,
    GoogleMapsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatTabsModule
  ],
  providers: [
    {provide: TRANSLOCO_SCOPE,useValue: 'home'}
  ]
})
export class HomeModule { }
