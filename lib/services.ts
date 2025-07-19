import { Service } from '@/types'

// Mock data for services - in production this would come from Sanity CMS
const services: Service[] = [
  {
    id: 'yacht-rentals',
    title: 'Yacht Rentals & Jet Ski Experiences',
    slug: 'yacht-rentals',
    description: 'Experience the ultimate luxury on water with our exclusive yacht and jet ski experiences. From intimate sunset cruises to extravagant celebrations, we provide access to the world\'s most prestigious vessels.',
    heroImage: '/images/services/yacht-hero.jpg',
    heroVideo: '/videos/yacht-experience.mp4',
    vslUrl: 'https://player.vimeo.com/video/123456789',
    benefits: [
      {
        id: '1',
        title: 'Exclusive Access',
        description: 'Access to the most prestigious yachts and vessels in the world',
        icon: 'anchor',
        order: 1
      },
      {
        id: '2',
        title: 'Personal Concierge',
        description: 'Dedicated service team to handle every detail of your experience',
        icon: 'concierge',
        order: 2
      },
      {
        id: '3',
        title: 'Custom Experiences',
        description: 'Tailored experiences designed around your specific desires',
        icon: 'custom',
        order: 3
      }
    ],
    testimonials: [
      {
        id: '1',
        name: 'Michael Chen',
        title: 'Tech CEO',
        company: 'Silicon Valley',
        content: 'The yacht experience was absolutely incredible. Every detail was perfect.',
        image: '/images/testimonials/michael.jpg',
        rating: 5,
        verified: true
      }
    ],
    pricing: [
      {
        id: '1',
        name: 'Sunset Cruise',
        price: 2500,
        currency: 'USD',
        description: 'Perfect for intimate gatherings',
        features: ['4-hour cruise', 'Champagne service', 'Professional crew', 'Insurance included'],
        stripePriceId: 'price_sunset_cruise'
      },
      {
        id: '2',
        name: 'Luxury Charter',
        price: 15000,
        currency: 'USD',
        description: 'Full-day luxury experience',
        features: ['8-hour charter', 'Premium catering', 'Water toys included', 'Professional photography'],
        popular: true,
        stripePriceId: 'price_luxury_charter'
      }
    ],
    faqs: [
      {
        id: '1',
        question: 'What is included in the yacht rental?',
        answer: 'All rentals include professional crew, insurance, fuel, and basic amenities. Additional services can be arranged.',
        category: 'general'
      }
    ],
    gallery: [
      {
        id: '1',
        image: '/images/gallery/yacht-1.jpg',
        title: 'Luxury Yacht Experience',
        description: 'Experience the ultimate in maritime luxury',
        type: 'image'
      }
    ],
    transformationStory: {
      before: {
        title: 'Before: Ordinary Weekends',
        description: 'Spending weekends like everyone else',
        image: '/images/transformations/before-yacht.jpg'
      },
      after: {
        title: 'After: Extraordinary Experiences',
        description: 'Creating memories that last a lifetime',
        image: '/images/transformations/after-yacht.jpg'
      },
      quote: 'Jeremy transformed our entire approach to luxury living.',
      author: 'Sarah Johnson, Entrepreneur'
    },
    socialProof: {
      logos: ['/images/logos/luxury-brand-1.png', '/images/logos/luxury-brand-2.png'],
      stats: {
        clients: 150,
        revenue: '$2.5M',
        years: 8
      },
      featuredClients: ['Fortune 500 CEOs', 'Celebrities', 'Professional Athletes']
    }
  },
  // Add more services here...
]

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return services.find(service => service.slug === slug) || null
}

export async function getAllServices(): Promise<Service[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return services
}

export async function getServiceSlugs(): Promise<string[]> {
  return services.map(service => service.slug)
} 