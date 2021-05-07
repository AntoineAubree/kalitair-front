import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Indicator } from '../model/indicator';

@Injectable({
  providedIn: 'root'
})
export class DataIndicatorService {

  private subject = new Subject<any>();

  sendData(dataIndicator: Indicator) {
    this.subject.next(dataIndicator)
  }

  getData() : Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }

  
}
