import { ForumDiscussionThreadComponent } from './forum-discussion-thread/forum-discussion-thread.component';
import { DeleteDiscussionThreadComponent } from './forum-discussion-thread/delete-discussion-thread/delete-discussion-thread.component';
import { ForumMessageComponent } from './forum-message/message.component';
import { EditSectionComponent } from './forum-section/edit-section/edit-section.component';
import { DeleteSectionComponent } from './forum-section/delete-section/delete-section.component';
import { EditDiscussionThreadComponent } from './forum-discussion-thread/edit-discussion-thread/edit-discussion-thread.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForumSectionComponent } from './forum-section/forum-section.component';
import { ForumRoutingModule } from './forum-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMessageComponent } from './forum-message/edit-message/edit-message.component';
import { DeleteMessageComponent } from './forum-message/delete-message/delete-message.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

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
    ForumListComponent,
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ForumDiscussionThreadComponent,
    ForumSectionComponent,
    ForumMessageComponent,
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
})
export class ForumModule { }
