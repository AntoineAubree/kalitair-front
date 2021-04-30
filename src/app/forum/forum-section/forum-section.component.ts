import { Component, OnInit } from '@angular/core';
import { DiscussionThreadService } from '../../web-service/discussionThread.service';
import { DiscussionThread } from '../../model/discussionThread';


@Component({
  selector: 'app-forum-section',
  templateUrl: './forum-section.component.html',
  styleUrls: ['./forum-section.component.scss']
})
export class ForumSectionComponent implements OnInit {

  discussionThreads : DiscussionThread[] = [];

  constructor(  private discussionThreadService : DiscussionThreadService) {
   }

  ngOnInit(): void {

  }

  getDiscussionThreadById() {

    this.discussionThreadService.findById(1)
  }
}
