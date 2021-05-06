import { ToastrService } from 'ngx-toastr';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteSectionComponent } from './section-modale/delete-section/delete-section.component';
import { EditSectionComponent } from './section-modale/edit-section/edit-section.component';
import { Section } from '../../model/section';
import { SectionService } from '../../web-service/section.service';
import { CreateSectionComponent } from './section-modale/create-section/create-section.component';
import * as _ from 'underscore';
import { DiscussionThreadService } from 'src/app/web-service/discussionThread.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forum-home',
  templateUrl: './forum-home.component.html',
  styleUrls: ['./forum-home.component.scss']
})
export class ForumHomeComponent implements OnInit {

  sections: Section[] = [];
  pagination: any;
  pages: number[] = [];

  constructor(
    private sectionService: SectionService,
    private discussionThreadService: DiscussionThreadService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 5,
      totalPages: 0,
      totalElements: 0
    };
    this.populateSection();
  }

  getDiscussionThread(idSection: number) {
    this.router.navigate(['/forum/discussionthreads']);
  }

  populateSection() {
    this.sectionService.get(this.pagination.currentPage - 1, this.pagination.itemsPerPage).subscribe(
      (response: any) => {
        this.pagination.totalElements = response.totalElements;
        this.pagination.totalPages = response.totalPages;
        this.pages = _.range(1, this.pagination.totalPages + 1);
        this.sections = response.content;
      }
    );
  }

  paginate(page: number) {
    this.pagination.currentPage = page;
    this.populateSection();
  }

  deleteSection(id: number) {
    let modale = this.modalService.open(DeleteSectionComponent);
    modale.componentInstance.sectionId = id;
    modale.result.then(
      close => {
        this.sectionService.delete(id).subscribe(
          res => {
            this.toastr.success('This section has been correctly deleted ');
            this.populateSection();
          })
      }, dismiss => {
      }
    )
  }

  editSection(section: Section) {
    let modale = this.modalService.open(EditSectionComponent)
    modale.componentInstance.section = section;
    modale.result.then(
      close => {
        this.toastr.success('this section has been correctly editing');
        this.populateSection();
      }, dismiss => {
      }
    )
  }

  createSection() {
    let modale = this.modalService.open(CreateSectionComponent)
    modale.result.then(
      close => {
        this.toastr.success('New Section created');
        this.populateSection();
      }, dismiss => {
      }
    )
  }
}