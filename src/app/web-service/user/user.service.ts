import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = 'http://localhost:8080/user/'

  constructor(private http: HttpClient) { }

  /* getAll(page: number, limit: number) {
    return this.http.get<any>(`${this.baseUrl}/${page}/${limit}` )
  } */

  findByPseudo(pseudo: string, page: number, limit: number) {
    return this.http.get<any>(`${this.baseUrl}/${page}/${limit}/${pseudo}`)
  }
  
  get(token: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + token);
  }

  create(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  put(user: User): Observable<User> {
    return this.http.put<User>(this.baseUrl , user);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + id)
  }
  
  checkPseudo(pseudo: string) {
    return this.http.get<boolean>(this.baseUrl + "pseudo" + pseudo )
  }

  checkEmail(email: string) {
    return this.http.get<boolean>(this.baseUrl + "email" + email)
  }





}
