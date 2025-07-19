'use client'

import Link from 'next/link'
import { ArrowRight, Clock, Users } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-lg font-medium mb-8">
            <Clock className="w-5 h-5 mr-2" />
            Limited Availability - Only 5 Spots This Month
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block text-yellow-500"> Reality?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Join an exclusive community of high-achievers who have already discovered 
            the extraordinary. Your journey to luxury living starts with a single step.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="text-gray-300">Exclusive Network Access</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="text-gray-300">Priority Booking</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="text-gray-300">Personal Concierge</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <button className="bg-yellow-500 text-black font-semibold px-12 py-5 rounded-lg text-lg hover:bg-yellow-600 transition-colors duration-200">
                Apply for Access Now
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </Link>
            
            <Link href="/about">
              <button className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors duration-200">
                Learn More About Jeremy
              </button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm mb-4">
              Trusted by executives, entrepreneurs, and celebrities worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-gray-500 text-sm">Forbes 500</div>
              <div className="text-gray-500 text-sm">Fortune 100</div>
              <div className="text-gray-500 text-sm">Celebrity Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 