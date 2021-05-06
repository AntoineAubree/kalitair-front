import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DiscussionThread } from 'src/app/model/discussionThread';
import { DiscussionThreadService } from 'src/app/web-service/discussionThread.service';

@Component({
  selector: 'app-edit-discussion-thread',
  templateUrl: './edit-discussion-thread.component.html',
  styleUrls: ['./edit-discussion-thread.component.scss']
})
export class EditDiscussionThreadComponent implements OnInit {

  @Input() discussionThread = {} as DiscussionThread;

  constructor(
    private discussionThreadService: DiscussionThreadService,
    protected modale: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

  editDiscussionThread(discussionThread: DiscussionThread) {
    this.discussionThreadService.update(discussionThread).subscribe(
      res => {
        this.modale.close()
      }
    )
  }
}
