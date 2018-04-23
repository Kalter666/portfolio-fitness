import { Component, OnInit } from '@angular/core';
import { Photo, photos } from './photos-list';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = photos;

  constructor() { }

  ngOnInit() {
  }

}
