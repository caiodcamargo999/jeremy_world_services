'use client'

import { motion } from 'framer-motion'
import { Service } from '@/types'
import { Check, Star } from 'lucide-react'

interface PricingSectionProps {
  service: Service
}

export function PricingSection({ service }: PricingSectionProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-luxury-cream to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="heading-lg mb-6"
          >
            Choose Your Experience
            <span className="text-gradient block"> Level</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.pricing.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl p-8 shadow-premium border-2 ${
                option.popular ? 'border-luxury-gold' : 'border-luxury-gold/10'
              } relative`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-luxury-gold text-luxury-black px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-semibold mb-2">{option.name}</h3>
              <div className="text-4xl font-bold text-luxury-gold mb-2">
                ${option.price.toLocaleString()}
              </div>
              <p className="text-primary-600 mb-6">{option.description}</p>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-luxury-gold mr-3" />
                    <span className="text-primary-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  option.popular
                    ? 'bg-luxury-gold text-luxury-black hover:bg-luxury-champagne'
                    : 'bg-transparent border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Choose {option.name}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 