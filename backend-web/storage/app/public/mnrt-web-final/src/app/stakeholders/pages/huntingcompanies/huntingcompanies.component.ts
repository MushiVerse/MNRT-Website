import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-huntingcompanies',
  templateUrl: './huntingcompanies.component.html',
  styleUrls: ['./huntingcompanies.component.scss']
})
export class HuntingcompaniesComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('leaderstable') leaderstable!: MatTable<any>;
  
  constructor( public spinner: SpinnerService) { }
  data: any = [
    {id:1, name:"Advanture Hunting Company",address:"Arusha",start_date:"21-05-2019",status:"Active"},
    {id:1, name:"Kitamu Hunting Company",address:"Kilimanjaro",start_date:"21-01-2010",status:"Active"},
    {id:1, name:"Zara Hunting Company",address:"Arusha",start_date:"21-06-2015",status:"Active"}
  ]
  huntingArray = new MatTableDataSource<any>();
  huntingdisplayedColumns = ["sn","name","address","start_date","status","action"];

  ngOnInit(): void {
    
    this.getTours();
  }


  getTours(){
    this.huntingArray.data = this.data;
    this.huntingArray.sort = this.sort;
    this.huntingArray.paginator = this.paginator;
  }

  
  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.huntingArray.filter = filtertext.trim().toLowerCase();
  }


}
