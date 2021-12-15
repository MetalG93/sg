import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from 'src/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private getUsersLink = 'http://localhost:8080/users'
  private checkPasswordLink = 'http://localhost:8080/users/check'
  private getRandomLink = 'http://localhost:8080/random';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.log('Calling backend with URL: ' + this.getUsersLink)
    return this.http.get<User[]>(this.getUsersLink);
  }

  checkPassword(userId: String, password: String): Observable<Boolean> {
    return this.http.get<Boolean>(this.checkPasswordLink+'?userId='+userId+'&password='+password);
  }

  getRandoms(): Observable<Number[]> {
    return this.http.get<Number[]>(this.getRandomLink);
  }
}
