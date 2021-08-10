import { Component, OnInit } from '@angular/core';
import {CarService} from '../../_services/car/car.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Car} from '../../shared/interfaces/Car';
import {HttpErrorResponse} from '@angular/common/http';
import {TokenStorageService} from '../../_services/user/token-storage.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {

  car: Car | undefined;
  currentUser: string;
  isAuthor: boolean;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute,
              private tokenStorage: TokenStorageService, private router: Router) {
    this.getCarById();
  }

  ngOnInit(): void {
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

}
