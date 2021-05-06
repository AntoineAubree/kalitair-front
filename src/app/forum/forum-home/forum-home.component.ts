import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteSectionComponent } from './section-modale/delete-section/delete-section.component';
import { EditSectionComponent } from './section-modale/edit-section/edit-section.component';
import { Section } from '../../model/section';
import { SectionService } from '../../web-service/section.service';
import { CreateSectionComponent } from './section-modale/create-section/create-section.component';
import * as _ from 'underscore';


@Component({
  selector: 'app-forum-home',
  templateUrl: './forum-home.component.html',
  styleUrls: ['./forum-home.component.scss']
})
export class ForumHomeComponent implements OnInit {

  sections : Section[] = [];
  pagination : any;
  pages : number [] = [];


  constructor(private sectionService : SectionService, private modalService : NgbModal) { }


  ngOnInit(): void {

    this.pagination = {
      currentPage : 0,
      itemsPerPage : 5,
      totalPages :0,
      totalElements : 0
    };
    this.populateSection();
  }

  getSectionById(){
    this.sectionService.findById(1)
  }

  populateSection (){

    this.sectionService.get(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe((response: any) => {
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


  deleteSection(id : number) {

    let modale = this.modalService.open(DeleteSectionComponent);

    modale.componentInstance.sectionId = id;
  }

  editSection( id : number){

    let modale = this.modalService.open(EditSectionComponent)
    modale.componentInstance.sectionId = id

  }

  createSection () {
    let modale = this.modalService.open(CreateSectionComponent)
    modale.result.then(
      create=>{

      }
      ,dismiss=>{

      }
    )
  }
}
