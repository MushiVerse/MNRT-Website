import { Component, OnInit, HostListener } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { SpinnerService } from 'src/app/shared/services/spinner.service';


@Component({
  selector: 'mnrt-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.scss']
})
export class Navbar1Component implements OnInit {

  constructor(public translocoService: TranslocoService, public spinner: SpinnerService) { }
  public updateswahili(){
  this.translocoService.setActiveLang('sw');
}

public updateenglish(){
  this.translocoService.setActiveLang('en');
}

  selected_lang = 'Sw'
  switch_lang(){

    if(this.selected_lang == 'Sw'){
      this.selected_lang = 'En'
      this.updateswahili()
    }
    else{
      this.selected_lang = 'Sw'
      this.updateenglish()
    }

  }
  ngOnInit(): void {
  }

  nav_variable = false;
  @HostListener("document:scroll")
  scrollFunction(){
    if( document.documentElement.scrollTop > 0){
      this.nav_variable = true;
    }
    else{
      this.nav_variable = false;
    }
  }

 
}
