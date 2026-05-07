'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { HeartPulse, Globe } from 'lucide-react'

export function Header() {
  const t = useTranslations('navigation')
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'
  const otherLocale = locale === 'en' ? 'hi' : 'en'

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <HeartPulse className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">SwasthyaSetu</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href={`/${locale}/doctors`} className="text-gray-600 hover:text-blue-600">
            {t('doctors')}
          </Link>
          <Link href={`/${locale}/abha`} className="text-gray-600 hover:text-blue-600">
            ABHA
          </Link>
          <Link href={`/${locale}/consultations`} className="text-gray-600 hover:text-blue-600">
            {t('consultations')}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href={pathname.replace(`/${locale}`, `/${otherLocale}`)}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600"
          >
            <Globe className="w-4 h-4" />
            {otherLocale === 'hi' ? 'हिंदी' : 'English'}
          </Link>
          <Link 
            href={`/${locale}/auth/login`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            {t('login')}
          </Link>
        </div>
      </div>
    </header>
  )
}
