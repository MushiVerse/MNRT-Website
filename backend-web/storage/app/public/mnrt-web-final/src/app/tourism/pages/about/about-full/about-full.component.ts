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
    this.header_img = "/assets/images/tourism/tourism.png"
    this.cards = [
      { name: "LINK ONE TOURISM", img: "/assets/images/tourism/masai.jpg" },
      { name: "LINK TWO TOURISM", img: "/assets/images/tourism/tourism_serengeti.jpg" },
      { name: "LINK THREE TOURISM", img: "/assets/images/tourism/zanzibar.jpg" },
      { name: "LINK FOUR TOURISM", img: "/assets/images/tourism/tourism_serengeti2.jpg" }
    ];

  }


}
