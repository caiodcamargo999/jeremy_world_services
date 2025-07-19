import { Metadata } from 'next'
import { ArrowLeft, Camera, Video, MapPin, Calendar, Database, Network, Cpu } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery | Jeremy\'s Lifestyle Ecosystem',
  description: 'Explore a curated collection of extraordinary moments and luxury experiences from Jeremy\'s exclusive lifestyle ecosystem.',
}

const galleryItems = [
  {
    title: 'Luxury Yacht Experiences',
    location: 'Miami, FL',
    date: '2024',
    image: '/api/placeholder/600/400',
    category: 'Water'
  },
  {
    title: 'VIP Club Access',
    location: 'Los Angeles, CA',
    date: '2024',
    image: '/api/placeholder/600/400',
    category: 'Nightlife'
  },
  {
    title: 'Art Basel Collaborations',
    location: 'Miami Beach, FL',
    date: '2024',
    image: '/api/placeholder/600/400',
    category: 'Art'
  },
  {
    title: 'Exclusive Events',
    location: 'New York, NY',
    date: '2024',
    image: '/api/placeholder/600/400',
    category: 'Events'
  },
  {
    title: 'Corporate Experiences',
    location: 'Dubai, UAE',
    date: '2024',
    image: '/api/placeholder/600/400',
    category: 'Business'
  },
  {
    title: 'Celebrity Collaborations',
    location: 'Global',
    date: '2024',
    image: '/api/placeholder/600/400',
    category: 'Entertainment'
  }
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
          <div className="mb-8 animate-fade-in-left">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Main Content */}
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm font-medium mb-8 animate-fade-in-up">
              <Camera className="w-4 h-4 mr-2" />
              Experience Gallery
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Extraordinary
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Moments</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Explore a curated collection of unforgettable experiences and luxury moments from Jeremy's exclusive lifestyle ecosystem. 
              Each image tells a story of transformation and extraordinary living.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Curated
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Collection</span>
            </h2>
            <p className="text-gray-300 text-lg">
              A visual journey through the world's most exclusive experiences and luxury destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-600/50 to-gray-700/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-12 h-12 text-gray-400" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-gray-400 text-sm">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Behind the
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Scenes</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Exclusive video content showcasing the extraordinary experiences we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((video, index) => (
              <div
                key={video}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-800/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110 active:scale-95">
                      <Video className="w-8 h-8 text-white" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white text-sm">
                    Experience Video {video}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent"> Own Story?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join the elite who have already experienced the transformative power of Jeremy's Lifestyle Ecosystem.
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-200 hover:scale-105 active:scale-95">
                Start Your Journey
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 