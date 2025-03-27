import { Component } from '@angular/core';
import {BannerHomeComponent} from '../../components/home-components/banner-home/banner-home.component';
import {NewProductsComponent} from '../../components/home-components/new-products/new-products.component';
import {CategoryBrowseComponent} from '../../components/home-components/category-browse/category-browse.component';

@Component({
  selector: 'app-home',
  imports: [
    BannerHomeComponent,
    NewProductsComponent,
    CategoryBrowseComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
