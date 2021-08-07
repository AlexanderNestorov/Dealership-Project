import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../shared/interfaces/Car';
import {Picture} from '../../shared/interfaces/Picture';
import {HttpErrorResponse} from '@angular/common/http';
import {TokenStorageService} from '../../_services/user/token-storage.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../../_services/car/car.service';
import {Router} from '@angular/router';
import {CloudinaryService} from '../../_services/cloudinary/cloudinary.service';


@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.css']
})
export class ListingItemComponent implements OnInit {

  @Input() car: Car | undefined;
  pictures?: Picture[];
  currentUser: string;
  isAuthor: boolean;
  closeResult = '';
  updateForm: FormGroup;
  modelName: string;
  brand: string;
  type: string;
  power: number;
  topSpeed: number;
  torque: number;
  fuelCapacity: number;
  weight: number;
  fuelType: string;
  transmission: string;
  drivetrain: string;
  price: number;
  yearOfProduction: number;
  author: string;
  mainImage: string;
  secondImage: string;
  thirdImage: string;

  public editCar: Car;

  constructor(private tokenStorage: TokenStorageService, private modalService: NgbModal,
              private carService: CarService, private router: Router, private cloudinary: CloudinaryService,
              private formBuilder: FormBuilder) {
    this.updateForm = this.formBuilder.group({
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
    this.currentUser = this.tokenStorage.getUser().username;
    this.isAuthor = this.currentUser === this.car.author;

    this.author = this.currentUser;
    this.mainImage = this.car.mainImage;
    this.yearOfProduction = this.car.yearOfProduction;
    this.modelName = this.car.modelName;
    this.brand = this.car.brand;
    this.type = this.car.type;
    this.power = this.car.power;
    this.topSpeed = this.car.topSpeed;
    this.torque = this.car.torque;
    this.fuelCapacity = this.car.fuelCapacity;
    this.weight = this.car.weight;
    this.fuelType = this.car.fuelType;
    this.transmission = this.car.transmission;
    this.drivetrain = this.car.drivetrain;
    this.price = this.car.price;
    this.secondImage = this.car.secondImage;
    this.thirdImage = this.car.thirdImage;
  }


   async onDelete(carId: number) {
    this.carService.deleteCar(carId).subscribe(
      (response: void) => {
        console.log(response);
      },
      // tslint:disable-next-line:no-shadowed-variable
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    window.location.reload();
  }

  public onUpdateCar(car: Car): void {
    console.log(car);
    this.carService.updateCar(car).subscribe(
      (response: Car) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    window.location.reload();
  }

  async uploadMainPhotoToCloud(fileInput: any): Promise<any> {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.car.mainImage = await this.cloudinary.uploadImage(fileInput.target.files[0]);
    }
  }

  async uploadSecondPhotoToCloud(fileInput: any): Promise<any> {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.car.secondImage = await this.cloudinary.uploadImage(fileInput.target.files[0]);
    }
  }

  async uploadThirdPhotoToCloud(fileInput: any): Promise<any> {
    if (fileInput.target.files && fileInput.target.files[0]) {
      this.car.thirdImage = await this.cloudinary.uploadImage(fileInput.target.files[0]);
    }
  }

  open(content, car: Car) {
    this.editCar = car;
    this.modalService.open(content, {ariaLabelledBy: 'update-car-modal'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  public onOpenModal(car: Car, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editCar = car;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }

    container.appendChild(button);
    button.click();
  }
}

