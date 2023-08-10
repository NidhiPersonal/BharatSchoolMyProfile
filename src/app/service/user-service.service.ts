import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  myProfileDetails: any;
  userDetails : any;
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public getUserDetails(): User {
    return this.myProfileDetails;
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  setMyProfileDetails(details: any) {
    this.myProfileDetails = details;
  }

  setUserDetails(details: any) {
    this.userDetails = details;
  }

  public getUserDetailss(): User {
    return this.userDetails;
  }
}