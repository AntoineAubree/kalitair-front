import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { BannModalComponent } from './admin-user-list/bann-modal/bann-modal.component';


@NgModule({
  declarations: [
    AdminUserListComponent,
    BannModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
