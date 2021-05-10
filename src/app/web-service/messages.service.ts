import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:8080/message/';
  }

  getAllMessages(discussionThreadId: number, page : number, limit : number) {
    return this.http.get<any>(this.baseUrl + discussionThreadId + '/' + page + '/' + limit)
  }

  create(message: Message) {
    return this.http.post(this.baseUrl, message);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + id);
  }

  update(message: Message) {
    return this.http.put(this.baseUrl, message)
  }
}



