import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Section } from '../model/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  baseUrl : string;

  constructor(private http: HttpClient) {

    this.baseUrl ='http://localhost:8080/section';
   }

   get(page: number, limit: number ) {

    let request = this.baseUrl + '/' + page + '/' + limit;

    return this.http.get<any>(request);
   }

   findById( id : number){
    return this.http.get<Section>(this.baseUrl + id)
  }

  create(section: Section) {
    return this.http.post(this.baseUrl, section);
  }

  put(section: Section) {
    return this.http.put(this.baseUrl, section);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + id);
  }

  update( section : Section) {

    return this.http.put(this.baseUrl + section.id, section)
  }
}

