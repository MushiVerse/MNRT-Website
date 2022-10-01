import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss']
})
export class HomeAboutComponent implements OnInit {

@Input() about:any;

  constructor() { }

  ngOnInit(): void {
  }

}
