import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmCarouselComponent, HlmCarouselContentComponent, HlmCarouselItemComponent, HlmCarouselNextComponent, HlmCarouselPreviousComponent } from '@spartan-ng/ui-carousel-helm';
import { NewsCardComponent } from '../news-card/news-card.component';
import { EventCardComponent } from '../event-card/event-card.component';
import { LandingPageService } from '../../services/landing-page.service';
import { HeroSlide, NewsItem, Event, Feature } from '../../models/landing-page.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HlmButtonDirective,
    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
    NewsCardComponent,
    EventCardComponent
  ],
  template: `
    <!-- Hero Section with Carousel -->
    <section class="relative hero-section overflow-hidden bg-background -mt-[64px]">
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      <hlm-carousel class="w-full max-w-7xl mx-auto">
        <hlm-carousel-content>
          @for (slide of heroSlides; track slide.id) {
            <hlm-carousel-item>
              <div class="relative h-[60vh] w-full overflow-hidden rounded-xl mx-auto">
                <div class="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
                <img 
                  [src]="slide.image" 
                  [alt]="slide.title" 
                  class="absolute inset-0 w-full h-full object-cover transform scale-105 animate-ken-burns"
                />
                <div class="absolute inset-0 flex flex-col justify-end p-6 md:p-12 z-20">
                  <div class="max-w-3xl mx-auto text-center">
                    <span class="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-4 backdrop-blur-sm">
                      Featured
                    </span>
                    <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                      {{slide.title}}
                    </h1>
                    <p class="text-lg md:text-xl mb-6 text-muted-foreground max-w-2xl mx-auto">
                      {{slide.subtitle}}
                    </p>
                    <a [routerLink]="slide.link" hlmBtn class="bg-primary hover:bg-primary/90">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 ml-2">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </hlm-carousel-item>
          }
        </hlm-carousel-content>
        <button hlm-carousel-previous class="absolute left-4 top-1/2 -translate-y-1/2 z-30 transform hover:scale-110 transition-transform"></button>
        <button hlm-carousel-next class="absolute right-4 top-1/2 -translate-y-1/2 z-30 transform hover:scale-110 transition-transform"></button>
      </hlm-carousel>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-muted/50">
      <div class="container px-4 mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold sm:text-4xl mb-4">Explore Tunisian Swimming</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover resources, events, and opportunities in the world of Tunisian swimming
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (feature of features; track feature.id) {
            <a [routerLink]="feature.link" class="group relative overflow-hidden rounded-lg border bg-card text-card-foreground p-8 hover:border-primary/50 transition-all hover:shadow-lg">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div class="relative z-10">
                <div class="mb-6 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  @switch (feature.id) {
                    @case ('1') {
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 text-primary">
                        <path d="M6 4v20" />
                        <path d="M18 4v20" />
                        <path d="M6 12h12" />
                        <path d="M6 20h12" />
                        <path d="M9 9h6" />
                        <path d="M9 17h6" />
                      </svg>
                    }
                    @case ('2') {
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 text-primary">
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                      </svg>
                    }
                    @case ('3') {
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7 text-primary">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    }
                  }
                </div>
                <h3 class="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{{feature.title}}</h3>
                <p class="text-muted-foreground text-sm">{{feature.description}}</p>
                <div class="mt-4 flex items-center text-primary">
                  <span class="text-sm font-medium">Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          }
        </div>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="py-20 bg-background">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <h2 class="text-3xl font-bold">Latest News</h2>
          <a routerLink="/news" class="group inline-flex items-center text-primary hover:text-primary/80">
            View all news
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <app-news-card
            *ngFor="let news of newsItems"
            [id]="news.id"
            [title]="news.title"
            [excerpt]="news.excerpt"
            [date]="news.date"
            [imageUrl]="news.imageUrl"
            [category]="news.category"
          ></app-news-card>
        </div>
      </div>
    </section>

    <!-- Upcoming Events Section -->
    <section class="py-20 bg-muted/50">
      <div class="container px-4 mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <h2 class="text-3xl font-bold">Upcoming Events</h2>
          <a routerLink="/events" class="group inline-flex items-center text-primary hover:text-primary/80">
            View all events
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <app-event-card
            *ngFor="let event of upcomingEvents"
            [id]="event.id"
            [title]="event.title"
            [date]="event.date"
            [time]="event.time"
            [location]="event.location"
            [type]="event.type"
            [status]="event.status"
          ></app-event-card>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 overflow-hidden bg-background">
      <div class="container px-4 mx-auto">
        <div class="relative z-10 max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold sm:text-4xl md:text-5xl">Join Our Swimming Community</h2>
          <p class="mt-4 text-lg text-muted-foreground">
            Whether you're a swimmer, coach, official, or fan, be part of Tunisia's swimming future.
          </p>
          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <a routerLink="/register" hlmBtn class="bg-primary hover:bg-primary/90">
              Get Started
            </a>
            <a routerLink="/contact" hlmBtn variant="outline">Contact Us</a>
          </div>
        </div>
      </div>
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    .bg-grid-pattern {
      background-image: linear-gradient(to right, rgb(var(--primary) / 0.2) 1px, transparent 1px),
                        linear-gradient(to bottom, rgb(var(--primary) / 0.2) 1px, transparent 1px);
      background-size: 14px 24px;
    }

    @keyframes ken-burns {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.05);
      }
    }

    .animate-ken-burns {
      animation: ken-burns 20s infinite alternate;
    }
  `]
})
export class HomeComponent implements OnInit, OnDestroy {
  heroSlides: HeroSlide[] = [];
  features: Feature[] = [
    {
      id: '1',
      title: 'Events & Competitions',
      description: 'Access national and international swimming competitions calendar and results.',
      link: '/events'
    },
    {
      id: '2',
      title: 'Training Programs',
      description: 'Professional training programs for swimmers of all levels and ages.',
      link: '/training'
    },
    {
      id: '3',
      title: 'Resources',
      description: 'Educational resources and guidelines for swimmers, coaches, and officials.',
      link: '/resources'
    }
  ];
  newsItems: NewsItem[] = [];
  upcomingEvents: Event[] = [];
  
  private destroy$ = new Subject<void>();

  constructor(private landingPageService: LandingPageService) {}

  ngOnInit() {
    this.loadHeroSlides();
    this.loadLatestNews();
    this.loadUpcomingEvents();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadHeroSlides() {
    this.landingPageService.getHeroSlides()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (slides) => this.heroSlides = slides,
        error: (error) => console.error('Error loading hero slides:', error)
      });
  }

  private loadLatestNews() {
    this.landingPageService.getLatestNews()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (news) => this.newsItems = news,
        error: (error) => console.error('Error loading latest news:', error)
      });
  }

  private loadUpcomingEvents() {
    this.landingPageService.getUpcomingEvents()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (events) => this.upcomingEvents = events,
        error: (error) => console.error('Error loading upcoming events:', error)
      });
  }
}
