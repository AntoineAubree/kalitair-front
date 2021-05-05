import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../model/message';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  baseUrl : string;

  constructor(private http: HttpClient) {

    this.baseUrl ='http://localhost:8080/message';

   }

   getAllMessagesThread( idDiscussionThread : number){

    return this.http.get(this.baseUrl + idDiscussionThread)

   }


   getAllMessages(page=1,limit=10,query:string) {
    return this.http.get<Message[]>(this.baseUrl + '?_page=' + page + '&limit=' + limit + query, {observe : 'response'})

  }

   findById( id : number){
    return this.http.get<Message>(this.baseUrl + id)
  }

  create(message : Message) {
    return this.http.post(this.baseUrl, message);
  }

  put(message: Message) {
    return this.http.put(this.baseUrl, message);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + '/' +id);
  }

  update( message : Message) {

    return this.http.put(this.baseUrl + message.id, message)
  }
}



