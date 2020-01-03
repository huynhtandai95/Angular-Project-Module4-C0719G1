import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class SellerService {
  apiUrlSeller: string ="http://localhost:8000/api/seller"
  constructor(
    private httpClient: HttpClient
    ) { }

    //Get All Seller
    getAllSeller(): Observable<any> {
      return this.httpClient.get(this.apiUrlSeller).pipe(map((response: any) => response));
    }

    //Get Seller By ID
    getSellerById(id){
      return this.httpClient.get(`${this.apiUrlSeller}/${id}`).pipe(map((respone:any)=>respone));
    }
}
