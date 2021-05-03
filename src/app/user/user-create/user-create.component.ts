import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Town } from 'src/app/model/town';
import { User } from 'src/app/model/user';
import { TownService } from 'src/app/web-service/town/town.service';
import { UserService } from 'src/app/web-service/user/user.service';
import { confirmPasswordValidator } from './confirmPasswordValidator.directive';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user = {} as User
  createForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  errorHttpMessage: String = '';

  towns: Town[] = []

  constructor(
    private TownService: TownService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      pseudo: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]],
      firstName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('([a-zA-ZÀ-ÿ-_ ])+')
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('([a-zA-ZÀ-ÿ-_ ])+')
      ]],
      addressNbStreet: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8),
        Validators.pattern('^([0-9]{1,4})\s?(bis|ter)?$')
      ]],
      addressStreet: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
        Validators.pattern('([a-zA-ZÀ-ÿ-_ ])+')
      ]],
      postCodeCode: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern('([0-9])+')
      ]],
      townName: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(36),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$')
      ]],
      confirmPassword: ['', Validators.required]
        	
    },
      {
      validators : confirmPasswordValidator
    });
  }

  get form() {
    return this.createForm.controls;
  }

  get town() {
    return this.createForm.get('town');
  }

  findByZipCode() {
    if (this.createForm.get('postCodeCode')?.value.length == 5) {
      this.TownService.findByZipCode(this.createForm.get('postCodeCode')?.value).subscribe(res => {
        if (res) {
          this.towns = res;
          console.log(this.towns);
        }
      })
    }
  }

  onSubmit() {
    // stop here if form is invalid
    console.log(this.createForm.value)
    this.userService.create(this.createForm.value).subscribe(res => {
      console.log(res)
      if (res) {
        this.toastr.success('Your account have been created correctly', 'You will be redirected to the home page in 3 sec');
        setTimeout(() => {
          this.router.navigate(['home']);
      }, 5000);  //5s
      }
    }, error => {
      this.errorHttpMessage = error.error.message.split("|");
      this.toastr.error('Your account hasn\'t been created','Please try again');
    })
    if (this.createForm.invalid) {
      return
    }
  }

  changeCity(e : any) {
    this.town?.setValue(e.target.value, {
      onlySelf : true
    }
    )
  }

}
