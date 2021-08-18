import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Review} from '../../shared/interfaces/Review';
import {environment} from '../../../environments/environment.prod';

// const API_URL = 'http://localhost:8080/api/review/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.baseUrl + 'all');
  }
  addNewReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.baseUrl + 'add', review, httpOptions);
  }
  getAllReviewsById(id: number) {
    const httpParams = new HttpParams().set('id', String(id));
    return this.http.get<Review[]>(this.baseUrl + 'bycar' + id, {
      params: httpParams
    } );
  }

  getAuthorByCarId(id: number) {
    const httpParams = new HttpParams().set('id', String(id));
    return this.http.get<string>(this.baseUrl + 'author' + id, {
      responseType: 'text' as 'json',
      params: httpParams
    } );
  }

  public deleteReview(reviewId: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + `delete/${reviewId}`, httpOptions);
  }
  getAllReviewsByAuthor(author: string) {
    const httpParams = new HttpParams().set('author', author);
    return this.http.get<Review[]>(this.baseUrl + 'byauthor' + author, {
      params: httpParams
    } );
  }
}
