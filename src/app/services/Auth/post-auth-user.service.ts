import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PostAuthUserService {
  getPostByUserAPI:string = 'http://127.0.0.1:8000/api/my-post';
  goToPageOfNumberAPI: string = 'http://127.0.0.1:8000/api/my-post?page=';
  goToPageSearchOfNumberAPI: string = 'http://127.0.0.1:8000/api/my-post/searchTitle?page=';
  constructor(
    private httpClient: HttpClient
  ) { }

  // Get All Post -- Auth
  getPostByUser(){
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.get(this.getPostByUserAPI,{headers : tokenHeader}).pipe(map((response: any) => response));
  }

  // show Post by Id -- Auth
  showPostById(id){
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.get(`${this.getPostByUserAPI}/${id}`,{headers : tokenHeader}).pipe(map((response: any) => response));

  }

  createNewPost(data){
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.post(this.getPostByUserAPI,data,{headers : tokenHeader}).pipe(map((response: any) => response));
  }

  UpdatePost(data){
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.put(`${this.getPostByUserAPI}/${data.id}`,data,{headers : tokenHeader}).pipe(map((response: any) => response));
  }

  deletePost(id){
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.delete(`${this.getPostByUserAPI}/${id}`,{headers : tokenHeader}).pipe(map((response: any) => response));
  }
  searchTitlePost(searchWord){
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.post(`${this.getPostByUserAPI}/searchTitle`,searchWord,{headers : tokenHeader}).pipe(map((response: any) => response));
  }

  goToPageOfNumber(numberOfPage: number): Observable<any> {
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.get(this.goToPageOfNumberAPI + numberOfPage,{headers : tokenHeader}).pipe(map((response: any) => response));
  }
  goToPageSearchOfNumber(numberOfPage: number,data): Observable<any> {
    var tokenHeader= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.post(this.goToPageSearchOfNumberAPI + numberOfPage,data,{headers : tokenHeader}).pipe(map((response: any) => response));
  }
}
