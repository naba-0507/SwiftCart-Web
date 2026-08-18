import { Component, OnInit, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { Hero } from '../hero/hero';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Hero, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  featuredProducts: Product[] = [];
  pageIndex = signal(0);
  pageSize = 4;

  visibleProducts = computed(() =>
    this.featuredProducts.slice(this.pageIndex() * this.pageSize, this.pageIndex() * this.pageSize + this.pageSize)
  );
  totalPages = computed(() => Math.ceil(this.featuredProducts.length / this.pageSize));

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.featuredProducts = this.productService.getProducts()
    .filter(p => p.status !== 'disabled')
    .slice(0, 12);
  }

  nextPage(): void {
    this.pageIndex.update(i => (i + 1) % this.totalPages());
  }

  prevPage(): void {
    this.pageIndex.update(i => (i - 1 + this.totalPages()) % this.totalPages());
  }
}