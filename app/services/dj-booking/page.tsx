import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Star, Music, Users, MapPin, Calendar, Mic, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DJ & Artist Booking | Jeremy\'s Lifestyle Ecosystem',
  description: 'Book world-class DJs and artists for your private events and celebrations. Exclusive access to top-tier talent and unforgettable performances.',
}

const benefits = [
  {
    icon: Music,
    title: 'World-Class Talent',
    description: 'Access to Grammy-winning artists, top DJs, and exclusive performers for private events'
  },
  {
    icon: Users,
    title: 'Personalized Experience',
    description: 'Custom setlists, special requests, and intimate performances tailored to your event'
  },
  {
    icon: MapPin,
    title: 'Global Availability',
    description: 'Artists available worldwide for events in any location, with seamless travel coordination'
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Last-minute availability and flexible scheduling for spontaneous events and celebrations'
  }
]

const artists = [
  {
    name: 'DJ Elite',
    genre: 'House/Electronic',
    description: 'International DJ with residencies at world\'s top clubs',
    availability: 'Worldwide'
  },
  {
    name: 'The Collective',
    genre: 'Live Band',
    description: 'Award-winning live band for corporate and private events',
    availability: 'US/Europe'
  },
  {
    name: 'Soul Sisters',
    genre: 'R&B/Jazz',
    description: 'Grammy-nominated vocal group for intimate performances',
    availability: 'US Only'
  },
  {
    name: 'Beat Masters',
    genre: 'Hip-Hop/Urban',
    description: 'Chart-topping producers and performers for exclusive events',
    availability: 'Worldwide'
  }
]

const testimonials = [
  {
    name: 'David Rodriguez',
    title: 'Event Producer',
    content: 'Jeremy delivered exactly what we needed. The artist was incredible and the whole experience was seamless.',
    rating: 5
  },
  {
    name: 'Emma Thompson',
    title: 'Wedding Planner',
    content: 'Our clients were blown away by the performance. Jeremy\'s team handled everything perfectly.',
    rating: 5
  }
]

const packages = [
  {
    name: 'Single Performance',
    price: '$15,000',
    description: 'One artist for your event',
    features: [
      '3-hour performance',
      'Custom setlist',
      'Professional sound system',
      'Travel coordination',
      'Meet & greet included'
    ]
  },
  {
    name: 'Multi-Artist Event',
    price: '$50,000',
    description: 'Multiple artists for larger events',
    features: [
      'Multiple performers',
      'Full event coordination',
      'VIP artist access',
      'Custom production',
      'Exclusive content'
    ],
    popular: true
  },
  {
    name: 'Exclusive Residency',
    price: '$200,000',
    description: 'Long-term artist partnership',
    features: [
      'Exclusive availability',
      'Custom content creation',
      'Brand partnerships',
      'Priority booking',
      'Personal artist access'
    ]
  }
]

export default function DJBookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section with VSL */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 animate-gradient"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
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
            style={{ borderColor: '#10B981' }}
          >
            <Mic className="w-4 h-4 mr-2" style={{ color: '#10B981' }} />
            Premium Artist Booking
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Book World-Class
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Artists & DJs</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Access to Grammy-winning artists, top DJs, and exclusive performers for your private events. 
            Custom experiences that create unforgettable moments.
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
                  Watch: "Behind the Scenes: Exclusive Artist Performances" (5:15)
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
            <Link href="/checkout?service=dj-booking">
              <motion.button
                className="text-white font-semibold px-10 py-5 rounded-lg text-lg transition-all duration-200 flex items-center"
                style={{ backgroundColor: '#10B981' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Artist
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </motion.button>
            </Link>
            
            <motion.button
              className="bg-transparent border-2 border-gray-600 text-gray-300 font-semibold px-8 py-5 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Artists
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
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Artist Booking</span>
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

      {/* Artists Section */}
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
              Featured Artists
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">{artist.genre}</span>
                  <span className="text-gray-400 text-sm">{artist.availability}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{artist.name}</h3>
                <p className="text-gray-300 leading-relaxed">{artist.description}</p>
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
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Experience</span>
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
                
                <Link href={`/checkout?service=dj-booking&package=${pkg.name}`}>
                  <motion.button
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? 'text-white'
                        : 'bg-transparent border-2 text-gray-300 hover:text-white'
                    }`}
                    style={{
                      backgroundColor: pkg.popular ? '#10B981' : 'transparent',
                      borderColor: pkg.popular ? '#10B981' : '#4B5563'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
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
              Ready to Book
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Your Artist?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Create unforgettable moments with world-class artists and performers 
              at your next event or celebration.
            </p>

            <Link href="/checkout?service=dj-booking">
              <motion.button
                className="text-white font-semibold px-12 py-5 rounded-lg text-lg transition-all duration-200"
                style={{ backgroundColor: '#10B981' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Artist Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 