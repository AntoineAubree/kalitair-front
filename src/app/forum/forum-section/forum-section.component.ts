import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { DiscussionThreadService } from '../../web-service/discussionThread.service';
import { DiscussionThread } from '../../model/discussionThread';
import { DeleteDiscussionThreadComponent } from './discussionThread-modale/delete-discussion-thread/delete-discussion-thread.component';
import { EditDiscussionThreadComponent } from './discussionThread-modale/edit-discussion-thread/edit-discussion-thread.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateDiscussionThreadComponent } from './discussionThread-modale/create-discussion-thread/create-discussion-thread.component';
import * as _ from 'underscore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forum-section',
  templateUrl: './forum-section.component.html',
  styleUrls: ['./forum-section.component.scss']
})
export class ForumSectionComponent implements OnInit {

  discussionThreads: DiscussionThread[] = [];
  pagination: any;
  pages: number[] = [];
  sectionId = 0;

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
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 5,
      totalPages: 0,
      totalelement: 0
    };
    this.populateDiscussionThread();
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

  getDiscussionThreadById() {
    // this.discussionThreadService.findById(1)
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

  createDiscussionThread() {
    let modale = this.modalService.open(CreateDiscussionThreadComponent)
    modale.componentInstance.sectionId = this.sectionId;
    modale.result.then(
      close => {
        this.toastr.success('this Discussion Thread has been correctly created')
        this.populateDiscussionThread();
      }
      , dismiss => {
      }
    )

  }
}
