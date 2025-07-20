'use client'

import { m } from 'framer-motion'
import { ArrowLeft, Award, Users, Globe, Star, Database, Network, BarChart3, Cpu, Sparkles, Crown, Zap } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { number: '500+', label: 'Elite Clients', icon: Database, description: 'High-net-worth individuals' },
  { number: '15+', label: 'Years Experience', icon: Award, description: 'Luxury expertise' },
  { number: '50+', label: 'Countries Served', icon: Network, description: 'Global reach' },
  { number: '4.9', label: 'Client Rating', icon: BarChart3, description: 'Exceptional satisfaction' }
]

const achievements = [
  {
    title: 'Featured in Forbes, Vogue, and GQ',
    description: 'Recognized by leading luxury publications',
    icon: Crown
  },
  {
    title: 'Trusted by Fortune 500 executives',
    description: 'Preferred partner for corporate leadership',
    icon: Users
  },
  {
    title: 'Exclusive partnerships with luxury brands',
    description: 'Direct access to premium experiences',
    icon: Sparkles
  },
  {
    title: 'Award-winning lifestyle curator',
    description: 'Industry recognition for excellence',
    icon: Zap
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 animate-gradient"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </m.div>

          {/* Main Content */}
          <div className="text-center">
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              About Jeremy
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              The Visionary Behind
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Extraordinary Living</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              For over 15 years, Jeremy has been crafting unparalleled luxury experiences for the world's most discerning individuals. 
              His unique approach combines exclusive access, personalized service, and an unwavering commitment to excellence.
            </m.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                A Journey of
                <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Excellence</span>
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  Jeremy's journey began with a simple belief: that luxury isn't about possessions, but about experiences that transform 
                  the way we see the world. This philosophy has guided every aspect of his work, from yacht charters to VIP access.
                </p>
                <p>
                  Over the years, Jeremy has built an unparalleled network of exclusive partnerships, gaining access to the world's 
                  most prestigious venues, events, and experiences that are simply unavailable to the general public.
                </p>
                <p>
                  Today, Jeremy's Lifestyle Ecosystem serves as the premier gateway for high-net-worth individuals seeking 
                  extraordinary experiences that define their legacy and elevate their lifestyle to unprecedented heights.
                </p>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-400 mb-4">J</div>
                    <div className="text-gray-500 text-sm">Jeremy's Signature</div>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <m.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Recognition &
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Achievements</span>
            </h2>
          </m.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <m.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> the Extraordinary?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join an exclusive community of high-achievers who have already discovered 
              the transformative power of Jeremy's Lifestyle Ecosystem.
            </p>

            <Link href="/contact">
              <m.button
                className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-200"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Access
              </m.button>
            </Link>
          </m.div>
        </div>
      </section>
    </div>
  )
} 