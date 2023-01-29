import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = 'http://localhost:44302';

  constructor(
    private http: HttpClient
  ) { }

  public login(body: any): Observable<any>{
    return this.http.post<any>(`${this.url}/login`, body);
  }

  public register(body: any): Observable<any>{
    return this.http.post<any>(`${this.url}/register`, body);
  }
}
