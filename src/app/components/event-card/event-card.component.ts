import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="group relative h-full overflow-hidden rounded-lg border bg-card text-card-foreground hover:border-primary/50 transition-all">
      <a [routerLink]="['/events', id]" class="block h-full p-6">
        <div class="flex flex-col h-full">
          <div class="flex items-center justify-between">
            <span [class]="'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm transition-colors ' + getTypeClass()">
              <span [class]="'mr-1.5 h-1.5 w-1.5 rounded-full ' + getTypeDotClass()"></span>
              {{getTypeLabel()}}
            </span>
            <time class="text-sm text-muted-foreground">{{date}}</time>
          </div>
          
          <h3 class="mt-4 text-lg font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {{title}}
          </h3>
          
          <div class="mt-4 flex flex-col space-y-3 text-sm text-muted-foreground">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2 text-muted-foreground/70">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {{time}}
            </div>
            
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mr-2 text-muted-foreground/70">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {{location}}
            </div>
          </div>

          <div class="mt-6 pt-6 border-t flex items-center text-primary mt-auto">
            <span class="text-sm font-medium">View details</span>
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
export class EventCardComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() date!: string;
  @Input() time!: string;
  @Input() location!: string;
  @Input() type!: 'competition' | 'meeting' | 'training';
  @Input() status!: 'upcoming' | 'ongoing' | 'completed';

  getTypeClass(): string {
    switch (this.type) {
      case 'competition':
        return 'bg-destructive/10 text-destructive dark:bg-destructive/20';
      case 'meeting':
        return 'bg-primary/10 text-primary dark:bg-primary/20';
      case 'training':
        return 'bg-success/10 text-success dark:bg-success/20';
      default:
        return '';
    }
  }

  getTypeDotClass(): string {
    switch (this.type) {
      case 'competition':
        return 'bg-destructive';
      case 'meeting':
        return 'bg-primary';
      case 'training':
        return 'bg-success';
      default:
        return '';
    }
  }

  getTypeLabel(): string {
    return this.type.charAt(0).toUpperCase() + this.type.slice(1);
  }
}
