import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussionThreadHomeComponent } from './discussion-thread-home/discussion-thread-home.component';
import { CreateDiscussionThreadComponent } from './create-discussion-thread/create-discussion-thread.component';
import { DeleteDiscussionThreadComponent } from './delete-discussion-thread/delete-discussion-thread.component';
import { EditDiscussionThreadComponent } from './edit-discussion-thread/edit-discussion-thread.component';



@NgModule({
  declarations: [
    DiscussionThreadHomeComponent,
    CreateDiscussionThreadComponent,
    DeleteDiscussionThreadComponent,
    EditDiscussionThreadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ForumModule { }
