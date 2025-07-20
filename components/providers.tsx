'use client'

import { ReactNode } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid #4b5563',
          },
          success: {
            iconTheme: {
              primary: '#6b7280',
              secondary: '#f8fafc',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#f8fafc',
            },
          },
        }}
      />
    </LazyMotion>
  )
} 