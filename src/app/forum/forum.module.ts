import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDiscussionThreadComponent } from './forum-section/discussionThread-modale/edit-discussion-thread/edit-discussion-thread.component';
import { DeleteDiscussionThreadComponent } from './forum-section/discussionThread-modale/delete-discussion-thread/delete-discussion-thread.component';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import { DeleteSectionComponent } from './forum-home/section-modale/delete-section/delete-section.component';
import { EditSectionComponent } from './forum-home/section-modale/edit-section/edit-section.component';
import { MessageComponent } from './forum-message/message.component';
import { ForumSectionComponent } from './forum-section/forum-section.component';
import { ForumRoutingModule } from './forum-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMessageComponent } from './forum-message/edit-message/edit-message.component';
import { DeleteMessageComponent } from './forum-message/delete-message/delete-message.component';

@NgModule({
  declarations: [
    EditDiscussionThreadComponent,
    DeleteDiscussionThreadComponent,
    ForumHomeComponent,
    DeleteSectionComponent,
    EditSectionComponent,
    MessageComponent,
    ForumSectionComponent,
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
