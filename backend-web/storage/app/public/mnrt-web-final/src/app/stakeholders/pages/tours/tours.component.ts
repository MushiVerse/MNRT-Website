import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('leaderstable') leaderstable!: MatTable<any>;
  
  constructor( public spinner: SpinnerService) { }
  data: any = [
    {id:1, name:"Advanture Tours",address:"Arusha",start_date:"21-05-2019",status:"Active"},
    {id:1, name:"Kitamu Tours",address:"Kilimanjaro",start_date:"21-01-2010",status:"Active"},
    {id:1, name:"Zara Tours",address:"Arusha",start_date:"21-06-2015",status:"Active"}
  ]
  toursArray = new MatTableDataSource<any>();
  toursdisplayedColumns = ["sn","name","address","start_date","status","action"];

  ngOnInit(): void {
    
    this.getTours();
  }


  getTours(){
    this.toursArray.data = this.data;
    setTimeout(() =>this.toursArray.sort = this.sort);
    setTimeout(() =>this.toursArray.paginator = this.paginator);
  }

  
  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.toursArray.filter = filtertext.trim().toLowerCase();
  }


}
