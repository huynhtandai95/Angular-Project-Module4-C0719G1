import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchPostAdvancedService {

  public searchPostGeneralResult = new BehaviorSubject<string>(null);
  searchPostGeneralResultValue = this.searchPostGeneralResult.asObservable();

  constructor() { }

  sendData(data: string) {
    this.searchPostGeneralResult.next(data);
  }
}
