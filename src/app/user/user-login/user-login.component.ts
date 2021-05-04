import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserObservableService } from 'src/app/observable/userObservable';
import { AuthenticationService } from 'src/app/web-service/authentication/authentication.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  isSubmitted: boolean = false;

  errorHttpMessage: String = '';

  loginForm = new FormGroup({
    pseudo: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(36),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$')
    ]),
  });

  constructor(private authenticationService: AuthenticationService, private router: Router, private toastr: ToastrService, private userObservable: UserObservableService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authenticationService.login(this.loginForm.value).subscribe(res => {
      if (res) {
        localStorage.setItem("token", String(res.id));
        this.userObservable.setUserConnectSubject(res);
        this.toastr.success('Valid user', 'You will be redirected to the home page in 2 sec');
        setTimeout(() => {
          this.router.navigate(['my-account/edit']);
        }, 2000);
      } else {
        this.toastr.error('Sign in impossible, try again');
      }
    }, error => {
      console.log(error)
      this.errorHttpMessage = error.error.message
    })
  }

  createAccount() {
    this.router.navigate(['sign-up'])
  }


}
