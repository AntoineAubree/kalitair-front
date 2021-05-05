import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Town } from 'src/app/model/town';
import { User } from 'src/app/model/user';
import { TownService } from 'src/app/web-service/town/town.service';
import { UserService } from 'src/app/web-service/user/user.service';
import { confirmPasswordValidator } from '../user-create/confirmPasswordValidator.directive';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UserObservableService } from 'src/app/observable/userObservable';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  observableReady = true;
  user = {} as User;
  editForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  errorHttpMessage: String = '';
  towns: Town[] = [];


  constructor(
    private townService: TownService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private config: NgbModalConfig,
    private modalService: NgbModal,
    private userObservable: UserObservableService,
  ) {
    this.config.backdrop = 'static';
    this.config.keyboard = false;
  }

  ngOnInit(): void {
    //populate value
    this.userObservable.getUserConnectSubject().subscribe(
      res => {
        this.editForm = this.formBuilder.group({
          id: [res.id, Validators.required],
          pseudo: [res.pseudo, [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
          ]],
          firstName: [res.firstName, [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.pattern('([a-zA-ZÀ-ÿ-_ ])+')
          ]],
          lastName: [res.lastName, [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50),
            Validators.pattern('([a-zA-ZÀ-ÿ-_ ])+')
          ]],
          addressNbStreet: [res.addressNbStreet, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(8),
            Validators.pattern('^([0-9]{1,4})\s?(bis|ter)?$')
          ]],
          addressStreet: [res.addressStreet, [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(80),
            Validators.pattern('([a-zA-ZÀ-ÿ-_ ])+')
          ]],
          postCodeCode: [res.postCodeCode, [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(5),
            Validators.pattern('([0-9])+')
          ]],
          townName: [res.townName, Validators.required],
          email: [res.email, [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ]],
          password: [, [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(36),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$')
          ]],
          confirmPassword: ['', Validators.required]
        },
          {
            validators: confirmPasswordValidator
          }
        );
      }
    );
  }

  get form() {
    return this.editForm.controls;
  }

  get town() {
    return this.editForm.get('town');
  }

  findByZipCode() {
    if (this.editForm.get('postCodeCode')?.value.length == 5) {
      console.log('tets');
      this.townService.findByZipCode(this.editForm.get('postCodeCode')?.value).subscribe(res => {
        if (res) {
          this.towns = res;
          console.log(this.towns);
        }
      })
    }
  }

  onSubmit() {
    // stop here if form is invalid
    console.log(this.editForm.value)
    this.userService.put(this.editForm.value).subscribe(
      res => {
        console.log(res)
        this.toastr.success('Your account have been edited correctly', 'You will be redirected to the home page in 2 sec');
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 2000);  //2s
      }, error => {
        this.errorHttpMessage = error.error.message.split("|");
        this.toastr.error('Your account hasn\'t been edited', 'Please try again');
      }
    )
  }

  changeCity(e: any) {
    this.town?.setValue(e.target.value, {
      onlySelf: true
    })
  }

  test() {
    console.log(this.editForm.value)
  }

  deleteAccount(id: number) {
    this.userService.delete(id).subscribe(
      res => {
        this.modalService.dismissAll('Cross Click');
        this.toastr.success('The user have been deleted correctly', 'You will be redirected to the home page in 2 secondes');
        setTimeout(() => {
          this.router.navigate(['home']);
        }, 2000);  //2s
      }, error => {
        this.toastr.error(error.error.message);
      }
    )
  }

  open(content: any) {
    this.modalService.open(content)
  }

}
