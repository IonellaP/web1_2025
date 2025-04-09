import {Component, OnInit} from '@angular/core';
import {Product} from '../../../interfaces/product.model';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-product-show-case',
  imports: [
    NgForOf,
  ],
  templateUrl: './product-show-case.component.html',
  standalone: true,
  styleUrl: './product-show-case.component.css'
})
export class ProductShowCaseComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Popular products',
      image: './assets/images/products-list/applewatch.png',
      description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      backgroundColor: '#f5f5f7'
    },
    {
      id: 2,
      name: 'Popular products',
      image: './assets/images/products-list/applewatch.png',
      description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      backgroundColor: '#f5f5f7'
    },
    {
      id: 3,
      name: 'Popular products',
      image: './assets/images/products-list/applewatch.png',
      description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      backgroundColor: '#f5f5f7'
    },
    {
      id: 4,
      name: 'Popular products',
      image: './assets/images/products-list/applewatch.png',
      description: 'iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.',
      backgroundColor: '#f5f5f7'
    }
  ]

  ngOnInit(): void {
  }


}
