import { animate, style, transition, trigger } from '@angular/animations';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'mnrt-leaders',
  templateUrl: './leaders.component.html',
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'home'}
    }
  ],
  styleUrls: ['./leaders.component.scss'],
  animations:[
    trigger('fade',[
      transition('void => *', [
        style({opacity: 0}),
        animate(3000)
      ])
    ]),
    trigger('slide',[
      transition('void => *',[
        style({ opacity: 0, transform: 'translateX(-100px)'}),
        animate(1500)
      ])
    ])
  ]
})
export class LeadersComponent implements OnInit {

  constructor(private service: ServiceService, public spinner: SpinnerService) { }

  minister: any = [];
  deputy_miniter: any = [];

  ngOnInit(): void {
    this.getMinister();
    this.getDeputyMinister();
  }

  getMinister(){
    this.spinner.isLoading.next(true);
    this.service.getLeaderById('1').subscribe(result=>{
      this.spinner.isLoading.next(false);
      //console.log(result.data);

      this.minister.name = result.data.leader_name;
      this.minister.leader_title = result.data.leader_title;
      this.minister.picture = result.data.picture;
    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }

  getDeputyMinister(){
    this.spinner.isLoading.next(true);
    this.service.getLeaderById('2').subscribe(result=>{
      this.spinner.isLoading.next(false);
      //console.log(result.data);
      this.deputy_miniter.name = result.data.leader_name;
      this.deputy_miniter.leader_title = result.data.leader_title;
      this.deputy_miniter.picture = result.data.picture;

    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }

}
