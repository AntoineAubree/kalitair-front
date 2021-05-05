import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserListComponent } from './admin-user-list/admin-user-list.component';

const routes: Routes = [
  {
    path: 'admin/users', component : AdminUserListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
