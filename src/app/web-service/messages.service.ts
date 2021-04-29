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


   getAllMessages(page: number, limit: number, idDiscussionThread : number ) {

    let request = this.baseUrl + '/' + idDiscussionThread + '/' + page + '/' + limit;

    return this.http.get<any>(request);
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

  delete(id: string) {
    return this.http.delete(this.baseUrl + '/' +id);
  }
}



