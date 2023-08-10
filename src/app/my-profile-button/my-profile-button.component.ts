import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user-service.service';

@Component({
  selector: 'app-my-profile-button',
  templateUrl: './my-profile-button.component.html',
  styleUrls: ['./my-profile-button.component.css']
})
export class MyProfileButtonComponent implements OnInit {
  
  @Input() myProfileDetails: any;
  userService: UserService;

  constructor(private router: Router, userService : UserService) {
    this.userService = userService;
   }

  ngOnInit(): void {
  }

  goToNextPage(myProfileDetails: any): void {
    console.log(myProfileDetails)
    this.userService.setMyProfileDetails(myProfileDetails)
    this.router.navigate(['/next-page']);
  }
}
