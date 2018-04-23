import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // google maps zoom level
  zoom = 14;

  // initial center position for the map
  lat = 40.752599;
  lng = -73.815591;


  markers: Marker[] = [
    {
      lat: 40.752599,
      lng: -73.815591,
      label: 'Olga',
      draggable: false
    }
  ];

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  ngOnInit(): void {
  }
}

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
