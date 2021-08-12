import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../_services/user/token-storage.service';
import {Car} from '../../shared/interfaces/Car';
import {HttpErrorResponse} from '@angular/common/http';
import {CarService} from '../../_services/car/car.service';
import {ReviewService} from '../../_services/review/review.service';
import {Review} from '../../shared/interfaces/Review';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser?: any;
  cars?: Car[];
  reviews?: Review[];
  carLength: number;
  reviewLength: number;

  constructor(private token: TokenStorageService, private carService: CarService,
              private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    console.log(this.currentUser.username);
    this.getCarsByAuthor();
    this.getReviewsByAuthor();
  }

  public getCarsByAuthor(): void {
    this.carService.getAllCarsById(this.currentUser.username).subscribe(
      (response: Car[]) => {
        this.cars = response;
        this.carLength = this.cars.length;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getReviewsByAuthor(): void {
    this.reviewService.getAllReviewsByAuthor(this.currentUser.username).subscribe(
      (response: Review[]) => {
        this.reviews = response;
        this.reviewLength = this.reviews.length;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
