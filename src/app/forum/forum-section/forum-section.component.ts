import { Component, OnInit } from '@angular/core';
import { DiscussionThreadService } from '../../web-service/discussionThread.service';
import { DiscussionThread } from '../../model/discussionThread';
import { DeleteDiscussionThreadComponent } from './discussionThread-modale/delete-discussion-thread/delete-discussion-thread.component';
import { EditDiscussionThreadComponent } from './discussionThread-modale/edit-discussion-thread/edit-discussion-thread.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateDiscussionThreadComponent } from './discussionThread-modale/create-discussion-thread/create-discussion-thread.component';
import * as _ from 'underscore';

@Component({
  selector: 'app-forum-section',
  templateUrl: './forum-section.component.html',
  styleUrls: ['./forum-section.component.scss']
})
export class ForumSectionComponent implements OnInit {

  discussionThreads : DiscussionThread[] = [];
  pagination : any;
  pages : any;
  query : any;



  constructor(  private discussionThreadService : DiscussionThreadService, private modalService : NgbModal) {
   }

  ngOnInit(): void {
    this.pagination = {
      currentPage : 1,
      itemsPerPage : 5,
      totalPages :0,
      totalelement : 0
    };
    this.populateDiscussionThread();
    this.query = {q : ''}
  }

  populateDiscussionThread (){

    this.discussionThreadService.get(this.pagination.currentPage, this.pagination.itemsPerPage, _.values(this.query).join("")).subscribe((response: any) => {
      this.pagination.totalElement = response.headers.get('X-Total-Count');
      this.pagination.totalPages = this.getTotalPage(response.headers.get('X-Total-Count'));
      this.pages = _.range(1, this.pagination.totalPages + 1);
      this.discussionThreads = response.body;
    }
    );
  }



  getTotalPage(totalItems: number): number {
    return Math.ceil(totalItems / this.pagination.itemsPerPage);
  }

  paginate(page: number) {
    this.pagination.currentPage = page;
    this.populateDiscussionThread();
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
