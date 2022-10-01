import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  canShow: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
