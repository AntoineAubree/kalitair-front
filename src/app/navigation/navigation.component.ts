import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/web-service/user/user.service';
import { UserObservableService } from 'src/app/observable/userObservable';
import { User } from '../model/user';

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
  ) { }

  ngOnInit(): void {
    this.updateUserBooleanValues();
  }

  private updateUserBooleanValues() {
    this.userObservable.getUserConnectSubject().subscribe(
      (user: User) => {
        if (user.id)
          this.isLog = true;
        if (user.role === 'ADMIN')
          this.isAdmin = true;
      }
    );
  }
}