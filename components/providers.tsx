'use client'

import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#f8fafc',
            border: '1px solid #D4AF37',
          },
          success: {
            iconTheme: {
              primary: '#10B981',
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
    </>
  )
} 