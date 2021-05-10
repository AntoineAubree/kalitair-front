import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DailyWeatherIndicator } from 'src/app/model/dailyWeatherIndcator';
import { Indicator } from 'src/app/model/indicator';
import { DataIndicatorService } from '../data-indicator.service';


@Component({
  selector: 'app-indicator-result',
  templateUrl: './indicator-result.component.html',
  styleUrls: ['./indicator-result.component.scss']
})
export class IndicatorResultComponent implements OnInit {

  indicator = {} as Indicator;
  dailyWeather: DailyWeatherIndicator[] = [];
  date: Date[] = [];
  dateJour: Date[] = [];
  dateDisplayed: Date = new Date();

  constructor(private dataIndicatorService: DataIndicatorService) {
    this.dataIndicatorService.indicator$.subscribe(x => {
      this.indicator = x;
      this.indicator.dailyWeatherIndicators.forEach(dateX => dateX.date = new Date(dateX.date));
      //this.date.forEach(x => console.log(typeof x));
      this.indicator.date = new Date(this.indicator.date);
      this.sortWeatherIndicator(0);
    })
   }

  ngOnInit(): void {
  }

  sortWeatherIndicator(day: number) {
    this.dailyWeather = [];
    this.indicator.dailyWeatherIndicators.forEach(daily => {
      if (daily.date.getDate() === this.indicator.date.getDate() + day) {
        this.dailyWeather.push(daily);
        this.dateDisplayed.setDate(this.indicator.date.getDate() + day)
    }
  })
  }

}
