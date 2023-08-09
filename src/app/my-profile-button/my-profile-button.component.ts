import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile-button',
  templateUrl: './my-profile-button.component.html',
  styleUrls: ['./my-profile-button.component.css']
})
export class MyProfileButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToNextPage(): void {
    this.router.navigate(['/next-page']);
  }
}
