import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {LocationService} from '../../_services/location/location.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ILocation} from '../../shared/interfaces/ILocation';
import {TokenStorageService} from '../../_services/user/token-storage.service';
import {Car} from '../../shared/interfaces/Car';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

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
  isAdmin: boolean;
  roles?: string[];
  closeResult = '';

  markers?: ILocation[];
  cities?: string[];
  locations?: ILocation[];

  addLat: number;
  addLong: number;
  addForm: FormGroup;

  updateSelect(e){
    this.selectedValue = e.target.value;
    console.log(this.selectedValue);
    this.getLocationsByCity(e.target.value);
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'add-location-modal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  constructor(private locationService: LocationService, private tokenStorageService: TokenStorageService,
              private modalService: NgbModal, private fb: FormBuilder, private router: Router) {
    this.addForm = this.fb.group({
      city: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      address: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.getLocations();
    this.getCities();
    const user = this.tokenStorageService.getUser();
    this.roles = user.roles;

    this.isAdmin = this.roles?.includes('ROLE_ADMIN');
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
    this.addLat = $event.coords.lat;
    this.addLong = $event.coords.lng;
    console.log($event);
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

  public getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    } else {
      return `with: ${reason}`;
    }
  }

  addOnSubmit(formData: any) {
    console.log(formData.value);
    this.locationService.addNewLocation(formData.value).subscribe(
      response => {
        this.getLocations();
        this.getCities();
        formData.reset();
        // this.router.navigateByUrl('/home').finally(() => window.location.reload());
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        formData.reset();
      }
    );

  }

}
