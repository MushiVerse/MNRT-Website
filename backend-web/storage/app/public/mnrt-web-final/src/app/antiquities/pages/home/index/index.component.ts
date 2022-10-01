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
      img:"/assets/images/antiquities/amboni_caves.jpg",
      section:"ANTIQUITIES"
    }

    this.media = {
      media_img: "/assets/images/antiquities/olduvai_gorge4.jpg",
      media_title: "OLDUVAI GORGE",
      media_desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      media_video: "/assets/images/antiquities/oldvai_gorge_video.mp4"
    }

    this.cards = [
      { name: "LINK ONE ANTIQ", img: "/assets/images/antiquities/bagamoyo2.jpg" },
      { name: "LINK TWO ANTIQ", img: "/assets/images/antiquities/kilwa.jpg" },
      { name: "LINK THREE ANTIQ", img: "/assets/images/antiquities/kalenga.jpg" },
      { name: "LINK FOUR ANTIQ", img: "/assets/images/antiquities/mbozi_meteriote.jpg" }
    ];

    this.about = {
      img:"/assets/images/antiquities/Kilwa_fort.jpg",
      heading:"About Antiquities Division",
      content:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...",    
      link:"/antiquities/about"
    }
  }


}
