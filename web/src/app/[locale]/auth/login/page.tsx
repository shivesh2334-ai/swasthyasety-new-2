'use client'

import { FormEvent, useState } from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'

export default function LoginPage() {
  const locale = useLocale()
  const [message, setMessage] = useState('')

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('Demo mode: connect Supabase credentials to enable secure sign-in.')
  }

  return (
    <section className="mx-auto max-w-md rounded-2xl border bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
      <p className="mt-2 text-sm text-gray-600">Access consultations and linked health records.</p>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <label className="block text-sm font-medium text-gray-700">Email or mobile number
          <input required className="mt-1 w-full rounded-lg border px-4 py-3" placeholder="name@example.com" />
        </label>
        <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">Continue securely</button>
      </form>
      {message && <p role="status" className="mt-4 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">{message}</p>}
      <Link href={`/${locale}`} className="mt-6 block text-center text-sm text-blue-700">Back to home</Link>
    </section>
  )
}
