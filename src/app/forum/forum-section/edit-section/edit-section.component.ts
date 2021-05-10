import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Section } from '../../../model/section';
import { SectionService } from '../../../web-service/section.service';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {

  @Input() section = {} as Section;
  createForm: FormGroup = new FormGroup({});
  errorHttpMessage: string = '';
  modalTitle: string = '';

  constructor(
    private sectionService: SectionService,
    protected modale: NgbActiveModal,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      id: [this.section.id, [
      ]],
      userId: [this.section.userId, [
        Validators.required,
      ]],
      title: [this.section.title, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
      ]],
    })
    this.section.id ? this.modalTitle = 'Edit Section' : this.modalTitle = 'Create Section';
  }

  get form() {
    return this.createForm.controls;
  }

  dismiss() {
    this.modale.dismiss()
  }

  editSection() {
    if (this.section.id) {
      this.sectionService.update(this.createForm.value).subscribe(
        res => {
          this.modale.close()
        }, error => {
          this.errorHttpMessage = error.error.message;
        }
      )
    } else {
      this.sectionService.create(this.createForm.value).subscribe(
        res => {
          this.modale.close()
        }, error => {
          this.errorHttpMessage = error.error.message;
        }
      )
    }
  }

}
