import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AppComponent } from './app.component';



const routes: Routes = [
  { path: '', component: AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, UserService],
})
export class AppRoutingModule { }
