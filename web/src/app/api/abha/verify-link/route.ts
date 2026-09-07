import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  if (!body?.txn_id || !/^\d{6}$/.test(body?.otp ?? '')) {
    return NextResponse.json({ error: 'A valid transaction and 6-digit OTP are required' }, { status: 400 })
  }
  return NextResponse.json({ success: true, mode: 'sandbox_demo', message: 'ABHA linked in demo mode' })
}
