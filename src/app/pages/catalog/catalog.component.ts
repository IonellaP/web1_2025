import { Component } from '@angular/core';
import {CategoryBrowseComponent} from '../../components/shared/category-browse/category-browse.component';
import {DiscountsComponent} from '../../components/shared/discounts/discounts.component';
import {BreadcrumbsComponent} from '../../components/base/breadcrumps/breadcrumps.component';

@Component({
  selector: 'app-catalog',
  imports: [
    CategoryBrowseComponent,
    DiscountsComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './catalog.component.html',
  standalone: true,
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Catalog', url: '/catalog' },
  ];

}
