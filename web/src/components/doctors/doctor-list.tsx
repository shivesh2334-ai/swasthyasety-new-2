'use client'

import { useState, useEffect } from 'react'
import { Stethoscope, Star, Clock, Languages } from 'lucide-react'

interface Doctor {
  id: string
  full_name: string
  specialty: string
  qualification: string
  years_of_experience: number
  consultation_fee: number
  languages_spoken: string[]
  is_online: boolean
  nmc_registration_number: string
}

export function DoctorList() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data for Phase 1
    setDoctors([
      {
        id: '1',
        full_name: 'Dr. Rajesh Kumar',
        specialty: 'General Medicine',
        qualification: 'MBBS, MD',
        years_of_experience: 12,
        consultation_fee: 300,
        languages_spoken: ['hi', 'en'],
        is_online: true,
        nmc_registration_number: '12345'
      },
      {
        id: '2',
        full_name: 'Dr. Priya Sharma',
        specialty: 'Cardiology',
        qualification: 'MBBS, MD, DM',
        years_of_experience: 15,
        consultation_fee: 500,
        languages_spoken: ['hi', 'en', 'mr'],
        is_online: false,
        nmc_registration_number: '67890'
      },
      {
        id: '3',
        full_name: 'Dr. Amit Patel',
        specialty: 'Pediatrics',
        qualification: 'MBBS, DCH',
        years_of_experience: 8,
        consultation_fee: 400,
        languages_spoken: ['en', 'gu'],
        is_online: true,
        nmc_registration_number: '54321'
      }
    ])
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="text-center py-12">Loading doctors...</div>
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Stethoscope className="w-8 h-8 text-blue-600" />
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              doctor.is_online 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {doctor.is_online ? 'Online' : 'Offline'}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900">{doctor.full_name}</h3>
          <p className="text-blue-600 font-medium">{doctor.specialty}</p>
          <p className="text-gray-500 text-sm">{doctor.qualification}</p>

          <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {doctor.years_of_experience} years
            </span>
            <span className="flex items-center gap-1">
              <Languages className="w-4 h-4" />
              {doctor.languages_spoken.join(', ')}
            </span>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">₹{doctor.consultation_fee}</span>
              <span className="text-gray-500 text-sm">/consultation</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
              Book Now
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-3">
            NMC Reg: {doctor.nmc_registration_number}
          </p>
        </div>
      ))}
    </div>
  )
}
