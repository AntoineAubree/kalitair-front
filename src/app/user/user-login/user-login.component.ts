import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/web-service/user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(res => {
      console.log(res)
    })
  }


}
