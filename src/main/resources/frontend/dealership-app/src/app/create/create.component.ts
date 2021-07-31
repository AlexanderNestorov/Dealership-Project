import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../_services/car/car.service";
import {Router} from "@angular/router";
import {Car} from "../shared/interfaces/Car"
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  incorrectCredentials = false;

  constructor(private carService: CarService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      modelName: ["", Validators.required],
      brand: ["", Validators.required],
      type: ["", Validators.required],
      power: ["", Validators.required],
      topSpeed: ["", Validators.required],
      torque: ["", Validators.required],
      fuelCapacity: ["", Validators.required],
      weight: ["", Validators.required],
      fuelType: ["", Validators.required],
      transmission: ["", Validators.required],
      drivetrain: ["", Validators.required],
      price: ["", Validators.required],
      yearOfProduction: ["", Validators.required]

    })
  }

  ngOnInit(): void {
  }

  async loginOnSubmit(formData) {
    this.carService.addNewCar(formData.value).subscribe(
      (response: Car) => {
        console.log(response);
        formData.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        formData.reset();
      }
    );

      await this.router.navigate(["/"]);
    }
}
