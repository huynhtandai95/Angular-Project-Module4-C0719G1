import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmloyeeService {
ApiEmployee="http://127.0.0.1:8000/api/getEmployees";
ApiEmpoyeeDetails="http://127.0.0.1:8000/api/getEmployeeById/";
ApiEditEmployee="http://127.0.0.1:8000/api/updateEmployee";
ApiChangePassword="http://127.0.0.1:8000/api/changePasswordEmployee";
ApiAddEmployee="http://127.0.0.1:8000/api/addEmployee";
  constructor(
    private http:HttpClient
  ) { }

getEmloyees(){
  return this.http.get(this.ApiEmployee).pipe(map((reponse: any) => reponse));
}
getEmployeeDetails(id){
return this.http.get(this.ApiEmpoyeeDetails+id).pipe(map((reponse: any) => reponse));
}
editEmployee(data){
  var tokenHaeder= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
  return this.http.put(this.ApiEditEmployee,data,{headers:tokenHaeder});
}
changePassword(data){
  var tokenHaeder = new HttpHeaders({'Authorization':'Bearer'+localStorage.getItem('token')});
  return this.http.put(this.ApiChangePassword,data,{headers:tokenHaeder});
}
addEmloyee(data){
  return this.http.post(this.ApiAddEmployee,data);
}
}
