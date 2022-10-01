import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss']
})
export class HomeCardsComponent implements OnInit {
//@Input() name!:string;
@Input() cards!: Array<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
