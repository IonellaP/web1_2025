import { Component } from '@angular/core';
import { ProductListComponent } from '../../shared/product-list/product-list.component';
import {NgForOf} from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-new-arrival',
  imports: [
    ProductListComponent,
    NgForOf
  ],
  templateUrl: './new-arrival.component.html',
  standalone: true,
  styleUrls: ['./new-arrival.component.css']
})
export class NewArrivalComponent {
  selectedTab: string = 'new';

  products: { [key: string]: Product[] } = {
    new: [
      { id: 1, name: 'iPhone 14 Pro Max', price: 900, imageUrl: './assets/images/products-list/iphone.png' },
      { id: 2, name: 'Blackmagic Camera 6K', price: 2535, imageUrl: './assets/images/products-list/iphone.png' },
    ],
    bestseller: [
      { id: 3, name: 'MacBook Pro M3', price: 1900, imageUrl: './assets/images/products-list/iphone.png' },
      { id: 4, name: 'Sony WH-1000XM5', price: 350, imageUrl: './assets/images/products-list/iphone.png' },
    ],
    featured: [
      { id: 5, name: 'Canon EOS R6 II', price: 2499, imageUrl: './assets/images/products-list/iphone.png' },
      { id: 6, name: 'LG OLED CX', price: 1200, imageUrl: './assets/images/products-list/iphone.png' },
    ]
  };

  get currentProducts() {
    return this.products[this.selectedTab];
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
