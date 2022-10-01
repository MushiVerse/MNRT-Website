import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mnrt-reportsandbdgets',
  templateUrl: './reportsandbdgets.component.html',
  styleUrls: ['./reportsandbdgets.component.scss']
})
export class ReportsandbdgetsComponent implements OnInit {

  constructor() { }
  data: any = [
    {id:1, title:"Mafanikio Idara ya Malikale",desc:"",published_date:"21-05-2019",status:"Active"},
    {id:1, title:"BREEF REPORT ON TFS 2011 - 2016",desc:"",published_date:"21-01-2010",status:"Active"},
    {id:1, title:"Hotuba ya budget ya wizara ya Maliasili na utalii 2014/2015",desc:"Hotuba ya Waziri wa Maliasili na Utalii Mheshimiwa Lazaro Samuel Nyalandu (Mb)...",published_date:"21-06-2015",status:"Active"}
  ]
  title = "REPORTS AND BUDGETS"

  ngOnInit(): void {
    
  }

}
