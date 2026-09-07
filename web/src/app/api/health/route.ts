import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'SwasthyaSetu',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  })
}
