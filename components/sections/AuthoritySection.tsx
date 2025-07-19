'use client'

import { motion } from 'framer-motion'
import { Users, Clock, Globe, Star, Award, Shield, Zap, Target } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Elite Clients',
    description: 'High-net-worth individuals and executives'
  },
  {
    icon: Clock,
    value: '15+',
    label: 'Years Experience',
    description: 'Luxury lifestyle curation expertise'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Countries Served',
    description: 'Global network and reach'
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Client Rating',
    description: 'Exceptional service satisfaction'
  }
]

const achievements = [
  {
    icon: Award,
    title: 'Featured in Forbes, Vogue, and GQ',
    description: 'Recognized by leading luxury publications'
  },
  {
    icon: Shield,
    title: 'Trusted by Fortune 500 executives',
    description: 'Preferred partner for corporate leadership'
  },
  {
    icon: Zap,
    title: 'Exclusive partnerships with luxury brands',
    description: 'Direct access to premium experiences'
  },
  {
    icon: Target,
    title: 'Award-winning lifestyle curator',
    description: 'Industry recognition for excellence'
  }
]

export function AuthoritySection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-full text-gray-300 text-sm font-medium mb-8"
            >
              <Shield className="w-4 h-4 mr-2" />
              Jeremy's Authority
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Trusted by the World's
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Elite</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              With over 15 years of experience in luxury lifestyle curation, Jeremy has built an unparalleled network of exclusive access and premium experiences. His reputation for delivering extraordinary moments has made him the go-to authority for high-net-worth individuals seeking the extraordinary.
            </motion.p>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <achievement.icon className="w-4 h-4 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 text-center hover:border-gray-600 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-gray-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 