import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILocation} from '../../shared/interfaces/ILocation';

const API_URL = 'http://localhost:8080/api/location/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }
  getAllLocations(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(API_URL + 'all');
  }
  addNewLocation(location: ILocation): Observable<ILocation> {
    return this.http.post<ILocation>(API_URL + 'add', location, httpOptions);
  }
//   getAllReviewsById(id: number) {
//     const httpParams = new HttpParams().set('id', String(id));
//     return this.http.get<Review[]>(API_URL + 'bycar' + id, {
//       params: httpParams
//     } );
//   }
//
//   getAuthorByCarId(id: number) {
//     const httpParams = new HttpParams().set('id', String(id));
//     return this.http.get<string>(API_URL + 'author' + id, {
//       responseType: 'text' as 'json',
//       params: httpParams
//     } );
//   }
}
