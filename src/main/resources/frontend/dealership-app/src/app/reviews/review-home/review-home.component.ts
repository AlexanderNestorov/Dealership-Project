import { Component, OnInit } from '@angular/core';
import {Car} from '../../shared/interfaces/Car';
import {HttpErrorResponse} from '@angular/common/http';
import {CarService} from '../../_services/car/car.service';
import {ReviewService} from '../../_services/review/review.service';
import {Review} from '../../shared/interfaces/Review';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../_services/user/token-storage.service';
import * as moment from 'moment';

@Component({
  selector: 'app-review-home',
  templateUrl: './review-home.component.html',
  styleUrls: ['./review-home.component.css']
})
export class ReviewHomeComponent implements OnInit {
  cars?: Car[];
  selectedValue: number;
  reviews?: Review[];
  add: boolean;
  updateForm: FormGroup;
  carId: number;
  author: any;
  timeOfCreation: string;

  updateSelect(e){
    this.selectedValue = e.target.value;
    this.getReview(this.selectedValue);
  }

  updateAdd(e) {
    this.add = true;
    this.carId = e.target.value;
    const date = new Date();
    this.timeOfCreation = moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }

  onAddReview(formData: any) {
    console.log(formData.value);
    // const {text, car_id, author, timeOfCreation} = formData.value;
    this.reviewService.addNewReview(formData.value).subscribe(
      response => {
        console.log(response);
        this.add = false;
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  updateAddForm() {
    this.add = false;
  }
  constructor(private carService: CarService, private reviewService: ReviewService,
              private fb: FormBuilder, private tokenStorage: TokenStorageService) {
    this.updateForm = this.fb.group({
      text: ['', Validators.required],
      car_id: ['', Validators.required],
      author: ['', Validators.required],
      timeOfCreation: ['', Validators.required]

    });
  }

  ngOnInit(): void {
    console.log(this.timeOfCreation);
    this.getCarsByPrice();
    this.author = this.tokenStorage.getUser();
    console.log(this.author.username);
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
        this.reviews = response;
      },
      (error: HttpErrorResponse) => {
        alert (error.message);
      }
  );

  }

  public getAuthor(): void {
    this.author = this.tokenStorage.getUser().username;
    console.log(this.author.username);
  }

}
