import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mnrt-projectsandprograms',
  templateUrl: './projectsandprograms.component.html',
  styleUrls: ['./projectsandprograms.component.scss']
})
export class ProjectsandprogramsComponent implements OnInit {

  
  constructor() { }
  data: any = [
    {id:1, title:"NAFORMA Species List",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",published_date:"21-05-2019",status:"Active"},
    {id:1, title:"Mwongozo wa Uhakiki wa Ubora wa Mazao ya Nyuki Tanzania",desc:"Tanzania ina mazingira mazuri ya kuzalisha mazao ya nyuki yenye kiwango cha juu cha ubora kutokana na kuwepo kwa aina nyingi...",published_date:"21-01-2010",status:"Active"},
    {id:1, title:"NATIONAL FORESTRY RESOURCES MONITORING AND ASSESSMENT OF TANZANIA (NAFORMA)",desc:"In its current format, the NAFORMA field manual and corresponding inventory design is the combined product of the efforts of a large number...",published_date:"21-06-2015",status:"Active"}
  ]
  title = "PROJECTS AND PROGRAMS"

  ngOnInit(): void {
    
  }



}
