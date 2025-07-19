import { Metadata } from 'next'
import { ArrowLeft, Play, Star, Users, MapPin, Calendar, Sailboat, Zap, Waves, Compass, Anchor, Navigation } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Yacht Rentals & Jet Ski Experiences | Jeremy\'s Lifestyle Ecosystem',
  description: 'Experience the ultimate luxury on water with our exclusive yacht and jet ski experiences. Premium charters, VIP service, and unforgettable moments.',
}

const benefits = [
  {
    icon: Compass,
    title: 'Premium Fleet',
    description: 'Access to the world\'s most luxurious yachts and high-performance jet skis'
  },
  {
    icon: Users,
    title: 'VIP Service',
    description: 'Dedicated crew, personalized experiences, and white-glove service'
  },
  {
    icon: Navigation,
    title: 'Global Destinations',
    description: 'Exclusive access to the most beautiful waters and hidden coves worldwide'
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Last-minute availability and flexible scheduling for spontaneous adventures'
  }
]

const experiences = [
  {
    name: 'Luxury Yacht Charter',
    description: 'Full-service yacht experiences with professional crew and gourmet dining',
    duration: '4-12 hours'
  },
  {
    name: 'Jet Ski Adventures',
    description: 'High-performance jet ski experiences with expert guides',
    duration: '2-6 hours'
  },
  {
    name: 'Corporate Events',
    description: 'Exclusive corporate yacht events and team building experiences',
    duration: 'Custom'
  },
  {
    name: 'Celebration Packages',
    description: 'Special occasion packages for birthdays, anniversaries, and milestones',
    duration: 'Full day'
  }
]

const testimonials = [
  {
    name: 'Michael Rodriguez',
    title: 'Tech Executive',
    content: 'The yacht experience was beyond anything I\'ve ever experienced. The crew was incredible and the service was impeccable.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    title: 'Luxury Traveler',
    content: 'Jeremy\'s team made our anniversary unforgettable. The jet ski adventure was thrilling and perfectly organized.',
    rating: 5
  }
]

const packages = [
  {
    name: 'Day Charter',
    price: '$25,000',
    description: 'Luxury yacht experience for the day',
    features: [
      'Professional crew',
      'Gourmet catering',
      'Water toys included',
      'Insurance coverage',
      'Fuel included'
    ]
  },
  {
    name: 'Weekend Escape',
    price: '$75,000',
    description: 'Extended luxury yacht experience',
    features: [
      '2-3 day charter',
      'Premium accommodations',
      'Personal chef',
      'Water sports equipment',
      'Destination planning'
    ],
    popular: true
  },
  {
    name: 'Jet Ski Package',
    price: '$15,000',
    description: 'High-performance jet ski adventure',
    features: [
      'Professional guide',
      'Safety equipment',
      'Multiple locations',
      'Photo package',
      'Refreshments included'
    ]
  }
]

export default function YachtRentalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section with VSL */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 animate-gradient"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in-left">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </div>

          {/* Service Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full text-gray-300 text-sm font-medium mb-8 animate-fade-in-up">
            <Sailboat className="w-4 h-4 mr-2 text-gray-300" />
            Premium Water Experiences
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Experience Luxury
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> on Water</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up">
            Access the world's most exclusive yachts and high-performance jet skis. 
            Premium charters, VIP service, and unforgettable moments on the water.
          </p>

          {/* VSL Video Section */}
          <div className="mb-12 animate-fade-in-up">
            <div className="relative max-w-4xl mx-auto">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-800/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110 active:scale-95">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-white text-sm">
                  Watch: "Luxury on Water: The Ultimate Yacht Experience" (5:30)
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link href="/checkout?service=yacht-rentals">
              <button className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold px-10 py-5 rounded-lg text-lg transition-all duration-200 flex items-center hover:from-gray-600 hover:to-gray-500 hover:scale-105 hover:-translate-y-0.5 active:scale-95">
                Book Experience
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </button>
            </Link>
            
            <button className="bg-transparent border-2 border-gray-600 text-gray-300 font-semibold px-8 py-5 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200 hover:scale-102 active:scale-98">
              View Fleet
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Water Experiences</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gray-700/50 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Water
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Experiences</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.name}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{experience.name}</h3>
                  <span className="text-gray-400 text-sm">{experience.duration}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Client Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-300 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Experience</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-500 relative' 
                    : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-gray-600'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{pkg.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href={`/checkout?service=yacht-rentals&package=${pkg.name.toLowerCase().replace(' ', '-')}`}>
                  <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-gray-600 to-gray-500 text-white hover:from-gray-500 hover:to-gray-400'
                      : 'bg-transparent border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                  } hover:scale-105 active:scale-95`}>
                    Book Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Luxury on Water?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join the elite who choose Jeremy's World Services for their most memorable water experiences.
            </p>
            <Link href="/checkout?service=yacht-rentals">
              <button className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold px-12 py-5 rounded-lg text-lg transition-all duration-200 hover:from-gray-600 hover:to-gray-500 hover:scale-105 hover:-translate-y-0.5 active:scale-95">
                Start Your Journey
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180 inline" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 
