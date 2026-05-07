#!/bin/bash

echo "🚀 SwasthyaSetu Deployment Script"
echo "=================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Deploy API
echo ""
echo "📡 Step 1: Deploying API..."
cd api
vercel --prod
API_URL=$(vercel --json 2>/dev/null | grep -o '"url":"[^"]*' | cut -d'"' -f4 || echo "api-swasthyasetu.vercel.app")
cd ..

echo ""
echo "🔗 API deployed at: https://$API_URL"

# Deploy Web
echo ""
echo "🌐 Step 2: Deploying Web App..."
cd web

# Update API URL
echo "NEXT_PUBLIC_API_URL=https://$API_URL" > .env.local

vercel --prod
cd ..

echo ""
echo "✅ Deployment complete!"
echo "🌐 Web: https://swasthyasetu.vercel.app"
echo "📡 API: https://$API_URL"
