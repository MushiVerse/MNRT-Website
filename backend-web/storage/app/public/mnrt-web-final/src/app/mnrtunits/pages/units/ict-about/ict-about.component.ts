import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-ict-about',
  templateUrl: './ict-about.component.html',
  styleUrls: ['./ict-about.component.scss']
})
export class IctAboutComponent implements OnInit {

  slider:any
  desc:any
  constructor() { }

  ngOnInit(): void {
    this.slider={
      img:"/assets/images/units/keyboard2.jpg",
      section:"ICT UNIT",
      moto:"We offer Good ICT services and Support for the staff and all"
    }

    this.desc={
      desc1:"The goal of WCS Education is to inspire a diverse, inclusive movement of conservation advocates. We do this by sparking connection with animals and nature; enhancing scientific literacy through hands-on investigation; and engaging constituents in stewardship and action to conserve wildlife and wildplaces.",
      section:this.slider.section,
      moto:this.slider.moto,
      staff_link:"/units",
      values:[
        {img:"/assets/images/units/keyboard2.jpg",heading:"INPIRE",content:"The goal of WCS Education is to inspire a diverse, inclusive movement of conservation"},
        {img:"/assets/images/units/keyboard.jpg",heading:"PROTECT",content:"The goal of WCS Education is to inspire a diverse, inclusive movement of conservation"},
        {img:"/assets/images/units/keyboard2.jpg",heading:"DISCOVER",content:"The goal of WCS Education is to inspire a diverse, inclusive movement of conservation"}
      ]
    }
  }

}
