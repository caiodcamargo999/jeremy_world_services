import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'Jeremy\'s Lifestyle Ecosystem | Premium Luxury Services',
    template: '%s | Jeremy\'s Lifestyle Ecosystem'
  },
  description: 'Experience the pinnacle of luxury living with Jeremy\'s exclusive lifestyle ecosystem. From yacht rentals to VIP access, transform your reality into extraordinary.',
  keywords: ['luxury lifestyle', 'yacht rentals', 'VIP access', 'premium services', 'exclusive experiences', 'high-end consulting'],
  authors: [{ name: 'Jeremy\'s Lifestyle Ecosystem' }],
  creator: 'Jeremy\'s Lifestyle Ecosystem',
  publisher: 'Jeremy\'s Lifestyle Ecosystem',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jeremyslifestyle.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jeremyslifestyle.com',
    title: 'Jeremy\'s Lifestyle Ecosystem | Premium Luxury Services',
    description: 'Experience the pinnacle of luxury living with Jeremy\'s exclusive lifestyle ecosystem.',
    siteName: 'Jeremy\'s Lifestyle Ecosystem',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jeremy\'s Lifestyle Ecosystem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeremy\'s Lifestyle Ecosystem | Premium Luxury Services',
    description: 'Experience the pinnacle of luxury living with Jeremy\'s exclusive lifestyle ecosystem.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
} 