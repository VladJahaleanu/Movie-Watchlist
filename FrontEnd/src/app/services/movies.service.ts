import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  public url = "http://localhost:44302/movie";

  constructor(private http: HttpClient) { }

  public getAllMovies(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public getMovieById(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  public createMovie(body): Observable<any> {
    return this.http.post<any>(this.url, body);
  }

  public editMovie(id, body): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, body);
  }
}
