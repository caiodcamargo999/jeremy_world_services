'use client'

import Link from 'next/link'
import { m } from 'framer-motion'
import { 
  Sailboat, 
  Users, 
  Headphones, 
  Palette, 
  Briefcase, 
  Megaphone, 
  Trophy,
  Sparkles,
  Crown,
  Zap,
  Target,
  Globe,
  Settings,
  Cpu,
  Database,
  Network,
  Shield,
  Rocket,
  Layers,
  Command,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    title: 'Yacht Rentals & Jet Ski',
    description: 'Experience the ultimate luxury on water with our exclusive yacht and jet ski experiences.',
    icon: Sailboat,
    href: '/services/yacht-rentals'
  },
  {
    title: 'Guest List & Club Access',
    description: 'Gain exclusive access to the world\'s most prestigious clubs and events.',
    icon: Shield,
    href: '/services/guest-list'
  },
  {
    title: 'DJ & Artist Booking',
    description: 'Book world-class DJs and artists for your private events and celebrations.',
    icon: Headphones,
    href: '/services/dj-booking'
  },
  {
    title: 'Art Basel & Creative Collabs',
    description: 'Connect with the art world\'s elite and create meaningful collaborations.',
    icon: Layers,
    href: '/services/art-basel'
  },
  {
    title: 'Business Development',
    description: 'Strategic consulting to scale your business and expand your influence.',
    icon: Cpu,
    href: '/services/consulting'
  },
  {
    title: 'Marketing & Brand Activation',
    description: 'Elevate your brand presence with cutting-edge marketing strategies.',
    icon: Rocket,
    href: '/services/marketing'
  },
  {
    title: 'Soccer Management',
    description: 'Professional talent management and career development for athletes.',
    icon: Command,
    href: '/services/soccer'
  }
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Exclusive
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Services</span>
          </m.h2>
          
          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transform your lifestyle with our curated selection of premium services, 
            designed for those who demand nothing but the extraordinary.
          </m.p>
        </m.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={service.href}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full group-hover:scale-[1.02] group-hover:shadow-xl">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-gray-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-gray-300 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <button className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:from-gray-600 hover:to-gray-500 hover:scale-105 hover:-translate-y-0.5 active:scale-95">
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </Link>
        </m.div>
      </div>
    </section>
  )
} 