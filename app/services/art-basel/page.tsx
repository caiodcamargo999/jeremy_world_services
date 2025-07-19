import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Star, Palette, Users, MapPin, Calendar, Brush, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Art Basel & Creative Collaborations | Jeremy\'s Lifestyle Ecosystem',
  description: 'Exclusive access to Art Basel events, artist collaborations, and creative partnerships. Connect with the world\'s most influential artists and collectors.',
}

const benefits = [
  {
    icon: Palette,
    title: 'Exclusive Art Basel Access',
    description: 'VIP passes to Art Basel Miami, Basel, and Hong Kong with private gallery tours and collector events'
  },
  {
    icon: Users,
    title: 'Artist Collaborations',
    description: 'Direct access to world-renowned artists for custom commissions and exclusive collaborations'
  },
  {
    icon: MapPin,
    title: 'Global Art Network',
    description: 'Connections to galleries, museums, and art institutions worldwide for unique opportunities'
  },
  {
    icon: Zap,
    title: 'Instant Access',
    description: 'Last-minute tickets to sold-out exhibitions and exclusive art world events'
  }
]

const events = [
  {
    name: 'Art Basel Miami Beach',
    location: 'Miami Beach, FL',
    description: 'VIP access to the world\'s premier contemporary art fair',
    date: 'December 2024'
  },
  {
    name: 'Art Basel Switzerland',
    location: 'Basel, Switzerland',
    description: 'Exclusive access to the original Art Basel fair',
    date: 'June 2024'
  },
  {
    name: 'Art Basel Hong Kong',
    location: 'Hong Kong',
    description: 'Premium access to Asia\'s leading art fair',
    date: 'March 2024'
  },
  {
    name: 'Private Gallery Tours',
    location: 'Global',
    description: 'Behind-the-scenes access to exclusive galleries and collections',
    date: 'Year-round'
  }
]

const testimonials = [
  {
    name: 'Sarah Williams',
    title: 'Art Collector',
    content: 'Jeremy\'s Art Basel access was incredible. We got into events I never thought possible.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    title: 'Gallery Owner',
    content: 'The artist collaborations we\'ve facilitated through Jeremy have been game-changing.',
    rating: 5
  }
]

const packages = [
  {
    name: 'Single Event Access',
    price: '$10,000',
    description: 'VIP access to one Art Basel event',
    features: [
      'VIP fair passes',
      'Private gallery tours',
      'Collector events',
      'Artist meet & greets',
      'Luxury transportation'
    ]
  },
  {
    name: 'Art Basel Season',
    price: '$35,000',
    description: 'Access to all Art Basel events',
    features: [
      'All Art Basel fairs',
      'Exclusive after-parties',
      'Artist studio visits',
      'Private collection tours',
      'Dedicated art consultant'
    ],
    popular: true
  },
  {
    name: 'Artist Collaboration',
    price: '$100,000',
    description: 'Custom artist collaboration',
    features: [
      'Commissioned artwork',
      'Artist studio access',
      'Exclusive content creation',
      'Brand partnerships',
      'Personal artist relationship'
    ]
  }
]

export default function ArtBaselPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section with VSL */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 animate-gradient"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
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
          >
            <Brush className="w-4 h-4 mr-2" />
            Art World Access
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Access the World's
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Premier Art Events</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Exclusive access to Art Basel events, artist collaborations, and creative partnerships. 
            Connect with the world's most influential artists and collectors.
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
                  Watch: "Inside Art Basel: Exclusive Access" (6:30)
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
            <Link href="/contact?service=art-basel">
              <motion.button
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold px-10 py-5 rounded-lg text-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Art Access
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </motion.button>
            </Link>
            
            <motion.button
              className="bg-transparent border-2 border-gray-600 text-gray-300 font-semibold px-8 py-5 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Events
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
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Art Access</span>
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

      {/* Events Section */}
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
              Upcoming Events
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">{event.date}</span>
                  <span className="text-gray-400 text-sm">{event.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{event.name}</h3>
                <p className="text-gray-300 leading-relaxed">{event.description}</p>
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
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Art Experience</span>
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
                
                <Link href={`/contact?service=art-basel&package=${pkg.name.toLowerCase().replace(' ', '-')}`}>
                  <motion.button
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600'
                        : 'bg-transparent border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                    }`}
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
              Ready to Access
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> the Art World?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join an exclusive community of art collectors and enthusiasts who have already 
              discovered the transformative power of premium art world access.
            </p>

            <Link href="/contact?service=art-basel">
              <motion.button
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold px-12 py-5 rounded-lg text-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Art Access Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 