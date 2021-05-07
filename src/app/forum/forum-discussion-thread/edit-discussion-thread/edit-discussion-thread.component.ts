import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionThread } from 'src/app/model/discussionThread';
import { DiscussionThreadService } from 'src/app/web-service/discussionThread.service';

@Component({
  selector: 'app-edit-discussion-thread',
  templateUrl: './edit-discussion-thread.component.html',
  styleUrls: ['./edit-discussion-thread.component.scss']
})
export class EditDiscussionThreadComponent implements OnInit {

  @Input() discussionThread = {} as DiscussionThread;
  createForm: FormGroup = new FormGroup({});
  errorHttpMessage: string = '';
  modalTitle: string = '';

  constructor(
    private discussionThreadService: DiscussionThreadService,
    protected modale: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      id: [this.discussionThread.id, [
      ]],
      userId: [this.discussionThread.userId, [
        Validators.required,
      ]],
      sectionId: [this.discussionThread.sectionId, [
        Validators.required,
      ]],
      title: [this.discussionThread.title, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
      ]],
    })
    this.discussionThread.id ? this.modalTitle = 'Edit Discussion thread' : this.modalTitle = 'Create Discussion thread';
  }

  get form() {
    return this.createForm.controls;
  }

  dismiss() {
    this.modale.dismiss()
  }

  editDiscussionThread() {
    if (this.discussionThread.id) {
      this.discussionThreadService.update(this.createForm.value).subscribe(
        res => {
          this.modale.close()
        }, error => {
          this.errorHttpMessage = error.error.message;
        }
      )
    } else {
      this.discussionThreadService.create(this.createForm.value).subscribe(
        res => {
          this.modale.close()
        }, error => {
          this.errorHttpMessage = error.error.message;
        }
      )
    }
  }
}
