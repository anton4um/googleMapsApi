import { Component } from '@angular/core';
import {Marker} from './marker-interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  iconUrl:any;
  markers:Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A',
      iconUrl:'',
      draggable: false
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      iconUrl:'',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      iconUrl:'',
      draggable: false
    }
  ]
  images=[
    {src: 'beachflag.png'},
    {src: './icons1.png'},
    {src: './icons2.png'},
    {src: './icons3.png'},
    {src: './icons4.png'}
    ];
mapClicked($event){
  this.markers.push({
    lat:$event.coords.lat,
    lng:$event.coords.lng,
    label: '',
    iconUrl: this.iconUrl,
    draggable: true
  });
}
iconClicked(element){
  this.iconUrl = element.src;
}
reset(){
  this.iconUrl="";
}

}
