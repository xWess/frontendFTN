export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'competition' | 'meeting' | 'training';
  status: 'upcoming' | 'ongoing' | 'completed';
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  link: string;
} 