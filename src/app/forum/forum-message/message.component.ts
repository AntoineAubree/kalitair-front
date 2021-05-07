import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from 'src/app/model/message';
import { MessagesService } from 'src/app/web-service/messages.service';
import { DeleteMessageComponent } from './delete-message/delete-message.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import * as _ from 'underscore';
import { User } from 'src/app/model/user';
import { UserObservableService } from 'src/app/observable/userObservable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forum-discussion',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class ForumMessageComponent implements OnInit {

  messages: Message[] = [];
  pagination: any;
  pages: any;
  user = {} as User;
  discussionThreadId: number = 0;

  constructor(
    private messageService: MessagesService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private userObservable: UserObservableService
  ) { }

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
    this.discussionThreadId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.populateMessage();
  }

  populateMessage() {
    this.messageService.getAllMessages(this.discussionThreadId, this.pagination.currentPage - 1, this.pagination.itemsPerPage).subscribe(
      (response: any) => {
        this.pagination.totalElements = response.totalElements;
        this.pagination.totalPages = response.totalPages;
        this.pages = _.range(1, this.pagination.totalPages + 1);
        this.messages = response.content;
      }
    );
  }

  paginate(page: number) {
    this.pagination.currentPage = page;
    this.populateMessage();
  }

  createMessage() {
    let modale = this.modalService.open(EditMessageComponent)
    let message = {} as Message;
    message.userId = this.user.id;
    message.discussionThreadId = this.discussionThreadId;
    modale.componentInstance.message = message;
    modale.result.then(
      close => {
        this.toastr.success('New message created');
        this.populateMessage();
      }, dismiss => {
      }
    )
  }

  editMessage(message: Message) {
    let modale = this.modalService.open(EditMessageComponent)
    modale.componentInstance.message = message;
    modale.result.then(
      close => {
        this.toastr.success('this message has been correctly editing');
        this.populateMessage();
      }, dismiss => {
      }
    )
  }

  deleteMessage(message: Message) {
    let modale = this.modalService.open(DeleteMessageComponent);
    modale.componentInstance.content = message.content;
    modale.result.then(
      close => {
        this.messageService.delete(message.id).subscribe(
          res => {
            this.toastr.success('This message has been correctly deleted ');
            this.populateMessage();
          })
      }, dismiss => {
      }
    )
  }

}
