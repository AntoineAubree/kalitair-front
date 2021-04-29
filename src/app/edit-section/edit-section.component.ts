import { Component, OnInit } from '@angular/core';
import { Section } from '../model/section';
import { SectionService } from '../web-service/section.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {

  constructor( private sectionService : SectionService) { }

  ngOnInit(): void {
  }


  editSection( section : Section) {

    this.sectionService.put(section)
  }

}
