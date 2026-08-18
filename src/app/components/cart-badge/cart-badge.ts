import { Component } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-cart-badge',
  imports: [],
  templateUrl: './cart-badge.html',
  styleUrl: './cart-badge.css',
})
export class CartBadge {
  constructor(public cartService: CartService) {}
}