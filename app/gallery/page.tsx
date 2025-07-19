import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { ArrowLeft, Camera, Video, MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery | Jeremy\'s Lifestyle Ecosystem',
  description: 'Explore a curated collection of extraordinary moments and luxury experiences from Jeremy\'s exclusive lifestyle ecosystem.',
}

const galleryItems = [
  {
    id: 1,
    title: 'Luxury Yacht Experience',
    location: 'Mediterranean Sea',
    date: '2024',
    type: 'image',
    category: 'yacht',
    image: '/images/gallery/yacht-1.jpg',
    description: 'Exclusive yacht charter in the Mediterranean'
  },
  {
    id: 2,
    title: 'VIP Club Access',
    location: 'Miami, FL',
    date: '2024',
    type: 'image',
    category: 'nightlife',
    image: '/images/gallery/club-1.jpg',
    description: 'Exclusive access to Miami\'s most prestigious clubs'
  },
  {
    id: 3,
    title: 'Art Basel Collaboration',
    location: 'Miami Beach, FL',
    date: '2023',
    type: 'image',
    category: 'art',
    image: '/images/gallery/art-1.jpg',
    description: 'Behind the scenes at Art Basel Miami'
  },
  {
    id: 4,
    title: 'Private Jet Experience',
    location: 'Global',
    date: '2024',
    type: 'image',
    category: 'travel',
    image: '/images/gallery/jet-1.jpg',
    description: 'Luxury private jet travel experience'
  },
  {
    id: 5,
    title: 'Exclusive Restaurant',
    location: 'New York, NY',
    date: '2024',
    type: 'image',
    category: 'dining',
    image: '/images/gallery/dining-1.jpg',
    description: 'Private dining at exclusive restaurants'
  },
  {
    id: 6,
    title: 'Luxury Car Collection',
    location: 'Los Angeles, CA',
    date: '2024',
    type: 'image',
    category: 'automotive',
    image: '/images/gallery/car-1.jpg',
    description: 'Access to exclusive automotive experiences'
  },
  {
    id: 7,
    title: 'Private Island Retreat',
    location: 'Caribbean',
    date: '2023',
    type: 'image',
    category: 'travel',
    image: '/images/gallery/island-1.jpg',
    description: 'Exclusive private island experience'
  },
  {
    id: 8,
    title: 'Celebrity Event',
    location: 'Los Angeles, CA',
    date: '2024',
    type: 'image',
    category: 'events',
    image: '/images/gallery/event-1.jpg',
    description: 'Behind the scenes at exclusive celebrity events'
  },
  {
    id: 9,
    title: 'Luxury Hotel Suite',
    location: 'Dubai, UAE',
    date: '2024',
    type: 'image',
    category: 'accommodation',
    image: '/images/gallery/hotel-1.jpg',
    description: 'Exclusive access to world-class hotel suites'
  }
]

const categories = [
  { id: 'all', name: 'All Experiences' },
  { id: 'yacht', name: 'Yacht Experiences' },
  { id: 'nightlife', name: 'Nightlife' },
  { id: 'art', name: 'Art & Culture' },
  { id: 'travel', name: 'Travel' },
  { id: 'dining', name: 'Dining' },
  { id: 'automotive', name: 'Automotive' },
  { id: 'events', name: 'Events' },
  { id: 'accommodation', name: 'Accommodation' }
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 via-transparent to-gray-700/20 animate-gradient"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Main Content */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm font-medium mb-8"
            >
              <Camera className="w-4 h-4 mr-2" />
              Experience Gallery
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              A Visual Journey Through
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Extraordinary Moments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Explore a curated collection of luxury experiences, exclusive events, and extraordinary moments 
              that define the pinnacle of sophisticated living.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-full text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-200"
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-600/20 to-gray-800/20 group-hover:from-gray-500/30 group-hover:to-gray-700/30 transition-all duration-300"></div>
                    <div className="relative z-10 text-center">
                      <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <div className="text-gray-500 text-sm">{item.title}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        {item.type === 'video' ? (
                          <Video className="w-4 h-4" />
                        ) : (
                          <Camera className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Own
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Extraordinary Moments?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join our exclusive community and gain access to experiences that will transform your lifestyle 
              and create memories that last a lifetime.
            </p>

            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold px-8 py-4 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply for Access
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 