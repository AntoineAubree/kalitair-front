import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SectionService } from '../../../../web-service/section.service';

@Component({
  selector: 'app-delete-section',
  templateUrl: './delete-section.component.html',
  styleUrls: ['./delete-section.component.scss']
})
export class DeleteSectionComponent implements OnInit {

  @Input() sectionId : number = 0

  constructor( protected modale: NgbActiveModal, private sectionService : SectionService, private toastr : ToastrService) { }

  ngOnInit(): void {
  }


  dismiss() {
    this.modale.dismiss()
  }

  deleteSection(id : number) {
    this.sectionService.delete(id).subscribe( res => {
      this. toastr.success( 'This section has been correctly deleted ')
      this.modale.close()
    })

  }
}
