import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndicatorAcceuilComponent } from './indicator-acceuil/indicator-acceuil.component';

const routes: Routes = [
  { path: "home", component: IndicatorAcceuilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicatorRoutingModule { }
