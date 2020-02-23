import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  lat = 52.0789721;
  lng = 5.6879331;
  zoom = 7.5;

  markerClicked() {
    alert(`clicked the marker`)
  }
}
