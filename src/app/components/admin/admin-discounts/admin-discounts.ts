import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Discount } from '../../../models/discount.model';
import { DiscountService } from '../../../services/discount';

@Component({
  selector: 'app-admin-discounts',
  imports: [FormsModule],
  templateUrl: './admin-discounts.html',
  styleUrl: './admin-discounts.css',
})
export class AdminDiscounts {
  newCode = '';
  newPercent = 10;

  constructor(public discountService: DiscountService) {}

  addDiscount(): void {
    if (!this.newCode.trim()) return;
    this.discountService.addDiscount({
      code: this.newCode.trim().toUpperCase(),
      percent: this.newPercent,
      active: true,
    });
    this.newCode = '';
    this.newPercent = 10;
  }

  toggleActive(discount: Discount): void {
    this.discountService.toggleActive(discount.code);
  }

  remove(discount: Discount): void {
    this.discountService.removeDiscount(discount.code);
  }
}