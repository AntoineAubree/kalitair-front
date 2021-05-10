import { AuthenticationAdminGuard } from './guard/authenticationAdmin.guard';
import { ForumDiscussionThreadComponent } from './forum/forum-discussion-thread/forum-discussion-thread.component';
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
import { IndicatorResultComponent } from './indicator/indicator-result/indicator-result.component';
import { ForumMessageComponent } from './forum/forum-message/message.component';

const routes: Routes = [
  { path: "home", component: IndicatorAcceuilComponent, children: [{ path: "result/:name", component : IndicatorResultComponent}] },
  { path: 'user/list', component: AdminUserListComponent, canActivate: [AuthenticationAdminGuard] },
  { path: "login", component: UserLoginComponent, canActivate: [DisconnectedGuard] },
  { path: "user/create", component: UserCreateComponent, canActivate: [DisconnectedGuard] },
  { path: "user/edit", component: UserEditComponent, canActivate: [AuthenticationGuard] },
  { path: "forum/section/:id", component: ForumDiscussionThreadComponent },
  { path: "forum/discussionthread/:id", component: ForumMessageComponent },
  { path: "forum", component: ForumSectionComponent },
  { path: "**", redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
