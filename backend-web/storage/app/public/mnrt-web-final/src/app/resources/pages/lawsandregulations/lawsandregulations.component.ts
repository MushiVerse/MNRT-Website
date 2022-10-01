import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mnrt-lawsandregulations',
  templateUrl: './lawsandregulations.component.html',
  styleUrls: ['./lawsandregulations.component.scss']
})
export class LawsandregulationsComponent implements OnInit {

  
  constructor( ) { }
  data: any = [
    {id:1, title:"National Human Wildlife Conflict Management Strategy",desc:"",published_date:"21-05-2019",status:"Active"},
    {id:1, title:"HUNTING REGULATION 2020 DRAFT",desc:"Ministry of Natural Resources and Tourism invite your contribution to the improve the Hunting Regulation 2020...",published_date:"21-01-2010",status:"Active"},
    {id:1, title:"THE NGORONGORO CONSERVATION AREA ACT (CAP 284)",desc:"In its current format, the NAFORMA field manual and corresponding inventory design is the combined product of the efforts of a large number...",published_date:"21-06-2015",status:"Active"}
  ]
  title = "LAWS AND REGULATIONS";


  ngOnInit(): void {
    
  }


}
