'use client'

import { useState } from 'react'
import { Search, MapPin, Stethoscope } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'

const specialties = [
  'General Medicine',
  'Cardiology',
  'Dermatology',
  'Pediatrics',
  'Orthopedics',
  'Gynecology',
  'Neurology',
  'Psychiatry'
]

export function DoctorSearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const locale = useLocale()
  const router = useRouter()

  const submitSearch = () => {
    const params = new URLSearchParams()
    if (searchTerm.trim()) params.set('q', searchTerm.trim())
    if (selectedSpecialty) params.set('specialty', selectedSpecialty)
    router.push(`/${locale}/doctors?${params.toString()}`)
  }

  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Find a Doctor</h2>

      <form className="flex flex-col sm:flex-row gap-4 mb-4" onSubmit={(event) => { event.preventDefault(); submitSearch() }}>
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or specialty..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700">
          Search
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {specialties.map((specialty) => (
          <button
            key={specialty}
            onClick={() => setSelectedSpecialty(selectedSpecialty === specialty ? '' : specialty)}
            className={`px-3 py-1.5 rounded-full text-sm ${
              selectedSpecialty === specialty
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {specialty}
          </button>
        ))}
      </div>
    </section>
  )
}
