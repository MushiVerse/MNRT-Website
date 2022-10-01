import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-unit-slider',
  templateUrl: './unit-slider.component.html',
  styleUrls: ['./unit-slider.component.scss']
})
export class UnitSliderComponent implements OnInit {
  @Input() slider!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
