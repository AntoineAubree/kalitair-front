import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SectionService } from '../../../../web-service/section.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss']
})
export class CreateSectionComponent implements OnInit {

  constructor(  private sectionService : SectionService,  protected modale : NgbActiveModal, private toastr : ToastrService) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

createSection(form : NgForm) {
  this.toastr.success ('New Section)') // ici pour test
  this.sectionService.create(form.value).subscribe( res=> {
    this.modale.close()

  })

//remettre ici la ligne 25
}


}
