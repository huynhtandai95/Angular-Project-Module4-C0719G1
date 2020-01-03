import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class RegionService {
  apiUrlRegion: string = "http://localhost:8000/api/region";
  getAllRegionsOfAdminSettingAPI: string = "http://127.0.0.1:8000/api/getAllRegions";
  createNewRegionAPI: string = "http://127.0.0.1:8000/api/createNewRegion";
  deleteRegionAPI: string = "http://127.0.0.1:8000/api/deleteRegion";
  editRegionAPI: string = "http://127.0.0.1:8000/api/editRegion";

  constructor(
    private httpClient: HttpClient
  ) { }
  getAllRegions(): Observable<any> {
    return this.httpClient.get(this.apiUrlRegion).pipe(map((response: any) => response));
  }

  getRegionById(id) {
    return this.httpClient.get(`${this.apiUrlRegion}/${id}`).pipe(map((respone: any) => respone));
  }

  getAllRegionsOfAdminSetting() {
    return this.httpClient.get(this.getAllRegionsOfAdminSettingAPI);
  }

  createNewRegion(data) {
    return this.httpClient.post(this.createNewRegionAPI, data)
  }

  deleteRegion(id) {
    return this.httpClient.post(this.deleteRegionAPI, id);
  }

  editRegion(data) {
    return this.httpClient.post(this.editRegionAPI, data);
  }
}
