import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  baseUrl : string;

  constructor(private http: HttpClient) {
    this.baseUrl ='http://localhost:8080';
   }

getAllMessages ( message : Message) {

  return this.http.get<Message>(this.baseUrl + '?/message' + message)
}


}
