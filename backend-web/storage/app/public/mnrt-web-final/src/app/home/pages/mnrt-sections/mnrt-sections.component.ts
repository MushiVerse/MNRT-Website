import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  selector: 'mnrt-mnrt-sections',
  templateUrl: './mnrt-sections.component.html',
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'home'}
    }
  ],
  styleUrls: ['./mnrt-sections.component.scss'],
  animations:[
    trigger('fade',[
      transition('void => *', [
        style({opacity: 0}),
        animate(3000)
      ])
    ]),
    trigger('slide',[
      transition('void <=> *',[
        style({ opacity: 0, transform: 'translateX(-100px)'}),
        animate(3000)
      ])
    ])
  ]
})
export class MnrtSectionsComponent implements OnInit {

  istrue: boolean = false

  tourism:any
  wildlife:any
  bees: any
  forest:any
  antiquities: any

  check: number = 0

  constructor() { }

  ngOnInit(): void {
    this.tourism ={
      img:"/assets/images/tourism/tourism_serengeti.jpg",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ac quam a viverra. Cras euismod augue ex, eu posuere ante vestibulum at."
    }

    this.wildlife={
      img1:"/assets/images/wildlife_girrafe.jpg",
      desc1:"1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ac quam a viverra. Cras euismod augue ex",
      img2:"/assets/images/wildlife/david-clode-nyvR6wbU1ho-unsplash.jpg",
      desc2:"2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ac quam a viverra. Cras euismod augue ex",
      img3:"/assets/images/wildlife/lion2.jpg",
      desc3:"3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque ac quam a viverra. Cras euismod augue ex"

    }

  }

}
