import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {editUsers  } from "src/app/models/editUsers";



import { catchError,map,tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {
  public changeAPI='http://127.0.0.1:8000/api/changepassword';

  constructor(
    private http:HttpClient
  ) { }
  sendchangepassword(message:editUsers)
  {
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.http.post(this.changeAPI, message,{headers : tokenHeader}).pipe(map((response: any) => response));
  }
}
