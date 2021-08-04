import {AfterContentInit, Component, Input, OnInit} from '@angular/core';

import {Car} from '../../shared/interfaces/Car';
import {HttpErrorResponse} from '@angular/common/http';
import {TokenStorageService} from '../../_services/user/token-storage.service';
import {CarService} from '../../_services/car/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterContentInit{
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
      this.getCars();

    } else {
      this.getRecentCars();
    }

  }

  ngAfterContentInit(): void {
   }


  public getRecentCars(): void {
    this.carService.getRecentCars().subscribe(
      (response: Car[]) => {
        this.cars = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCars(): void {
    this.carService.getAllCars().subscribe(
      (response: Car[]) => {
        this.cars = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
