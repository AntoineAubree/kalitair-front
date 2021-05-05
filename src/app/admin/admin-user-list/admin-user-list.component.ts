import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/web-service/user/user.service';
import { BanModalComponent } from './ban-modal/ban-modal.component';
import * as _ from 'underscore';


@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {

  users: User[] = [];
  pagination: any ;
  pages: any;
  query: string = '';

  constructor(private userService : UserService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this.pagination = {
      currentPage: 0,
      itemsPerPage: 1,
      totalPages: 0,
      totalElement:0
    }
    this.populate();
  }

  populate() {
      this.userService.findByPseudo(this.query,this.pagination.currentPage, this.pagination.itemsPerPage).subscribe(res => {
        this.pagination.totalPages = res.totalPages;
        this.pagination.totalElement = res.totalElements
        this.pages = _.range(this.pagination.totalPages)
        this.users = res.content
      })  
  }

  paginate(page: number) {
    this.pagination.currentPage = page;
    this.populate();
  }

  filter(event: Event) {
    this.query = (event.target as HTMLInputElement).value
    this.pagination.currentPage = 0;
    this.populate();
  }

  openModal(user: User) {
    const modalRef = this.modalService.open(BanModalComponent);
    modalRef.componentInstance.user = user;
  }

}
