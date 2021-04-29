import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Town } from 'src/app/model/town';
import { TownService } from 'src/app/web-service/town/town.service';
import { confirmPasswordValidator } from './confirmPasswordValidator.directive';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  createForm: FormGroup = new FormGroup({});
  submitted : boolean = false;

  towns: String[] = ['Paris', 'Marseille', 'Nantes'];


  constructor(private TownService : TownService, private formBuilder : FormBuilder) { }

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
      streetNumber: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8),
        Validators.pattern('^([0-9]{1,4})\s?(bis|ter)?$')
      ]],
      streetName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
        Validators.pattern('([a-zA-ZÀ-ÿ-_ ])+')
      ]],
      zipCode: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
        Validators.pattern('([0-9])+')
      ]],
      town: ['', Validators.required],
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
    return this.TownService.findByZipCode(this.createForm.get('zipCode')?.value).subscribe(res => {
      if (res) {
        //this.towns = res
      }
    })
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createForm.invalid) {
      return
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createForm.value))
  }

  changeCity(e : any) {
    this.town?.setValue(e.target.value, {
      onlySelf : true
    }
    )
    console.log('form',this.createForm)
    console.log('control',this.form)
  }

}
