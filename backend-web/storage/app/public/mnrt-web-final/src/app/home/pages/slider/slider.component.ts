import { trigger, transition, style, animate, keyframes, query, stagger } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mnrt-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations:[
    trigger('slide',[
      transition('* <=> *', [
          animate('2s 1s ease',keyframes([
            style({opacity:0, transform:'translateX(-500px)',offset:0}),
            style({opacity:0.7, transform:'translateX(80px)',offset:0.7}),
            style({opacity:1, transform:'translateX(-10px)',offset:0.9}),
            style({opacity:1, transform:'translateX(0)',offset:1})
          ]))
        ])
    ]),
    trigger('slidetwo',[
      transition(':enter',[
        style({ opacity: 0, transform: 'translateX(500px)'}),
        animate(1500)
      ])
    ])
  ]
})
export class SliderComponent implements OnInit {

  constructor(private _config:NgbCarouselConfig) { 
    _config.showNavigationArrows = true;
    _config.showNavigationIndicators = true;
  }

  show = true;

  myslide:number = 0
  slide0:boolean = false
  slide1:boolean = false
  slide2:boolean = false
  slide3:boolean = false
  slide4:boolean = false

  ngOnInit(): void {

    this.myslide = getRandomInt(4)

    switch(this.myslide) { 
      case 0: { 
        this.slide0 = true; 
         break; 
      } 
      case 1: { 
        this.slide1 = true; 
         break; 
      } 
      case 2: {
        this.slide2 = true;  
         break;    
      } 
      case 3: { 
        this.slide3 = true;  
         break; 
      }
    //   case 4: { 
    //     this.slide4 = true;  
    //     break; 
    //  }  
      default: { 
        this.slide0 = true; 
         break;              
      } 
    }


  }

  
  
}


function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}
