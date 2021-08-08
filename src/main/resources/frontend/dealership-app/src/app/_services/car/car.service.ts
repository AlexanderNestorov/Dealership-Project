import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from '../../shared/interfaces/Car';

const API_URL = 'http://localhost:8080/api/car/';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin' : '*', 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient) { }

  getCarsByPrice(): Observable<Car[]> {
    return this.http.get<Car[]>(  API_URL + 'by_price');
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(API_URL + 'all');
  }

  addNewCar(car: Car): Observable<Car> {
    return this.http.post<Car>(API_URL + 'add', car, httpOptions);
  }

   updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>(API_URL + 'update', car, httpOptions);
  }

  public deleteCar(carId: number): Observable<void> {
    return this.http.delete<void>(API_URL + `delete/${carId}`, httpOptions);
  }

  getAllCarsById(user: string) {
    const httpParams = new HttpParams().set('user', user);
    return this.http.get<Car[]>(API_URL + 'byuser' + user, {
      params: httpParams
    } );
  }

}
