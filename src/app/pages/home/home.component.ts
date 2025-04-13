import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BannerHomeComponent} from '../../components/home-components/banner-home/banner-home.component';
import {NewProductsComponent} from '../../components/home-components/new-products/new-products.component';
import {CategoryBrowseComponent} from '../../components/shared/category-browse/category-browse.component';
import {NewArrivalComponent} from '../../components/home-components/new-arrival/new-arrival.component';
import {ProductShowCaseComponent} from '../../components/home-components/product-show-case/product-show-case.component';
import {DiscountsComponent} from '../../components/shared/discounts/discounts.component';
import {SalerProductsComponent} from '../../components/shared/saler-products/saler-products.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    BannerHomeComponent,
    NewProductsComponent,
    CategoryBrowseComponent,
    NewArrivalComponent,
    ProductShowCaseComponent,
    DiscountsComponent,
    SalerProductsComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
