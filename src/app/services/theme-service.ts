import { Injectable, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkThemeSubject.next(true);
      this.applyTheme(true);
    } else {
      this.isDarkThemeSubject.next(false);
      this.applyTheme(false);
    }
  }

  toggleTheme() {
    const newTheme = !this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    this.applyTheme(newTheme);
  }

  applyTheme(isDark: boolean) {
    const body = this.document.body;
    const header = this.document.querySelector('header') as HTMLElement;

    console.log('Header:', header);

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
}
