import { Injectable } from '@angular/core';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  myProfileDetails: any;
  userDetails : any;

  constructor() {
  }

  public getUserDetails(): User {
    return this.myProfileDetails;
  }

  public save(user: User) {
    return;
    //return this.http.post<User>(this.usersUrl, user);
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