import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {ProductListComponent} from '../../shared/product-list/product-list.component';
import {Product} from '../../../interfaces/product.model';

@Component({
  selector: 'app-discounts',
  imports: [
    NgForOf,
    ProductListComponent
  ],
  templateUrl: './discounts.component.html',
  standalone: true,
  styleUrl: './discounts.component.css'
})
export class DiscountsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)',
      image: './assets/images/products-list/Iphone14.png',
      price: 1437,
      backgroundColor: '#f5f5f7'
    },
    {
      id: 2,
      name: 'AirPods Max Silver Starlight Aluminium ',
      image: './assets/images/products-list/airpods.png',
      price: 549,
      backgroundColor: '#f5f5f7'
    },
    {
      id: 3,
      name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ',
      image: './assets/images/products-list/applewatch.png',
      price: 349,
      backgroundColor: '#f5f5f7'
    },
    {
      id: 4,
      name: 'Apple iPhone 14 Pro 512GB ',
      image: './assets/images/products-list/iphone.png',
      price: 1499,
      backgroundColor: '#f5f5f7'
    }
  ]

}
