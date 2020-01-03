import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class PostOftypeService {
  apiUrlPostOfType: string = "http://localhost:8000/api/postOfType";
  getAllPostOfTypeAPI: string = "http://127.0.0.1:8000/api/getAllPostOfType";
  editPostOfTypeAPI: string = "http://127.0.0.1:8000/api/editPostOfType";
  deletePostOfTypeAPI: string = "http://127.0.0.1:8000/api/deletePostOfType";
  createNewPostOfTypeAPI: string = "http://127.0.0.1:8000/api/createNewPostOfType";

  constructor(
    private httpClient: HttpClient
  ) { }

  // Get All PostOfType
  getAllPostOfType(): Observable<any> {
    return this.httpClient.get(this.apiUrlPostOfType).pipe(map((response: any) => response));
  }

  // Get PostOfType By ID
  getPostOfTypeById(id) {
    return this.httpClient.get(`${this.apiUrlPostOfType}/${id}`).pipe(map((respone: any) => respone));
  }

  getAllPostOfTypeOfAdminSetting(): Observable<any> {
    return this.httpClient.get(this.getAllPostOfTypeAPI);
  }

  editPostOfType(data): Observable<any> {
    return this.httpClient.post(this.editPostOfTypeAPI, data);
  }

  deletePostOfType(id): Observable<any> {
    return this.httpClient.post(this.deletePostOfTypeAPI, id);
  }

  createNewPostOfType(data): Observable<any> {
    return this.httpClient.post(this.createNewPostOfTypeAPI, data);
  }

}
