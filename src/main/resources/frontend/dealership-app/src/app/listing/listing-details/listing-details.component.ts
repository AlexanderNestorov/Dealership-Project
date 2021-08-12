import { Component, OnInit } from '@angular/core';
import {CarService} from '../../_services/car/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../shared/interfaces/Car';
import {HttpErrorResponse} from '@angular/common/http';
import {TokenStorageService} from '../../_services/user/token-storage.service';
import {Location} from '@angular/common';
import {Review} from '../../shared/interfaces/Review';
import {ReviewService} from '../../_services/review/review.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {

  car: Car | undefined;
  currentUser: string;
  isAuthor: boolean;
  reviews?: Review[];

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute,
              private tokenStorage: TokenStorageService, private router: Router, private location: Location,
              private reviewService: ReviewService) {

  }

  ngOnInit(): void {
    this.getCarById();
    this.getReviewsForCar();
  }

  getCarById(): void {
    this.car = undefined;
    const id = this.activatedRoute.snapshot.params.carId;
    this.carService.findCarById(id).subscribe(
      (response: Car) => {
      this.car = response;
      this.currentUser = this.tokenStorage.getUser().username;
      this.isAuthor = this.currentUser === this.car.author;
      console.log(this.isAuthor);
      },
    // tslint:disable-next-line:no-shadowed-variable
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );

  }

  onDelete(carId: number) {
    this.carService.deleteCar(carId).subscribe(
      (response: void) => {
        console.log(response);
        this.router.navigate(['/all']).then(() => window.location.reload());
      },
      // tslint:disable-next-line:no-shadowed-variable
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  back() {
    this.location.back();
  }

  getReviewsForCar() {
    const id = this.activatedRoute.snapshot.params.carId;
    this.reviewService.getAllReviewsById(id).subscribe(
      (response: Review[]) => {
        this.reviews = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
