import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Car} from "../shared/interfaces/Car";
import {HttpErrorResponse} from "@angular/common/http";
import {TokenStorageService} from "../_services/token-storage.service";
import {CarService} from "../_services/car.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars?: Car[];
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;

  constructor(private carService: CarService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.getCars()

    } else {
      this.getRecentCars()
    }

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
      (response:Car[]) => {
        this.cars = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
