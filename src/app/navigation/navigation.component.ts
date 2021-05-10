import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/web-service/user/user.service';
import { UserObservableService } from 'src/app/observable/userObservable';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isLog = false;
  isAdmin = false;

  constructor(
    private userObservable: UserObservableService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateUserBooleanValues();
  }

  private updateUserBooleanValues() {
    this.userObservable.getUserConnectSubject().subscribe(
      (user: User) => {
        console.log('user' , user);
        user.id ? this.isLog = true : this.isLog = false;
        user.role === 'ADMIN' ? this.isAdmin = true : this.isAdmin = false;
      }
    );
  }

  disconnect(): void {
    localStorage.removeItem('token');
    this.isLog = false;
    this.isAdmin = false;
    this.userObservable.removeUserConnectSubject();
    this.router.navigate(['/login']);
  }
}
