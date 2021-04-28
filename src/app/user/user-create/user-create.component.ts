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
        console.log(this.form.email)
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.createForm.value))
}

}
