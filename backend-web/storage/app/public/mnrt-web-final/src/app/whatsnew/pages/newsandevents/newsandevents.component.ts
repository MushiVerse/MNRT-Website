import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ServiceService } from 'src/app/shared/services/service.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-newsandevents',
  templateUrl: './newsandevents.component.html',
  styleUrls: ['./newsandevents.component.scss']
})
export class NewsandeventsComponent implements OnInit {

  constructor( private service: ServiceService, public spinner: SpinnerService) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('leaderstable') leaderstable!: MatTable<any>;
  researchesArray = new MatTableDataSource<any>();
  researchesdisplayedColumns = ["details"];

  ngOnInit(): void {
    this.getNews();
  }

  //get news by id
  getNews(){
    this.spinner.isLoading.next(true);
    this.service.getNews().subscribe(result=>{
    this.spinner.isLoading.next(false);
    //console.log(result);

    this.researchesArray.data = result.data;
    this.researchesArray.sort = this.sort;
    this.researchesArray.paginator = this.paginator;

    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }
  //Filtering
  applyFilter(filtertext: string){
    console.log(filtertext);
    this.researchesArray.filter = filtertext.trim().toLowerCase();
  }


}
