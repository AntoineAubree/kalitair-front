import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DiscussionThreadService } from 'src/app/web-service/discussionThread.service';

@Component({
  selector: 'app-create-discussion-thread',
  templateUrl: './create-discussion-thread.component.html',
  styleUrls: ['./create-discussion-thread.component.scss']
})
export class CreateDiscussionThreadComponent implements OnInit {

  constructor( private discussionThreadService : DiscussionThreadService, protected modale : NgbActiveModal) { }

  ngOnInit(): void {
  }
  dismiss() {
    this.modale.dismiss()
  }
  createDiscussionThread(form : NgForm) {

    this.discussionThreadService.create(form.value).subscribe()
    this.modale.close()

  }


}
