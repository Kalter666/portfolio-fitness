import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../photos-list';
import { MatDialog } from '@angular/material';
import { BigImageComponent } from './big-image/big-image.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(BigImageComponent, {
      data: this.photo
    });
  }

  ngOnInit() {
  }

}
