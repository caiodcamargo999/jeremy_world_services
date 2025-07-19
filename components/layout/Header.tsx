'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NavigationItem } from '@/types'

const navigation: NavigationItem[] = [
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Yacht Rentals', href: '/services/yacht-rentals' },
      { label: 'Guest List Access', href: '/services/guest-list' },
      { label: 'DJ & Artist Booking', href: '/services/dj-booking' },
      { label: 'Art Basel Collabs', href: '/services/art-basel' },
      { label: 'Business Consulting', href: '/services/consulting' },
      { label: 'Marketing & Branding', href: '/services/marketing' },
      { label: 'Soccer Management', href: '/services/soccer' },
    ]
  },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav
        data-state={isOpen && 'active'}
        className="fixed z-20 w-full px-2"
      >
        <div className={`mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 ${isScrolled ? 'bg-black/50 max-w-4xl rounded-2xl border border-gray-800 backdrop-blur-lg lg:px-5' : ''}`}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                  Jeremy
                </div>
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className={`${isOpen ? 'rotate-180 scale-0 opacity-0' : ''} m-auto size-6 duration-200`} />
                <X className={`${isOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-180 scale-0 opacity-0'} absolute inset-0 m-auto size-6 duration-200`} />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {navigation.map((item, index) => (
                  <li key={index}>
                    {item.children ? (
                      <div className="relative group">
                        <button className="text-gray-300 hover:text-white block duration-150 flex items-center gap-1">
                          <span>{item.label}</span>
                          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 rounded-xl shadow-lg border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-white block duration-150"
                      >
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className={`bg-gray-900 ${isOpen ? 'block' : 'hidden'} lg:flex mb-6 w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-gray-700 p-6 shadow-2xl shadow-black/20 md:flex-nowrap lg:m-0 lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none`}>
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {navigation.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-white block duration-150"
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold px-6 py-2 rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-200 text-sm">
                    Apply for Access
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
} 