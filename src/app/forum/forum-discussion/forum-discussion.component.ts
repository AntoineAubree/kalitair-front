import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message';
import { MessagesService } from 'src/app/web-service/messages.service';
import {User} from '../../model/user'

@Component({
  selector: 'app-forum-discussion',
  templateUrl: './forum-discussion.component.html',
  styleUrls: ['./forum-discussion.component.scss']
})
export class ForumDiscussionComponent implements OnInit {

  messages : Message[] = [];

  constructor(private messageService : MessagesService ) { }

  ngOnInit(): void {

  }

  getMessages() {

    this.messageService.getAllMessagesThread(1)
  }


}
