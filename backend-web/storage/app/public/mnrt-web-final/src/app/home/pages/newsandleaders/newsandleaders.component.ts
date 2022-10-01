import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/shared/services/service.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-newsandleaders',
  templateUrl: './newsandleaders.component.html',
  styleUrls: ['./newsandleaders.component.scss'],
  animations:[
    trigger('fade',[
      transition('void => *', [
        style({opacity: 0}),
        animate(1000)
      ])
    ]),
    trigger('slide',[
      transition('void <=> *',[
        style({ opacity:0,transform: 'translateY(300px)'}),
        animate(1000)
      ])
    ])
  ]
})
export class NewsandleadersComponent implements OnInit {

  constructor(private service: ServiceService, public spinner: SpinnerService) { }

  news: any;
  minister: any = [];
  deputy_miniter: any = [];
  secretary: any = [];
  deputy_secretary: any = [];

  id:any;
  showMinisters: boolean = true;

  ngOnInit(): void {
    this.getLatestNews();
    this.getMinister();
    this.getDeputyMinister();
    this.getSecretary();
    this.getDeputySecretary()

    this.setLeadersTimeout();

  }
  ngOnDestroy() {
    this.stopTimer();
  }

  setLeadersTimeout(){
    //time interval
    this.id = setInterval(() => {
      console.log("Time interval calls"); 
      console.log(this.id)
      if(this.showMinisters == true){
        this.showMinisters = false;
      }
      else if(this.showMinisters == false){
        this.showMinisters = true;
      }
    }, 7000);
  }

  stopTimer(){
    //if (this.id) {
      clearInterval(this.id);
    //}
    console.log("Timeout stoped");
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

  getLatestNews(){
    //this.spinner.isLoading.next(true);
    this.service.getNews().subscribe(result=>{
      //this.spinner.isLoading.next(false);
      //console.log(result.data);
      this.news ={
        id:result.data[0].id,
        img:result.data[0].image_link,
        title:result.data[0].news_title,
        date:result.data[0].pub_date
      }

      if(result.data[0].news_des.length > 200){
        this.news.introduction = result.data[0].news_des.substr(0,200)+'...';
      }
      else{
        this.news.introduction = result.data[0].news_des;
      }
      
      
    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }



}