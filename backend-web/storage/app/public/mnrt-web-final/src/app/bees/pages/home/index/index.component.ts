import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  
  cards: any
  slider: any
  media: any
  about:any
  
  ngOnInit() {
    

    this.slider={
      img:"/assets/images/bees/bees2.jpg",
      section:"BEEKEEPING"
    }

    this.media = {
      media_img: "/assets/images/bees/honey_harvesting.jpg",
      media_title: "HONEY HARVESTING AT IRINGA",
      media_desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      media_video: "/assets/images/bees/honey_harvesting.mp4"
    }

    this.cards = [
      { name: "LINK 1 BEEKEEPING", img: "/assets/images/bees/bees5.jpg" },
      { name: "LINK 2 BEEKEEPING", img: "/assets/images/bees/bees6.jpg" },
      { name: "LINK 3 BEEKEEPING", img: "/assets/images/bees/bees7.jpg" },
      { name: "LINK 4 BEEKEEPING", img: "/assets/images/bees/bees8.jpg" }
    ];

    this.about = {
      img:"/assets/images/bees/bees4.jpg",
      heading:"About Beekeeping Division",
      content:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...",    
      link:"/forest/about"
    }
  }

}
