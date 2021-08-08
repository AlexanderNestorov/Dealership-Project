import { Component, OnInit } from '@angular/core';
import {Car} from '../shared/interfaces/Car';
import {HttpErrorResponse} from '@angular/common/http';
import {CarService} from '../_services/car/car.service';
import {ReviewService} from '../_services/review/review.service';
import {Review} from '../shared/interfaces/Review';

@Component({
  selector: 'app-review-home',
  templateUrl: './review-home.component.html',
  styleUrls: ['./review-home.component.css']
})
export class ReviewHomeComponent implements OnInit {
  cars?: Car[];
  selectedValue: number;
  revies?: Review[];

  update(e){
    this.selectedValue = e.target.value;
    this.getReview(this.selectedValue);
  }
  constructor(private carService: CarService, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getCarsByPrice();
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

  public getReview(id: number): void {
    this.reviewService.getAllReviewsById(id).subscribe(
      (response: Review[]) => {
        this.revies = response;
      },
      (error: HttpErrorResponse) => {
        alert (error.message);
      }
  );

  }

}
