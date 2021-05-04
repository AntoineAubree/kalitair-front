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

  @Input () discussionThreadId : number = 0

  constructor(protected modale: NgbActiveModal, private discussionThreadService : DiscussionThreadService, private toastr : ToastrService) { }

  ngOnInit(): void {


  }

  dismiss() {
    this.modale.dismiss()
  }

  deleteDiscussionThread(id : number) {

    this.discussionThreadService.delete(id).subscribe ( res => {
      this.toastr.success ( 'This discussion thread has been deleted')
      this.modale.close()
    })
  }

}
