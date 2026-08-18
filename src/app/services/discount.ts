import { Injectable, signal } from '@angular/core';
import { Discount } from '../models/discount.model';

@Injectable({ providedIn: 'root' })
export class DiscountService {
  private discountsSignal = signal<Discount[]>([
    { code: 'SWIFTCART10', percent: 10, active: true },
    { code: 'SWIFTCART20', percent: 20, active: true },
  ]);

  discounts = this.discountsSignal.asReadonly();

  addDiscount(discount: Discount): void {
    this.discountsSignal.update(list => [...list, discount]);
  }

  toggleActive(code: string): void {
    this.discountsSignal.update(list =>
      list.map(d => d.code === code ? { ...d, active: !d.active } : d)
    );
  }

  removeDiscount(code: string): void {
    this.discountsSignal.update(list => list.filter(d => d.code !== code));
  }

  validateCode(code: string): Discount | null {
  const normalized = code.trim().toUpperCase();
  const match = this.discountsSignal().find(d => d.code === normalized && d.active);
  return match ?? null;
}
}