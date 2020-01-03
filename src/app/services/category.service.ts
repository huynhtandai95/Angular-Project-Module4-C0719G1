import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrlCategory: string = "http://localhost:8000/api/categories";
  createNewCategoryAPI: string = 'http://127.0.0.1:8000/api/categories';
  deleteCategoryAPI: string = 'http://127.0.0.1:8000/api/deleteCategory';
  editCategoryAPI: string = 'http://127.0.0.1:8000/api/editCategory';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCategory(): Observable<any> {
    return this.httpClient.get(this.apiUrlCategory).pipe(map((response: any) => response));
  }
  getCategoryById(id) {
    return this.httpClient.get(`${this.apiUrlCategory}/${id}`).pipe(map((respone: any) => respone));
  }

  createNewCategory(data): Observable<any> {
    return this.httpClient.post(this.createNewCategoryAPI, data);
  }

  deleteCategory(id): Observable<any> {
    return this.httpClient.post(this.deleteCategoryAPI, id);
  }

  editCategory(data): Observable<any> {
    return this.httpClient.post(this.editCategoryAPI, data);
  }
}
