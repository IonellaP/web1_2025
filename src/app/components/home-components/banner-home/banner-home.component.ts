import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-banner-home',
  imports: [
    RouterLink
  ],
  templateUrl: './banner-home.component.html',
  standalone: true,
  styleUrl: './banner-home.component.css'
})
export class BannerHomeComponent {

}
