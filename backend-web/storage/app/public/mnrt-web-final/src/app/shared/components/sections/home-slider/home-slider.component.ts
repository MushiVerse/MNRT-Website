import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  @Input() slider!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
