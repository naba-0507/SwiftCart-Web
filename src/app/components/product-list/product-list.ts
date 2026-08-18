import { Component, OnInit, computed, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { SearchService } from '../../services/search';
import { Breadcrumbs, Crumb } from '../breadcrumbs/breadcrumbs';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [Breadcrumbs, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: Product[] = [];
  showFilters = signal(false);
  crumbs: Crumb[] = [
    { label: 'Home', url: '/' },
    { label: 'Catalog' }
  ];

  draftMaxPrice = signal(30000);
  draftColors = signal<string[]>([]);
  appliedMaxPrice = signal(30000);
  appliedColors = signal<string[]>([]);

  colors = ['black', 'white', 'blue', 'red', 'silver', 'green', 'beige', 'off-white', 'grey', 'transparent'];

  constructor(
    private productService: ProductService,
    public searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts().filter(p => p.status !== 'disabled'); 
  }

  filteredProducts = computed(() => {
    const term = this.searchService.searchTerm().toLowerCase();
    const max = this.appliedMaxPrice();
    const colors = this.appliedColors();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(term) &&
      p.price <= max &&
      (colors.length === 0 || colors.includes(p.color))
    );
  });

  resultsLabel = computed(() => {
    const total = this.products.length;
    const filtered = this.filteredProducts().length;
    const term = this.searchService.searchTerm();
    const hasColorFilter = this.appliedColors().length > 0;
    const hasPriceFilter = this.appliedMaxPrice() < 30000;
    const hasSearch = term.length > 0;

    if (!hasColorFilter && !hasPriceFilter && !hasSearch) {
      return 'All Products';
    }
    const parts: string[] = [];
    if (hasSearch) parts.push(`"${term}"`);
    if (hasColorFilter) parts.push(this.appliedColors().join(', '));
    if (hasPriceFilter) parts.push(`under Rs. ${this.appliedMaxPrice()}`);
    return `${filtered} of ${total} products — ${parts.join(', ')}`;
  });

  toggleFilters(): void { this.showFilters.update(v => !v); }
  toggleDraftColor(color: string): void {
    this.draftColors.update(current =>
      current.includes(color) ? current.filter(c => c !== color) : [...current, color]
    );
  }
  onDraftPriceChange(value: string): void { this.draftMaxPrice.set(Number(value)); }
  applyFilters(): void {
    this.appliedMaxPrice.set(this.draftMaxPrice());
    this.appliedColors.set(this.draftColors());
  }
  clearFilters(): void {
    this.draftMaxPrice.set(30000);
    this.draftColors.set([]);
    this.appliedMaxPrice.set(30000);
    this.appliedColors.set([]);
  }
}