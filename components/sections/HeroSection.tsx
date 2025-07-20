'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
import { Play, ArrowRight, Sparkles, Globe, Crown } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full text-gray-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Exclusive Access Only
          </m.div>

          {/* Main Headline */}
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Transform Your Reality Into
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Extraordinary</span>
          </m.h1>

          {/* Subheadline */}
          <m.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Experience the pinnacle of luxury living with Jeremy's exclusive lifestyle ecosystem. 
            From yacht charters to VIP access, we craft moments that define your legacy.
          </m.p>

          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact">
              <m.button
                className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold px-10 py-5 rounded-lg text-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-200 flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </m.button>
            </Link>
            
            <m.button
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <m.div 
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-600"
                whileHover={{ scale: 1.1 }}
              >
                <Play className="w-5 h-5 text-white ml-1" />
              </m.div>
              <span className="text-lg font-medium">Watch Experience</span>
            </m.button>
          </m.div>

          {/* Social Proof */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-500 text-sm mb-4">Trusted by elite clients worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <m.div 
                className="text-gray-500 text-sm flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Crown className="w-4 h-4 mr-2" />
                Luxury Brands
              </m.div>
              <m.div 
                className="text-gray-500 text-sm flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Globe className="w-4 h-4 mr-2" />
                VIP Events
              </m.div>
              <m.div 
                className="text-gray-500 text-sm flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Exclusive Clubs
              </m.div>
            </div>
          </m.div>
        </m.div>
      </div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <m.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <m.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </m.div>
      </m.div>
    </section>
  )
} 