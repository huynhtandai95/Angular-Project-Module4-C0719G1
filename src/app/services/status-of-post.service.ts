import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class StatusOfPostService {
  apiUrlStatusOfPost: string ="http://localhost:8000/api/statusOfPost"
  constructor(
    private httpClient: HttpClient
    ) { }

// Get All StatusOfPost
    getAllStatusOfPost(): Observable<any> {
      return this.httpClient.get(this.apiUrlStatusOfPost).pipe(map((response: any) => response));
    }

// Get StatusOfPost By ID
    getStatusOfPostId(id){
      return this.httpClient.get(`${this.apiUrlStatusOfPost}/${id}`).pipe(map((respone:any)=>respone));
    }
}
