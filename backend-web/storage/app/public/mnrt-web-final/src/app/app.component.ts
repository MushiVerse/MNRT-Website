import { OnInit } from '@angular/core';
import { Component,  } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import { Router, NavigationEnd } from '@angular/router';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'mnrt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mnrt-web-final';

  constructor(private router: Router, public spinner: SpinnerService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });

    //show spinner for some seconds
    this.showSpinnerForSometime();
    
  }

  showSpinnerForSometime(){
    //this.spinner.isLoading.next(true);
    setTimeout(() => {
      this.spinner.isLoading.next(false);
    }, 3000);
  }

}
