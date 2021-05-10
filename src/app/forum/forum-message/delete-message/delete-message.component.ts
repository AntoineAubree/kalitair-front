import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.scss']
})
export class DeleteMessageComponent implements OnInit {

  constructor(
    protected modale: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

  deleteMessage() {
    this.modale.close()
  }

}
