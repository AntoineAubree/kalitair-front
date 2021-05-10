import { User } from './../../model/user';
import { ForumObject } from './../../model/forumObject';
import { Section } from '../../model/section';
import { SectionService } from '../../web-service/section.service';
import { DeleteSectionComponent } from './delete-section/delete-section.component';
import { EditSectionComponent } from './edit-section/edit-section.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'underscore';

@Component({
  selector: 'app-forum-section',
  templateUrl: './forum-section.component.html',
  styleUrls: ['./forum-section.component.scss']
})
export class ForumSectionComponent implements OnInit {

  forumUrl = 'section';

  constructor(
    private sectionService: SectionService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  populateSection(forumObject: ForumObject<Section>): void {
    this.sectionService.get(forumObject.pagination.currentPage - 1, forumObject.pagination.itemsPerPage).subscribe(
      (response: any) => {
        forumObject.pagination.totalElements = response.totalElements;
        forumObject.pagination.totalPages = response.totalPages;
        forumObject.pages = _.range(1, forumObject.pagination.totalPages + 1);
        forumObject.items = response.content;
      }
    );
  }

  getDiscussionThread(idSection: number): void {
    this.router.navigate(['/forum/section/', idSection]);
  }

  createSection(forumObject: ForumObject<Section>, user: User) {
    let modale = this.modalService.open(EditSectionComponent)
    let section = {} as Section;
    section.userId = user.id;
    modale.componentInstance.section = section;
    modale.result.then(
      close => {
        this.toastr.success('New Section created');
        this.populateSection(forumObject);
      }, dismiss => {
      }
    )
  }

  editSection(forumObject: ForumObject<Section>, section: Section) {
    let modale = this.modalService.open(EditSectionComponent)
    modale.componentInstance.section = section;
    modale.result.then(
      close => {
        this.toastr.success('this section has been correctly editing');
        this.populateSection(forumObject);
      }, dismiss => {
      }
    )
  }

  deleteSection(forumObject: ForumObject<Section>, section: Section) {
    let modale = this.modalService.open(DeleteSectionComponent);
    modale.componentInstance.title = section.title;
    modale.result.then(
      close => {
        this.sectionService.delete(section.id).subscribe(
          res => {
            this.toastr.success('This section has been correctly deleted ');
            this.populateSection(forumObject);
          })
      }, dismiss => {
      }
    )
  }

}