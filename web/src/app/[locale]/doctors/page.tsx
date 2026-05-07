import { DoctorList } from '@/components/doctors/doctor-list'

export default function DoctorsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Doctors</h1>
      <DoctorList />
    </div>
  )
}
