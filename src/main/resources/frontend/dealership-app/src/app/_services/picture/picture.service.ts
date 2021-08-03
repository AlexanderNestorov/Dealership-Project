import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Picture} from '../../shared/interfaces/Picture';

const API_URL = 'http://localhost:8080/api/picture/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  constructor(private http: HttpClient) { }
  getAllPictures(): Observable<Picture[]> {
    return this.http.get<Picture[]>(API_URL + 'all');
  }
  addNewPicture(picture: Picture): Observable<Picture> {
    return this.http.post<Picture>(API_URL + 'add', picture, httpOptions);
  }
}
