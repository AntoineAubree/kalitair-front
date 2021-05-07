import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat, transform } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon'
import { ActivatedRoute, Router } from '@angular/router';
import { Indicator } from 'src/app/model/indicator';
import { IndicatorService } from 'src/app/web-service/indicateur/indicator.service';
import { DataIndicatorService } from '../data-indicator.service';

@Component({
  selector: 'app-indicator-acceuil',
  templateUrl: './indicator-acceuil.component.html',
  styleUrls: ['./indicator-acceuil.component.scss']
})
export class IndicatorAcceuilComponent implements OnInit {

  map : Map = new Map({});
  markerSource: VectorSource = new VectorSource({});
  indicator = {} as Indicator;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private indicatorService: IndicatorService,
    private dataIndicatorService: DataIndicatorService
  ) {
    
    }

  ngOnInit(): void {
    this.initilizeMap();
    this.map.on('singleclick', (event: any) => {
      let lonlat = transform(event.coordinate, 'EPSG:3857', 'EPSG:4326');
      const lon = lonlat[0];
      const lat = lonlat[1];
      console.log(lonlat)
      this.addMarker(lon, lat);
      this.indicator.coordinate = { longitude: lon, latitude: lat };
      this.getCityIndicator(this.indicator);
    });
  }

  initilizeMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        }),
        new VectorLayer({
          source: this.markerSource,
          style: new Style({
            image: new Icon({
              anchor : [0.5,1],
              src: 'assets/pin24x24.png',
              scale : 1.5,
              imgSize: [24,24],
            })
          })
          })
      ],
      view: new View({
        center: fromLonLat([2.213749,46.227638]),
        zoom: 6
      }),
    });
  }

 /*  getCoord(event: any) {
    const coordinate = this.map.getEventCoordinate(event);
    let lonlat = transform(coordinate, 'EPSG:3857', 'EPSG:4326');
    const lon = lonlat[0];
    const lat = lonlat[1];
    console.log(lonlat)

    this.addMarker(lon, lat);
  } */

  addMarker(lon: number, lat: number) {
    this.markerSource.clear();
    let marker = new Feature({
      geometry: new Point(fromLonLat([lon, lat]))
    });
    this.markerSource.addFeature(marker);
  }

  getCityIndicator(indicator: Indicator) {
    this.indicatorService.getByCoordinate(indicator).subscribe(res => {
      this.dataIndicatorService.sendData(res);
      this.router.navigate(['result/'+ res.townName], { relativeTo: this.route })
    })
  }

  

}



