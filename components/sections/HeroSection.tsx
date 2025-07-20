'use client'

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
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full text-gray-300 text-sm font-medium mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 mr-2" />
            Exclusive Access Only
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Transform Your Reality Into
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Extraordinary</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up">
            Experience the pinnacle of luxury living with Jeremy's exclusive lifestyle ecosystem. 
            From yacht rentals to VIP access, transform your reality into extraordinary.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link href="/services">
              <button className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:from-gray-600 hover:to-gray-500 hover:scale-105 hover:-translate-y-0.5 active:scale-95">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </Link>
            
            <button className="bg-transparent border-2 border-gray-600 text-gray-300 font-semibold px-8 py-4 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200 hover:scale-102 active:scale-98">
              Watch Video
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm mb-4">Trusted by elite clients worldwide</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-gray-500 text-sm flex items-center"
                   onMouseEnter={(e) => e.currentTarget.classList.add('scale-105')}
                   onMouseLeave={(e) => e.currentTarget.classList.remove('scale-105')}>
                <Crown className="w-4 h-4 mr-2" />
                Luxury Brands
              </div>
              <div className="text-gray-500 text-sm flex items-center"
                   onMouseEnter={(e) => e.currentTarget.classList.add('scale-105')}
                   onMouseLeave={(e) => e.currentTarget.classList.remove('scale-105')}>
                <Globe className="w-4 h-4 mr-2" />
                VIP Events
              </div>
              <div className="text-gray-500 text-sm flex items-center"
                   onMouseEnter={(e) => e.currentTarget.classList.add('scale-105')}
                   onMouseLeave={(e) => e.currentTarget.classList.remove('scale-105')}>
                <Sparkles className="w-4 h-4 mr-2" />
                Exclusive Clubs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
} 