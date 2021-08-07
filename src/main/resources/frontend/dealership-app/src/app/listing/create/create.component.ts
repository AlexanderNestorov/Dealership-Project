import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../_services/car/car.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {CloudinaryService} from '../../_services/cloudinary/cloudinary.service';
import {TokenStorageService} from '../../_services/user/token-storage.service';



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
              private tokenStorage: TokenStorageService) {
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
      thirdImage: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    this.author = this.currentUser.username;
    console.log(this.form);
  }

  async createOnSubmit(formData: any): Promise<any> {
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

    this.router.navigateByUrl('/home').finally(() => window.location.reload());
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
}

