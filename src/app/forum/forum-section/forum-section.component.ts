import { Component, OnInit } from '@angular/core';
import { DiscussionThreadService } from '../../web-service/discussionThread.service';
import { DiscussionThread } from '../../model/discussionThread';
import { DeleteDiscussionThreadComponent } from './discussionThread-modale/delete-discussion-thread/delete-discussion-thread.component';
import { EditDiscussionThreadComponent } from './discussionThread-modale/edit-discussion-thread/edit-discussion-thread.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateDiscussionThreadComponent } from './discussionThread-modale/create-discussion-thread/create-discussion-thread.component';


@Component({
  selector: 'app-forum-section',
  templateUrl: './forum-section.component.html',
  styleUrls: ['./forum-section.component.scss']
})
export class ForumSectionComponent implements OnInit {

  discussionThreads : DiscussionThread[] = [];

  constructor(  private discussionThreadService : DiscussionThreadService, private modalService : NgbModal) {
   }

  ngOnInit(): void {

  }

  getDiscussionThreadById() {

    this.discussionThreadService.findById(1)
  }

  deleteDiscussionThread(id : number) {

    let modale = this.modalService.open(DeleteDiscussionThreadComponent);

    modale.componentInstance.discussionThreadId = id;
  }

  editDiscussionThread( id : number){

    let modale = this.modalService.open(EditDiscussionThreadComponent)
    modale.componentInstance.discussionThreadId = id

  }

  createDiscussionThread () {
    let modale = this.modalService.open(CreateDiscussionThreadComponent)
    modale.result.then(
      create=>{

      }
      ,dismiss=>{

      }
    )

  }
}
