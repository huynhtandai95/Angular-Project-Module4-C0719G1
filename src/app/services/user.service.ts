import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllUsersAPI: string = 'http://127.0.0.1:8000/api/getAllUsers';
  getUserByIdAPI: string = 'http://127.0.0.1:8000/api/getUserById';
  lockUserAccountAPI: string = 'http://127.0.0.1:8000/api/lockUserAccount';
  unlockUserAccountAPI: string = 'http://127.0.0.1:8000/api/unlockUserAccount';
  getNumberOfUsersAPI: string = 'http://127.0.0.1:8000/api/getNumberOfUsers';
  goToPageOfNumberAPI: string = 'http://127.0.0.1:8000/api/getAllUsers?page=';
  findUserAPI: string = 'http://127.0.0.1:8000/api/findUser';
  goToPageOfNumberOfResultFindAPI: string = 'http://127.0.0.1:8000/api/findUser?page=';

  constructor(
    public http: HttpClient
  ) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.getAllUsersAPI);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(this.getUserByIdAPI + '/' + id);
  }

  lockUserAccount(dataLockUserAccount): Observable<any> {
    return this.http.post(this.lockUserAccountAPI, dataLockUserAccount);
  }

  unlockUserAccount(userId): Observable<any> {
    return this.http.post(this.unlockUserAccountAPI, userId);
  }

  getNumberOfUsers(): Observable<any> {
    return this.http.get(this.getNumberOfUsersAPI);
  }

  goToPageOfNumber(numberOfPage: number): Observable<any> {
    return this.http.get(this.goToPageOfNumberAPI + numberOfPage);
  }

  goToPageOfNumberOfResultFind(numberOfPage: number, keyWordForFindUser): Observable<any> {
    return this.http.post(this.goToPageOfNumberOfResultFindAPI + numberOfPage, keyWordForFindUser);
  }

  findUser(keyWordForFindUser) {
    return this.http.post(this.findUserAPI, keyWordForFindUser);
  }
}
