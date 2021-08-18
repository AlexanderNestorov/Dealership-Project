import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILocation} from '../../shared/interfaces/ILocation';
import {environment} from '../../../environments/environment.prod';

// const API_URL = 'http://localhost:8080/api/location/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getAllLocations(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(this.baseUrl + 'all');
  }
  addNewLocation(location: ILocation): Observable<ILocation> {
    return this.http.post<ILocation>(this.baseUrl + 'add', location, httpOptions);
  }
  getAllCities() {
    return this.http.get<string[]>(this.baseUrl + 'cities');
  }
//
  getLocationsByCity(city: string) {
    const httpParams = new HttpParams().set('city', city);
    return this.http.get<ILocation[]>(this.baseUrl  + city, {
      params: httpParams
    } );
  }

  public deleteLocation(locationId: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + `delete/${locationId}`, httpOptions);
  }

  updateLocation(location: ILocation): Observable<ILocation> {
    return this.http.put<ILocation>(this.baseUrl + 'update', location, httpOptions);
  }
}
