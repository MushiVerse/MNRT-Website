import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'mnrt-cmsspinner',
  templateUrl: './cmsspinner.component.html',
  styleUrls: ['./cmsspinner.component.scss']
})
export class CmsspinnerComponent implements OnInit {

  constructor(public spinner: SpinnerService) { }

  ngOnInit(): void {
  }

}
