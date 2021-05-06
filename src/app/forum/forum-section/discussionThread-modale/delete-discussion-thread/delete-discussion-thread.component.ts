import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DiscussionThreadService } from 'src/app/web-service/discussionThread.service';

@Component({
  selector: 'app-delete-discussion-thread',
  templateUrl: './delete-discussion-thread.component.html',
  styleUrls: ['./delete-discussion-thread.component.scss']
})
export class DeleteDiscussionThreadComponent implements OnInit {

  @Input() title: string = '';

  constructor(
    protected modale: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

  deleteDiscussionThread() {
    this.modale.close()
  }

}
