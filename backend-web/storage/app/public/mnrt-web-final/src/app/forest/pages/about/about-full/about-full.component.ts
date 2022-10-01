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
    this.header_img = "/assets/images/forest/forest_header.jpg"

    this.cards = [
      { name: "LINK ONE FOREST", img: "/assets/images/forest/morogoro_forest.jpg" },
      { name: "LINK TWO FOREST", img: "/assets/images/forest/water_fall.jpg" },
      { name: "LINK THREE FOREST", img: "/assets/images/forest/udzungwa_mountain.jpg" },
      { name: "LINK FOUR FOREST", img: "/assets/images/forest/david-bruyndonckx.jpg" }
    ];

  }



}
