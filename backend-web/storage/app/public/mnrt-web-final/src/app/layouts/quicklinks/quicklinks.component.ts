import { trigger, transition, style, animate, query, stagger, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ServiceService } from 'src/app/shared/services/service.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-quicklinks',
  templateUrl: './quicklinks.component.html',
  styleUrls: ['./quicklinks.component.scss'],
  animations:[
    trigger('listAnimation',[
      transition('* <=> *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms',[
          animate('1s ease-in',keyframes([
            style({opacity:0, transform:'translateY(-75px)',offset:0}),
            style({opacity:0.5, transform:'translateY(35px)',offset:0.3}),
            style({opacity:1, transform:'translateY(0)',offset:1})]))
        ]))
      ])
    ]),
    trigger('slide',[
      transition('* => *',[
        style({ opacity: 0, transform: 'translateX(-100px)'}),
        animate(500)
      ])
    ])
  ]
})
export class QuicklinksComponent implements OnInit {

  constructor(private service: ServiceService, public spinner: SpinnerService, private router: Router) { }
  links: any =[];
  news: any;

  ngOnInit(): void {
    this.links =[
      {url:"/whatsnew/newsandevents",text:"News and Events"},
      {url:"/whatsnew/pressreleases",text:"Press Releases"},
      {url:"/resources/projectsandprograms",text:"Projects"},
      {url:"/staff/leaders",text:"Executives"},
      {url:"/aboutus/contacts",text:"Contact Us"}
    ]

    //get latest news
    this.getNews();
    console.log(this.router.url)
  }

  getNews(){
    this.spinner.isLoading.next(true);
    this.service.getNews().subscribe(result=>{
    this.spinner.isLoading.next(false);
    //console.log(result.data);
    
    this.news = result.data;
      
    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }

  routeToNews(id:any){
    this.router.navigate(['/whatsnew/newsandevents/view',id])
  }


}

