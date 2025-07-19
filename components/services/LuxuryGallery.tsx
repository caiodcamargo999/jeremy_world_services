'use client'

import { motion } from 'framer-motion'
import { Service } from '@/types'

interface LuxuryGalleryProps {
  service: Service
}

export function LuxuryGallery({ service }: LuxuryGalleryProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="heading-lg text-center mb-16"
        >
          Experience the Luxury
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center"
            >
              <span className="text-primary-600">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 