import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './user/profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import {CoreModule} from './core/core.module';
import { CreateComponent } from './listing/create/create.component';
import {HomeModule} from './home/home.module';
import {ListingModule} from './listing/listing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationComponent } from './locations/location/location.component';
import {AgmCoreModule} from '@agm/core';
import {ReviewHomeComponent} from './reviews/review-home/review-home.component';
import {ReviewsModule} from './reviews/reviews.module';
import {LocationsModule} from './locations/locations.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    CreateComponent,
    LocationComponent,
    ReviewHomeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ListingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUNdqMVBT9T-w9zeb7qFM4riL_4xNO_2o',
      libraries: ['places']
    }),
    ReviewsModule,
    LocationsModule

  ],
  exports: [
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
