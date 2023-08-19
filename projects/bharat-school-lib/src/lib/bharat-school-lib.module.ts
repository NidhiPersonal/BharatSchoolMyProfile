import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileButtonComponent } from './my-profile-button/my-profile-button.component';
import { NextPageComponent } from './next-page/next-page.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FaqComponent } from './faq/faq.component';
import { UserService } from './service/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { PopupComponent } from './popup/popup.component';
import { AskDoubtComponent } from './ask-doubt/ask-doubt.component';
import { StudyMaterialComponent } from './study-material/study-material.component';
import {APP_BASE_HREF} from '@angular/common';
import { BharatSchoolLibRoutingModule } from './bharat-school-lib-routing.modules';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule



@NgModule({
  declarations: [MyProfileButtonComponent,
    NextPageComponent, PopupComponent, UserDetailsComponent, AboutUsComponent, AskDoubtComponent, StudyMaterialComponent, HelpSupportComponent, FaqComponent
  ],
  imports: [FormsModule, BharatSchoolLibRoutingModule, HttpClientModule, RouterModule, CommonModule],
  exports: [BharatSchoolLibRoutingModule, MyProfileButtonComponent,
    NextPageComponent, UserDetailsComponent, AboutUsComponent,PopupComponent, AskDoubtComponent, StudyMaterialComponent, HelpSupportComponent, FaqComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, UserService],
})
export class BharatSchoolLibModule { }