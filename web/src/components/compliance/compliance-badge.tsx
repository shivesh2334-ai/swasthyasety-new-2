import { Shield, Database, Lock } from 'lucide-react'

const iconMap = {
  shield: Shield,
  database: Database,
  lock: Lock
}

export function ComplianceBadge({ icon, label }: { icon: keyof typeof iconMap; label: string }) {
  const Icon = iconMap[icon]

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <span className="text-sm font-medium text-gray-700 text-center">{label}</span>
    </div>
  )
}
