import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Message } from 'src/app/model/message';
import { MessagesService } from 'src/app/web-service/messages.service';

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.scss']
})
export class EditMessageComponent implements OnInit {

  @Input() message = {} as Message;
  createForm: FormGroup = new FormGroup({});
  errorHttpMessage: string = '';
  modalTitle: string = '';

  constructor(
    protected modale: NgbActiveModal,
    private messageService: MessagesService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      id: [this.message.id, [
      ]],
      userId: [this.message.userId, [
        Validators.required,
      ]],
      date: [this.message.date, [
      ]],
      discussionThreadId: [this.message.discussionThreadId, [
        Validators.required,
      ]],
      content: [this.message.content, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(800),
      ]],
    })
    this.message.id ? this.modalTitle = 'Edit Message' : this.modalTitle = 'Create Message';
  }

  get form() {
    return this.createForm.controls;
  }

  dismiss() {
    this.modale.dismiss()
  }

  editMessage() {
    if (this.message.id) {
      this.messageService.update(this.createForm.value).subscribe(
        res => {
          this.modale.close()
        }, error => {
          this.errorHttpMessage = error.error.message;
        }
      )
    } else {
      this.messageService.create(this.createForm.value).subscribe(
        res => {
          this.modale.close()
        }, error => {
          this.errorHttpMessage = error.error.message;
        }
      )
    }
  }


}
