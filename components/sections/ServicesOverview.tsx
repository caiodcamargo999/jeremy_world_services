'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Anchor, 
  Users, 
  Music, 
  Palette, 
  Briefcase, 
  Megaphone, 
  Trophy,
  Sparkles,
  Crown,
  Zap,
  Target,
  Globe
} from 'lucide-react'

const services = [
  {
    title: 'Yacht Rentals & Jet Ski',
    description: 'Experience the ultimate luxury on water with our exclusive yacht and jet ski experiences.',
    icon: Anchor,
    href: '/services/yacht-rentals'
  },
  {
    title: 'Guest List & Club Access',
    description: 'Gain exclusive access to the world\'s most prestigious clubs and events.',
    icon: Crown,
    href: '/services/guest-list'
  },
  {
    title: 'DJ & Artist Booking',
    description: 'Book world-class DJs and artists for your private events and celebrations.',
    icon: Music,
    href: '/services/dj-booking'
  },
  {
    title: 'Art Basel & Creative Collabs',
    description: 'Connect with the art world\'s elite and create meaningful collaborations.',
    icon: Palette,
    href: '/services/art-basel'
  },
  {
    title: 'Business Development',
    description: 'Strategic consulting to scale your business and expand your influence.',
    icon: Target,
    href: '/services/consulting'
  },
  {
    title: 'Marketing & Brand Activation',
    description: 'Elevate your brand presence with cutting-edge marketing strategies.',
    icon: Zap,
    href: '/services/marketing'
  },
  {
    title: 'Soccer Management',
    description: 'Professional talent management and career development for athletes.',
    icon: Trophy,
    href: '/services/soccer'
  }
]

export function ServicesOverview() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full text-gray-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Premium Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Exclusive Lifestyle
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our curated collection of premium services designed to elevate your lifestyle and create extraordinary experiences.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
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
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <motion.button
              className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold px-10 py-5 rounded-lg text-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-200 flex items-center mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5 mr-2" />
              Explore All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 