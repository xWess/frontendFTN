import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HeroSlide, NewsItem, Event, Feature } from '../models/landing-page.model';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHeroSlides(): Observable<HeroSlide[]> {
    return this.http.get<HeroSlide[]>(`${this.apiUrl}/hero-slides`);
  }

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(`${this.apiUrl}/features`);
  }

  getLatestNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(`${this.apiUrl}/news/latest`);
  }

  getUpcomingEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/events/upcoming`);
  }
} 