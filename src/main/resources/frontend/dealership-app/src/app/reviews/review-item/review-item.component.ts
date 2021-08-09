import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../shared/interfaces/Car';
import {ReviewService} from '../../_services/review/review.service';
import {Review} from '../../shared/interfaces/Review';
import {HttpErrorResponse} from '@angular/common/http';
import {TokenStorageService} from '../../_services/user/token-storage.service';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  constructor(private reviewService: ReviewService, private tokenStorage: TokenStorageService) { }

  @Input() carId: number | undefined;
  @Input() review: Review | undefined;
  car: Car;
  reviews: Review[];
  currentUser: string;

  ngOnInit(): void {
    this.getReviewsforCar(this.carId);
    this.currentUser = this.tokenStorage.getUser().username;
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

  onDelete(reviewId) {
    this.reviewService.deleteReview(reviewId).subscribe(
      (response: void) => {
        console.log(response);
        window.location.reload();
      },
      // tslint:disable-next-line:no-shadowed-variable
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
