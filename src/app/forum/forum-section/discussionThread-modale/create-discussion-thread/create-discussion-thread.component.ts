import { UserObservableService } from './../../../../observable/userObservable';
import { Component, Input, OnInit } from '@angular/core';
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

  userId = 0;
  @Input() sectionId: number = 0;

  constructor(
    private discussionThreadService: DiscussionThreadService,
    protected modale: NgbActiveModal,
    private userObservable: UserObservableService
  ) { }

  ngOnInit(): void {
    this.userObservable.getUserConnectSubject().subscribe(
      (user) => {
        this.userId = user.id;
      }
    )
  }

  dismiss() {
    this.modale.dismiss()
  }

  createDiscussionThread(form: NgForm) {
    this.discussionThreadService.create(form.value).subscribe(
      res => {
        this.modale.close()
      }
    )

  }


}
