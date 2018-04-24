import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { DirectionsComponent } from './directions/directions.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BigImageComponent } from './photos/photo/big-image/big-image.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    AboutComponent,
    DirectionsComponent,
    PhotosComponent,
    ContactsComponent,
    FooterComponent,
    PhotoComponent,
    MapComponent,
    BigImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LazyLoadImageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYSRY1745e5uyLopLLbxWNga9iKiw4lkw'
    })
  ],
  providers: [],
  entryComponents: [
    BigImageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
