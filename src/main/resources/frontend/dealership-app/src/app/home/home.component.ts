import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Car} from "../shared/interfaces/Car";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars?: Car[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getCars();
  }

  public getCars(): void {
    this.userService.getPublicContent().subscribe(
      (response: Car[]) => {
        this.cars = response;

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
