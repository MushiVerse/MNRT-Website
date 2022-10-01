import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'mnrt-whatsnew',
  templateUrl: './whatsnew.component.html',
  styleUrls: ['./whatsnew.component.scss']
})
export class WhatsnewComponent implements OnInit {

  
  constructor( public spinner: SpinnerService) { }
  @Input() title: any;
  @Input() data: any = []
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('leaderstable') leaderstable!: MatTable<any>;
  researchesArray = new MatTableDataSource<any>();
  researchesdisplayedColumns = ["details"];

  ngOnInit(): void {
    
    this.getTours();
  }


  getTours(){
    this.researchesArray.data = this.data;
    this.researchesArray.sort = this.sort;
    this.researchesArray.paginator = this.paginator;
  }

  
  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.researchesArray.filter = filtertext.trim().toLowerCase();
  }

}
