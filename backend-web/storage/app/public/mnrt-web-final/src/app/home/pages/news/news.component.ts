import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mnrt-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  show_img_buttom: boolean = false
  news:any
  constructor() { }

  ngOnInit(): void {
    this.news ={
      img:"/assets/images/news/news1.jpg",
      title:"MNRT 2020/2021 Budget Presentation",
      date:"12-Jan-2021",
      introduction:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..."
    }
  }


}
