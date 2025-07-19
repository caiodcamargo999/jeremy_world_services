'use client'

import { motion } from 'framer-motion'
import { Service } from '@/types'

interface TransformationStoryProps {
  service: Service
}

export function TransformationStory({ service }: TransformationStoryProps) {
  return (
    <section className="section-padding bg-primary-900 text-white">
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
            Real Transformations
            <span className="text-gradient block"> Real Results</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">{service.transformationStory.before.title}</h3>
            <p className="text-primary-200 mb-6">{service.transformationStory.before.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-luxury-gold">{service.transformationStory.after.title}</h3>
            <p className="text-primary-200 mb-6">{service.transformationStory.after.description}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <blockquote className="text-xl italic text-luxury-gold mb-4">
            "{service.transformationStory.quote}"
          </blockquote>
          <cite className="text-primary-300">— {service.transformationStory.author}</cite>
        </motion.div>
      </div>
    </section>
  )
} 