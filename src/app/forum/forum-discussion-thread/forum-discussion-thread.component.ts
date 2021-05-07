import { UserObservableService } from 'src/app/observable/userObservable';
import { User } from '../../model/user';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { DiscussionThreadService } from '../../web-service/discussionThread.service';
import { DiscussionThread } from '../../model/discussionThread';
import { DeleteDiscussionThreadComponent } from './delete-discussion-thread/delete-discussion-thread.component';
import { EditDiscussionThreadComponent } from './edit-discussion-thread/edit-discussion-thread.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as _ from 'underscore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forum-discussion-thread',
  templateUrl: './forum-discussion-thread.component.html',
  styleUrls: ['./forum-discussion-thread.component.scss']
})
export class ForumDiscussionThreadComponent implements OnInit {

  discussionThreads: DiscussionThread[] = [];
  pagination: any;
  pages: number[] = [];
  user = {} as User;
  sectionId: number = 0;

  constructor(
    private discussionThreadService: DiscussionThreadService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private userObservable: UserObservableService

  ) {
    this.sectionId = parseInt(this.route.snapshot.paramMap.get('id') || '');
  }

  ngOnInit(): void {
    this.userObservable.getUserConnectSubject().subscribe(
      (user) => {
        this.user = user;
      }
    )
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 5,
      totalPages: 0,
      totalelement: 0
    };
    this.populateDiscussionThread();
  }

  getMessage(idDiscussionThread : number) {
    this.router.navigate(['/forum/discussionthread/', idDiscussionThread])
  }

  populateDiscussionThread() {
    this.discussionThreadService.get(this.sectionId, this.pagination.currentPage - 1, this.pagination.itemsPerPage).subscribe(
      (response: any) => {
        this.pagination.totalElements = response.totalElements;
        this.pagination.totalPages = response.totalPages;
        this.pages = _.range(1, this.pagination.totalPages + 1);
        this.discussionThreads = response.content;
      }
    );
  }

  paginate(page: number) {
    this.pagination.currentPage = page;
    this.populateDiscussionThread();
  }

  createDiscussionThread() {
    let modale = this.modalService.open(EditDiscussionThreadComponent);
    let discussionThread = {} as DiscussionThread;
    discussionThread.userId = this.user.id;
    discussionThread.sectionId = this.sectionId;
    modale.componentInstance.discussionThread = discussionThread;
    modale.result.then(
      close => {
        this.toastr.success('this Discussion Thread has been correctly created')
        this.populateDiscussionThread();
      }
      , dismiss => {
      }
    )
  }

  editDiscussionThread(discussionThread: DiscussionThread) {
    let modale = this.modalService.open(EditDiscussionThreadComponent)
    modale.componentInstance.discussionThread = discussionThread
    modale.result.then(
      close => {
        this.toastr.success('this Discussion Thread has been correctly updated')
        this.populateDiscussionThread();
      }
      , dismiss => {
      }
    )
  }

  deleteDiscussionThread(discussionThread: DiscussionThread) {
    let modale = this.modalService.open(DeleteDiscussionThreadComponent);
    modale.componentInstance.title = discussionThread.title;
    modale.result.then(
      close => {
        this.discussionThreadService.delete(discussionThread.id).subscribe(
          res => {
            this.toastr.success('This Discussion Thread has been correctly deleted ');
            this.populateDiscussionThread();
          })
      }
      , dismiss => {
      }
    )
  }




}
