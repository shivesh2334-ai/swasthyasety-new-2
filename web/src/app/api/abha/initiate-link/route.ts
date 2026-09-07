import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)
  if (!body?.abhaNumber) {
    return NextResponse.json({ error: 'ABHA number or address is required' }, { status: 400 })
  }
  return NextResponse.json({
    success: true,
    mode: 'sandbox_demo',
    message: 'Demo OTP initiated',
    txn_id: `txn-${Date.now()}`,
  })
}
