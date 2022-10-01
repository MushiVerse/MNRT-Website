import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-forestexpoters',
  templateUrl: './forestexpoters.component.html',
  styleUrls: ['./forestexpoters.component.scss']
})
export class ForestexpotersComponent implements OnInit {

  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('leaderstable') leaderstable!: MatTable<any>;
  
  constructor( public spinner: SpinnerService) { }
  data: any = [
    {id:1, name:"Advanture Forestry",address:"Arusha",start_date:"21-05-2019",status:"Active"},
    {id:1, name:"Kitamu Forestry",address:"Kilimanjaro",start_date:"21-01-2010",status:"Active"},
    {id:1, name:"Zara Forestry",address:"Arusha",start_date:"21-06-2015",status:"Active"}
  ]
  forestArray = new MatTableDataSource<any>();
  forestdisplayedColumns = ["sn","name","address","start_date","status","action"];

  ngOnInit(): void {
    
    this.getTours();
  }


  getTours(){
    this.forestArray.data = this.data;
    this.forestArray.sort = this.sort;
    this.forestArray.paginator = this.paginator;
  }

  
  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.forestArray.filter = filtertext.trim().toLowerCase();
  }

}
