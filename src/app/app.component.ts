import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './layouts/footer/footer.component';
import {HeaderComponent} from './layouts/header/header.component';
import {ThemeService} from './services/theme-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'web1-slaider';

  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }
}
