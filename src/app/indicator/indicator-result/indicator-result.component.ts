import { DatePipe } from '@angular/common';
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
  date: Number[] = [];

  constructor(private dataIndicatorService: DataIndicatorService, private datePipe : DatePipe) {
    this.dataIndicatorService.indicator$.subscribe(x => {
      console.log(x);
      this.indicator = x;
      this.indicator.dailyWeatherIndicators.forEach(dateX => this.date.push(Date.parse(dateX.date)));
      console.log(this.date)
      //this.date.forEach(x => console.log(typeof x));
    })
   }

  ngOnInit(): void {
    this.indicator.date = this.datePipe.transform(this.indicator.date, 'dd-MM-yyyy');
    console.log(typeof this.indicator.date)
  }

  findDate() {
    
  }

}
