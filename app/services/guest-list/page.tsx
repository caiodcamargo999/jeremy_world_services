import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Star, Users, MapPin, Calendar, Crown, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guest List & Club Access | Jeremy\'s Lifestyle Ecosystem',
  description: 'Gain exclusive access to the world\'s most prestigious clubs and events. VIP entry, bottle service, and insider access to the hottest venues.',
}

const benefits = [
  {
    icon: Crown,
    title: 'VIP Entry Access',
    description: 'Skip the line at the world\'s most exclusive clubs and events with guaranteed entry and premium table service'
  },
  {
    icon: Users,
    title: 'Celebrity Networking',
    description: 'Connect with A-list celebrities, influencers, and industry leaders in intimate, exclusive settings'
  },
  {
    icon: MapPin,
    title: 'Global Venue Access',
    description: 'Access to premium venues in Miami, LA, NYC, London, Dubai, and other luxury destinations worldwide'
  },
  {
    icon: Zap,
    title: 'Instant Confirmation',
    description: 'Last-minute access to sold-out events and exclusive parties with immediate confirmation'
  }
]

const venues = [
  {
    name: 'Miami Beach Clubs',
    location: 'Miami, FL',
    description: 'Exclusive access to LIV, Story, and other premium South Beach venues'
  },
  {
    name: 'LA Nightlife',
    location: 'Los Angeles, CA',
    description: 'VIP entry to The Nice Guy, Delilah, and Hollywood\'s hottest spots'
  },
  {
    name: 'NYC Elite',
    location: 'New York, NY',
    description: 'Access to 1OAK, Marquee, and Manhattan\'s most exclusive clubs'
  },
  {
    name: 'International',
    location: 'Global',
    description: 'Premium venues in London, Dubai, Ibiza, and other luxury destinations'
  }
]

const testimonials = [
  {
    name: 'Marcus Johnson',
    title: 'Music Producer',
    content: 'Jeremy got us into clubs I never thought possible. The service is absolutely unmatched.',
    rating: 5
  },
  {
    name: 'Sophia Chen',
    title: 'Fashion Influencer',
    content: 'Every venue we visited was incredible. The VIP treatment was beyond expectations.',
    rating: 5
  }
]

const packages = [
  {
    name: 'Single Event',
    price: '$2,500',
    description: 'One-time access to exclusive event',
    features: [
      'VIP entry for 4 people',
      'Bottle service included',
      'Dedicated host',
      'Priority seating',
      'Photo opportunities'
    ]
  },
  {
    name: 'Weekend Package',
    price: '$8,000',
    description: 'Full weekend of exclusive access',
    features: [
      'Multiple venue access',
      'Luxury transportation',
      'Personal concierge',
      'Celebrity introductions',
      'Exclusive after-parties'
    ],
    popular: true
  },
  {
    name: 'Monthly Membership',
    price: '$25,000',
    description: 'Unlimited access for 30 days',
    features: [
      'Unlimited venue access',
      '24/7 concierge service',
      'Priority reservations',
      'Exclusive events',
      'Personal networking'
    ]
  }
]

export default function GuestListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section with VSL */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 animate-gradient"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
          </motion.div>

          {/* Service Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm font-medium mb-8"
            style={{ borderColor: '#8B5CF6' }}
          >
            <Crown className="w-4 h-4 mr-2" style={{ color: '#8B5CF6' }} />
            Exclusive Club Access
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Access the World's
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Most Exclusive Venues</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Skip the line at the world's most prestigious clubs and events. VIP entry, bottle service, 
            and insider access to venues that define luxury nightlife.
          </motion.p>

          {/* VSL Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-12"
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-800/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.button>
                </div>
                <div className="absolute bottom-4 left-4 text-white text-sm">
                  Watch: "Inside the World's Most Exclusive Clubs" (4:20)
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/checkout?service=guest-list">
              <motion.button
                className="text-white font-semibold px-10 py-5 rounded-lg text-lg transition-all duration-200 flex items-center"
                style={{ backgroundColor: '#8B5CF6' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get VIP Access
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </motion.button>
            </Link>
            
            <motion.button
              className="bg-transparent border-2 border-gray-600 text-gray-300 font-semibold px-8 py-5 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Venues
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> VIP Access</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gray-700/50 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Premium Venues
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Worldwide</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venues.map((venue, index) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-400 text-sm">{venue.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{venue.name}</h3>
                <p className="text-gray-300 leading-relaxed">{venue.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Client Experiences
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Access Level</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600' 
                    : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full">Most Popular</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-white mb-2">{pkg.price}</div>
                <div className="text-gray-400 mb-6">{pkg.description}</div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href={`/checkout?service=guest-list&package=${pkg.name}`}>
                  <motion.button
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? 'text-white'
                        : 'bg-transparent border-2 text-gray-300 hover:text-white'
                    }`}
                    style={{
                      backgroundColor: pkg.popular ? '#8B5CF6' : 'transparent',
                      borderColor: pkg.popular ? '#8B5CF6' : '#4B5563'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Access
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for VIP
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Access?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join the elite who have already discovered the power of exclusive access 
              to the world's most prestigious venues and events.
            </p>

            <Link href="/checkout?service=guest-list">
              <motion.button
                className="text-white font-semibold px-12 py-5 rounded-lg text-lg transition-all duration-200"
                style={{ backgroundColor: '#8B5CF6' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get VIP Access Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 