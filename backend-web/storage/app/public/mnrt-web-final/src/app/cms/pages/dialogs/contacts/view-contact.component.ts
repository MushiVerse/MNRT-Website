import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'mnrt-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {

  row: any = [];
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
  
  this.row = this.data.row;
  }


  ngOnInit(): void {
  }

}
