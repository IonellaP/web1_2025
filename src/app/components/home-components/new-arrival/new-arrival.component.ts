import { Component } from '@angular/core';
import { ProductListComponent } from '../../shared/product-list/product-list.component';
import {NgForOf} from '@angular/common';
import {Product} from '../../../interfaces/product.model';


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
      { id: 1, name: 'iPhone 14 Pro Max',
        price: 900,
        image: '/assets/images/products-list/iphone.png'
      },
      { id: 2,
        name: 'Blackmagic Camera 6K',
        price: 2535,
        image: './assets/images/products-list/Camera.png'
      },
    ],
    bestseller: [
      { id: 3,
        name: 'MacBook Pro M3',
        price: 1900,
        image: './assets/images/products-list/Macbook1.png'
      },
      { id: 4,
        name: 'Samsung Galaxy Watch6 Classic 47mm Black',
        price: 350,
        image: './assets/images/products-list/galaxyWatch.png'
      },
    ],
    featured: [
      { id: 5,
        name: 'Galaxy Buds FE Graphite',
        price: 2499,
        image: './assets/images/products-list/Buds.png'
      },
      { id: 6,
        name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black',
        price: 1200,
        image: './assets/images/products-list/ZFold.png'
      },
    ]
  };

  get currentProducts() {
    return this.products[this.selectedTab];
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
