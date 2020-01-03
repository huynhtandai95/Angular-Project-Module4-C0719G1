import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
public api="http://127.0.0.1:8000/api/register";
  constructor(
    private http:HttpClient
  ) { }
  register(data){
    return this.http.post(this.api,data);
  }

}
