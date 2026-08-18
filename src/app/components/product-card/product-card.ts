import { Component, input, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart';
import { getStars } from '../../utils/rating';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  getStars = getStars;
  isOutOfStock = computed(() => this.product().status === 'out-of-stock');

  constructor(private router: Router, private cartService: CartService) {}

  goToProduct(): void {
    this.router.navigate(['/product', this.product().id]);
  }

  addToCart(event: Event): void {
    event.stopPropagation();
     if (this.isOutOfStock()) return;
    this.cartService.addToCart(this.product());
  }

  buyNow(event: Event): void {
    event.stopPropagation();
     if (this.isOutOfStock()) return;
    this.cartService.addToCart(this.product());
    this.cartService.closeCart();
    this.router.navigate(['/checkout']);
  }
}