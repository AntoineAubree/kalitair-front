import { User } from './../../model/user';
import { UserObservableService } from './../../observable/userObservable';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteSectionComponent } from './section-modale/delete-section/delete-section.component';
import { EditSectionComponent } from './section-modale/edit-section/edit-section.component';
import { Section } from '../../model/section';
import { SectionService } from '../../web-service/section.service';
import * as _ from 'underscore';
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
  user = {} as User;

  constructor(
    private sectionService: SectionService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router,
    private userObservable: UserObservableService
  ) { }

  ngOnInit(): void {
    this.userObservable.getUserConnectSubject().subscribe(
      (user) => {
        this.user = user;
      }
    )
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 5,
      totalPages: 0,
      totalElements: 0
    };
    this.populateSection();
  }

  getDiscussionThread(idSection: number) {
    this.router.navigate(['/forum/section/', idSection]);
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

  createSection() {
    let modale = this.modalService.open(EditSectionComponent)
    let section = {} as Section;
    section.userId = this.user.id;
    modale.componentInstance.section = section;
    modale.result.then(
      close => {
        this.toastr.success('New Section created');
        this.populateSection();
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

  deleteSection(section: Section) {
    let modale = this.modalService.open(DeleteSectionComponent);
    modale.componentInstance.title = section.title;
    modale.result.then(
      close => {
        this.sectionService.delete(section.id).subscribe(
          res => {
            this.toastr.success('This section has been correctly deleted ');
            this.populateSection();
          })
      }, dismiss => {
      }
    )
  }

}