import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Indicator } from 'src/app/model/indicator';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  baseUrl : string = 'http://localhost:8080/indicator'

  constructor(private http: HttpClient) { }

  getByCoordinate(indicator: Indicator) {
    return this.http.post<Indicator>(this.baseUrl, indicator);
  }
}
