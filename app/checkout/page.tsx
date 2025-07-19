'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, CreditCard, Lock, Check } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const serviceData = {
  'yacht-rentals': {
    name: 'Yacht Rentals & Jet Ski',
    packages: [
      { name: 'Day Charter', price: 5000, duration: '8 hours' },
      { name: 'Weekend Experience', price: 15000, duration: '48 hours' },
      { name: 'Week Charter', price: 75000, duration: '7 days' }
    ]
  },
  'guest-list': {
    name: 'Guest List & Club Access',
    packages: [
      { name: 'Single Event', price: 2500, duration: 'One-time access' },
      { name: 'Weekend Package', price: 8000, duration: 'Full weekend' },
      { name: 'Monthly Membership', price: 25000, duration: '30 days' }
    ]
  },
  'dj-booking': {
    name: 'DJ & Artist Booking',
    packages: [
      { name: 'Single Performance', price: 15000, duration: '3-hour performance' },
      { name: 'Multi-Artist Event', price: 50000, duration: 'Multiple artists' },
      { name: 'Exclusive Residency', price: 200000, duration: 'Long-term partnership' }
    ]
  }
}

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const service = searchParams.get('service') || 'yacht-rentals'
  const packageName = searchParams.get('package') || 'Day Charter'
  
  const [selectedPackage, setSelectedPackage] = useState(packageName)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const currentService = serviceData[service as keyof typeof serviceData] || serviceData['yacht-rentals']
  const selectedPackageData = currentService.packages.find(pkg => pkg.name === selectedPackage) || currentService.packages[0]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle payment processing here
    console.log('Processing payment for:', selectedPackageData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <section className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href={`/services/${service}`} className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {currentService.name}
            </Link>
          </motion.div>

          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Complete Your
              <span className="block bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                {currentService.name}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Secure checkout for your exclusive experience. Your information is protected with bank-level security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Checkout Form */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                
                {/* Service Selection */}
                <div className="mb-6">
                  <label className="block text-gray-300 text-sm font-medium mb-3">
                    Select Package
                  </label>
                  <div className="space-y-3">
                    {currentService.packages.map((pkg) => (
                      <motion.div
                        key={pkg.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                          selectedPackage === pkg.name
                            ? 'border-gray-500 bg-gray-700/50'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        onClick={() => setSelectedPackage(pkg.name)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-white">{pkg.name}</div>
                            <div className="text-gray-400 text-sm">{pkg.duration}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">${pkg.price.toLocaleString()}</div>
                            {selectedPackage === pkg.name && (
                              <Check className="w-5 h-5 text-gray-300 mt-1" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Total */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="text-gray-300">
                      ${selectedPackageData.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-6 flex items-center space-x-2 text-gray-400 text-sm">
                  <Lock className="w-4 h-4" />
                  <span>Secure payment processing</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Additional Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors duration-200 resize-none"
                      placeholder="Tell us about any specific requirements or preferences..."
                    />
                  </div>

                  {/* Payment Button */}
                  <motion.button
                    type="submit"
                    className="w-full py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Pay ${selectedPackageData.price.toLocaleString()}</span>
                  </motion.button>
                </form>

                {/* Security Notice */}
                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">
                    Your payment is secure and encrypted. We'll contact you within 24 hours to confirm your booking.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 