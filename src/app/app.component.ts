import { Component, OnInit } from '@angular/core';
import { UserObservableService } from './observable/userObservable';
import { UserService } from './web-service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'klitair';
  tokenUser = '';

  constructor(
    private userService: UserService,
    private userObservable: UserObservableService,
  ) { }

  ngOnInit(): void {
    this.putUserInObservable();
  }

  private putUserInObservable() {
    this.tokenUser = localStorage.getItem('token') || '';
    if (this.tokenUser) {
      this.userService.get(this.tokenUser).subscribe(
        (user) => {
          this.userObservable.setUserConnectSubject(user);
        }, (error) => {
          console.error('wrong token');
        }
      );
    }
  }

}
