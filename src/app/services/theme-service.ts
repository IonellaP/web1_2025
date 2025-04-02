import { Injectable, Inject } from '@angular/core';
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
    const isDark = savedTheme === 'dark';

    this.isDarkThemeSubject.next(isDark);
    this.applyTheme(isDark);

    // 🔥 Fix: Așteaptă un mic delay înainte de actualizarea navigației
    setTimeout(() => this.updateNavColors(), 100);
  }

  toggleTheme() {
    const newTheme = !this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    this.applyTheme(newTheme);

    // 🔥 Fix: Actualizează navigația după schimbare
    setTimeout(() => this.updateNavColors(), 100);
  }

  applyTheme(isDark: boolean) {
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
    const links = this.document.querySelectorAll("nav a") as NodeListOf<HTMLAnchorElement>;
    const isDark = this.document.body.classList.contains("dark-theme");

    links.forEach(link => {
      link.style.color = isDark ? "#ffffff" : "#333";
    });
  }
}
