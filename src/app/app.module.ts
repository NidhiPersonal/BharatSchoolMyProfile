import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileButtonComponent } from './my-profile-button/my-profile-button.component';
import { NextPageComponent } from './next-page/next-page.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { PopupComponent } from './popup/popup.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AskDoubtComponent } from './ask-doubt/ask-doubt.component';
import { StudyMaterialComponent } from './study-material/study-material.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileButtonComponent,
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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
