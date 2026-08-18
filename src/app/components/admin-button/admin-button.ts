import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-button',
  imports: [],
  templateUrl: './admin-button.html',
  styleUrl: './admin-button.css',
})
export class AdminButton {
  constructor(public authService: AuthService, private router: Router) {}

  goToAdmin(): void {
    this.router.navigate([this.authService.isLoggedIn() ? '/admin/dashboard' : '/admin/login']);
  }
}