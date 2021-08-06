import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Review} from '../../shared/interfaces/Review';

const API_URL = 'http://localhost:8080/api/review/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private http: HttpClient) { }
  getAllPictures(): Observable<Review[]> {
    return this.http.get<Review[]>(API_URL + 'all');
  }
  addNewPicture(review: Review): Observable<Review> {
    return this.http.post<Review>(API_URL + 'add', review, httpOptions);
  }
  getAllPicturesById(id: number) {
    const httpParams = new HttpParams().set('id', String(id));
    return this.http.get<Review[]>(API_URL + 'bycar' + id, {
      params: httpParams
    } );
  }
}
