import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Town } from 'src/app/model/town';

@Injectable({
  providedIn: 'root'
})
export class TownService {

  baseUrl : string = 'http://localhost:8080/town/' 

  constructor(private http: HttpClient) { }
  
  findByZipCode(zipCode: string) {
    return this.http.get<Town[]>(this.baseUrl + zipCode);
  }
}
