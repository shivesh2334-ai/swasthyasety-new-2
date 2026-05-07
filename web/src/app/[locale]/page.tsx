import { useTranslations } from 'next-intl'
import { Hero } from '@/components/home/hero'
import { Features } from '@/components/home/features'
import { EmergencyBanner } from '@/components/compliance/emergency-banner'
import { DoctorSearch } from '@/components/search/doctor-search'
import { ComplianceBadge } from '@/components/compliance/compliance-badge'

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <div className="space-y-12">
      <EmergencyBanner />
      <Hero />
      <DoctorSearch />
      <Features />

      <section className="bg-blue-50 rounded-2xl p-8 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Regulated & Secure
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <ComplianceBadge icon="shield" label="NMC Verified Platform" />
            <ComplianceBadge icon="database" label="Data Stored in India" />
            <ComplianceBadge icon="lock" label="HIPAA Compliant" />
          </div>
        </div>
      </section>
    </div>
  )
}
