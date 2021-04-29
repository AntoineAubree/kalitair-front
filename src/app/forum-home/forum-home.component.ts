import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteSectionComponent } from '../delete-section/delete-section.component';
import { Section } from '../model/section';
import { SectionService } from '../web-service/section.service';

@Component({
  selector: 'app-forum-home',
  templateUrl: './forum-home.component.html',
  styleUrls: ['./forum-home.component.scss']
})
export class ForumHomeComponent implements OnInit {

  sections : Section[] = [];



  constructor(private sectionService : SectionService, private modalService : NgbModal) { }

  ngOnInit(): void {
  }

  getSectionById(){

    this.sectionService.findById(1)
  }

  deleteSection(id : number) {

    let modale = this.modalService.open(DeleteSectionComponent);

    modale.componentInstance.sectionId = id;
  }

  editSection(){

  }
}
