import { Stethoscope, Shield, Database } from 'lucide-react'

const features = [
  {
    icon: Stethoscope,
    title: 'NMC Verified Doctors',
    description: 'All doctors verified with National Medical Commission'
  },
  {
    icon: Database,
    title: 'ABHA Integrated',
    description: 'Your health records linked with Ayushman Bharat Health Account'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'End-to-end encrypted consultations. Your data never leaves India.'
  }
]

export function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </section>
  )
}
