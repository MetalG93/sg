import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from 'src/models/user';
import { LoginUser } from 'src/models/loginUser';
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
    return this.http.get<User[]>(this.getUsersLink);
  }

  checkPassword(userId: string, password: string): Observable<boolean> {
    let user: LoginUser = {
      userId:  userId,
      password: password
    }
    return this.http.post<boolean>(this.checkPasswordLink, user);
  }

  getRandoms(): Observable<number[]> {
    return this.http.get<number[]>(this.getRandomLink);
  }
}
