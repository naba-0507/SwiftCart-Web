import { Routes } from '@angular/router';
import { PublicLayout } from './components/public-layout/public-layout';
import { Home } from './components/home/home';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-detail/product-detail';
import { Cart } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { AdminLogin } from './components/admin/admin-login/admin-login';
import { AdminLayout } from './components/admin/admin-layout/admin-layout';
import { AdminDashboard } from './components/admin/admin-dashboard/admin-dashboard';
import { AdminProductList } from './components/admin/admin-product-list/admin-product-list';
import { AdminProductForm } from './components/admin/admin-product-form/admin-product-form';
import { AdminDiscounts } from './components/admin/admin-discounts/admin-discounts';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Home },
      { path: 'products', component: ProductList },
      { path: 'product/:id', component: ProductDetail },
      { path: 'cart', component: Cart },
      { path: 'checkout', component: Checkout },
      { path: 'about', component: About },
      { path: 'contact', component: Contact },
    ],
  },
  { path: 'admin/login', component: AdminLogin },
  {
    path: 'admin',
    component: AdminLayout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: AdminDashboard },
      { path: 'products', component: AdminProductList },
      { path: 'products/new', component: AdminProductForm },
      { path: 'products/:id/edit', component: AdminProductForm },
      { path: 'discounts', component: AdminDiscounts },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];