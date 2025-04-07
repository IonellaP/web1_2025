import {Component, Input} from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  imports: [
    NgForOf,
    CurrencyPipe,
  ],
  templateUrl: './product-list.component.html',
  standalone: true,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() product!: Product;

}
