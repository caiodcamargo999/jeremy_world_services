'use client'

import { motion } from 'framer-motion'
import { Service } from '@/types'

interface BenefitsSectionProps {
  service: Service
}

export function BenefitsSection({ service }: BenefitsSectionProps) {
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
            Transform Your Experience
            <span className="text-gradient block"> Beyond Imagination</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-premium border border-luxury-gold/10"
            >
              <h3 className="heading-md mb-4 text-luxury-gold">{benefit.title}</h3>
              <p className="text-primary-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 