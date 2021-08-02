import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../_services/car/car.service";
import {Router} from "@angular/router";
import {Car} from "../shared/interfaces/Car"
import {HttpErrorResponse} from "@angular/common/http";
import {CloudinaryService} from "../_services/shared/cloudinary.service";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  form: FormGroup;
  pictureUrl : string;

  constructor(private carService: CarService, private router: Router,
              private fb: FormBuilder,private cloudinary: CloudinaryService) {
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
      yearOfProduction: ["", Validators.required],
      mainImage: ["",Validators.required]

    })
  }

  ngOnInit(): void {
  }

  async createOnSubmit(formData) {
    this.carService.addNewCar(formData.value).subscribe(
      (response: Car ) => {
        console.log(response.id)
        console.log(response);
        formData.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        formData.reset();
      }
    );
      await this.router.navigateByUrl('/home').finally(() => window.location.reload());
    }

     async uploadPhotoToCloud(fileInput: any) {
       if (fileInput.target.files && fileInput.target.files[0]) {
         this.pictureUrl = await this.cloudinary.uploadImage(fileInput.target.files[0]);
       }
     }
  }

