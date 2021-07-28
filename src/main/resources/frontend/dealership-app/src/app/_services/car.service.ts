import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../shared/interfaces/Car";

const API_URL = 'http://localhost:8080/api/car/';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) { }

  getRecentCars(): Observable<Car[]> {
    return this.http.get<Car[]>(  API_URL + 'recent');
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(API_URL + 'all');
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}
