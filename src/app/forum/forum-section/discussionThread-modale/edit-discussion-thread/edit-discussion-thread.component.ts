import { Component, OnInit } from '@angular/core';
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



  discussionThread = {} as DiscussionThread

  constructor( private discussionThreadService : DiscussionThreadService, protected modale : NgbActiveModal,private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

  editDiscussionThread( discussionThread : DiscussionThread){

    this.discussionThreadService.update(this.discussionThread).subscribe( res => {

      this.toastr.success ( ' This discussion Thread has been correctly edited')
    })
    this.modale.close()
  }


}
