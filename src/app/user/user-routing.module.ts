import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../guard/authentication.guard';
import { DisconnectedGuard } from '../guard/disconnected.guard';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: "login", component: UserLoginComponent, canActivate: [DisconnectedGuard] },
  { path: "user/create", component: UserCreateComponent, canActivate: [DisconnectedGuard] },
  { path: "user/edit", component: UserEditComponent, canActivate: [AuthenticationGuard] },
  { path: "**", redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
