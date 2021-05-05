import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';
import { BanModalComponent } from './admin-user-list/ban-modal/ban-modal.component';



@NgModule({
  declarations: [
    AdminUserListComponent,
    BanModalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
