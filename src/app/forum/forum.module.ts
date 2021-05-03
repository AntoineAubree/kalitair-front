import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditDiscussionThreadComponent } from './forum-section/discussionThread-modale/edit-discussion-thread/edit-discussion-thread.component';
import { CreateDiscussionThreadComponent } from './forum-section/discussionThread-modale/create-discussion-thread/create-discussion-thread.component';
import { DeleteDiscussionThreadComponent } from './forum-section/discussionThread-modale/delete-discussion-thread/delete-discussion-thread.component';
import { ForumHomeComponent } from './forum-home/forum-home.component';
import { CreateSectionComponent } from './forum-home/section-modale/create-section/create-section.component';
import { DeleteSectionComponent } from './forum-home/section-modale/delete-section/delete-section.component';
import { EditSectionComponent } from './forum-home/section-modale/edit-section/edit-section.component';
import { MessageComponent } from './forum-message/message.component';
import { ForumSectionComponent } from './forum-section/forum-section.component';
import { ForumRoutingModule } from './forum-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateMessageComponent } from './forum-message/create-message/create-message.component';
import { EditMessageComponent } from './forum-message/edit-message/edit-message.component';
import { DeleteMessageComponent } from './forum-message/delete-message/delete-message.component';

@NgModule({
  declarations: [

    EditDiscussionThreadComponent,
    CreateDiscussionThreadComponent,
    DeleteDiscussionThreadComponent,
    ForumHomeComponent,
    CreateSectionComponent,
    DeleteSectionComponent,
    EditSectionComponent,
    MessageComponent,
    ForumSectionComponent,
    CreateMessageComponent,
    EditMessageComponent,
    DeleteMessageComponent


  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    FormsModule
  ]
})
export class ForumModule {}
