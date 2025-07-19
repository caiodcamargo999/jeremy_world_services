import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceHero } from '@/components/services/ServiceHero'
import { SocialProof } from '@/components/services/SocialProof'
import { VSLSection } from '@/components/services/VSLSection'
import { BenefitsSection } from '@/components/services/BenefitsSection'
import { TransformationStory } from '@/components/services/TransformationStory'
import { LuxuryGallery } from '@/components/services/LuxuryGallery'
import { PricingSection } from '@/components/services/PricingSection'
import { FAQSection } from '@/components/services/FAQSection'
import { ServiceCTA } from '@/components/services/ServiceCTA'
import { getServiceBySlug } from '@/lib/services'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} | Jeremy's Lifestyle Ecosystem`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Jeremy's Lifestyle Ecosystem`,
      description: service.description,
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getServiceBySlug(params.slug)
  
  if (!service) {
    notFound()
  }

  return (
    <>
      <ServiceHero service={service} />
      <SocialProof service={service} />
      <VSLSection service={service} />
      <BenefitsSection service={service} />
      <TransformationStory service={service} />
      <LuxuryGallery service={service} />
      <PricingSection service={service} />
      <FAQSection service={service} />
      <ServiceCTA service={service} />
    </>
  )
} 