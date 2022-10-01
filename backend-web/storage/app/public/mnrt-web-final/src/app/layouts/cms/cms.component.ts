
import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ServiceService } from 'src/app/shared/services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'mnrt-cms',
  templateUrl: './cms.component.html',
  styleUrls: ['./cms.component.scss']
})
export class CmsComponent implements OnInit{

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver, public spinner: SpinnerService, public sharedService: ServiceService, private router: Router ) {}
  user:any = "default";

  ngOnInit() {
    if(this.sharedService.isAuthenticated() == false){
      this.router.navigate(['/cms'])
    }
    else{
      //this.router.navigate(['/cms/home'])
      this.user = localStorage.getItem('user');
    }
  }

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

}
