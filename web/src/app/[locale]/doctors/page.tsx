import { DoctorList } from '@/components/doctors/doctor-list'
import { Suspense } from 'react'

export default function DoctorsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Doctors</h1>
      <Suspense fallback={<div className="py-12 text-center">Loading doctors...</div>}><DoctorList /></Suspense>
    </div>
  )
}
