'use client'

import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      })
    }

    // Hotjar
    if (typeof window !== 'undefined' && window.hj) {
      window.hj('trigger', 'page_view')
    }
  }, [])

  return null
}

// Extend Window interface for analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    hj: (...args: any[]) => void
  }
} 