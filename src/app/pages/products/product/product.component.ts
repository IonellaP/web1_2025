import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../../interfaces/product.model';
import {CurrencyPipe, DecimalPipe} from '@angular/common';
import {BreadcrumbsComponent} from '../../../components/base/breadcrumps/breadcrumps.component';

@Component({
  selector: 'app-product',
  imports: [
    CurrencyPipe,
    BreadcrumbsComponent,
    DecimalPipe
  ],
  templateUrl: './product.component.html',
  standalone: true,
  styleUrl: './product.component.css'
})
export class ProductComponent {
  breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Catalog', url: '/catalog' },
    { label: 'Products', url: '/products' },
    { label: 'iPhone 14 Pro Max', url: '/products:id' },
  ];

  quantity: number = 1;
  product: Product = {
    id: 1,
    name: 'iPhone 14 Pro Max',
    price: 899.99,
    image: '/assets/images/products-list/iphone.png',
    description: 'The ultimate iPhone experience with our Pro camera system, A16 Bionic chip, and all-day battery life.'
  };


  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    console.log(`Added ${this.quantity} ${this.product.name}(s) to cart`);
  }

}
