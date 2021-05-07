import { ForumDiscussionThreadComponent } from './forum-discussion-thread/forum-discussion-thread.component';
import { DeleteDiscussionThreadComponent } from './forum-discussion-thread/delete-discussion-thread/delete-discussion-thread.component';
import { ForumMessageComponent } from './forum-message/message.component';
import { EditSectionComponent } from './forum-section/edit-section/edit-section.component';
import { DeleteSectionComponent } from './forum-section/delete-section/delete-section.component';
import { EditDiscussionThreadComponent } from './forum-discussion-thread/edit-discussion-thread/edit-discussion-thread.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumSectionComponent } from './forum-section/forum-section.component';
import { ForumRoutingModule } from './forum-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMessageComponent } from './forum-message/edit-message/edit-message.component';
import { DeleteMessageComponent } from './forum-message/delete-message/delete-message.component';

@NgModule({
  declarations: [
    ForumSectionComponent,
    EditSectionComponent,
    DeleteSectionComponent,
    ForumDiscussionThreadComponent,
    EditDiscussionThreadComponent,
    DeleteDiscussionThreadComponent,
    ForumMessageComponent,
    EditMessageComponent,
    DeleteMessageComponent,
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ForumModule {}
