import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-unit-desc',
  templateUrl: './unit-desc.component.html',
  styleUrls: ['./unit-desc.component.scss']
})
export class UnitDescComponent implements OnInit {

@Input() desc!:any

  constructor() { }

  ngOnInit(): void {
  }

}
