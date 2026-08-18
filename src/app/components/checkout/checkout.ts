import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';
import { DiscountService } from '../../services/discount';
import { Discount } from '../../models/discount.model';
import { Breadcrumbs, Crumb } from '../breadcrumbs/breadcrumbs';

const DELIVERY_FEE = 200;

@Component({
  selector: 'app-checkout',
  imports: [FormsModule, DecimalPipe, RouterLink, Breadcrumbs],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  email = '';
  name = '';
  lastName = '';
  address = '';
  city = '';
  phone = '';
  deliveryMethod: 'delivery' | 'pickup' = 'delivery';
  orderPlaced = false;

  crumbs: Crumb[] = [
    { label: 'Home', url: '/' },
    { label: 'Cart', url: '/cart' },
    { label: 'Checkout' }
  ];

   promoCode = '';
  appliedDiscount = signal<Discount | null>(null);
  promoError = signal('');

  discountAmount = computed(() => {
    const discount = this.appliedDiscount();
    if (!discount) return 0;
    return this.cartService.total() * (discount.percent / 100);
  });

  deliveryFee = DELIVERY_FEE;

  grandTotal = computed(() =>
    this.cartService.total() - this.discountAmount() + this.deliveryFee
  );

  constructor(public cartService: CartService, private discountService: DiscountService) {}

   applyPromo(): void {
    if (!this.promoCode.trim()) return;
    const match = this.discountService.validateCode(this.promoCode);
    if (match) {
      this.appliedDiscount.set(match);
      this.promoError.set('');
    } else {
      this.appliedDiscount.set(null);
      this.promoError.set('Invalid or inactive code.');
    }
  }

  removePromo(): void {
    this.appliedDiscount.set(null);
    this.promoCode = '';
    this.promoError.set('');
  }

  placeOrder(): void {
    this.orderPlaced = true;
    this.cartService.clearCart();
  }
}