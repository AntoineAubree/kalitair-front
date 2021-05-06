import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserObservableService } from 'src/app/observable/userObservable';
import { SectionService } from '../../../../web-service/section.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss']
})
export class CreateSectionComponent implements OnInit {

  userId = 0;

  constructor(
    private sectionService: SectionService,
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

  createSection(form: NgForm) {
    this.sectionService.create(form.value).subscribe(res => {
      this.modale.close()
    })
  }


}
