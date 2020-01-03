import { Component, OnInit } from '@angular/core';
import { TrafficService } from "src/app/services/traffic.service";
@Component({
  selector: 'app-admin-most-view-post',
  templateUrl: './admin-most-view-post.component.html',
  styleUrls: ['./admin-most-view-post.component.css']
})
export class AdminMostViewPostComponent implements OnInit {
postTopviews;
  constructor(
    private trafficService:TrafficService,
  ) { }

  ngOnInit() {
    this.topView();
  }
  
  topView(){
    this.trafficService.topView().subscribe(data=>{
      this.postTopviews = data
      console.log(this.postTopviews)
    })
  }

}
