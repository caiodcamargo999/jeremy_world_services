import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Star, Target, Users, MapPin, Calendar, Megaphone, Zap } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Marketing & Brand Activation | Jeremy\'s Lifestyle Ecosystem',
  description: 'Premium marketing and brand activation services for luxury brands. Strategic campaigns, influencer partnerships, and high-impact brand experiences.',
}

const benefits = [
  {
    icon: Target,
    title: 'Strategic Campaigns',
    description: 'Data-driven marketing strategies that target high-value audiences and drive measurable results'
  },
  {
    icon: Users,
    title: 'Influencer Network',
    description: 'Access to exclusive influencer partnerships and celebrity endorsements for maximum impact'
  },
  {
    icon: MapPin,
    title: 'Global Reach',
    description: 'International marketing campaigns and brand activations across multiple markets'
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Quick campaign deployment and real-time optimization for maximum ROI'
  }
]

const services = [
  {
    name: 'Brand Strategy',
    description: 'Comprehensive brand positioning and identity development for luxury markets',
    duration: '2-4 months'
  },
  {
    name: 'Digital Marketing',
    description: 'Multi-channel digital campaigns including social media, PPC, and content marketing',
    duration: 'Ongoing'
  },
  {
    name: 'Influencer Partnerships',
    description: 'Strategic collaborations with top-tier influencers and celebrities',
    duration: 'Campaign-based'
  },
  {
    name: 'Event Marketing',
    description: 'High-impact brand activations and experiential marketing events',
    duration: 'Event-based'
  }
]

const testimonials = [
  {
    name: 'Lisa Chen',
    title: 'Brand Director',
    content: 'Jeremy\'s marketing campaigns increased our brand awareness by 300% in just 6 months.',
    rating: 5
  },
  {
    name: 'Marcus Johnson',
    title: 'Startup CEO',
    content: 'The influencer partnerships and brand activation strategies were game-changing.',
    rating: 5
  }
]

const packages = [
  {
    name: 'Brand Audit',
    price: '$15,000',
    description: 'Comprehensive brand analysis and strategy',
    features: [
      'Brand positioning analysis',
      'Competitive research',
      'Target audience insights',
      'Strategy recommendations',
      'Implementation roadmap'
    ]
  },
  {
    name: 'Full Campaign',
    price: '$100,000',
    description: 'Complete marketing campaign execution',
    features: [
      'Multi-channel strategy',
      'Influencer partnerships',
      'Content creation',
      'Performance tracking',
      'Optimization support'
    ],
    popular: true
  },
  {
    name: 'Brand Partnership',
    price: '$500,000',
    description: 'Long-term brand development partnership',
    features: [
      'Ongoing strategy',
      'Exclusive partnerships',
      'Global expansion',
      'Crisis management',
      'Performance guarantees'
    ]
  }
]

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section with VSL */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 animate-gradient"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
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
            <Megaphone className="w-4 h-4 mr-2" />
            Premium Marketing
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Transform Your Brand
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> with Strategic Marketing</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          >
            Premium marketing and brand activation services that drive results. 
            Strategic campaigns, influencer partnerships, and high-impact brand experiences.
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
                  Watch: "Marketing Secrets of Luxury Brands" (8:15)
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
            <Link href="/contact?service=marketing">
              <motion.button
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold px-10 py-5 rounded-lg text-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 flex items-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Marketing
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
              </motion.button>
            </Link>
            
            <motion.button
              className="bg-transparent border-2 border-gray-600 text-gray-300 font-semibold px-8 py-5 rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Services
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
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Marketing Services</span>
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

      {/* Services Section */}
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
              Our Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">{service.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
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
              Success Stories
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
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Marketing Package</span>
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
                
                <Link href={`/contact?service=marketing&package=${pkg.name.toLowerCase().replace(' ', '-')}`}>
                  <motion.button
                    className={`w-full py-4 rounded-lg font-semibold transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:from-gray-500 hover:to-gray-600'
                        : 'bg-transparent border-2 border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
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
              Ready to Transform
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Your Brand?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join successful brands that have already achieved remarkable growth 
              through strategic marketing and brand activation.
            </p>

            <Link href="/contact?service=marketing">
              <motion.button
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold px-12 py-5 rounded-lg text-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Marketing Journey
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 