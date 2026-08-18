import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSignal = signal<CartItem[]>([]);
  isOpen = signal(false);

  items = this.itemsSignal.asReadonly();
  itemCount = computed(() => this.itemsSignal().reduce((sum, i) => sum + i.quantity, 0));
  total = computed(() => this.itemsSignal().reduce((sum, i) => sum + i.product.price * i.quantity, 0));

  addToCart(product: Product): void {
    this.itemsSignal.update(items => {
      const existing = items.find(i => i.product.id === product.id);
      if (existing) {
        return items.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { product, quantity: 1 }];
    });
    this.openCart();
  }

  removeFromCart(productId: number): void {
    this.itemsSignal.update(items => items.filter(i => i.product.id !== productId));
  }

  updateQuantity(productId: number, delta: number): void {
    this.itemsSignal.update(items =>
      items
        .map(i => i.product.id === productId ? { ...i, quantity: i.quantity + delta } : i)
        .filter(i => i.quantity > 0)
    );
  }

  clearCart(): void {
    this.itemsSignal.set([]);
  }

  openCart(): void { this.isOpen.set(true); }
  closeCart(): void { this.isOpen.set(false); }
  toggleCart(): void { this.isOpen.update(v => !v); }
}