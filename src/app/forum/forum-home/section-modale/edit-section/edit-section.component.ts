import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Section } from '../../../../model/section';
import { SectionService } from '../../../../web-service/section.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {

  @Input() section = {} as Section

  constructor( private sectionService : SectionService, protected modale : NgbActiveModal,private toastr : ToastrService) { }

  ngOnInit(): void {

  }

  dismiss() {
    this.modale.dismiss()
  }

  editSection( section : Section){

    this.sectionService.update(this.section).subscribe( res => {
     this.toastr.success( 'this section has been correctly editing')
     this.modale.close()
    })

  }

}
