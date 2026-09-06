import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'hi' }]
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!['en', 'hi'].includes(locale)) notFound()
  setRequestLocale(locale)
  const messages = (await import(`../../../messages/${locale}.json`)).default

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
