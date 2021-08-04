import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/user/auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {rePasswordValidator} from '../../shared/validators.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  passwordControl: FormControl;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.passwordControl = this.fb.control('', [Validators.required, Validators.minLength(6)]);
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: this.passwordControl,
      rePassword: ['', rePasswordValidator(this.passwordControl)]
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(formData: any): Promise <any> {
    const {username, email, password}  = formData.value;

    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );

    this.router.navigateByUrl('/home').finally(() => window.location.reload());
  }
}
