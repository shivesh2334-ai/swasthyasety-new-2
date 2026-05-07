# SwasthyaSetu Deployment Script (PowerShell)
Write-Host "🚀 SwasthyaSetu Deployment Script" -ForegroundColor Green
Write-Host "=================================="

# Check if Vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Red
    npm install -g vercel
}

# Deploy API
Write-Host ""
Write-Host "📡 Step 1: Deploying API..." -ForegroundColor Cyan
Set-Location api
vercel --prod
$API_URL = "api-swasthyasetu.vercel.app"
Set-Location ..

Write-Host ""
Write-Host "🔗 API deployed at: https://$API_URL" -ForegroundColor Green

# Deploy Web
Write-Host ""
Write-Host "🌐 Step 2: Deploying Web App..." -ForegroundColor Cyan
Set-Location web
"NEXT_PUBLIC_API_URL=https://$API_URL" | Out-File -FilePath .env.local -Encoding utf8
vercel --prod
Set-Location ..

Write-Host ""
Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌐 Web: https://swasthyasetu.vercel.app"
Write-Host "📡 API: https://$API_URL"
