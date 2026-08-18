import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Logo } from '../logo/logo';
import { SearchBar } from '../search-bar/search-bar';
import { CartBadge } from '../cart-badge/cart-badge';
import { AdminButton } from '../admin-button/admin-button';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Logo, SearchBar, CartBadge, AdminButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}