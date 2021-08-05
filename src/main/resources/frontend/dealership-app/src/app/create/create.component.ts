import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../_services/car/car.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {CloudinaryService} from '../_services/shared/cloudinary.service';
import {PictureService} from '../_services/picture/picture.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CreateComponent implements OnInit {
  form: FormGroup;
  pictureUrl: string;
  secondPicture: string;
  thirdPicture: string;

  constructor(private carService: CarService, private router: Router,
              private fb: FormBuilder, private cloudinary: CloudinaryService, private pictureService: PictureService) {
    this.form = this.fb.group({
      modelName: ['', Validators.required],
      brand: ['', Validators.required],
      type: ['', Validators.required],
      power: ['', Validators.required],
      topSpeed: ['', Validators.required],
      torque: ['', Validators.required],
      fuelCapacity: ['', Validators.required],
      weight: ['', Validators.required],
      fuelType: ['', Validators.required],
      transmission: ['', Validators.required],
      drivetrain: ['', Validators.required],
      price: ['', Validators.required],
      yearOfProduction: ['', Validators.required],
      mainImage: ['', Validators.required],
      secondImage: ['', Validators.required],
      thirdImage: ['', Validators.required]

    });
  }

  ngOnInit(): void {
  }

   async createOnSubmit(formData: any): Promise<any>{
    this.carService.addNewCar(formData.value).subscribe(
      response => {
        this.pictureService.addNewPicture({id: response.id, car_id : response.id, url : this.thirdPicture}).subscribe(
          response2 => {
            console.log(response2);
            formData.reset();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
            formData.reset();
          }
        );
        this.pictureService.addNewPicture({id: response.id + 1, car_id : response.id, url : this.secondPicture }).subscribe(
          response3 => {
            console.log(response3);
            formData.reset();
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
            formData.reset();
          }
        );
        console.log(response);
        formData.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        formData.reset();
      }
    );

    this.router.navigateByUrl('/home').finally(() => window.location.reload());
    }
    async uploadPhotoToCloud(fileInput: any): Promise<any>{
       if (fileInput.target.files && fileInput.target.files[0]) {
         this.pictureUrl = await this.cloudinary.uploadImage(fileInput.target.files[0]);
       }
     }

    async uploadSecondPhotoToCloud(fileInput: any): Promise<any>{
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.secondPicture = await this.cloudinary.uploadImage(fileInput.target.files[0]);
    }
  }

    async uploadThirdPhotoToCloud(fileInput: any): Promise<any>{
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.thirdPicture = await this.cloudinary.uploadImage(fileInput.target.files[0]);
    }
  }
  }

