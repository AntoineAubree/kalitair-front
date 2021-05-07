import { Component, OnInit } from '@angular/core';
import { Indicator } from 'src/app/model/indicator';
import { DataIndicatorService } from '../data-indicator.service';

@Component({
  selector: 'app-indicator-result',
  templateUrl: './indicator-result.component.html',
  styleUrls: ['./indicator-result.component.scss']
})
export class IndicatorResultComponent implements OnInit {

  indicator = {} as Indicator;

  constructor(private dataIndicatorService: DataIndicatorService) {
    this.dataIndicatorService.indicator$.subscribe(x => {
      this.indicator = x;
    })
   }

  ngOnInit(): void {
    
    
  }

}
