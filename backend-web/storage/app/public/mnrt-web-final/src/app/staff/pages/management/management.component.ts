import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor() { }
  management_list = [
    {id:"1",name:"Herbert Little DVM",title:"DW",picture:"/assets/images/leaders/default.png"},
    {id:"2",name:"Ms. Rosa Tillman",title:"DT",picture:"/assets/images/leaders/default.png"},
    {id:"3",name:"Prof. Cleve Beer",title:"BFoD",picture:"/assets/images/leaders/default.png"},
    {id:"4",name:"Elise Schuster",title:"HICT",picture:"/assets/images/leaders/default.png"},
    {id:"5",name:"Victor Dorothea Jast",title:"PMU",picture:"/assets/images/leaders/default.png"}
  ]

  ngOnInit(): void {
  }

}
