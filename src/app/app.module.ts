import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service';
import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider,FacebookLoginProvider } from "angular5-social-auth";

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './app-router.module';
import { SportNavbarComponent } from './sport-navbar/sport-navbar.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ShowProfileComponent } from './profile/show-profile/show-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    SportNavbarComponent,
    EditProfileComponent,
    ShowProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [CookieService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("179363516275693")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("380941399893-ab4h4l565l7rgo364q44iislcd7ejqsv.apps.googleusercontent.com")
        },
      ]);
  return config;
}
