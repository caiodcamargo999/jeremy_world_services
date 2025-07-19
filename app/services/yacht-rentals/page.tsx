import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Star, Users, MapPin, Calendar, Anchor, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Yacht Rentals & Jet Ski Experiences | Jeremy\'s Lifestyle Ecosystem',
  description: 'Experience the ultimate luxury on water with our exclusive yacht and jet ski experiences. Premium charters, VIP service, and unforgettable moments.',
}

const benefits = [
  {
    icon: Anchor,
    title: 'Exclusive Fleet Access',
    description: 'Access to the world\'s most prestigious yacht fleet, from intimate 40-footers to majestic 200-foot superyachts'
  },
  {
    icon: Users,
    title: 'VIP Concierge Service',
    description: 'Dedicated crew, personal chef, and bespoke itinerary planning for your perfect day on the water'
  },
  {
    icon: MapPin,
    title: 'Global Destinations',
    description: 'Charter anywhere from the Mediterranean to the Caribbean, with insider access to hidden coves and exclusive marinas'
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Last-minute availability and flexible scheduling to accommodate your lifestyle demands'
  }
]

const testimonials = [
  {
    name: 'Alexander Chen',
    title: 'Tech Entrepreneur',
    content: 'The yacht experience was beyond anything I\'ve ever experienced. Jeremy\'s team handled everything flawlessly.',
    rating: 5
  },
  {
    name: 'Isabella Rodriguez',
    title: 'Luxury Brand Executive',
    content: 'From the moment we stepped on board, it was pure luxury. The crew was exceptional and the experience unforgettable.',
    rating: 5
  }
]

const pricing = [
  {
    name: 'Day Charter',
    price: '$5,000',
    duration: '8 hours',
    features: [
      'Professional crew',
      'Gourmet catering',
      'Water toys included',
      'Fuel and insurance',
      'Concierge planning'
    ]
  },
  {
    name: 'Weekend Experience',
    price: '$15,000',
    duration: '48 hours',
    features: [
      'Luxury overnight accommodation',
      'Personal chef service',
      'Premium wine selection',
      'Water sports equipment',
      'Dedicated steward'
    ],
    popular: true
  },
  {
    name: 'Week Charter',
    price: '$75,000',
    duration: '7 days',
    features: [
      'Full luxury experience',
      'Multiple destinations',
      'Professional photography',
      'Custom itinerary',
      '24/7 concierge support'
    ]
  }
]

export default function YachtRentalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section with VSL */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 animate-gradient"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
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
            style={{ borderColor: '#3B82F6' }}
          >
            <Anchor className="w-4 h-4 mr-2" style={{ color: '#3B82F6' }} />
            Premium Yacht Experiences
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Experience Ultimate
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Water Luxury</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Access the world's most exclusive yacht fleet with VIP service, professional crews, 
            and bespoke experiences that redefine luxury on the water.
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
                  Watch: "The Ultimate Yacht Experience" (3:45)
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
            <Link href="/checkout?service=yacht-rentals">
              <motion.button
                className="text-white font-semibold px-10 py-5 rounded-lg text-lg transition-all duration-200 flex items-center"
                style={{ backgroundColor: '#3B82F6' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Experience
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </motion.button>
            </Link>
            
            <motion.button
              className="bg-transparent border-2 border-gray-600 text-gray-300 font-semibold px-8 py-5 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Fleet
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
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Yacht Experiences</span>
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

      {/* Testimonials Section */}
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
              What Our Clients
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Say</span>
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
              Choose Your
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Experience</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600' 
                    : 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-gray-600 text-white text-sm rounded-full">Most Popular</span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                <div className="text-gray-400 mb-6">{plan.duration}</div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href={`/checkout?service=yacht-rentals&package=${plan.name}`}>
                  <motion.button
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'text-white'
                        : 'bg-transparent border-2 text-gray-300 hover:text-white'
                    }`}
                    style={{
                      backgroundColor: plan.popular ? '#3B82F6' : 'transparent',
                      borderColor: plan.popular ? '#3B82F6' : '#4B5563'
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Ultimate Luxury?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join an exclusive community of high-achievers who have already discovered 
              the transformative power of premium yacht experiences.
            </p>

            <Link href="/checkout?service=yacht-rentals">
              <motion.button
                className="text-white font-semibold px-12 py-5 rounded-lg text-lg transition-all duration-200"
                style={{ backgroundColor: '#3B82F6' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Yacht Experience
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 