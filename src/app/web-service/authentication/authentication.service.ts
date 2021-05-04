import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl : string = 'http://localhost:8080/user'

  constructor(private http: HttpClient) { }

  login(login : any){
    return this.http.post<User>(this.baseUrl + "/login" , login);
  }
}
