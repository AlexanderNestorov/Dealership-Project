import { Component, OnInit } from '@angular/core';
import {Car} from '../../shared/interfaces/Car';
import {CarService} from '../../_services/car/car.service';
import {TokenStorageService} from '../../_services/user/token-storage.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-listing-all',
  templateUrl: './listing-all.component.html',
  styleUrls: ['./listing-all.component.css']
})
export class ListingAllComponent implements OnInit {
  cars?: Car[];
  private roles: string[] = [];
  isLoggedIn = false;
  hasAdminRole = false;
  hasUserRole = false;
  length: number;

  constructor(private carService: CarService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.hasAdminRole = this.roles.includes('ROLE_ADMIN');
      this.hasUserRole = this.roles.includes('ROLE_USER');
      this.getCars();
    }
  }

  public getCars(): void {
    this.carService.getAllCars().subscribe(
      (response: Car[]) => {
        this.cars = response;
        this.length = this.cars.length;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
