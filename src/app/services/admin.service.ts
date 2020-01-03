import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
APILevelOfUser="http://127.0.0.1:8000/api/getAllLevelOfUser";
APILockAccountEmployee="http://127.0.0.1:8000/api/lockAccountEmployee/";
APIUnLockAccountEmployee="http://127.0.0.1:8000/api/unLockAccountEmployee/";
APIDeleteEmployee="http://127.0.0.1:8000/api/deleteEmployee/";
  constructor(
    private http:HttpClient
  ) { }

getLevelUser(){
  return this.http.get(this.APILevelOfUser);
}
lockAccountEmployee(id){
  return this.http.get(this.APILockAccountEmployee+id).pipe(map((reponse: any) => reponse));
}
unLockAccountEmployee(id){
  return this.http.get(this.APIUnLockAccountEmployee+id).pipe(map((reponse: any) => reponse));
}
deleteEmployee(id){
  return this.http.delete(this.APIDeleteEmployee+id).pipe(map((reponse: any) => reponse));
}

}
