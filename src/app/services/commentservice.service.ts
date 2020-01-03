import { Injectable } from '@angular/core';
import { Commentpost } from "../models/commentmodels";



import { HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { of } from "rxjs";
import { catchError,map,tap } from 'rxjs/operators'; 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {
  private commentpostURL='http://127.0.0.1:8000/api/comments';
  getcommentpost():Observable<Commentpost[]>{
    return this.http.get<Commentpost[]>(this.commentpostURL).pipe(map((response: any) => response))
  }
  addCommentpost(commentposts:Commentpost): Observable<Commentpost> {        
    return this.http.post<Commentpost>(this.commentpostURL,commentposts, httpOptions).
    pipe(map((response: any) => response))
    
  }
  constructor(private http: HttpClient) { }
}
