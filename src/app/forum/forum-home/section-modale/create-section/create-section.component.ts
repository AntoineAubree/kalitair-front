import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Section } from '../../../../model/section';
import { SectionService } from '../../../../web-service/section.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss']
})
export class CreateSectionComponent implements OnInit {

  constructor(  private sectionService : SectionService,  protected modale : NgbActiveModal) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

createSection(form : NgForm) {
  this.sectionService.create(form.value).subscribe()
  this.modale.close()

}

}
