import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from 'src/app/model/message';
import { MessagesService } from 'src/app/web-service/messages.service';
import {User} from '../../model/user'
import { CreateMessageComponent } from './create-message/create-message.component';
import { DeleteMessageComponent } from './delete-message/delete-message.component';
import { EditMessageComponent } from './edit-message/edit-message.component';

@Component({
  selector: 'app-forum-discussion',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messages : Message[] = [];

  constructor(private messageService : MessagesService, private modalService : NgbModal ) { }

  ngOnInit(): void {

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

  }
}
