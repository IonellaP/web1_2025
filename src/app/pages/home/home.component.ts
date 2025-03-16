import { Component } from '@angular/core';
import {BannerHomeComponent} from '../../components/home-components/banner-home/banner-home.component';
import {NewProductsComponent} from '../../components/new-products/new-products.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerHomeComponent,
    NewProductsComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
