import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {LocationService} from '../../_services/location/location.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ILocation} from '../../shared/interfaces/ILocation';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, AfterContentInit, AfterViewInit{
  latitude: number;
  longitude: number;
  selectedValue: number;
  zoom: number;

  markers: ILocation[];
  cities: string[];
  locations: ILocation[];

  updateSelect(e){
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.getLocationsByCity(e.target.value);
  }

  constructor(private locationService: LocationService) {
  }


  ngOnInit() {
    this.getLocations();
    this.getCities();
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
        this.zoom = 7;
      });
    }
  }

   onUpdate($event) {
    console.log($event.coords);
  }

  private getLocations() {
    this.locationService.getAllLocations().subscribe((response: ILocation[]) => {
        this.markers = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  private getCities() {
    this.locationService.getAllCities().subscribe(
      (response: string[]) => {
        this.cities = response;
      }
    );
  }

  private getLocationsByCity(city: string) {
    this.locationService.getLocationsByCity(city).subscribe(
      (response: ILocation[]) => {
        this.markers = response;
        this.locations = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

}
