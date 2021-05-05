import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-bann-modal',
  templateUrl: './bann-modal.component.html',
  styleUrls: ['./bann-modal.component.sass']
})
export class BannModalComponent implements OnInit {

  @Input() user = {} as User

  constructor() { }

  ngOnInit(): void {
  }

}
