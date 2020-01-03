import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class TrafficService {
ApiTraffic = 'http://127.0.0.1:8000/api/traffic';
ApiViewPost = 'http://127.0.0.1:8000/api/viewpost';
  constructor(private http:HttpClient) { }

  public getIPAddress()
  {
    return this.http.get("http://api.ipify.org/?format=json");
  }
  public addView(data){
    return this.http.post(this.ApiTraffic,data).pipe(map((response: any) => response));
  }
  public totalTraffic(){
    return this.http.get(this.ApiTraffic).pipe(map((response: any) => response));
  }
  public countViewDate(data){
    return this.http.post('http://127.0.0.1:8000/api/countViewDate',data).pipe(map((response: any) => response));
  }
  public upView(data){
    return this.http.post(this.ApiViewPost,data).pipe(map((response: any) => response));
  }

  public topView(){
    return this.http.get(`${this.ApiViewPost}/topview`).pipe(map((response: any) => response));
  }
}
