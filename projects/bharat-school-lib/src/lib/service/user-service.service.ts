import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  }

  setMyProfileDetails(details: any) {
    console.log("Check if this is set")
    this.myProfileDetails = details;
  }

  setUserDetails(details: any) {
    this.userDetails = details;
  }

  public getUserDetailss(): User {
    return this.userDetails;
  }
}