import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'mnrt-view-stakeholder',
  templateUrl: './view-stakeholder.component.html',
  styleUrls: ['./view-stakeholder.component.scss']
})
export class ViewStakeholderComponent implements OnInit {

  row: any = [];
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
  
  this.row = this.data.row;
  }

  ngOnInit(): void {
  }


}
