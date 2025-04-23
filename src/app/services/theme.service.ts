import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isDarkTheme = signal(false);
  
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const initialTheme = this.getInitialTheme();
      console.log('Initial theme:', initialTheme ? 'dark' : 'light');
      this.isDarkTheme.set(initialTheme);
      this.setTheme(this.isDarkTheme());
    }
  }

  private getInitialTheme(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }

    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      console.log('Found saved theme:', savedTheme);
      return savedTheme === 'dark';
    }
    
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log('System prefers dark mode:', prefersDark);
    return prefersDark;
  }

  toggleTheme() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    console.log('Toggling theme from:', this.isDarkTheme() ? 'dark' : 'light');
    this.isDarkTheme.update(dark => !dark);
    console.log('Theme toggled to:', this.isDarkTheme() ? 'dark' : 'light');
    this.setTheme(this.isDarkTheme());
  }

  private setTheme(isDark: boolean) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    console.log('Setting theme to:', isDark ? 'dark' : 'light');
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Apply theme
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log('Current document classes:', document.documentElement.classList.toString());
  }

  isDark() {
    const dark = this.isDarkTheme();
    console.log('isDark() called, returning:', dark);
    return dark;
  }
} 