'use client'

import { motion } from 'framer-motion'
import { Service } from '@/types'

interface ServiceHeroProps {
  service: Service
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="section-padding bg-primary-900 text-white">
      <div className="container-max text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading-xl mb-6"
        >
          {service.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-primary-200 max-w-3xl mx-auto"
        >
          {service.description}
        </motion.p>
      </div>
    </section>
  )
} 