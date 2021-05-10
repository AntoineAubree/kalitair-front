import { ForumObject } from './../../model/forumObject';
import { Message } from 'src/app/model/message';
import { MessagesService } from 'src/app/web-service/messages.service';
import { DeleteMessageComponent } from './delete-message/delete-message.component';
import { EditMessageComponent } from './edit-message/edit-message.component';

import { User } from '../../model/user';
import { UserObservableService } from 'src/app/observable/userObservable';

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'underscore';

@Component({
  selector: 'app-forum-discussion',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class ForumMessageComponent implements OnInit {

  discussionThreadId: number = 0;
  forumUrl = 'message';

  constructor(
    private messageService: MessagesService,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private toastr: ToastrService,
  ) {
    this.discussionThreadId = parseInt(this.route.snapshot.paramMap.get('id') || '');
  }

  ngOnInit(): void {
  }

  populateMessage(forumObject: ForumObject<Message>): void {
    this.messageService.getAllMessages(this.discussionThreadId, forumObject.pagination.currentPage - 1, forumObject.pagination.itemsPerPage).subscribe(
      (response: any) => {
        forumObject.pagination.totalElements = response.totalElements;
        forumObject.pagination.totalPages = response.totalPages;
        forumObject.pages = _.range(1, forumObject.pagination.totalPages + 1);
        forumObject.items = response.content;
      }
    );
  }

  createMessage(forumObject: ForumObject<Message>, user: User) {
    let modale = this.modalService.open(EditMessageComponent)
    let message = {} as Message;
    message.userId = user.id;
    message.discussionThreadId = this.discussionThreadId;
    modale.componentInstance.message = message;
    modale.result.then(
      close => {
        this.toastr.success('New message created');
        this.populateMessage(forumObject);
      }, dismiss => {
      }
    )
  }

  editMessage(forumObject: ForumObject<Message>, message: Message) {
    let modale = this.modalService.open(EditMessageComponent)
    modale.componentInstance.message = message;
    modale.result.then(
      close => {
        this.toastr.success('this message has been correctly editing');
        this.populateMessage(forumObject);
      }, dismiss => {
      }
    )
  }

  deleteMessage(forumObject: ForumObject<Message>, message: Message) {
    let modale = this.modalService.open(DeleteMessageComponent);
    modale.componentInstance.content = message.content;
    modale.result.then(
      close => {
        this.messageService.delete(message.id).subscribe(
          res => {
            this.toastr.success('This message has been correctly deleted ');
            this.populateMessage(forumObject);
          })
      }, dismiss => {
      }
    )
  }

}
