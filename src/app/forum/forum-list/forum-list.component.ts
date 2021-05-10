import { Pagination } from './../../model/pagination';
import { ForumMessageComponent } from './../forum-message/message.component';
import { ForumDiscussionThreadComponent } from './../forum-discussion-thread/forum-discussion-thread.component';
import { UserObservableService } from './../../observable/userObservable';
import { User } from './../../model/user';
import { ForumSectionComponent } from './../forum-section/forum-section.component';
import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.scss']
})
export class ForumListComponent implements OnInit {

  user = {} as User;
  @Input() forumUrl = '';
  sectionId = 0;
  forumObject = {} as any;
  pagination = {} as Pagination;
  typeOfItem = '';

  constructor(
    private section: ForumSectionComponent,
    private discussionThread: ForumDiscussionThreadComponent,
    private message: ForumMessageComponent,
    private userObservable: UserObservableService
  ) {
    this.forumObject.pagination = this.pagination;
    this.forumObject.pagination.currentPage = 1;
    this.forumObject.pagination.itemsPerPage = 5;
  }

  ngOnInit(): void {
    this.userObservable.getUserConnectSubject().subscribe(
      (user) => {
        this.user = user;
      }
    )
    if (this.forumUrl === 'section') {
      this.typeOfItem = 'Section';
    } else if (this.forumUrl === 'discussionThread') {
      this.typeOfItem = 'Discussion Thread';
    } else if (this.forumUrl === 'message') {
      this.typeOfItem = 'Message';
    }
    this.populate();
  }

  populate(): void {
    if (this.forumUrl === 'section') {
      this.section.populateSection(this.forumObject);
    } else if (this.forumUrl === 'discussionThread') {
      this.discussionThread.populateDiscussionThread(this.forumObject);
    } else if (this.forumUrl === 'message') {
      this.message.populateMessage(this.forumObject);
    }
  }

  paginate(page: number) {
    this.forumObject.pagination.currentPage = page;
    this.populate();
  }

  get(id: number): void {
    if (this.forumUrl === 'section') {
      this.section.getDiscussionThread(id);
    } else if (this.forumUrl === 'discussionThread') {
      this.discussionThread.getMessage(id);
    }
  }

  create(): void {
    if (this.forumUrl === 'section') {
      this.section.createSection(this.forumObject, this.user);
    } else if (this.forumUrl === 'discussionThread') {
      this.discussionThread.createDiscussionThread(this.forumObject, this.user);
    } else if (this.forumUrl === 'message') {
      this.message.createMessage(this.forumObject, this.user);
    }
  }

  edit(item: any): void {
    if (this.forumUrl === 'section') {
      this.section.editSection(this.forumObject, item);
    } else if (this.forumUrl === 'discussionThread') {
      this.discussionThread.editDiscussionThread(this.forumObject, item);
    } else if (this.forumUrl === 'message') {
      this.message.editMessage(this.forumObject, item);
    }
  }

  _delete(item: any): void {
    if (this.forumUrl === 'section') {
      this.section.deleteSection(this.forumObject, item);
    } else if (this.forumUrl === 'discussionThread') {
      this.discussionThread.deleteDiscussionThread(this.forumObject, item);
    } else if (this.forumUrl === 'message') {
      this.message.deleteMessage(this.forumObject, item);
    }
  }
}
