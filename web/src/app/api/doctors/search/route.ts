import { NextRequest, NextResponse } from 'next/server'

const doctors = [
  {
    id: 'doc-1', full_name: 'Dr. Rajesh Kumar', nmc_registration_number: '12345',
    nmc_verified: true, specialty: 'General Medicine', qualification: 'MBBS, MD',
    years_of_experience: 12, consultation_fee: 300, languages_spoken: ['hi', 'en'], is_online: true,
  },
  {
    id: 'doc-2', full_name: 'Dr. Priya Sharma', nmc_registration_number: '67890',
    nmc_verified: true, specialty: 'Cardiology', qualification: 'MBBS, MD, DM',
    years_of_experience: 15, consultation_fee: 500, languages_spoken: ['hi', 'en', 'mr'], is_online: false,
  },
  {
    id: 'doc-3', full_name: 'Dr. Amit Patel', nmc_registration_number: '54321',
    nmc_verified: true, specialty: 'Pediatrics', qualification: 'MBBS, DCH',
    years_of_experience: 8, consultation_fee: 400, languages_spoken: ['en', 'gu'], is_online: true,
  },
]

export function GET(request: NextRequest) {
  const specialty = request.nextUrl.searchParams.get('specialty')?.toLowerCase()
  const availableNow = request.nextUrl.searchParams.get('available_now') === 'true'
  const results = doctors.filter((doctor) =>
    (!specialty || doctor.specialty.toLowerCase() === specialty) && (!availableNow || doctor.is_online)
  )
  return NextResponse.json(results)
}
