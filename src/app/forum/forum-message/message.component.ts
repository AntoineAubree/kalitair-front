import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message';
import { MessagesService } from 'src/app/web-service/messages.service';
import {User} from '../../model/user'

@Component({
  selector: 'app-forum-discussion',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messages : Message[] = [];

  constructor(private messageService : MessagesService ) { }

  ngOnInit(): void {

  }

  getMessages() {

    this.messageService.getAllMessagesThread(1)
  }


}
