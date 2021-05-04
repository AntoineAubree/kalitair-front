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

  private async putUserInObservable() {
    this.tokenUser = localStorage.getItem('token') || '';
    if (this.tokenUser) {
      let user = await this.userService.get(this.tokenUser).toPromise();
      console.log(user);
      this.userObservable.setUserConnectSubject(user);
    }
  }

}
