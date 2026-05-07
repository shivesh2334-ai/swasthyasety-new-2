import { AlertTriangle } from 'lucide-react'

export function EmergencyBanner() {
  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-red-800">Medical Emergency?</h3>
          <p className="text-red-700 text-sm mt-1">
            For medical emergencies, please call <strong>108</strong> or visit your nearest hospital. 
            This platform is not for emergency care.
          </p>
        </div>
      </div>
    </div>
  )
}
