import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../_services/car/car.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {CloudinaryService} from '../../_services/cloudinary/cloudinary.service';
import {TokenStorageService} from '../../_services/user/token-storage.service';
import {
  carTypeValidator,
  drivetrainValidator, fileExtensionValidator,
  fuelTypeValidator,
  transmissionValidator
} from '../../shared/validators.js';
import {Location} from '@angular/common';
import {RxwebValidators} from '@rxweb/reactive-form-validators';



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
  currentUser: any;
  author: string;

  constructor(private carService: CarService, private router: Router,
              private fb: FormBuilder, private cloudinary: CloudinaryService,
              private tokenStorage: TokenStorageService, private location: Location) {
    this.form = this.fb.group({
      modelName: ['', Validators.required],
      brand: ['', Validators.required],
      type: ['', [Validators.required, carTypeValidator]],
      power: ['', [Validators.required, Validators.min(50)]],
      topSpeed: ['', [Validators.required, Validators.min(60)]],
      torque: ['', [Validators.required, Validators.min(100)]],
      fuelCapacity: ['', [Validators.required, Validators.min(20)]],
      weight: ['', [Validators.required, Validators.min(1000)]],
      fuelType: ['', [Validators.required, fuelTypeValidator]],
      transmission: ['', [Validators.required, transmissionValidator]],
      drivetrain: ['', [Validators.required, drivetrainValidator]],
      price: ['', [Validators.required, Validators.min(500)]],
      yearOfProduction: ['', [Validators.required, Validators.min(1990)]],
      mainImage: ['', [Validators.required]],
      mainImageFile: ['', [Validators.required, fileExtensionValidator('jpg, png, jpeg'),
        RxwebValidators.image({maxHeight: 2000, maxWidth: 2000})]],
      secondImage: ['', Validators.required],
      secondImageFile: ['', [Validators.required, fileExtensionValidator('jpg, png, jpeg'),
        RxwebValidators.image({maxHeight: 2000, maxWidth: 2000})]],
      thirdImage: ['', Validators.required],
      thirdImageFile: ['', [Validators.required, fileExtensionValidator('jpg, png, jpeg'),
        RxwebValidators.image({maxHeight: 2000, maxWidth: 2000})]],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    this.author = this.currentUser.username;
    console.log(this.form);
  }

  async createOnSubmit(formData: any): Promise<any> {
    console.log(formData.value);
    this.carService.addNewCar(formData.value).subscribe(
      response => {
        console.log(response);
        formData.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        formData.reset();
      }
    );

    this.router.navigateByUrl('/all').finally(() => window.location.reload());
  }

  async uploadMainPhotoToCloud(fileInput: any): Promise<any> {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.pictureUrl = await this.cloudinary.uploadImage(fileInput.target.files[0]);
    }
  }

  async uploadSecondPhotoToCloud(fileInput: any): Promise<any> {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.secondPicture = await this.cloudinary.uploadImage(fileInput.target.files[0]);
    }
  }

  async uploadThirdPhotoToCloud(fileInput: any): Promise<any> {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.thirdPicture = await this.cloudinary.uploadImage(fileInput.target.files[0]);
    }
  }

  back() {
    this.location.back();
  }
}

