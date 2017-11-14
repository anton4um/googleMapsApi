import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import {GOOGLE_MAPS_PROVIDERS} from "angular2-google-map";
//import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-map/core'
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)//,[GOOGLE_MAPS_PROVIDERS]);
