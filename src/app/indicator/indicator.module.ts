import { NgModule } from '@angular/core';

import { IndicatorRoutingModule } from './indicator-routing.module';
import { IndicatorAcceuilComponent } from './indicator-acceuil/indicator-acceuil.component';
import { CommonModule, DatePipe } from '@angular/common';
import { IndicatorResultComponent } from './indicator-result/indicator-result.component';


@NgModule({
  declarations: [
    IndicatorAcceuilComponent,
    IndicatorResultComponent
  ],
  imports: [
    IndicatorRoutingModule,
    CommonModule
  ],
  providers: [DatePipe]
})
export class IndicatorModule { }
