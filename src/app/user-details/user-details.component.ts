import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { Router } from '@angular/router'; // Import the Router

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
  constructor(private UserService: UserService, private router: Router) {
    this.userDetails = this.UserService.getUserDetailss();
    this.userData.email = this.userDetails.email;
    this.userData.id = this.userDetails.id;
    this.userData.name = this.userDetails.name;
    this.userData.grade = this.userDetails.grade;
    this.userData.photo = this.userDetails.photo;
    this.userData.phone = this.userDetails.phone;
    this.userData.board = this.userDetails.board;
    this.userData.parentName = this.userDetails.parentName;
    this.userData.address = this.userDetails.address;
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
  }

  hidePopup(): void {
    this.showPopup = false;
    this.popupMessage = '';
    this.inputValue = '';
  }

  handlePopupSubmitted(value: string | null): void {
    if (value !== null) {
      // Do something with the submitted value
      console.log(`Submitted value: ${value}`);
    }
    this.hidePopup();
  }

  logOut(userId : String | undefined) : void {
    console.log(userId + "****")
    // TODO : Logout from here.
  }
}
