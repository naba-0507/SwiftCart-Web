import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { Breadcrumbs, Crumb } from '../breadcrumbs/breadcrumbs';
import { ProductCard } from '../product-card/product-card';
import { getStars } from '../../utils/rating';

@Component({
  selector: 'app-product-detail',
  imports: [Breadcrumbs, ProductCard],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  product?: Product;
  relatedProducts: Product[] = [];
  crumbs: Crumb[] = [];
  getStars = getStars;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = this.productService.getProductById(id);
      this.crumbs = [
        { label: 'Home', url: '/' },
        { label: 'Catalog', url: '/products' },
        { label: this.product?.name ?? 'Product' }
      ];
      this.relatedProducts = this.productService.getProducts()
        .filter(p => p.id !== id)
        .slice(0, 4);
    });
  }

  addToCart(product: Product): void {
  if (product.status === 'out-of-stock') return;
  this.cartService.addToCart(product);
}
}