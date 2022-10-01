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
      img:"/assets/images/forest/jeffrey-workman.jpg",
      section:"FORESTRY AND BEEKEEPING"
    }

    this.media = {
      media_img: "/assets/images/forest/jozani_zanzibar.jpg",
      media_title: "JOZANI FOREST - ZANZIBAR",
      media_desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      media_video: "/assets/images/forest/jozani_forest.mp4"
    }

    this.cards = [
      { name: "LINK ONE FOREST", img: "/assets/images/forest/morogoro_forest.jpg" },
      { name: "LINK TWO FOREST", img: "/assets/images/forest/water_fall.jpg" },
      { name: "LINK THREE FOREST", img: "/assets/images/forest/udzungwa_mountain.jpg" },
      { name: "LINK FOUR FOREST", img: "/assets/images/forest/david-bruyndonckx.jpg" }
    ];

    this.about = {
      img:"/assets/images/forest/filip-zrnzevic.jpg",
      heading:"About Division",
      content:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...",    
      link:"/forest/about"
    }
  }

}
