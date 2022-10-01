import { Component, OnInit } from '@angular/core';



export interface DirectorElement {
  position: number;
  start: string;
  end: string;
  name: string;
  title: string;
}
const DIRECTORS_DATA: DirectorElement[] = [
  {position: 1, start: '1937', end: '1968', name: 'Neville Chittick', title: 'Curator' },
  {position: 2, start: '1968', end: '1981', name: 'Amin Aza  Mturi', title: 'Director'},
  {position: 3, start: '1981', end: '1985', name: 'Simon S.A. Waane', title: 'Curator'},
  {position: 4, start: '1985', end: '1997', name: 'Simon S.A. Waane -  Director', title: 'Head of Section'},
  {position: 5, start: '1997', end: '2000', name: 'Donatius M.K. Kamamba', title: 'Ag Director'},
  {position: 6, start: '2000', end: 'To Date', name: 'Donatius M.K. Kamamba', title: 'Director'}
];

export interface MinistryElement {
  start: string;
  end: string;
  ministry: string;
}

const MINISTRIES_DATA: MinistryElement[] = [
  {start:'1957',end:'1962',ministry:'Ministry of Education'},
  {start:'1962',end:'1964',ministry:'Ministry of National Culture and Youth'},
  {start:'1964',end:'1967',ministry:'President’s Office'},
  {start:'1967',end:'1968',ministry:'Ministry of Regional Administration and Village Developments'},
  {start:'1968',end:'1980',ministry:'Ministry of National Education;'},
  {start:'1980',end:'1984',ministry:' Ministry of Information and Culture'},
  {start:'1984',end:'1985',ministry:'Prime Minister’s Office'},
  {start:'1985',end:'1988',ministry:' Ministry of Community Development, Culture, Youth and Sports'},
  {start:'1988',end:'Up To Date',ministry:'Ministry of Natural Resources and Tourism'},
];

@Component({
  selector: 'mnrt-about-full',
  templateUrl: './about-full.component.html',
  styleUrls: ['./about-full.component.scss']
})

export class AboutFullComponent implements OnInit {

  public cards: Array<any> = [];
  public header_img:string = "";
  constructor() { }

  ngOnInit(): void {
    this.header_img = "/assets/images/antiquities/kilwa.jpg"
    
    this.cards = [
      { name: "LINK ONE ANTIQ", img: "/assets/images/antiquities/bagamoyo2.jpg" },
      { name: "LINK TWO ANTIQ", img: "/assets/images/antiquities/kilwa.jpg" },
      { name: "LINK THREE ANTIQ", img: "/assets/images/antiquities/kalenga.jpg" },
      { name: "LINK FOUR ANTIQ", img: "/assets/images/antiquities/mbozi_meteriote.jpg" }
    ];
  }

  //Directors Table
  displayedColumnsDirectors: string[] = ['position', 'start', 'end', 'name','title'];
  dataSourceDirectors = DIRECTORS_DATA;

  //Ministries Table
  displayedColumnsMinistries: string[] = ['start', 'end', 'ministry'];
  dataSourceMinistries = MINISTRIES_DATA;

}
