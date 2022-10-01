import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'mnrt-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  
  @Input() title: any;
  @Input() data: any = []
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('leaderstable') leaderstable!: MatTable<any>;
  
  constructor( public spinner: SpinnerService) { }
  
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
