import { Component } from '@angular/core';
import {NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-saler-products-list',
  imports: [
    NgStyle,
    RouterLink
  ],
  templateUrl: './saler-products.component.html',
  standalone: true,
  styleUrl: './saler-products.component.css'
})
export class SalerProductsComponent {
  backgroundImage = './assets/images/home/Banner2.png';
  title = 'Big Summer';
  highlightedText = 'Sale';
  description = 'Commodo fames vitae vitae leo mauris in. Eu consequat.';
  buttonText = 'Shop Now';
  buttonLink = '/shop';

  get bannerStyle() {
    return {
      'background-image': `url(${this.backgroundImage})`
    };

}
}
