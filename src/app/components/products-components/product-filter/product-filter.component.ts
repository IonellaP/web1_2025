import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-product-filter',
  imports: [
    FormsModule,
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './product-filter.component.html',
  standalone: true,
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
  @Output() filterChange = new EventEmitter<any>();

  searchTerm: string = '';

  brands = [{
    name: 'Apple',
    count: 110,
    checked: true
  },
    {
      name: 'Samsung',
      count: 125,
      checked: false
    },
    {
      name: 'Xiaomi',
      count: 88,
      checked: false
    },
    {
    name: 'Poco',
    count: 44,
    checked: false
  },
    {name: 'OPPO',
      count: 36,
      checked: false
    },
    {
      name: 'Honor',
      count: 10,
      checked: false
    },
    {
    name: 'Motorola',
    count: 34,
    checked: false
  },
    {
      name: 'Nokia',
      count: 22,
      checked: false
    },
    {name: 'Realme',
      count: 35,
      checked: false
    }];

  filterCategories = [
    {
      name: 'Battery capacity',
      expanded: false},
    {
    name: 'Screen type',
    expanded: false
  },
    {
      name: 'Screen diagonal',
      expanded: false
    },
    {
      name: 'Protection class',
      expanded: false
    },
    {
    name: 'Built-in memory',
    expanded: false
  }];

  get filteredBrands() {
    if (!this.searchTerm) {
      return this.brands;
    }
    return this.brands.filter(brand => brand.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  onBrandChange(brand: any, event: any) {
    brand.checked = event.target.checked;
    this.filterChange.emit({type: 'brand', data: this.brands.filter(b => b.checked).map(b => b.name)});
  }

  toggleExpand(category: any) {
    category.expanded = !category.expanded;
  }

}
