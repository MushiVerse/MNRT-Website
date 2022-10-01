import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/home/services/service.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss']
})
export class LeadersComponent implements OnInit {

  
  constructor(private service: ServiceService, public spinner: SpinnerService) { }
  minister: any = [];
  deputy_miniter: any = [];
  secretary: any = [];
  deputy_secretary: any = [];

  ngOnInit(): void {
    this.getMinister();
    this.getDeputyMinister();
    this.getSecretary();
    this.getDeputySecretary()
  }

  
  getMinister(){
    this.spinner.isLoading.next(true);
    this.service.getLeaderById('1').subscribe(result=>{
      this.spinner.isLoading.next(false);
      //console.log(result.data);
      this.minister.id = result.data.id;
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
      this.deputy_miniter.id = result.data.id;
      this.deputy_miniter.name = result.data.leader_name;
      this.deputy_miniter.leader_title = result.data.leader_title;
      this.deputy_miniter.picture = result.data.picture;

    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }

  getSecretary(){
    this.spinner.isLoading.next(true);
    this.service.getLeaderById('3').subscribe(result=>{
      this.spinner.isLoading.next(false);
      //console.log(result.data);
      this.secretary.id = result.data.id;
      this.secretary.name = result.data.leader_name;
      this.secretary.leader_title = result.data.leader_title;
      this.secretary.picture = result.data.picture;

    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }

  getDeputySecretary(){
    this.spinner.isLoading.next(true);
    this.service.getLeaderById('4').subscribe(result=>{
      this.spinner.isLoading.next(false);
      //console.log(result.data);
      this.deputy_secretary.id = result.data.id;
      this.deputy_secretary.name = result.data.leader_name;
      this.deputy_secretary.leader_title = result.data.leader_title;
      this.deputy_secretary.picture = result.data.picture;

    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }

}
