
import { Injectable } from '@angular/core';
import { Posts } from "../models/post.model";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrlPost: string = "http://localhost:8000/api/posts";
  apiUrlSearchBasic: string = "http://localhost:8000/api/posts/searchPostBasic";
  getAllPostAPI: string = 'http://127.0.0.1:8000/api/posts';
  searchPostGeneralAPI: string = 'http://127.0.0.1:8000/api/searchPostGeneral';
  searchPostByTitleAPI: string = 'http://127.0.0.1:8000/api/searchPostByTitle';
  searchPostByFengshuiAPI: string = 'http://127.0.0.1:8000/api/searchPostByFengshui';
  getAllPostOfUserByUserIdAPI: string = 'http://127.0.0.1:8000/api/getAllPostOfUserByUserId';

  getPostApprovalAPI:string= 'http://127.0.0.1:8000/api/getPostApproval';
  getPostAppredAPI:string= 'http://127.0.0.1:8000/api/getPostAppred';
  getPostAppredPangiteAPI:string= 'http://127.0.0.1:8000/api/getPostAppred?page=';
  getPostApprovalPangiteAPI:string= 'http://127.0.0.1:8000/api/getPostApproval?page=';



  searchPostApproralAPI:string= 'http://127.0.0.1:8000/api/searchPostApproval';
  searchPostAppredAPI:string= 'http://127.0.0.1:8000/api/searchPostAppred';
  searchPostAppredPaginateAPI:string= 'http://127.0.0.1:8000/api/searchPostAppred?page=';

  searchPostApprovalPaginateAPI:string="http://127.0.0.1:8000/api/searchPostApproval?page=";

  


  getPostDetailApprovalAPI:string="http://localhost:8000/api/getPostDetailApproval";
  changeStatusPostAppvoralAPI:string= "http://localhost:8000/api/changeStatusPostAppvoral";
  changeStatusPostAppvedAPI:string= "http://localhost:8000/api/changeStatusPostAppved";

  getAllPostOfUserByUserIdAndPageNumberAPI: string = 'http://127.0.0.1:8000/api/getAllPostOfUserByUserId?page=';
  getNumberOfPostOfUserByUserIdAPI: string = 'http://127.0.0.1:8000/api/getNumberOfPostOfUserByUserId';






  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPosts(): Observable<any> {

    return this.httpClient.get(this.apiUrlPost + 'All').pipe(map((response: any) => response));

  }

  postDataSearch(data) {
    return this.httpClient.post(this.apiUrlSearchBasic, data).pipe(map((response: any) => response));
  }

  addPost(data) {
    return this.httpClient.post(this.apiUrlPost, data).pipe(map((response: any) => response));
  }

  getPostfromId(id): Observable<any> {
    return this.httpClient.get(this.apiUrlPost + 'All' + '/' + id).pipe(map((response: any) => response));
  }

  getAllPostData(): Observable<any> {
    return this.httpClient.get(this.getAllPostAPI);
  }

  searchPostGeneral(conditionsOfSearchPostGeneral): Observable<any> {
    return this.httpClient.post(this.searchPostGeneralAPI, conditionsOfSearchPostGeneral);
  }

  searchPostByTitle(keywordSearchPostByTitle): Observable<any> {
    return this.httpClient.post(this.searchPostByTitleAPI, keywordSearchPostByTitle);
  }

  searchPostByFengshui(conditionsOfSearchPostByFengshui): Observable<any> {
    return this.httpClient.post(this.searchPostByFengshuiAPI, conditionsOfSearchPostByFengshui);
  }
  // get list danh sách bài đăng đang chờ duyệt
  getPostApproval(): Observable<any> {
    return this.httpClient.get(this.getPostApprovalAPI).pipe(map((response: any) => response));
  }
  // get list danh sách bài đăng đã duyệt
  getPostAppred() {
    return this.httpClient.get(this.getPostAppredAPI).pipe(map((response: any) => response));
  }

  getAllPostOfUserByUserId(userId): Observable<any> {
    return this.httpClient.post(this.getAllPostOfUserByUserIdAPI, userId);
  }

  getAllPostOfUserByUserIdAndPageNumber(pageNumber: number, userId): Observable<any> {
    return this.httpClient.post(this.getAllPostOfUserByUserIdAndPageNumberAPI + pageNumber, userId);
  }

  getNumberOfPostOfUserByUserId(userId): Observable<any> {
    return this.httpClient.post(this.getNumberOfPostOfUserByUserIdAPI, userId);
  }

  // update bài post
  updatePost(post: Posts) {
    return this.httpClient.put(this.apiUrlPost + '/' + post.id, post).pipe(map((response: any) => response));
  }

  searchPostApproral(data){
    return this.httpClient.post(this.searchPostApproralAPI,data).pipe(map((response: any) => response));
  }
  searchPostAppred(data){
    return this.httpClient.post(this.searchPostAppredAPI,data).pipe(map((response: any) => response));
  }
  getPostDetailApproval(id){
return this.httpClient.get(this.getPostDetailApprovalAPI+"/"+id).pipe(map((response: any) => response));
  }
  changeStatusPostAppvoral(id){
    return this.httpClient.post(this.changeStatusPostAppvoralAPI,id).pipe(map((response: any) => response));
  }
  changeStatusPostAppved(id){
    return this.httpClient.post(this.changeStatusPostAppvedAPI,id).pipe(map((response: any) => response));
  }

  searchPostAppredPaginate(id,data){
    return this.httpClient.post(this.searchPostAppredPaginateAPI+id,data).pipe(map((response: any) => response));
  }
  searchPostApprovalPaginate(id,data){
    return this.httpClient.post(this.searchPostApprovalPaginateAPI+id,data).pipe(map((response: any) => response));
  }

  getPostAppredPangite(id){
   return this.httpClient.get(this.getPostAppredPangiteAPI+id).pipe(map((response: any) => response));
  }
  getPostApprovalPangite(id){
    return this.httpClient.get(this.getPostApprovalPangiteAPI+id).pipe(map((response: any) => response));
  }
}
