import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user-service.service';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.component.html',
  styleUrls: ['./next-page.component.css']
})
export class NextPageComponent implements OnInit {
  userDetails: any;
  buttons: any[] = [
    {
      name: 'User Details',
      image: '/assets/img/MyAccount.png',
      route: 'user-details'
    },
    {
      name: 'About Bharat School',
      image: '/assets/img/Book1.png',
      route: 'about-bharat-school'
    },
    {
      name: 'Ask your doubt',
      image: '/assets/img/doubt.png',
      route: 'ask-doubt'
    },
    {
      name: 'Study Material',
      image: '/assets/img/StudyMaterial.png',
      route: 'study-material'
    },
    {
      name: 'FAQ',
      image: '/assets/img/FAQ.png',
      route: 'faq'
    },
    {
      name: 'Help & Support',
      image: '/assets/img/HelpAndSupport.jpeg',
      route: 'help-support'
    }
  ];

  constructor(private userService : UserService, private router: Router) {
    console.log("Inside lib may be")
    this.userDetails = this.userService.getUserDetails();
    console.log(this.userDetails)
   }

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}