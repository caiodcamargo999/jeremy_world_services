'use client'

import { Star, Award, Users, Globe } from 'lucide-react'

const stats = [
  { number: '500+', label: 'Elite Clients', icon: Users },
  { number: '15+', label: 'Years Experience', icon: Award },
  { number: '50+', label: 'Countries Served', icon: Globe },
  { number: '4.9', label: 'Client Rating', icon: Star }
]

const achievements = [
  'Featured in Forbes, Vogue, and GQ',
  'Trusted by Fortune 500 executives',
  'Exclusive partnerships with luxury brands',
  'Award-winning lifestyle curator'
]

export function AuthoritySection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-medium mb-6">
              Jeremy's Authority
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Trusted by the World's
              <span className="block text-yellow-500"> Elite</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8">
              With over 15 years of experience in luxury lifestyle curation, Jeremy has built an 
              unparalleled network of exclusive access and premium experiences. His reputation for 
              delivering extraordinary moments has made him the go-to authority for high-net-worth 
              individuals seeking the extraordinary.
            </p>

            {/* Achievements */}
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={achievement} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-gray-900 backdrop-blur-sm rounded-2xl border border-gray-800">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="text-3xl font-bold text-yellow-500 mb-2">{stat.number}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 