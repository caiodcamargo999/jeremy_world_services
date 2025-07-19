'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alexander Chen',
    title: 'Tech Entrepreneur',
    company: 'Silicon Valley',
    content: 'Jeremy transformed my entire approach to luxury living. His yacht experiences and VIP access opened doors I never knew existed. The level of service is absolutely unmatched.',
    rating: 5,
    image: '/images/testimonial-1.jpg'
  },
  {
    name: 'Isabella Rodriguez',
    title: 'Fashion Executive',
    company: 'Luxury Brands',
    content: 'Working with Jeremy has been a game-changer for our brand activations. His network and expertise in the luxury space are truly extraordinary.',
    rating: 5,
    image: '/images/testimonial-2.jpg'
  },
  {
    name: 'Marcus Thompson',
    title: 'Professional Athlete',
    company: 'Premier League',
    content: 'Jeremy\'s soccer management services helped me navigate the complex world of professional sports. His guidance has been invaluable to my career.',
    rating: 5,
    image: '/images/testimonial-3.jpg'
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-sm font-medium mb-6">
            Client Testimonials
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our Elite Clients
            <span className="block text-yellow-500"> Say</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what some of the world's most discerning 
            individuals have to say about their experiences with Jeremy's Lifestyle Ecosystem.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="group">
              <div className="bg-black rounded-2xl p-8 shadow-lg border border-gray-800 hover:border-yellow-500 transition-all duration-300 h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-yellow-500/20 group-hover:text-yellow-500/40 transition-colors duration-300">
                  <Quote className="w-8 h-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-300">{testimonial.title}</div>
                    <div className="text-xs text-yellow-500 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6 border border-yellow-500/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">4.9/5</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-yellow-500/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">500+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-yellow-500/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">98%</div>
              <div className="text-sm text-gray-400">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 