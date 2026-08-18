import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product';

@Component({
  selector: 'app-admin-product-form',
  imports: [FormsModule],
  templateUrl: './admin-product-form.html',
  styleUrl: './admin-product-form.css',
})
export class AdminProductForm implements OnInit {
  isEditMode = false;
  productId?: number;

  name = '';
  price = 0;
  image = '';
  description = '';
  color = 'black';
  rating = 4;
  status: Product['status'] = 'in-stock';

  colorOptions = ['black', 'white', 'blue', 'red', 'silver', 'green', 'beige', 'off-white', 'grey', 'transparent'];
  statusOptions: Product['status'][] = ['in-stock', 'out-of-stock', 'disabled'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.productId = Number(idParam);
      const existing = this.productService.getProductById(this.productId);
      if (existing) {
        this.name = existing.name;
        this.price = existing.price;
        this.image = existing.image;
        this.description = existing.description;
        this.color = existing.color;
        this.rating = existing.rating;
        this.status = existing.status;
      }
    }
  }

  onSubmit(): void {
    const productData = {
      name: this.name,
      price: this.price,
      image: this.image,
      description: this.description,
      color: this.color,
      rating: this.rating,
      status: this.status,
    };

    if (this.isEditMode && this.productId !== undefined) {
      this.productService.updateProduct(this.productId, productData);
    } else {
      this.productService.addProduct(productData);
    }
    this.router.navigate(['/admin/products']);
  }
}