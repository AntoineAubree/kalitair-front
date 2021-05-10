import { ForumObject } from './../../model/forumObject';
import { DiscussionThread } from '../../model/discussionThread';
import { DiscussionThreadService } from '../../web-service/discussionThread.service';
import { DeleteDiscussionThreadComponent } from './delete-discussion-thread/delete-discussion-thread.component';
import { EditDiscussionThreadComponent } from './edit-discussion-thread/edit-discussion-thread.component';

import { User } from '../../model/user';
import { UserObservableService } from 'src/app/observable/userObservable';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'underscore';

@Component({
  selector: 'app-forum-discussion-thread',
  templateUrl: './forum-discussion-thread.component.html',
  styleUrls: ['./forum-discussion-thread.component.scss']
})
export class ForumDiscussionThreadComponent implements OnInit {

  sectionId: number = 0;
  forumUrl = 'discussionThread';

  constructor(
    private discussionThreadService: DiscussionThreadService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
  ) {
    this.sectionId = parseInt(this.route.snapshot.paramMap.get('id') || '');
  }

  ngOnInit(): void {
  }

  populateDiscussionThread(forumObject: ForumObject<DiscussionThread>): void {
    this.discussionThreadService.get(this.sectionId, forumObject.pagination.currentPage - 1, forumObject.pagination.itemsPerPage).subscribe(
      (response: any) => {
        forumObject.pagination.totalElements = response.totalElements;
        forumObject.pagination.totalPages = response.totalPages;
        forumObject.pages = _.range(1, forumObject.pagination.totalPages + 1);
        forumObject.items = response.content;
      }
    );
  }

  getMessage(idDiscussionThread: number) {
    this.router.navigate(['/forum/discussionthread/', idDiscussionThread])
  }

  createDiscussionThread(forumObject: ForumObject<DiscussionThread>, user: User) {
    let modale = this.modalService.open(EditDiscussionThreadComponent);
    let discussionThread = {} as DiscussionThread;
    discussionThread.userId = user.id;
    discussionThread.sectionId = this.sectionId;
    modale.componentInstance.discussionThread = discussionThread;
    modale.result.then(
      close => {
        this.toastr.success('this Discussion Thread has been correctly created')
        this.populateDiscussionThread(forumObject);
      }
      , dismiss => {
      }
    )
  }

  editDiscussionThread(forumObject: ForumObject<DiscussionThread>, discussionThread: DiscussionThread) {
    let modale = this.modalService.open(EditDiscussionThreadComponent)
    modale.componentInstance.discussionThread = discussionThread
    modale.result.then(
      close => {
        this.toastr.success('this Discussion Thread has been correctly updated')
        this.populateDiscussionThread(forumObject);
      }
      , dismiss => {
      }
    )
  }

  deleteDiscussionThread(forumObject: ForumObject<DiscussionThread>, discussionThread: DiscussionThread) {
    let modale = this.modalService.open(DeleteDiscussionThreadComponent);
    modale.componentInstance.title = discussionThread.title;
    modale.result.then(
      close => {
        this.discussionThreadService.delete(discussionThread.id).subscribe(
          res => {
            this.toastr.success('This Discussion Thread has been correctly deleted ');
            this.populateDiscussionThread(forumObject);
          })
      }
      , dismiss => {
      }
    )
  }
}
