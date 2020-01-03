import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  apiUrlDirection: string ="http://localhost:8000/api/direction"
  constructor(
    private httpClient: HttpClient
    ) { }

    // Get All Direction
    getAllDirection(): Observable<any> {
      return this.httpClient.get(this.apiUrlDirection).pipe(map((response: any) => response));
    }

    // Get Direction By ID
    getDirectionById(id){
      return this.httpClient.get(`${this.apiUrlDirection}/${id}`).pipe(map((respone:any)=>respone));
    }
}
