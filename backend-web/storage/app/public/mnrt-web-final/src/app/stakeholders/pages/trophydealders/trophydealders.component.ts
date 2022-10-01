import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-trophydealders',
  templateUrl: './trophydealders.component.html',
  styleUrls: ['./trophydealders.component.scss']
})
export class TrophydealdersComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('leaderstable') leaderstable!: MatTable<any>;
  
  constructor( public spinner: SpinnerService) { }
  data: any = [
    {id:1, name:"Advanture Trophies",address:"Arusha",start_date:"21-05-2019",status:"Active"},
    {id:1, name:"Kitamu Trophies",address:"Kilimanjaro",start_date:"21-01-2010",status:"Active"},
    {id:1, name:"Zara Trophies",address:"Arusha",start_date:"21-06-2015",status:"Active"}
  ]
  trophyArray = new MatTableDataSource<any>();
  trophydisplayedColumns = ["sn","name","address","start_date","status","action"];

  ngOnInit(): void {
    
    this.getTours();
  }


  getTours(){
    this.trophyArray.data = this.data;
    this.trophyArray.sort = this.sort;
    this.trophyArray.paginator = this.paginator;
  }

  
  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.trophyArray.filter = filtertext.trim().toLowerCase();
  }


}
