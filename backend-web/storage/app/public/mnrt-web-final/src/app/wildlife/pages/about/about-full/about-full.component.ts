import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-about-full',
  templateUrl: './about-full.component.html',
  styleUrls: ['./about-full.component.scss']
})
export class AboutFullComponent implements OnInit {

  public cards: Array<any> = [];
  public header_img:string = "";

  constructor() { }

  ngOnInit(): void {
    this.header_img = "/assets/images/wildlife/ngorongoro_creator.jpg"
    
    this.cards = [
      { name: "LINK ONE TOURISM", img: "/assets/images/wildlife/leopard.jpg" },
      { name: "LINK TWO TOURISM", img: "/assets/images/wildlife/faru.jpg" },
      { name: "LINK THREE TOURISM", img: "/assets/images/wildlife/lion_walking.jpg" },
      { name: "LINK FOUR TOURISM", img: "/assets/images/wildlife/harshil-gudka-VCAxkOfxtNI-unsplash.jpg" }
    ];
  }


}
