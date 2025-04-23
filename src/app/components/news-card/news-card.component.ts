import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="group relative h-full overflow-hidden rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
      <a [routerLink]="['/news', id]" class="block h-full">
        <div class="relative h-48 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10 group-hover:from-background/90 transition-colors"></div>
          <img 
            [src]="imageUrl" 
            [alt]="title"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute top-4 right-4 z-20">
            <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-background/95 text-foreground backdrop-blur-sm transition-colors">
              {{category}}
            </span>
          </div>
        </div>
        <div class="p-6">
          <time class="text-sm text-muted-foreground">{{date}}</time>
          <h3 class="mt-3 text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {{title}}
          </h3>
          <p class="mt-2 text-sm text-muted-foreground line-clamp-2">
            {{excerpt}}
          </p>
          <div class="mt-4 flex items-center text-primary">
            <span class="text-sm font-medium">Read more</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </a>
    </article>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class NewsCardComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() excerpt!: string;
  @Input() date!: string;
  @Input() imageUrl!: string;
  @Input() category!: string;
}
