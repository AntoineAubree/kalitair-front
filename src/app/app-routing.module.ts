import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import { ForumSectionComponent } from './forum-section/forum-section.component';
import { ForumDiscussionComponent } from './forum/forum-discussion/forum-discussion.component';

const routes: Routes = [

  {path:"forum/messages" , component : ForumDiscussionComponent},

  {path:"forum/section" , component : ForumSectionComponent},

  {path:"forum/home" , component : ForumHomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
