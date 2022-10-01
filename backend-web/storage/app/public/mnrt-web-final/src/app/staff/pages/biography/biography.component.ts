import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/shared/services/service.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
@Component({
  selector: 'mnrt-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, private service: ServiceService, public spinner: SpinnerService) { }
  sub: any;
  id: any;
  biography: any = [];

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      });
      console.log(this.id);

      this.getBiography(this.id);
  }

  getBiography(selected_id: any){
    this.spinner.isLoading.next(true);
    this.service.getLeaderById(selected_id).subscribe(result=>{
      this.spinner.isLoading.next(false);
      //console.log(result.data);
      this.biography.name = result.data.leader_name;
      this.biography.leader_title = result.data.leader_title;
      this.biography.start_date = result.data.start_date;
      this.biography.picture = result.data.picture;
      this.biography.bio = result.data.biography;
    },errorResponse=>{
      console.log("Error: "+ errorResponse)
    });
  }

}
