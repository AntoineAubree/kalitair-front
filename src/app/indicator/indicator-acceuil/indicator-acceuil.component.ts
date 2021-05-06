import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat, toLonLat, transform } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon'



@Component({
  selector: 'app-indicator-acceuil',
  templateUrl: './indicator-acceuil.component.html',
  styleUrls: ['./indicator-acceuil.component.scss']
})
export class IndicatorAcceuilComponent implements OnInit {


  map: any;
  markerSource: VectorSource = new VectorSource({});
  
  constructor() { }

  ngOnInit(): void {
    this.initilizeMap();
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

  getCoord(event: any) {
    const coordinate = this.map.getEventCoordinate(event);
    let lonlat = transform(coordinate, 'EPSG:3857', 'EPSG:4326');
    const lon = lonlat[0];
    const lat = lonlat[1];
    console.log(lonlat)

    this.addMarker(lon, lat);
  }

  addMarker(lon: number, lat: number) {
    this.markerSource.clear();
    let marker = new Feature({
      geometry: new Point(fromLonLat([lon,lat])) // dont worry about coordinate type 0,0 will be in west coast of africa
    });
    this.markerSource.addFeature(marker)
    
  }

}

