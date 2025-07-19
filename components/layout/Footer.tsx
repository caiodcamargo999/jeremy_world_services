'use client'

import Link from 'next/link'
import { Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-bold text-yellow-500 mb-4">
                Jeremy
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming ordinary moments into extraordinary experiences. 
                Your gateway to the world's most exclusive lifestyle opportunities.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-yellow-500 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-yellow-500 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-yellow-500 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/yacht-rentals" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    Yacht Rentals
                  </Link>
                </li>
                <li>
                  <Link href="/services/guest-list" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    Guest List Access
                  </Link>
                </li>
                <li>
                  <Link href="/services/dj-booking" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    DJ & Artist Booking
                  </Link>
                </li>
                <li>
                  <Link href="/services/art-basel" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    Art Basel Collabs
                  </Link>
                </li>
                <li>
                  <Link href="/services/consulting" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    Business Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    About Jeremy
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  <a href="mailto:hello@jeremyslifestyle.com" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    hello@jeremyslifestyle.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-yellow-500" />
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-yellow-500 transition-colors duration-200">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="mt-6">
                <Link href="/contact">
                  <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors duration-200">
                    Apply for Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Jeremy's Lifestyle Ecosystem. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Crafted with luxury in mind
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 