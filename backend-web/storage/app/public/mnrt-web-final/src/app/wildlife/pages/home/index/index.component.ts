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
      img:"/assets/images/wildlife/zebra.jpg",
      section:"WILDLIFE"
    }

    this.media = {
      media_img: "/assets/images/wildlife/cheetah_chasing.jpg",
      media_title: "HUNTING IN NGORONGORO",
      media_desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      media_video: "/assets/images/wildlife/cheeter_chasing_video.mp4"
    }

    this.cards = [
      { name: "LINK ONE TOURISM", img: "/assets/images/wildlife/leopard.jpg" },
      { name: "LINK TWO TOURISM", img: "/assets/images/wildlife/faru.jpg" },
      { name: "LINK THREE TOURISM", img: "/assets/images/wildlife/lion_walking.jpg" },
      { name: "LINK FOUR TOURISM", img: "/assets/images/wildlife/harshil-gudka-VCAxkOfxtNI-unsplash.jpg" }
    ];
    
    this.about = {
      img:"/assets/images/wildlife/david-clode-nyvR6wbU1ho-unsplash.jpg",
      heading:"About Wildlife Division",
      content:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...",
      link:"/wildlife/about"
    }
  }

}
