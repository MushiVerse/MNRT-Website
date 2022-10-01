import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-home-media-play',
  templateUrl: './home-media-play.component.html',
  styleUrls: ['./home-media-play.component.scss']
})
export class HomeMediaPlayComponent implements OnInit {

 @Input() media!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
