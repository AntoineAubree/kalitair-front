import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
  

  constructor(private userService : UserService, public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }


  banUnban() {
    this.user.banned = this.user.banned ? false : true;
    this.userService.put(this.user).subscribe(res => {
      
    })

  }

}
