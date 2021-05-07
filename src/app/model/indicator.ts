import { Coordinate } from "./coordinate";
import { DailyQualityIndicator } from "./dailyQualityIndicator";
import { DailyWeatherIndicator } from "./dailyWeatherIndcator";

export interface Indicator{
    coordinate: Coordinate;
    townName: string;
    population: number;
    dailyQualityIndicator: Array<DailyQualityIndicator>;
    dailyWeatherIndicators: Array<DailyWeatherIndicator>;
    date: string | null
}