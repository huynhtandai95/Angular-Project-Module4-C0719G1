import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {Helps  } from "../models/helps";
import { of } from "rxjs";
import { catchError,map,tap } from 'rxjs/operators'; 




@Injectable({
  providedIn: 'root'
})

export class HelpsServiceService {
  public sendHelpMessageAPI='http://127.0.0.1:8000/api/helps';
  constructor(private http: HttpClient) { }

  // sendHelpMessage(message):Observable<any>{
  //   return this.http.post(this.sendHelpMessageAPI, message);
  // }
  addEmployeer(help) {        
    return this.http.post(this.sendHelpMessageAPI,help).pipe(map((response: any) => response));
   
  }
}
