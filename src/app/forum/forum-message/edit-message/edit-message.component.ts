
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from 'src/app/model/message';
import { MessagesService } from 'src/app/web-service/messages.service';

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.scss']
})
export class EditMessageComponent implements OnInit {

  message = {} as Message;

  constructor(protected modale: NgbActiveModal, private messageService : MessagesService) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

  editMessage(message : Message) {

    this.messageService.update(this.message).subscribe()
    this.modale.close()
  }

}
