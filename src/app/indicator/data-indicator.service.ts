import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Indicator } from '../model/indicator';

@Injectable({
  providedIn: 'root'
})
export class DataIndicatorService {

  indicator = {} as Indicator;

  indicatorSubject$ = new BehaviorSubject<Indicator>(this.indicator);

  sendData(dataIndicator: Indicator) {
    this.indicatorSubject$.next(dataIndicator)
  }

  get indicator$() {
    return this.indicatorSubject$.asObservable();
  }
}