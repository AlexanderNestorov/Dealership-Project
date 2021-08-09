import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, AfterContentInit, AfterViewInit{
  latitude: number;
  longitude: number;
  zoom: number;

  markers;


  ngOnInit() {
  this.markers = [{latitude: 25, longitude: 30},
{latitude: 35, longitude: 40},
{latitude: 45, longitude: 50},
{latitude: 55, longitude: 60},
{latitude: 65, longitude: 70}];
  }

  ngAfterContentInit() {
    this.setCurrentLocation();
  }

  ngAfterViewInit() {
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        console.log(this.latitude);
        this.longitude = position.coords.longitude;
        console.log(this.longitude);
        this.zoom = 15;
      });
    }
  }

   onUpdate($event) {
    console.log($event.coords);
  }

}
