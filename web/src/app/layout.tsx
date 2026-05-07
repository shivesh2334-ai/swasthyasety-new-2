import { Inter, Noto_Sans_Devanagari } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  variable: '--font-hindi',
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'SwasthyaSetu - Teleconsultation Platform',
  description: 'India's trusted teleconsultation platform with ABHA integration',
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'hi' }]
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} className={`${inter.variable} ${notoSansDevanagari.variable}`}>
      <body className="font-sans antialiased bg-gray-50 min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
