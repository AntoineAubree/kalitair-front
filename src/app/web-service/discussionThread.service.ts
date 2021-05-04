import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiscussionThread } from '../model/discussionThread';

@Injectable({
  providedIn: 'root'
})
export class DiscussionThreadService {

  baseUrl : string;

  constructor(private http: HttpClient) {
    this.baseUrl ='http://localhost:8080/discussion_thread';
   }

   get(page: number, limit: number, idSection : Number) {

    let request = this.baseUrl + '/' + idSection + '/' + page + '/' + limit;

    return this.http.get<DiscussionThread>(request);
   }

   findById( id : number){
    return this.http.get<DiscussionThread>(this.baseUrl + id)
  }

  create(discussionThread : DiscussionThread) {
    return this.http.post(this.baseUrl, discussionThread);
  }

  put(discussionThread: DiscussionThread) {
    return this.http.put(this.baseUrl, discussionThread);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + id);
  }
  update( discussionThread : DiscussionThread) {

    return this.http.put(this.baseUrl + discussionThread.id, discussionThread)
  }
}

