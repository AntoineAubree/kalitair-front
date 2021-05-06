import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicatorRoutingModule } from './indicator-routing.module';
import { IndicatorAcceuilComponent } from './indicator-acceuil/indicator-acceuil.component';


@NgModule({
  declarations: [
    IndicatorAcceuilComponent
  ],
  imports: [
    CommonModule,
    IndicatorRoutingModule
  ]
})
export class IndicatorModule { }
