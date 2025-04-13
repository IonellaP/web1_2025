import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {BreadcrumbsComponent} from '../../../components/base/breadcrumps/breadcrumps.component';
import {ProductFilterComponent} from '../../../components/products-components/product-filter/product-filter.component';
import {Product} from '../../../interfaces/product.model';
import {ProductListComponent} from '../../../components/shared/product-list/product-list.component';

@Component({
  selector: 'app-products-list',
  imports: [
    NgForOf,
    BreadcrumbsComponent,
    ProductFilterComponent,
    ProductListComponent
  ],
  templateUrl: './products-list.component.html',
  standalone: true,
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Catalog', url: '/catalog' },
    { label: 'Products', url: '/products' },
  ];

  selectedProducts = 85;
  sortOption = 'By rating';

  products: Product[] = [
    { id: 1, name: 'iPhone 14 Pro Max',
      price: 900,
      image: '/assets/images/products-list/iphone.png'
    },
    { id: 2,
      name: 'Blackmagic Camera 6K',
      price: 2535,
      image: './assets/images/products-list/Camera.png'
    },
    { id: 3,
      name: 'iPhone 14 Pro Max',
      price: 900,
      image: '/assets/images/products-list/iphone.png'
    },
    { id: 4,
      name: 'Blackmagic Camera 6K',
      price: 2535,
      image: './assets/images/products-list/Camera.png'
    },
    { id: 5,
      name: 'iPhone 14 Pro Max',
      price: 900,
      image: '/assets/images/products-list/iphone.png'
    },
    { id: 6,
      name: 'Blackmagic Camera 6K',
      price: 2535,
      image: './assets/images/products-list/Camera.png'
    },
    { id: 7,
      name: 'iPhone 14 Pro Max',
      price: 900,
      image: '/assets/images/products-list/iphone.png'
    },
    { id: 8,
      name: 'Blackmagic Camera 6K',
      price: 2535,
      image: './assets/images/products-list/Camera.png'
    },
  ];

  ngOnInit() {
  }

  handleFilterChange(filterData: any) {
    console.log('Filter changed:', filterData);
    if (filterData.type === 'brand') {
      const selectedBrands = filterData.data;
    }
  }

  onSortChange(event: any) {
    this.sortOption = event.target.value;
  }
}
