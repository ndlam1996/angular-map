import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import '@maplibre/maplibre-gl-leaflet';

@Component({
  selector: 'app-leaflet-vector-map',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-vector-map.component.html',
  styleUrl: './leaflet-vector-map.component.scss'
})
export class LeafletVectorMapComponent implements AfterViewInit {
  private map: L.Map | undefined;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('map').setView([51.505, -0.09], 13);
    (L as any).maplibreGL({
      style: 'https://demotiles.maplibre.org/style.json'
    }).addTo(map);
  }
}