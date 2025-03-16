import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkThemeSubject.next(true);
    }
  }

  toggleTheme() {
    const newTheme = !this.isDarkThemeSubject.value;
    this.isDarkThemeSubject.next(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  }
}
