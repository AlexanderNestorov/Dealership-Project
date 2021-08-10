import {Component, Input, OnInit} from '@angular/core';
import {ILocation} from '../../shared/interfaces/ILocation';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']
})
export class LocationItemComponent implements OnInit {

  @Input() location: ILocation | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
