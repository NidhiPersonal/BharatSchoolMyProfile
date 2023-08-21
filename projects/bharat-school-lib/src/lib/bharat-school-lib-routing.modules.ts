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
import { AskDoubtComponent } from './ask-doubt/ask-doubt.component';
import { StudyMaterialComponent } from './study-material/study-material.component';
import {APP_BASE_HREF} from '@angular/common';

// const  routes:  Routes  = [
//   {
//       children: [
//         { path: '', component: MyProfileButtonComponent },
//         { path: 'next-page', component: NextPageComponent },
//         { path: 'user-details', component: UserDetailsComponent },
//         { path: 'about-bharat-school', component: AboutUsComponent },
//         { path: 'ask-doubt', component: AskDoubtComponent },
//         { path: 'study-material', component: StudyMaterialComponent },
//         { path: 'help-support', component: HelpSupportComponent },
//         { path: 'faq', component: FaqComponent },
//       ]
//   }
// ];

const routes: Routes = [
  { path: 'my-profile', component: MyProfileButtonComponent },
  { path: 'next-page', component: NextPageComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'about-bharat-school', component: AboutUsComponent },
  { path: 'ask-doubt', component: AskDoubtComponent },
  { path: 'study-material', component: StudyMaterialComponent },
  { path: 'help-support', component: HelpSupportComponent },
  { path: 'faq', component: FaqComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, UserService, RouterModule],
})
export class BharatSchoolLibRoutingModule { }

//Single method ke thorugh register krke , output is bind like this.
// Emitt issue
// Input kya hai and output