import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  declarations: [
    UserCreateComponent,
    UserLoginComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
