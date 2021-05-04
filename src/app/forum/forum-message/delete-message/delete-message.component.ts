
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MessagesService } from 'src/app/web-service/messages.service';
import { Message } from 'src/app/model/message'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.scss']
})
export class DeleteMessageComponent implements OnInit {

@Input() messageId : number = 0

  constructor(protected modale: NgbActiveModal, private messageService : MessagesService,private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

  deleteMessage(id : number) {

    this.messageService.delete(id).subscribe( res => {
      this. toastr.success( 'This message has been correctly deleted ')
      this.modale.close()
    this.modale.close()
  })

}
}
