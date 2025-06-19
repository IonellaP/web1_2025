// cart.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../../components/base/breadcrumps/breadcrumps.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, BreadcrumbsComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Catalog', url: '/catalog' },
    { label: 'Products', url: '/products' },
    { label: 'My Cart', url: '/cart' },
  ];

  products = [
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      variant: '128GB Deep Purple',
      price: 1280,
      imageUrl: '/assets/images/products-list/iphone.png',
      quantity: 1,
    },
    {
      id: 2,
      name: 'AirPods Max',
      variant: 'Silver',
      price: 549,
      imageUrl: './assets/images/products-list/airpods.png',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Apple Watch Series 9',
      variant: 'GPS 41mm Starlight Aluminium',
      price: 399,
      imageUrl: './assets/images/products-list/applewatch.png',
      quantity: 1,
    }
  ];

  shippingFee: number = 29;
  estimatedTax: number = 50;

  getSubtotal(): number {
    return this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  getTotalOrder(): number {
    return this.getSubtotal() + this.shippingFee + this.estimatedTax;
  }

  increaseQuantity(product: any): void {
    product.quantity++;
  }

  decreaseQuantity(product: any): void {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }
}
