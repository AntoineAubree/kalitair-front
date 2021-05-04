import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Section } from '../../../../model/section';
import { SectionService } from '../../../../web-service/section.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {



section = {} as Section

  constructor( private sectionService : SectionService, protected modale : NgbActiveModal) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

  editSection(section : Section){

    this.sectionService.update(this.section).subscribe()
    this.modale.close()
  }

}