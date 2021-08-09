import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../shared/interfaces/Car';
import {ReviewService} from '../../_services/review/review.service';
import {Review} from '../../shared/interfaces/Review';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }

  @Input() carId: number | undefined;
  @Input() review: Review | undefined;
  car: Car;
  reviews: Review[];

  ngOnInit(): void {
    this.getReviewsforCar(this.carId);
  }

  getReviewsforCar(carId) {
    this.reviewService.getAllReviewsById(carId).subscribe(
      (response: Review[]) => {
        this.reviews = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

}
