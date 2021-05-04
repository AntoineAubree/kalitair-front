import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
    path : "login" , component : UserLoginComponent
  },
  {
    path : "sign-up" , component  : UserCreateComponent
  },
  {
    path : "my-account/edit", component : UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
