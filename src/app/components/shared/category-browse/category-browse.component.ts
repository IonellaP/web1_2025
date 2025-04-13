import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-browse',
  imports: [
    NgForOf
  ],
  templateUrl: './category-browse.component.html',
  standalone: true,
  styleUrl: './category-browse.component.css'
})
export class CategoryBrowseComponent {
  constructor(private router: Router) {}


  categories = [
    {
      name: 'Phones',
      icon: '/assets/icons/phone.svg',
    },
    {
      name: 'Smart Watches',
      icon: '/assets/icons/watch.svg',
    }, {
      name: 'Cameras',
      icon: '/assets/icons/camera.svg',
    }, {
      name: 'HeadPhones',
      icon: '/assets/icons/headphones.svg',
    }, {
      name: 'Computers',
      icon: '/assets/icons/computer.svg',
    }, {
      name: 'Gaming',
      icon: '/assets/icons/gaming.svg',
    },
  ]

  selectedCategory: any = null;

  onCategoryClick(category: any) {
    this.selectedCategory = category;
    console.log('Clicked on:', category.name);
    this.router.navigate(['/products']);
}
}
