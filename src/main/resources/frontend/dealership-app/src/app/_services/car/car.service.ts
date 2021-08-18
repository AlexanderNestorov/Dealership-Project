import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../../shared/interfaces/Car';
import {environment} from '../../../environments/environment.prod';


// const API_URL = 'http://localhost:8080/api/car/';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCarsByPrice(): Observable<Car[]> {
    return this.http.get<Car[]>(  this.baseUrl + 'by_price');
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseUrl + 'all');
  }

  addNewCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.baseUrl + 'add', car, httpOptions);
  }

   updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(this.baseUrl + 'update', car, httpOptions);
  }

  deleteCar(carId: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + `delete/${carId}`, httpOptions);
  }

  getAllCarsById(user: string) {
    const httpParams = new HttpParams().set('user', user);
    return this.http.get<Car[]>(this.baseUrl + 'byuser' + user, {
      params: httpParams
    } );
  }

  findCarById(carId: number) {
    const httpParams = new HttpParams().set('id', carId.toString());
    return this.http.get<Car>(this.baseUrl + 'find/' + carId, {
      params: httpParams,
      headers: httpOptions.headers
      }
    );
  }

}
