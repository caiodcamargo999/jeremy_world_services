'use client'

import { motion } from 'framer-motion'
import { Service } from '@/types'
import { Play, ArrowRight } from 'lucide-react'

interface VSLSectionProps {
  service: Service
}

export function VSLSection({ service }: VSLSectionProps) {
  return (
    <section id="vsl-section" className="section-padding bg-gradient-to-br from-primary-900 to-primary-800 text-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-luxury-gold/20 border border-luxury-gold/30 rounded-full text-luxury-gold text-sm font-medium mb-6"
            >
              Watch the Full Experience
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="heading-lg mb-6"
            >
              Discover How We Transform
              <span className="text-gradient block"> Ordinary Into Extraordinary</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-primary-200 max-w-3xl mx-auto"
            >
              This exclusive video reveals the behind-the-scenes process of how we create 
              life-changing experiences for our elite clients.
            </motion.p>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-luxury">
              <iframe
                src={service.vslUrl}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={`${service.title} - Video Sales Letter`}
              />
            </div>

            {/* Sticky CTA Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 right-6"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-luxury border border-luxury-gold/20">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-1">
                      Ready to Transform Your Experience?
                    </h3>
                    <p className="text-primary-600 text-sm">
                      Limited spots available this month
                    </p>
                  </div>
                  <motion.button
                    className="btn-primary whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Your Experience Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Video Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Access</h3>
              <p className="text-primary-300">
                See behind the scenes of our luxury experiences
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transformation Process</h3>
              <p className="text-primary-300">
                Understand how we create extraordinary moments
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Results</h3>
              <p className="text-primary-300">
                Real stories from our satisfied clients
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 