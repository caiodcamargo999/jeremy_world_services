import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { AuthoritySection } from '@/components/sections/AuthoritySection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Jeremy\'s Lifestyle Ecosystem | Premium Luxury Services',
  description: 'Experience the pinnacle of luxury living with Jeremy\'s exclusive lifestyle ecosystem. From yacht rentals to VIP access, transform your reality into extraordinary.',
  openGraph: {
    title: 'Jeremy\'s Lifestyle Ecosystem | Premium Luxury Services',
    description: 'Experience the pinnacle of luxury living with Jeremy\'s exclusive lifestyle ecosystem.',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AuthoritySection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
} 