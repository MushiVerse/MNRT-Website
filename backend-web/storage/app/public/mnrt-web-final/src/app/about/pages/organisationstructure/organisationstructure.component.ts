import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mnrt-organisationstructure',
  templateUrl: './organisationstructure.component.html',
  styleUrls: ['./organisationstructure.component.scss']
})
export class OrganisationstructureComponent implements OnInit {

  constructor() { }
  
  pdfFilePath = "/assets/attachments/organisation_structure.pdf";

  ngOnInit(): void {
  }

}
