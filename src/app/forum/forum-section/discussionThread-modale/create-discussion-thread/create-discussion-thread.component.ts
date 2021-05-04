import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DiscussionThreadService } from 'src/app/web-service/discussionThread.service';

@Component({
  selector: 'app-create-discussion-thread',
  templateUrl: './create-discussion-thread.component.html',
  styleUrls: ['./create-discussion-thread.component.scss']
})
export class CreateDiscussionThreadComponent implements OnInit {

  constructor( private discussionThreadService : DiscussionThreadService, protected modale : NgbActiveModal,private toastr : ToastrService) { }

  ngOnInit(): void {
  }
  dismiss() {
    this.modale.dismiss()
  }
  createDiscussionThread(form : NgForm) {

    this.discussionThreadService.create(form.value).subscribe( res => {
      this.toastr.success( ' this Discussion Thread has been correctly created')
      this.modale.close()
    })

  }


}
