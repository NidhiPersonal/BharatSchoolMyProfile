import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  myProfileDetails: any;
  userDetails? : User;
  logoutHandler?: (userId : String) => void;
  updateUserDetails? : (newUserData : User) => void;

  constructor() {
  }

  setLogOutHandler(logoutHandler: ((userId : String) => void)) {
     this.logoutHandler = logoutHandler;  
  }

  setUpdateUserDetails(updateUserDetails: ((newUserData : User) => void)) {
    this.updateUserDetails = updateUserDetails;  
 }

  public save(user: User) {
    return;
  }

  setMyProfileDetails(details: any) {
    console.log("Check if this is set")
    this.userDetails = details.user;
    this.logoutHandler = details.logoutHandler;
    this.updateUserDetails = details.updateUserDetails
  }

  public getUserDetails(): User {
    if(this.userDetails) {
    return this.userDetails;
    } else {
      return new User
    }
  }

  public getLogOutHandler() {
    return this.logoutHandler;
  }
}