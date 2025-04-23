import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, HlmButtonDirective, HlmInputDirective],
  template: `
    <footer class="border-t bg-background">
      <div class="container py-16 space-y-8">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <!-- Brand Section -->
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              <span class="font-semibold">Tunisian Swim Hub</span>
            </div>
            <p class="text-sm text-muted-foreground">
              Empowering swimmers across Tunisia with professional training and resources.
            </p>
          </div>

          <!-- Resources -->
          <div class="space-y-4">
            <h3 class="text-sm font-medium">Resources</h3>
            <nav class="flex flex-col space-y-3">
              <a routerLink="/about" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a routerLink="/services" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </a>
              <a routerLink="/contact" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a routerLink="/blog" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
            </nav>
          </div>

          <!-- Company -->
          <div class="space-y-4">
            <h3 class="text-sm font-medium">Company</h3>
            <nav class="flex flex-col space-y-3">
              <a routerLink="/careers" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </a>
              <a routerLink="/legal" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Legal
              </a>
              <a routerLink="/privacy" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a routerLink="/press" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Press
              </a>
            </nav>
          </div>

          <!-- Newsletter -->
          <div class="space-y-4">
            <h3 class="text-sm font-medium">Stay updated</h3>
            <p class="text-sm text-muted-foreground">
              Get notified about swimming events and updates.
            </p>
            <div class="flex flex-col space-y-2">
              <div class="flex max-w-sm items-center space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  hlmInput
                  class="flex-1"
                  aria-label="Email for newsletter"
                />
                <button hlmBtn variant="default" size="sm">
                  Subscribe
                </button>
              </div>
              <p class="text-xs text-muted-foreground">
                We care about your data. Read our <a routerLink="/privacy" class="underline underline-offset-4 hover:text-foreground">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="flex flex-col gap-4 pt-8 border-t items-center justify-between sm:flex-row">
          <p class="text-sm text-muted-foreground">
            © {{currentYear}} Tunisian Swim Hub. All rights reserved.
          </p>
          <div class="flex items-center space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
              <span class="sr-only">Twitter</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              <span class="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              <span class="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
