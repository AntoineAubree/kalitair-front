import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import { ForumSectionComponent } from './forum-section/forum-section.component';
import { MessageComponent } from './forum-message/message.component';

const routes: Routes = [


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
