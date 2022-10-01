import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-licencedresearches',
  templateUrl: './licencedresearches.component.html',
  styleUrls: ['./licencedresearches.component.scss']
})
export class LicencedresearchesComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('leaderstable') leaderstable!: MatTable<any>;
  
  constructor( public spinner: SpinnerService) { }
  data: any = [
    {id:1, name:"Advanture Trophies",address:"Arusha",start_date:"21-05-2019",status:"Active"},
    {id:1, name:"Kitamu Trophies",address:"Kilimanjaro",start_date:"21-01-2010",status:"Active"},
    {id:1, name:"Zara Trophies",address:"Arusha",start_date:"21-06-2015",status:"Active"}
  ]
  researchesArray = new MatTableDataSource<any>();
  researchesdisplayedColumns = ["sn","name","address","start_date","status","action"];

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
