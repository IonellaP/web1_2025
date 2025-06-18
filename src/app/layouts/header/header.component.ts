import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme-service';
import { AuthService } from '../../auth/auth.service';
import { CommonModule } from '@angular/common';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navLinks = [
    { path: '/', title: 'Home' },
    { path: '/products', title: 'Products' },
    { path: '/about', title: 'About' },
    { path: '/contact-us', title: 'Contact Us' }
  ];

  constructor(
    private themeService: ThemeService,
    private authService: AuthService,
    private router: Router
  ) {}

  get vm$() {
    return combineLatest([
      this.themeService.isDarkTheme$,
      this.authService.user$
    ]).pipe(
      map(([isDarkTheme, user]) => ({
        isDarkTheme,
        isLoggedIn: !!user,
        userInitials: this.getInitials(user?.email),
        userEmail: user?.email || ''
      }))
    );
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']))
      .catch(error => console.error('Logout failed:', error));
  }

  private getInitials(email?: string | null): string {
    if (!email) return '';
    const [namePart] = email.split('@');
    const nameParts = namePart.split(/[._]/);
    return nameParts
      .filter(part => part.length > 0)
      .slice(0, 2)
      .map(part => part.charAt(0).toUpperCase())
      .join('');
  }
}
