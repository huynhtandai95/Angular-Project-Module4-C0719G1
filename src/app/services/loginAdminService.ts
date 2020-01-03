import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginAdminService {
  public api = "http://127.0.0.1:8000/api/loginAdmin";
  constructor(
    private http: HttpClient
  ) { }
  login(data) {
   
    return this.http.post(this.api, data).pipe(map((reponse: any) => reponse));
  }
}
