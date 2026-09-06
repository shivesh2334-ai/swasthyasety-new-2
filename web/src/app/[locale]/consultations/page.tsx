import Link from 'next/link'

export default function ConsultationsPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900">My Consultations</h1>
      <div className="mt-6 rounded-2xl border bg-white p-8 text-center shadow-sm">
        <p className="text-gray-600">Sign in to view appointments, or find an NMC-verified doctor to start a consultation.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href={`/${locale}/doctors`} className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white">Find a doctor</Link>
          <Link href={`/${locale}/auth/login`} className="rounded-lg border px-5 py-3 font-medium text-gray-700">Sign in</Link>
        </div>
      </div>
    </section>
  )
}
