import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/web-service/user/user.service';

@Component({
  selector: 'app-ban-modal',
  templateUrl: './ban-modal.component.html',
  styleUrls: ['./ban-modal.component.scss']
})
export class BanModalComponent implements OnInit {

  @Input() user = {} as User;
  @Output() notifyParent = new EventEmitter<boolean>();
  

  constructor(private userService : UserService, public activeModal : NgbActiveModal, private toastr : ToastrService) { }

  ngOnInit(): void {
  }


  banUnban() {
    this.user.banned = this.user.banned ? false : true;
    this.userService.put(this.user).subscribe(res => {
      this.activeModal.dismiss();
      this.user.banned ? this.toastr.success(`The user ${this.user.pseudo} has been ban successfuly`) : this.toastr.success(`The user ${this.user.pseudo} has been unban successfuly`)
    }, error => {
      alert ('Something went wrong')
    })

  }

}
