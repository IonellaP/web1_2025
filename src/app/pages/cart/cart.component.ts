import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {BreadcrumbsComponent} from '../../components/base/breadcrumps/breadcrumps.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, BreadcrumbsComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Catalog', url: '/catalog' },
    { label: 'Products', url: '/products' },
    {label: 'My Cart', url: '/cart' },
  ];
  products = [
    { id: 1,
      name: 'iPhone 14 Pro Max',
      price: 900,
      imageUrl: '/assets/images/products-list/iphone.png',
      quantity: 4
    },
    { id: 2,
      name: 'Blackmagic Camera 6K',
      price: 2535,
      imageUrl: './assets/images/products-list/Camera.png',
      quantity: 4
    },
    { id: 3,
      name: 'iPhone 14 Pro Max',
      price: 900,
      imageUrl: '/assets/images/products-list/iphone.png',
      quantity: 4

    },
    { id: 4,
      name: 'Blackmagic Camera 6K',
      price: 2535,
      imageUrl: './assets/images/products-list/Camera.png',
      quantity: 4
    },
    { id: 5,
      name: 'iPhone 14 Pro Max',
      price: 900,
      imageUrl: '/assets/images/products-list/iphone.png',
      quantity: 4
    }
  ];

}
