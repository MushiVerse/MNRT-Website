import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/services/service.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'mnrt-viewnewsandevent',
  templateUrl: './viewnewsandevent.component.html',
  styleUrls: ['./viewnewsandevent.component.scss']
})
export class ViewnewsandeventComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private service: ServiceService, public spinner: SpinnerService) { }
  sub: any;
  id: any;
  news: any;

  ngOnInit(): void {

    //get param from links
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);

      this.getNewsById(this.id);
      });
      


  }

  //get news by id
  getNewsById(id:any){
    this.spinner.isLoading.next(true);
    this.service.getNewsById(id).subscribe(result=>{
      this.spinner.isLoading.next(false);
      //console.log(result.data);
      this.news ={
        id:result.data.id,
        img:result.data.image_link,
        title:result.data.news_title,
        date:result.data.pub_date,
        desc: result.data.news_des
      }
      
    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }

}