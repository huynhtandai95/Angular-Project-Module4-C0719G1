import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { TrafficService } from '../../../services/traffic.service';
@Component({
  selector: 'app-admin-statistic-view',
  templateUrl: './admin-statistic-view.component.html',
  styleUrls: ['./admin-statistic-view.component.css']
})
export class AdminStatisticViewComponent implements OnInit {
  formSearch : FormGroup
  nowDate;
  dateStart;
  dateEnd;
  totalView;
  countViewDate;
  constructor(
    private formBuilder: FormBuilder,
    private trafficService: TrafficService

  ) { 
    this.nowDate = new Date()
  }

  ngOnInit() {
    this.createForm();
    this.totalTraffic();
  }
  createForm() {
    this.formSearch = this.formBuilder.group({
      DateStart: [''],
      DateEnd: ['']
    })
    this.formSearch.valueChanges.subscribe(data=>{
      this.dateStart =data.DateStart
    })
  }
  totalTraffic(){
    this.trafficService.totalTraffic().subscribe(data=>{
      this.totalView = data;
    })
  }
  onClickSearch(){
    this.dateStart = this.formSearch.value['DateStart'];
    this.dateEnd = this.formSearch.value['DateEnd'];
    this.trafficService.countViewDate(this.formSearch.value).subscribe(data=>{
      this.countViewDate = data
    })
  }
}
