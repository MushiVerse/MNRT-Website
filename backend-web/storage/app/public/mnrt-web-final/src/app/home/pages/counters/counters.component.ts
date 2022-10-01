import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'mnrt-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  class_status = false;
  @HostListener("document:scroll")
  scrollFunction(){
    if( document.documentElement.scrollTop > 4300){
      this.class_status = true;
    }
    else{
      this.class_status = false;
    }
  }

  //this is a variable that hold number
  game_reserved:number = 0;
  //same process
  ramsa:number = 0;
  hotels:number = 0;
  forests:number = 0;


  //we have created setinterval function with arrow function and
  //and set them in a variable that is game_reserved.
  game_reservedstop:any = setInterval(()=>{
    this.game_reserved++;
    //we need to stop this at  particular point; will use if condition
    if(this.class_status == true)
    {
      this.game_reserved = 5500
    }
    else{
      if(this.game_reserved > 5500){
        this.game_reserved = 0
      }
    }

  },10) //10 is milisecond you can control it


  ramsastop:any =   setInterval(()=>{
    this.ramsa++;

    if(this.class_status == true)
    {
      this.ramsa = 672
      //clearinterval will stop tha function
      //clearInterval(this.projectcountstop);
    }
    else{
      if(this.ramsa > 672){
        this.ramsa = 0
      }
    }

  },10) 


  hotelsstop:any = setInterval(()=>{
    this.hotels++;
    // if(this.clientcount == 300)
    // {
      
    //   clearInterval(this.clientcountstop);
    // }

    if(this.class_status == true)
    {
      this.hotels= 340
      //clearinterval will stop tha function
      //clearInterval(this.projectcountstop);
    }
    else{
      if(this.hotels > 340){
        this.hotels = 0
      }
    }

  },10)

  forestsstop:any = setInterval(()=>{
    this.forests++;
    // if(this.customerfeedback == 100)
    // {
      
    //   clearInterval(this.customerfeedbackstop);
    // }


    if(this.class_status == true)
    {
      this.forests= 4200
      //clearinterval will stop tha function
      //clearInterval(this.projectcountstop);
    }
    else{
      if(this.forests > 4200){
        this.forests = 0
      }
    }


  },10)


}
