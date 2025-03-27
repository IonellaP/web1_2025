import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ThemeService} from '../../services/theme-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isDarkTheme: boolean | undefined;

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.subscribe((themeStatus) => {
      this.isDarkTheme = themeStatus;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

}
