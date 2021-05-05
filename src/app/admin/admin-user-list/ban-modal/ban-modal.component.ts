import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-ban-modal',
  templateUrl: './ban-modal.component.html',
  styleUrls: ['./ban-modal.component.scss']
})
export class BanModalComponent implements OnInit {

  @Input() user = {} as User;
  @Output() notifyParent = new EventEmitter<boolean>();
  

  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  open(user: User) {
    const modalRef = this.modalService.open(BanModalComponent)
    modalRef.componentInstance.user = user
    console.log(user);
  }

  banUnban() {
    this.user.banned = this.user.banned ? false : true
    console.log(this.user)
  }

}
