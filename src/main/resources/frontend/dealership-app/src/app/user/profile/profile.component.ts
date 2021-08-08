import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/user/token-storage.service';
import {Car} from '../../shared/interfaces/Car';
import {HttpErrorResponse} from '@angular/common/http';
import {CarService} from '../../_services/car/car.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser?: any;
  cars?: Car[];
  length: number;

  constructor(private token: TokenStorageService, private carService: CarService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.username);
    this.getCarsByAuthor();
  }

  public getCarsByAuthor(): void {
    this.carService.getAllCarsById(this.currentUser.username).subscribe(
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
