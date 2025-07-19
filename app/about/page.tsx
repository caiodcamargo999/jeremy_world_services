import { Metadata } from 'next'
import { ArrowLeft, Award, Users, Globe, Star, Database, Network, BarChart3, Cpu } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Jeremy | Lifestyle Ecosystem',
  description: 'Discover the story behind Jeremy\'s exclusive lifestyle ecosystem and his mission to transform ordinary moments into extraordinary experiences.',
}

const stats = [
  { number: '500+', label: 'Elite Clients', icon: Database },
  { number: '15+', label: 'Years Experience', icon: Award },
  { number: '50+', label: 'Countries Served', icon: Network },
  { number: '4.9', label: 'Client Rating', icon: BarChart3 }
]

const achievements = [
  'Featured in Forbes, Vogue, and GQ',
  'Trusted by Fortune 500 executives',
  'Exclusive partnerships with luxury brands',
  'Award-winning lifestyle curator'
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 animate-gradient"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in-left">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Main Content */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm font-medium mb-8 animate-fade-in-up">
              About Jeremy
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              The Visionary Behind
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Extraordinary Living</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              For over 15 years, Jeremy has been crafting unparalleled luxury experiences for the world's most discerning individuals. 
              His unique approach combines exclusive access, personalized service, and an unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
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
            </div>

            <div className="relative animate-fade-in-right">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-400 mb-4">J</div>
                    <div className="text-gray-500 text-sm">Jeremy's Signature</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-gray-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Recognition &
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Achievements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement}
                className="flex items-center space-x-4 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className="text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> the Extraordinary?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join an exclusive community of high-achievers who have already discovered 
              the transformative power of Jeremy's Lifestyle Ecosystem.
            </p>

            <Link href="/contact">
              <button className="bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold px-8 py-4 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 hover:scale-105 active:scale-95">
                Apply for Access
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 