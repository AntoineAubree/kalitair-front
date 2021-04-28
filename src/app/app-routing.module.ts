import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumDiscussionComponent } from './forum/forum-discussion/forum-discussion.component';

const routes: Routes = [

  {path:"forum/messages" , component : ForumDiscussionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
