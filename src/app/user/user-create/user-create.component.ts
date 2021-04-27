import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Town } from 'src/app/model/town';
import { TownService } from 'src/app/web-service/town/town.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  createForm = new FormGroup({
    pseudo: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    streetNumber: new FormControl('', Validators.required),
    streetName: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    town: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', Validators.required)
  })

  towns: Town[] = [];

  constructor(private TownService : TownService) { }

  ngOnInit(): void {
  }

  findByZipCode() {
    return this.TownService.findByZipCode(this.createForm.get('zipCode')?.value).subscribe(res => {
      if (res) {
        this.towns = res
      }
    })
  }

}
