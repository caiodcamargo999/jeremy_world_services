'use client'

import { motion } from 'framer-motion'
import { Service } from '@/types'
import { ArrowRight, Clock, Users } from 'lucide-react'

interface ServiceCTAProps {
  service: Service
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-luxury-gold/20 backdrop-blur-sm border border-luxury-gold/30 rounded-full text-luxury-gold text-lg font-medium mb-8"
          >
            <Clock className="w-5 h-5 mr-2" />
            Limited Availability - Only 3 Spots This Month
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="heading-xl mb-6"
          >
            Ready to Experience
            <span className="text-gradient block"> {service.title}?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-primary-200 mb-8 leading-relaxed"
          >
            Don't miss your opportunity to transform your reality. Join the elite few who 
            have already discovered the extraordinary with Jeremy's Lifestyle Ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              className="btn-primary text-lg px-12 py-5 bg-luxury-gold hover:bg-luxury-champagne"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Experience Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            
            <motion.button
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20"
          >
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-luxury-gold" />
              <span className="text-primary-200">500+ Elite Clients</span>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-luxury-gold" />
              <span className="text-primary-200">15+ Years Experience</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 