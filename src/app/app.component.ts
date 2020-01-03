import { Component } from '@angular/core';
import { TrafficService } from "./services/traffic.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project-Module4-C0719G1';
  ipView;
  constructor(
    public trafficService : TrafficService
  ) { }

  ngOnInit() {
    this.getip()
  }
  getip(){
    this.trafficService.getIPAddress().subscribe(data=>{
      this.ipView = data
      this.upTraffic()
    })
  }
  upTraffic(){
    this.trafficService.addView(this.ipView).subscribe(data=>{

    })

  }
}
