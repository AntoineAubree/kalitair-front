import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumHomeComponent } from './forum/forum-home/forum-home.component';
import { ForumSectionComponent } from './forum/forum-section/forum-section.component';
import { MessageComponent } from './forum/forum-message/message.component';

const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
