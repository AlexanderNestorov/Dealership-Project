import { Component, OnInit } from '@angular/core';
import {Car} from '../../shared/interfaces/Car';
import {CarService} from '../../_services/car/car.service';
import {TokenStorageService} from '../../_services/user/token-storage.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-listing-home',
  templateUrl: './listing-home.component.html',
  styleUrls: ['./listing-home.component.css']
})
export class ListingHomeComponent implements OnInit {
  cars?: Car[];
  private roles: string[] = [];
  isLoggedIn = false;
  hasAdminRole = false;
  hasUserRole = false;

  constructor(private carService: CarService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.hasAdminRole = this.roles.includes('ROLE_ADMIN');
      this.hasUserRole = this.roles.includes('ROLE_USER');
      this.getCarsByPrice();
    }
  }

    public getCarsByPrice(): void {
      this.carService.getCarsByPrice().subscribe(
        (response: Car[]) => {
          this.cars = response;

        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
}
