import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../shared/interfaces/Car';

@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.css']
})
export class ListingItemComponent implements OnInit {

  @Input() car: Car | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
