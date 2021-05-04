import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
    providedIn: 'root'
})
export class UserObservableService {

    user = {} as User

    userConnectSubject$ = new BehaviorSubject<User>(this.user);

    getUserConnectSubject(): Observable<User> {
        return this.userConnectSubject$.asObservable();
    }

    setUserConnectSubject(user: User): void {
        this.userConnectSubject$.next(user);
    }

}