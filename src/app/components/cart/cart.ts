import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';
import { Breadcrumbs, Crumb } from '../breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-cart',
  imports: [DecimalPipe, RouterLink, Breadcrumbs],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  constructor(public cartService: CartService) {}

  crumbs: Crumb[] = [
    { label: 'Home', url: '/' },
    { label: 'Cart' }
  ];
  
  remove(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}