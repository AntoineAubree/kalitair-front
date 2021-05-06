import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from 'src/app/model/message';
import { MessagesService } from 'src/app/web-service/messages.service';
import { CreateMessageComponent } from './create-message/create-message.component';
import { DeleteMessageComponent } from './delete-message/delete-message.component';
import { EditMessageComponent } from './edit-message/edit-message.component';
import * as _ from 'underscore';

@Component({
  selector: 'app-forum-discussion',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messages : Message[] = [];
  pagination : any;
  pages : any;

  constructor(private messageService : MessagesService, private modalService : NgbModal ) { }

  ngOnInit(): void {

    this.pagination = {
      currentPage : 1,
      itemsPerPage : 5,
      totalPages :0,
      totalelement : 0
    };
    this.populateMessage();

  }
  populateMessage (){

    this.messageService.getAllMessages(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((response: any) => {
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


  getMessages() {

    this.messageService.getAllMessagesThread(1)
  }

  deleteMessage(id : number) {

    let modale = this.modalService.open(DeleteMessageComponent);

    modale.componentInstance.messageId = id;
  }

  editMessage( id : number){

    let modale = this.modalService.open(EditMessageComponent)
    modale.componentInstance.messageId = id

  }

  createMessage () {

    let modale = this.modalService.open(CreateMessageComponent)
    modale.result.then(
      create=>{

      }
      ,dismiss=>{

      }
    )

  }
}
