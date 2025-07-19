'use client'

import { motion } from 'framer-motion'
import { Service } from '@/types'
import { Star, CheckCircle } from 'lucide-react'

interface SocialProofProps {
  service: Service
}

export function SocialProof({ service }: SocialProofProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg font-semibold text-primary-700 mb-8"
          >
            Trusted by Elite Clients Worldwide
          </motion.h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {service.socialProof.logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-full w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-luxury-gold mb-2">
              {service.socialProof.stats.clients}+
            </div>
            <div className="text-primary-600">Elite Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-luxury-gold mb-2">
              {service.socialProof.stats.revenue}
            </div>
            <div className="text-primary-600">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-luxury-gold mb-2">
              {service.socialProof.stats.years}+
            </div>
            <div className="text-primary-600">Years of Excellence</div>
          </div>
        </motion.div>

        {/* Featured Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-primary-900 mb-6">
            Featured Client Categories
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {service.socialProof.featuredClients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-luxury-gold/10 border border-luxury-gold/20 rounded-full text-luxury-gold text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 