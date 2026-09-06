'use client'

import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

export function Hero() {
  const t = useTranslations('home.hero')
  const locale = useLocale()

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-12 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        {t('title')}
      </h1>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        {t('subtitle')}
      </p>
      <div className="flex gap-4 justify-center">
        <Link 
          href={`/${locale}/doctors`}
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
        >
          {t('ctaPrimary')}
        </Link>
        <Link 
          href={`/${locale}/abha`}
          className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
        >
          Link ABHA
        </Link>
      </div>
    </section>
  )
}
