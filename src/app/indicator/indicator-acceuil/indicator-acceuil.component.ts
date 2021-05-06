import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Feature } from 'ol';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon'
import RegularShape from 'ol/style/RegularShape'
import { size } from 'underscore';



@Component({
  selector: 'app-indicator-acceuil',
  templateUrl: './indicator-acceuil.component.html',
  styleUrls: ['./indicator-acceuil.component.scss']
})
export class IndicatorAcceuilComponent implements OnInit {


  map: any;
  markerSource: VectorSource = new VectorSource({});
  marker: Feature = new Feature({
    geometry: new Point(fromLonLat([2.213749,46.227638])) // dont worry about coordinate type 0,0 will be in west coast of africa
  }); 
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
              src: 'assets/pin24x24.png',
              scale : 1,
              imgSize: [24,24],
            })
          })
          })
      ],
      view: new View({
        center: fromLonLat([2.213749,46.227638]),
        zoom: 5
      }),
    });

    this.markerSource.addFeature(this.marker)
    
  
  }

}

