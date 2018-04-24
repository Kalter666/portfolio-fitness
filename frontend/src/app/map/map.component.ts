import { Component, OnInit } from '@angular/core';

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
      label: '',
      draggable: false,
    }
  ];

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
