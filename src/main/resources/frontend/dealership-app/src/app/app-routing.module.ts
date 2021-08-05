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
import {RegisterLoginComponent} from './user/register-login/register-login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'add', component: CreateComponent},
  { path: 'registered', component: RegisterLoginComponent, pathMatch: 'full'},
  { path: '**', component : NotFoundComponent, pathMatch: 'full' }
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

