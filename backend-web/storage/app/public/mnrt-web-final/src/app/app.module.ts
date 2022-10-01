import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './layouts/site/site.component';
import { CmsComponent } from './layouts/cms/cms.component';
import { NotfoundComponent } from './layouts/notfound/notfound.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Navbar1Component } from './layouts/navbar1/navbar1.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InterceptorService } from './shared/services/interceptor.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthComponent } from './layouts/auth/auth.component';
import { QuicklinksComponent } from './layouts/quicklinks/quicklinks.component';
import { QuicknavbarComponent } from './layouts/quicknavbar/quicknavbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogActions } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    CmsComponent,
    NotfoundComponent,
    FooterComponent,
    Navbar1Component,
    AuthComponent,
    QuicklinksComponent,
    QuicknavbarComponent,

  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule
  ],
  imports: [
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    NgbModule,
    HttpClientModule,
    TranslocoRootModule,
    MatProgressBarModule,
    MatMenuModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDialogModule,

  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},
    { provide: LocationStrategy, useClass: PathLocationStrategy, }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
