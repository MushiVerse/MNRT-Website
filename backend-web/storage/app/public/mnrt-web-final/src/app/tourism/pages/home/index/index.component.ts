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
      img:"/assets/images/tourism/zanzibar2.jpg",
      section:"TOURISM"
    }

    this.media = {
      media_img: "/assets/images/tourism/mount_kilimanjaro.jpg",
      media_title: "TANZANIA UNFORGETTABLE",
      media_desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      media_video: "/assets/images/tourism/tanzania_unforgettable.mp4"
    }

    this.cards = [
      { name: "LINK ONE TOURISM", img: "/assets/images/tourism/masai.jpg" },
      { name: "LINK TWO TOURISM", img: "/assets/images/tourism/tourism_serengeti.jpg" },
      { name: "LINK THREE TOURISM", img: "/assets/images/tourism/zanzibar.jpg" },
      { name: "LINK FOUR TOURISM", img: "/assets/images/tourism/tourism_serengeti2.jpg" }
    ];


    this.about = {
      img:"/assets/images/tourism/crispin-jones-DDEBAl7ULAo-unsplash.jpg",
      heading:"About Tourism Division",
      content:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...",
     
      link:"/tourism/about"
    }
  }

}
