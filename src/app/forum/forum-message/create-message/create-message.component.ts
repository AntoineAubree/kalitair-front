import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MessagesService } from 'src/app/web-service/messages.service';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {

  constructor (private messageService : MessagesService, protected modale : NgbActiveModal,private toastr : ToastrService ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

  createMessage(form : NgForm) {

    this.messageService.create(form.value).subscribe( res => {
      this.toastr.success ( 'your message has been posted')
      this.modale.close()
    })

  }

}
