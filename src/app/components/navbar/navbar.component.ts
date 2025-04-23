import { Component, computed, effect, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, HlmButtonDirective],
  template: `
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-14 items-center">
        <div class="flex flex-1 items-center justify-between">
          <!-- Logo and Navigation -->
          <div class="flex items-center space-x-6">
            <a routerLink="/" class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
              <span class="hidden font-bold sm:inline-block">Tunisian Swim Hub</span>
            </a>

            <nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a routerLink="/about" 
                 class="transition-colors text-foreground/60 hover:text-foreground/80">
                About
              </a>
              <a routerLink="/services" 
                 class="transition-colors text-foreground/60 hover:text-foreground/80">
                Services
              </a>
              <a routerLink="/contact" 
                 class="transition-colors text-foreground/60 hover:text-foreground/80">
                Contact
              </a>
            </nav>
          </div>

          <!-- Right side buttons -->
          <div class="flex items-center space-x-2">
            <button hlmBtn variant="ghost" size="sm" class="h-8 w-8 px-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            
            <button hlmBtn variant="ghost" size="sm" class="relative h-8 w-8 px-0" (click)="toggleTheme()">
              <div class="relative h-5 w-5">
                <!-- Sun icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="absolute h-full w-full transition-opacity duration-200"
                  [class.opacity-0]="isDark()"
                >
                  <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                </svg>
                
                <!-- Moon icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="absolute h-full w-full transition-opacity duration-200"
                  [class.opacity-0]="!isDark()"
                >
                  <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
                </svg>
              </div>
              <span class="sr-only">Toggle theme</span>
            </button>

            <button hlmBtn variant="ghost" size="sm" class="h-8 w-8 px-0 md:hidden" (click)="toggleMobileMenu()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span class="sr-only">Toggle menu</span>
            </button>

            <div class="hidden md:flex items-center space-x-2">
              <button hlmBtn variant="ghost" size="sm">
                Sign In
              </button>
              <button hlmBtn variant="default" size="sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden" [class.hidden]="!isMobileMenuOpen">
        <div class="space-y-1 p-4 border-t">
          <a routerLink="/about" 
             class="flex items-center py-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
            About
          </a>
          <a routerLink="/services" 
             class="flex items-center py-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
            Services
          </a>
          <a routerLink="/contact" 
             class="flex items-center py-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60">
            Contact
          </a>
          <div class="pt-4 mt-4 border-t flex items-center space-x-2">
            <button hlmBtn variant="ghost" size="sm" class="flex-1">
              Sign In
            </button>
            <button hlmBtn variant="default" size="sm" class="flex-1">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID);
  isMobileMenuOpen = false;
  isDark = computed(() => {
    const dark = this.themeService.isDark();
    console.log('Computed isDark:', dark);
    return dark;
  });

  constructor(private themeService: ThemeService) {
    if (isPlatformBrowser(this.platformId)) {
      effect(() => {
        const isDarkMode = this.isDark();
        console.log('Effect running, isDark:', isDarkMode);
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
    }
  }

  toggleTheme() {
    console.log('Toggle theme clicked');
    this.themeService.toggleTheme();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
