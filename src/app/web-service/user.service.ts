import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = 'http://localhost:4200/'

  constructor(private http : HttpClient) { }

  login(user : User){
    return this.http.post<User>(this.baseUrl + "/user" , user);
  }





}
