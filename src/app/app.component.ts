import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeafletVectorMapComponent } from "./component/leaflet-vector-map/leaflet-vector-map.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeafletVectorMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-map';
}
