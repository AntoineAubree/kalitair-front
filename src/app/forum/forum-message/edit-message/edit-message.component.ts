
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Message } from 'src/app/model/message';
import { MessagesService } from 'src/app/web-service/messages.service';

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.scss']
})
export class EditMessageComponent implements OnInit {

  message = {} as Message;

  constructor(protected modale: NgbActiveModal, private messageService : MessagesService,private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

  editMessage(message : Message) {

    this.messageService.update(this.message).subscribe( res => {
      this.toastr.success( ' this message has been correctly editing')
      this.modale.close()
    })

  }

}
