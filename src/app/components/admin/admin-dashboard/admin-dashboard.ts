import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product';
import { DiscountService } from '../../../services/discount';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit {
  totalProducts = 0;
  inStockCount = 0;
  outOfStockCount = 0;
  activeDiscounts = 0;

  constructor(private productService: ProductService, private discountService: DiscountService) {}

  ngOnInit(): void {
    const products = this.productService.getProducts();
    this.totalProducts = products.length;
    this.inStockCount = products.filter(p => p.status === 'in-stock').length;
    this.outOfStockCount = products.filter(p => p.status === 'out-of-stock').length;
    this.activeDiscounts = this.discountService.discounts().filter(d => d.active).length;
  }
}