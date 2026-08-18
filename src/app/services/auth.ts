import { Injectable, signal } from '@angular/core';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin@123';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = signal(false);

  login(username: string, password: string): boolean {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      this.isLoggedIn.set(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn.set(false);
  }
}