import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextPageComponent } from './next-page/next-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { PopupComponent } from './popup/popup.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AskDoubtComponent } from './ask-doubt/ask-doubt.component';
import { StudyMaterialComponent } from './study-material/study-material.component';
//import { BharatSchoolLibModule } from 'projects/bharat-school-lib/src/lib/bharat-school-lib.module';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { BharatSchoolLibModule } from 'bharat-school-lib';

//import { MyProfileButtonComponent } from 'projects/bharat-school-lib/src/lib/my-profile-button/my-profile-button.component';

@NgModule({
  declarations: [
    AppComponent,
    //MyProfileButtonComponent,
    NextPageComponent,
    UserDetailsComponent,
    PopupComponent,
    HelpSupportComponent,
    FaqComponent,
    AboutUsComponent,
    AskDoubtComponent,
    StudyMaterialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    BharatSchoolLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
