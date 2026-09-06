'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Link2, CheckCircle, Shield } from 'lucide-react'

const abhaSchema = z.object({
  abhaNumber: z.string()
    .regex(/^\d{14}$/, 'ABHA number must be 14 digits')
    .or(z.string().regex(/^[\w.-]+@[\w.-]+$/, 'Invalid ABHA address format')),
  consent: z.boolean().refine(val => val === true, 'Consent required'),
})

type ABHAFormData = z.infer<typeof abhaSchema>

export function ABHALinking() {
  const [isLoading, setIsLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [linked, setLinked] = useState(false)
  const [txnId, setTxnId] = useState('')
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors }, watch } = useForm<ABHAFormData>({
    resolver: zodResolver(abhaSchema),
  })

  const onSubmit = async (data: ABHAFormData) => {
    setIsLoading(true)
    setError('')
    try {
      const response = await fetch('/api/abha/initiate-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          abhaNumber: data.abhaNumber,
          authMethod: 'AADHAAR_OTP',
        }),
      })

      if (!response.ok) throw new Error('Unable to start ABHA linking')
      const result = await response.json()
      setTxnId(result.txn_id)
      setOtpSent(true)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  if (linked) {
    return (
      <div className="bg-green-50 p-6 rounded-xl text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800">ABHA Linked Successfully!</h3>
        <p className="text-green-700 mt-2">Your health records are now connected.</p>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Link2 className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Link ABHA ID</h2>
          <p className="text-gray-600 text-sm">Connect your Ayushman Bharat Health Account</p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h4 className="font-medium text-blue-900 mb-2 flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Benefits
        </h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Unified health records across providers</li>
          <li>• Secure digital sharing with doctors</li>
          <li>• Access to government health schemes</li>
        </ul>
      </div>

      {!otpSent ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ABHA Number / Address
            </label>
            <input
              {...register('abhaNumber')}
              placeholder="14-digit ABHA number or yourname@abdm"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.abhaNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.abhaNumber.message}</p>
            )}
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('consent')}
              className="mt-1 mr-2"
            />
            <label className="text-sm text-gray-600">
              I consent to share my ABHA information with SwasthyaSetu for healthcare purposes
            </label>
          </div>
          {errors.consent && (
            <p className="text-red-500 text-sm">{errors.consent.message}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Sending OTP...' : 'Link via ABHA Number'}
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50"
          >
            Create New ABHA ID
          </button>
        </form>
      ) : (
        <OTPVerification txnId={txnId} onVerify={() => setLinked(true)} />
      )}
      {error && <p role="alert" className="mt-4 text-sm text-red-600">{error}</p>}
    </div>
  )
}

function OTPVerification({ txnId, onVerify }: { txnId: string; onVerify: () => void }) {
  const [otp, setOtp] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const verify = async () => {
    setIsLoading(true)
    setError('')
    try {
      const response = await fetch('/api/abha/verify-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ txn_id: txnId, otp }),
      })
      if (!response.ok) throw new Error('OTP verification failed')
      onVerify()
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'OTP verification failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Enter OTP sent to your mobile
      </label>
      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        maxLength={6}
        placeholder="6-digit OTP"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={verify}
        disabled={otp.length !== 6 || isLoading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Verifying...' : 'Verify & Link'}
      </button>
      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
    </div>
  )
}
