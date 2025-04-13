import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {Breadcrump} from '../../../interfaces/breadcrump';

@Component({
  selector: 'app-breadcrumps',
  imports: [RouterLink, NgIf, NgForOf],
  templateUrl: './breadcrumps.component.html',
  standalone: true,
  styleUrl: './breadcrumps.component.css'
})
export class BreadcrumbsComponent {
  @Input() items: Breadcrump[] = [];
}
