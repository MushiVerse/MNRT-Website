//import { Component, OnInit } from '@angular/core';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'mnrt-view-new',
  templateUrl: './view-new.component.html',
  styleUrls: ['./view-new.component.scss']
})
export class ViewNewComponent implements OnInit {

  row: any = [];
  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
  
  this.row = this.data.row;
  }


  ngOnInit(): void {
  }

}
