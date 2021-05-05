import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/web-service/user/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.populate();
  }

  populate() {
    this.userService.getAll(0, 2).subscribe(res => {
      this.users = res.content
      console.log(this.users);
      
    })
  }

}
