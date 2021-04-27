import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserCreateComponent,
    UserLoginComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
