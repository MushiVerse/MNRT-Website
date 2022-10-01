import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-tendersandvacancies',
  templateUrl: './tendersandvacancies.component.html',
  styleUrls: ['./tendersandvacancies.component.scss']
})
export class TendersandvacanciesComponent implements OnInit {

  constructor() { }
  data: any = [
    {id:1, title:"CONSULTING SERVICES FOR ENVIRONMENTAL AND SOCIAL IMPACT ASSESSMENT (ESIA) AND ASSOCIATED FRAMEWORKS",desc:"WE ARE INVITING THE PUBLIC TO REVIEW AND COMMENT ON THE TERMS OF REFERENCE FOR ENVIRONMENTAL AND SOCIAL ASSESSMENT FOR THE PROPOSED PROJECT TITLED ''RESILIENT NATURAL RESOURCES BASED GROWTH (REGROW)",published_date:"21-05-2019",status:"Active"},
    {id:1, title:"VACANCY ANNOUNCEMENT",desc:"Vacancy Announcement for Technical Advisor post.",published_date:"21-01-2010",status:"Active"},
    {id:1, title:"REQUEST FOR EXPRESSION OF INTEREST.",desc:"Request for expression of interest on consultancy services for the formulation of the strategic direction and National Tourism plan for the Republic of Tanzania.",published_date:"21-06-2015",status:"Active"}
  ]
  title: string = "TENDER AND VACANCIES";

  ngOnInit(): void {
  }

}
