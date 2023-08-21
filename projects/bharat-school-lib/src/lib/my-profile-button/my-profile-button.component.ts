import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user-service.service';
import { userConfig } from '../model/userConfig';

@Component({
  selector: 'app-my-profile-button',
  templateUrl: './my-profile-button.component.html',
  styleUrls: ['./my-profile-button.component.css']
})
export class MyProfileButtonComponent implements OnInit {
  
  // TODO 
  @Input() myProfileDetails!: userConfig;
  @Input() logoutHandler?: (userId : String) => void;

  constructor(private router: Router, private userService : UserService) {
   }

  ngOnInit(): void {
    console.log("Are we here")
  }

  goToNextPage(myProfileDetails: userConfig): void {
    console.log(myProfileDetails.user + "here atleast")
    this.userService.setMyProfileDetails(myProfileDetails);
    if(myProfileDetails.updateUserDetails) {
      console.log(myProfileDetails.updateUserDetails + "myProfileDetails.updateUserDetails")
      this.userService.setUpdateUserDetails(myProfileDetails.updateUserDetails)
    }
    if(myProfileDetails.logoutHandler) {
       this.userService.setLogOutHandler(myProfileDetails.logoutHandler);
    }
    this.router.navigate(['/next-page']);
  }
}
