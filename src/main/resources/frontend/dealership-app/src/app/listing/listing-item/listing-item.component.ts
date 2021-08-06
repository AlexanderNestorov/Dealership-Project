import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../shared/interfaces/Car';
import {PictureService} from '../../_services/picture/picture.service';
import {Picture} from '../../shared/interfaces/Picture';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.css']
})
export class ListingItemComponent implements OnInit {

  @Input() car: Car | undefined;
  pictures?: Picture[];

  constructor(private pictureService: PictureService) {
  }

  ngOnInit(): void {
    this.getPicturesForCar(this.car.id);
    this.car.reviews.push('Test!');
    console.log(this.car.reviews);
  }

  public getPicturesForCar(id: number) {
    this.pictureService.getAllPicturesById(id).subscribe(
      (response: Picture[]) => {
        this.pictures = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}

