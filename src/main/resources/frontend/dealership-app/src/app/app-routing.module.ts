import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import {CreateComponent} from './listing/create/create.component';
import {NotFoundComponent} from './core/not-found/not-found.component';

import {CoreModule} from './core/core.module';
import {HomeNotFoundComponent} from './home/home-not-found/home-not-found.component';
import {ListingAllComponent} from './listing/listing-all/listing-all.component';
import {AboutComponent} from './home/about/about.component';
import {AuthActivate} from './core/guards/auth.actiavte';
import {LocationComponent} from './locations/location/location.component';
import {ReviewHomeComponent} from './reviews/review-home/review-home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: { authenticationRequired: true, authenticationFailureRedirectUrl: 'home'}
  },
  { path: 'add',
    component: CreateComponent,
    canActivate: [AuthActivate],
    data: { authenticationRequired: true, authenticationFailureRedirectUrl: 'home'}
  },
  { path: 'all',
    component: ListingAllComponent,
    canActivate: [AuthActivate],
    data: { authenticationRequired: true, authenticationFailureRedirectUrl: 'home'}
  },
  {
    path: 'about',
    component : AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'locations',
    component: LocationComponent,
    pathMatch: 'full'
  },
  { path: 'reviews',
    component: ReviewHomeComponent,
    canActivate: [AuthActivate],
    data: { authenticationRequired: true, authenticationFailureRedirectUrl: 'home'}
  },
  {
    path: '**',
    component : NotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  }), CoreModule],
  declarations: [
    HomeNotFoundComponent
  ],
  exports: [RouterModule, HomeNotFoundComponent]
})
export class AppRoutingModule { }

