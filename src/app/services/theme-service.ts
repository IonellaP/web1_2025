import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();
  private readonly isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';

      this.isDarkThemeSubject.next(isDark);
      this.applyTheme(isDark);

      setTimeout(() => this.updateNavColors(), 100);
    }
  }

  toggleTheme() {
    const newTheme = !this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(newTheme);

    if (this.isBrowser) {
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      this.applyTheme(newTheme);

      setTimeout(() => this.updateNavColors(), 100);
    }
  }

  applyTheme(isDark: boolean) {
    if (!this.isBrowser) return;

    const body = this.document.body;
    const header = this.document.querySelector('header') as HTMLElement;

    if (isDark) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
      if (header) {
        header.classList.add('dark-theme');
        header.classList.remove('light-theme');
      }
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
      if (header) {
        header.classList.add('light-theme');
        header.classList.remove('dark-theme');
      }
    }
  }

  private updateNavColors() {
    if (!this.isBrowser) return;

    const links = this.document.querySelectorAll("nav a") as NodeListOf<HTMLAnchorElement>;
    const isDark = this.document.body.classList.contains("dark-theme");

    links.forEach(link => {
      link.style.color = isDark ? "#ffffff" : "#333";
    });
  }
}
