import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Town } from 'src/app/model/town';
import { TownService } from 'src/app/web-service/town/town.service';

import {MustMatch } from './confirm.validator'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  createForm: FormGroup = new FormGroup({});
  submitted : boolean = false;

  towns: Town[] = [];

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
        Validators.pattern('^([a-zA-Z0-9-_\s]+)$')
      ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('^([a-zA-Z0-9-_\s]+)$')
      ]],
      streetNumber: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8),
        Validators.pattern('^([0-9]{1,4})\s?(bis|ter)?$')
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]]
        	
    });
    console.log(this.form)
  }

  get form() {
    return this.createForm.controls;
  }

  findByZipCode() {
    return this.TownService.findByZipCode(this.createForm.get('zipCode')?.value).subscribe(res => {
      if (res) {
        this.towns = res
      }
    })
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createForm.invalid) {
      console.log(this.form.pseudo)
      console.log(this.form.firstName)
      console.log(this.form.lastName)
      console.log(this.form.streetNumber)
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createForm.value))
}

}
