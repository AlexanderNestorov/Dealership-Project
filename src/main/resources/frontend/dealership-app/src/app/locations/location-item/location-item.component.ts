import {Component, Input, OnInit} from '@angular/core';
import {ILocation} from '../../shared/interfaces/ILocation';
import {TokenStorageService} from '../../_services/user/token-storage.service';
import {HttpErrorResponse} from '@angular/common/http';
import {LocationService} from '../../_services/location/location.service';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']
})
export class LocationItemComponent implements OnInit {

  @Input() location: ILocation | undefined;
  isAdmin: boolean;
  roles: string[];
  constructor(private tokenStorageService: TokenStorageService, private locationService: LocationService) { }

  ngOnInit(): void {
    const user = this.tokenStorageService.getUser();
    this.roles = user.roles;

    this.isAdmin = this.roles.includes('ROLE_ADMIN');
  }

  onDelete(locationId) {
    this.locationService.deleteLocation(locationId).subscribe(
      (response: void) => {
        console.log(response);
        window.location.reload();
      },
      // tslint:disable-next-line:no-shadowed-variable
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
