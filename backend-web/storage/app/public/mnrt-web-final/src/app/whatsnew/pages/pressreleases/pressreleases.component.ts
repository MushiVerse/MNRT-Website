import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-pressreleases',
  templateUrl: './pressreleases.component.html',
  styleUrls: ['./pressreleases.component.scss']
})
export class PressreleasesComponent implements OnInit {

  constructor() { }
  data: any = [
    {id:1, title:"WIZARA YA MALIASILI NA UTALII KUSHIRIKI MAONESHO YA SABASABA MWAKA 2017",desc:"Wizara ya Maliasili na Utalii inawakaribisha wananchi wote kwenye Maonesho ya 41 ya Biashara ya Kimataifa ya Dar–es-Salaam (Sabasaba) yatakayofanyika kwenye Viwanja vya Sabasaba Barabara ya Kilwa kuanzia tarehe 28 Juni hadi 8 Julai 2017. Karibu ujionee shughuli mbalimbali zinazofanywa…",published_date:"21-05-2019",status:"Active"},
    {id:1, title:"Serikali Yakanusha Kuhusu Utoroshaji wa Wanyamapori Katika Pori la Loliondo",desc:"Serikali ya Tanzania kupitia Wizara ya Maliasili na Utalii imekanusha uzushi uliosambaa kwenye Mitandao ya Kijamii kuhusu utoroshwaji wa nyara za Taifa. Akizungumza na Waandishi wa Habari leo, makao makuu ya Wizara ya Maliasili na Utalii, Mpingo House, jijini Dar es Salaam,…",published_date:"21-01-2010",status:"Active"},
    {id:1, title:"Uteuzi wa Mwenyekiti na Wajumbe wa Bodi ya Mamlaka ya Usimamizi wa Wanyamapori Tanzania (TAWA)",desc:"Wizara ya Maliasili na Utalii inapenda kuujulisha umma kuwa, Bodi mpya ya Mamlaka ya Usimamizi wa Wanyamapori Tanzania (Tanzania Wildlife Authority -TAWA), imeteuliwa rasmi kuanzia tarehe 09 mwezi Septemba, 2015.",published_date:"21-06-2015",status:"Active"}
  ]
  title: string = "PRESS RELEASES";

  ngOnInit(): void {
  }

}
