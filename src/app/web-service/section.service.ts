import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Section } from '../model/section';

@Injectable({
  providedIn: 'root'
})

export class SectionService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/section';
  }

  get(page = 1, limit = 10) {
    return this.http.get<any>(this.baseUrl + '/' + page + '/' + limit)
  }
  create(section: Section) {
    return this.http.post(this.baseUrl, section);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  update(section: Section) {

    return this.http.put(this.baseUrl, section)
  }
}

