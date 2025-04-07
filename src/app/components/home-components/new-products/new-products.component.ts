import {Component} from '@angular/core';

@Component({
  selector: 'app-new-products',
  imports: [],
  templateUrl: './new-products.component.html',
  standalone: true,
  styleUrl: './new-products.component.css',
})
export class NewProductsComponent {

  products = [
    {
      id: 1,
      name: 'Playstation 5',
      description: 'Incredibly powerful CPU, GPU, SSD. With an SSD with integrated I/O that redefines your PlayStation experience.',
      image: 'assets/images/playstation5.jpg',
      action: 'Shop Now'
    },
    {
      id: 2,
      name: 'Macbook Air',
      description: 'The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.',
      image: 'assets/images/macbook-air.jpg',
      action: 'Shop Now'
    },
    {
      id: 3,
      name: 'Apple AirPods Max',
      description: 'Computational audio. Canopy in speakers.',
      image: 'assets/images/airpods-max.jpg',
      action: 'Shop Now'
    },
    {
      id: 4,
      name: 'Apple Vision Pro',
      description: 'An immersive way to experience entertainment.',
      image: 'assets/images/vision-pro.jpg',
      action: 'Shop Now'
    }
  ];
}
