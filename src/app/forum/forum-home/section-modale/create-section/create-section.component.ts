import { Component, OnInit } from '@angular/core';
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
    private toastr: ToastrService,
    private userObservable: UserObservableService
  ) { }

  ngOnInit(): void {
    this.userObservable.getUserConnectSubject().subscribe(
      (user) => {
        this.userId = user.id;
        console.log(this.userId);
      }
    )
  }

  dismiss() {
    this.modale.dismiss()
  }

  createSection(form: NgForm) {
    console.log(form.value);
    this.sectionService.create(form.value).subscribe(res => {
      
      this.toastr.success('New Section)') // ici pour test
      this.modale.close()

    })

    //remettre ici la ligne 25
  }


}
