import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product';

@Component({
  selector: 'app-admin-product-list',
  imports: [RouterLink],
  templateUrl: './admin-product-list.html',
  styleUrl: './admin-product-list.css',
})
export class AdminProductList implements OnInit {
  products: Product[] = [];
  statusOptions: Product['status'][] = ['in-stock', 'out-of-stock', 'disabled'];
  pageIndex = 0;
  pageSize = 8;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.refresh();
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.pageSize) || 1;
  }

  get paginatedProducts(): Product[] {
    const start = this.pageIndex * this.pageSize;
    return this.products.slice(start, start + this.pageSize);
  }

  nextPage(): void {
    if (this.pageIndex < this.totalPages - 1) this.pageIndex++;
  }

  prevPage(): void {
    if (this.pageIndex > 0) this.pageIndex--;
  }

  refresh(): void {
    this.products = this.productService.getProducts();
  }

  onStatusChange(product: Product, event: Event): void { 
    const value = (event.target as HTMLSelectElement).value as Product['status'];
    this.productService.updateStatus(product.id, value);
    this.refresh();
  }

  deleteProduct(product: Product): void {
    if (confirm(`Delete "${product.name}"? This cannot be undone.`)) {
      this.productService.deleteProduct(product.id);
      this.refresh();
      if (this.pageIndex > this.totalPages - 1) {
        this.pageIndex = Math.max(0, this.totalPages - 1);
      }
    }
  }
}