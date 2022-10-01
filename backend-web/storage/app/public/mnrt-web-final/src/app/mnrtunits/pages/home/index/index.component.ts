import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  ict:any
  ligal:any
  procurement:any
  communication: any
  hrm:any
  accounts: any
  
  constructor() { }

  ngOnInit(): void {
    this.ict={
      img:"/assets/images/units/keyboard.jpg",
      section:"ICT UNIT",
      link:"/"
    }

    this.ligal={
      img:"/assets/images/units/ligal.jpg",
      section:"LEGAL UNIT",
      link:"/"
    }

    this.procurement={
      //img:"/assets/images/units/procurement.jpg",
      section:"PROCUREMENT UNIT",
      link:"/"
    }

    this.communication={
      img:"/assets/images/units/communication.jpg",
      section:"COMMUNICATION UNIT",
      link:"/"
    }

    this.hrm={
      img:"/assets/images/units/administration.jpg",
      section:"HUMAN RESOURCE AND ADMINISTRATION",
      link:"/"
    }

    this.accounts={
      img:"/assets/images/units/accounts.jpg",
      section:"ACCOUNT AND FINANCE UNIT",
      link:"/"
    }
  }

}
