import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { Router } from '@angular/router'; // Import the Router
import { error } from 'console';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userData = new User();
  showPopup = false;
  popupMessage = '';
  inputValue = '';
  userDetails: any;
  fieldName: any;
  updateUserDetails? : (newUserData : User) => void;
  logoutHandler?: (userId : String) => void;
  constructor(private UserService: UserService, private router: Router) {
    this.userDetails = this.UserService.getUserDetails();
    this.userData.email = this.userDetails.email;
    this.userData.id = this.userDetails.id;
    this.userData.name = this.userDetails.name;
    this.userData.grade = this.userDetails.grade;
    this.userData.photo = this.userDetails.photo;
    this.userData.phone = this.userDetails.phone;
    this.userData.board = this.userDetails.board;
    this.userData.parentName = this.userDetails.parentName;
    this.userData.address = this.userDetails.address;
    this.logoutHandler = this.UserService.logoutHandler;
    this.userDetails = this.UserService.getUserDetails();
    this.updateUserDetails = this.UserService.updateUserDetails;
  }

  ngOnInit() {
  }

  // Function to navigate back to /home when the back arrow is clicked
  goBack(): void {
    this.router.navigate(['/next-page']);
  }

  openPopup(value: string): void {
    this.showPopup = true;
    this.popupMessage = `Modify ${value}`;
    this.fieldName = `${value}`;
  }

  hidePopup(): void {
    this.showPopup = false;
    this.popupMessage = '';
    this.inputValue = '';
  }

  handlePopupSubmitted(value: string | null): void {
    // Pop up handling here
    if (value !== null) {
      console.log(this.fieldName)
      const updatedUser = this.userDetails;
      console.log(updatedUser);
      console.log(this.updateUserDetails)
      // Here based on field name , we can decide what do we want to change.
      // If we have stored successfully then change userDetails value will be changed.
      switch(this.fieldName) { 
        case "Name": { 
           //statements;
           console.log("Updatting name here.")
           updatedUser.name = `${value}`; 
           break; 
        } 
        case "Grade": { 
           //statements; 
           updatedUser.grade = `${value}`; 
           break; 
        } 
        case "Phone": { 
          //statements; 
          updatedUser.phone = `${value}`; 
  
          break; 
       } 
       case "Board": { 
          //statements; 
          updatedUser.board = `${value}`; 
  
          break; 
       } 
       case "Parent Name": { 
        //statements; 
        updatedUser.parentName = `${value}`; 
  
        break; 
     } 
     case "Address": { 
        //statements; 
        updatedUser.address = `${value}`; 
        break; 
     } 
        default: { 
           //statements; 
           break; 
        } 
     } 
     if(this.updateUserDetails) {
     this.updateUserDetails(updatedUser);
     this.UserService.userDetails = updatedUser;
     }
     // If above is done successfully then reset all the values. and change the state.
      console.log(`Submitted value: ${value}`);
    }
    this.hidePopup();
  }

  logOut(userId : String | undefined) : void {
    console.log(userId + "****" + this.logoutHandler)
    if (this.logoutHandler && userId) {
      this.logoutHandler(userId);
    } else {
      throw console.error("Error has been thrown here.");
    }
  }
}
