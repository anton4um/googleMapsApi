import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MapComponent} from './map/map.component';
import {AgmCoreModule} from '@agm/core';
//import {GOOGLE_MAPS_DIRECTIVES, GOOGLE_MAPS_PROVIDERS} from 'angular2-google-map/core'
import {} from 'angular2-google-map'
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyB82_XSZlDEnu5aShviAaEZmvS-s4c_rZ8'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
