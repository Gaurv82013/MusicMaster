// Core application types

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

export interface FeaturedWebinar {
  id: number;
  title: string;
  slug: string;
  description: string;
  isFeatured: boolean;
}

export interface Instructor {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface FeatureContent {
  id: number;
  title: string;
  description: string;
}
