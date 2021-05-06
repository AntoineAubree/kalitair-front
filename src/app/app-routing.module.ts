import { ForumHomeComponent } from './forum/forum-home/forum-home.component';
import { ForumSectionComponent } from './forum/forum-section/forum-section.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { IndicatorAcceuilComponent } from './indicator/indicator-acceuil/indicator-acceuil.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { DisconnectedGuard } from './guard/disconnected.guard';
import { AuthenticationGuard } from './guard/authentication.guard';
import { MessageComponent } from './forum/forum-message/message.component';

const routes: Routes = [
  { path: "home", component: IndicatorAcceuilComponent },
  { path: 'user/list', component: AdminUserListComponent },
  { path: "login", component: UserLoginComponent, canActivate: [DisconnectedGuard] },
  { path: "user/create", component: UserCreateComponent, canActivate: [DisconnectedGuard] },
  { path: "user/edit", component: UserEditComponent, canActivate: [AuthenticationGuard] },
  { path: "forum/messages", component: MessageComponent },
  { path: "forum/section/:id", component: ForumSectionComponent },
  { path: "forum/discussionthread/:id", component: MessageComponent },
  { path: "forum", component: ForumHomeComponent },
  { path: "**", redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
