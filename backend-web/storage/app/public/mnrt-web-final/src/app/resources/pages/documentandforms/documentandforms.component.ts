import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-documentandforms',
  templateUrl: './documentandforms.component.html',
  styleUrls: ['./documentandforms.component.scss']
})
export class DocumentandformsComponent implements OnInit {

  
  constructor( ) { }
  data: any = [
    {id:1, title:"LIST OF LICENCED TOUR OPERATOR",desc:"Orodha ya Licenced tour operators",published_date:"21-05-2019",status:"Active"},
    {id:1, title:"BREEF REPORT ON TFS 2011 - 2016",desc:"",published_date:"21-01-2010",status:"Active"},
    {id:1, title:"FTI Joining Instructions",desc:"",published_date:"21-06-2015",status:"Active"}
  ]
  title = "DOCUMENT AND FORM";

  ngOnInit(): void {
    
  }



}
