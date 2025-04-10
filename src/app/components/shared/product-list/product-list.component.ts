import {Component, Input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {Product} from '../../../interfaces/product.model';


@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe,],
  templateUrl: './product-list.component.html',
  standalone: true,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() product!: Product;

}
