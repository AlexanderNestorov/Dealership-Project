import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterLoginComponent } from './register-login/register-login.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    RegisterLoginComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class UserModule { }
