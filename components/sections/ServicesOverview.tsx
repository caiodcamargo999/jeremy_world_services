'use client'

import Link from 'next/link'
import { Anchor, Users, Music, Palette, Briefcase, Megaphone, Trophy } from 'lucide-react'

const services = [
  {
    title: 'Yacht Rentals & Jet Ski',
    description: 'Experience the ultimate luxury on water with our exclusive yacht and jet ski experiences.',
    icon: Anchor,
    href: '/services/yacht-rentals',
    color: '#3B82F6'
  },
  {
    title: 'Guest List & Club Access',
    description: 'Gain exclusive access to the world\'s most prestigious clubs and events.',
    icon: Users,
    href: '/services/guest-list',
    color: '#8B5CF6'
  },
  {
    title: 'DJ & Artist Booking',
    description: 'Book world-class DJs and artists for your private events and celebrations.',
    icon: Music,
    href: '/services/dj-booking',
    color: '#10B981'
  },
  {
    title: 'Art Basel & Creative Collabs',
    description: 'Connect with the art world\'s elite and create meaningful collaborations.',
    icon: Palette,
    href: '/services/art-basel',
    color: '#6B7280'
  },
  {
    title: 'Business Development',
    description: 'Strategic consulting to scale your business and expand your influence.',
    icon: Briefcase,
    href: '/services/consulting',
    color: '#6B7280'
  },
  {
    title: 'Marketing & Brand Activation',
    description: 'Elevate your brand presence with cutting-edge marketing strategies.',
    icon: Megaphone,
    href: '/services/marketing',
    color: '#6B7280'
  },
  {
    title: 'Soccer Management',
    description: 'Professional talent management and career development for athletes.',
    icon: Trophy,
    href: '/services/soccer',
    color: '#6B7280'
  }
]

export function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm font-medium mb-6">
            Our Premium Services
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Gateway to
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Extraordinary Living</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Each service is meticulously crafted to deliver unparalleled experiences that transform 
            ordinary moments into extraordinary memories. Discover your path to luxury living.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <Link href={service.href}>
                <div className="bg-black rounded-2xl p-8 shadow-lg border border-gray-800 transition-all duration-300 h-full" style={{ borderColor: service.color }}>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: service.color }}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center font-medium group-hover:translate-x-2 transition-transform duration-300" style={{ color: service.color }}>
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link href="/contact">
            <button className="bg-gray-700 text-white font-semibold px-12 py-5 rounded-lg text-lg hover:bg-gray-600 transition-colors duration-200">
              Explore All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
} 