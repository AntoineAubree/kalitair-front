import { NgModule } from '@angular/core';

import { IndicatorRoutingModule } from './indicator-routing.module';
import { IndicatorAcceuilComponent } from './indicator-acceuil/indicator-acceuil.component';
import { CommonModule, DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    IndicatorAcceuilComponent
  ],
  imports: [
    IndicatorRoutingModule,
    CommonModule
  ],
  providers: [DatePipe]
})
export class IndicatorModule { }
