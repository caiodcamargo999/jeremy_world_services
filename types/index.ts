export interface Service {
  id: string
  title: string
  slug: string
  description: string
  heroImage: string
  heroVideo?: string
  vslUrl: string
  benefits: Benefit[]
  testimonials: Testimonial[]
  pricing: PricingOption[]
  faqs: FAQ[]
  gallery: GalleryItem[]
  transformationStory: TransformationStory
  socialProof: SocialProof
}

export interface Benefit {
  id: string
  title: string
  description: string
  icon: string
  order: number
}

export interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  content: string
  image: string
  rating: number
  verified: boolean
}

export interface PricingOption {
  id: string
  name: string
  price: number
  currency: string
  description: string
  features: string[]
  popular?: boolean
  stripePriceId: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export interface GalleryItem {
  id: string
  image: string
  title: string
  description?: string
  type: 'image' | 'video'
  videoUrl?: string
}

export interface TransformationStory {
  before: {
    title: string
    description: string
    image: string
  }
  after: {
    title: string
    description: string
    image: string
  }
  quote: string
  author: string
}

export interface SocialProof {
  logos: string[]
  stats: {
    clients: number
    revenue: string
    years: number
  }
  featuredClients: string[]
}

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  service: string
  message: string
  budget?: string
  timeline?: string
}

export interface BookingForm {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  guests?: number
  specialRequests?: string
}

export interface StripeProduct {
  id: string
  name: string
  description: string
  price: number
  currency: string
  stripePriceId: string
  features: string[]
}

export interface SanityConfig {
  projectId: string
  dataset: string
  apiVersion: string
  useCdn: boolean
  token?: string
}

export interface AnalyticsEvent {
  event: string
  category: string
  action: string
  label?: string
  value?: number
}

export interface SEOData {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  canonical: string
} 