import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mnrt-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  projects = [
    {desc:"Resilient Natural Resource Management for Tourism and Growth (REGROW)", start_at:"20 Nov 2019", status:"Ongoing"},
    {desc:"Forestry and Value Chains Development programme (FORVAC)", start_at:"05 Jan 2020", status:"Ongoing"}
  ];
 
  ngOnInit(): void {
  }

}
