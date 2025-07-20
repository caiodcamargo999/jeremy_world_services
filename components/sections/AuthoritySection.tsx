'use client'

import { m } from 'framer-motion'
import { Users, Clock, Globe, Star, Award, Shield, Zap, Target, Database, Network, Cpu, Rocket, Layers, Command, Settings, BarChart3 } from 'lucide-react'

const stats = [
  {
    icon: Database,
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
    icon: Network,
    value: '50+',
    label: 'Countries Served',
    description: 'Global network and reach'
  },
  {
    icon: BarChart3,
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
    icon: Rocket,
    title: 'Exclusive partnerships with luxury brands',
    description: 'Direct access to premium experiences'
  },
  {
    icon: Cpu,
    title: 'Award-winning lifestyle curator',
    description: 'Industry recognition for excellence'
  }
]

export function AuthoritySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <m.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-gray-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </m.div>
          ))}
        </m.div>

        {/* Achievements */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Industry
            <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Recognition</span>
          </h2>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <m.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mb-6">
                <achievement.icon className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{achievement.title}</h3>
              <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
} 