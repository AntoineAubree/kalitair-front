import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-section',
  templateUrl: './delete-section.component.html',
  styleUrls: ['./delete-section.component.scss']
})
export class DeleteSectionComponent implements OnInit {

  @Input() title: string = '';

  constructor(
    protected modale: NgbActiveModal,
  ) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.modale.dismiss()
  }

  deleteSection() {
    this.modale.close()
  }
}
