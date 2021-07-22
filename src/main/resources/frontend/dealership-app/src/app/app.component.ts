import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  showTest = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.showTest = true;

      this.username = user.username;

    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    window.alert("Logged out!")
  }

  test(event): void {
    if (!this.isLoggedIn) {
      event.preventDefault();
      window.alert("To see this page, please Log In.");
      return;
         }
    this.router.navigateByUrl("/profile")



  }
}
