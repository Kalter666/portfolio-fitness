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
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYSRY1745e5uyLopLLbxWNga9iKiw4lkw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
