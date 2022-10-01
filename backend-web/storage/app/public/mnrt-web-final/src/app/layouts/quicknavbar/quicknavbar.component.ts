import { Component, OnInit, HostListener } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-quicknavbar',
  templateUrl: './quicknavbar.component.html',
  styleUrls: ['./quicknavbar.component.scss']
})
export class QuicknavbarComponent implements OnInit {

  constructor(public translocoService: TranslocoService, public spinner: SpinnerService) { }
  

  ngOnInit(): void {
    this.checkLanguage();
  }
  
  public updateswahili(){
    this.translocoService.setActiveLang('sw');
  }
  public updateenglish(){
    this.translocoService.setActiveLang('en');
  }

  next_lang: any = "Sw";
  switch_lang(){
    if(localStorage.getItem("lang") == null || localStorage.getItem("lang") =="Sw"){
      this.next_lang = 'Swahili';
      localStorage.setItem("lang","En");
      this.updateenglish();
    }
    else{
      this.next_lang = 'English';
      localStorage.setItem("lang","Sw");
      this.updateswahili();
    }
  }
 
  checkLanguage(){
    if(localStorage.getItem("lang") == null || localStorage.getItem("lang") =="Sw"){
      this.translocoService.setActiveLang('sw');
      this.next_lang = 'English'
    }
    else{
      this.translocoService.setActiveLang('en');
      this.next_lang = 'Swahili'
    }
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
