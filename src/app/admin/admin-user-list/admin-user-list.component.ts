import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/web-service/user/user.service';
import { BannModalComponent } from './bann-modal/bann-modal.component';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService : UserService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this.populate();
  }

  populate() {
    this.userService.getAll(0, 2).subscribe(res => {
      this.users = res.content
      console.log(this.users);
      
    })
  }

  openModal(user : User) {
    const modalRef = this.modalService.open(BannModalComponent)
    modalRef.componentInstance.user = user
  }

}
