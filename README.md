# 🏥 SwasthyaSetu (स्वास्थ्यसेतु)

**India's NMC-Compliant Teleconsultation Platform with ABHA Integration**

[![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)](https://swasthyasetu.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.109-teal?logo=fastapi)](https://fastapi.tiangolo.com)

<p align="center">
  <b>English</b> | <a href="#hindi-विवरण">हिंदी</a>
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Deployment](#-deployment)
- [Environment Variables](#-environment-variables)
- [Troubleshooting](#-troubleshooting)

---

## 🌟 Overview

SwasthyaSetu is a **bilingual (Hindi/English)** teleconsultation platform built for the Indian healthcare ecosystem. It integrates with the **Ayushman Bharat Digital Mission (ABDM)** and strictly follows **National Medical Commission (NMC)** guidelines for telemedicine practice.

### Key Highlights

- ✅ **NMC Compliant** - Verified doctors only, no AI prescriptions
- ✅ **ABHA Integrated** - Seamless health record management
- ✅ **Data Localization** - All data stored in India (Mumbai region)
- ✅ **Bilingual** - Full Hindi and English support
- ✅ **Secure** - End-to-end encryption, HIPAA-aligned

---

## 🚀 Features

### For Patients
| Feature | Description | Status |
|---------|-------------|--------|
| 🔐 ABHA Linking | Connect Ayushman Bharat Health Account | ✅ Phase 1 |
| 👨‍⚕️ Doctor Search | Find NMC-verified doctors by specialty | ✅ Phase 1 |
| 📹 Video Consultation | Secure video calls with doctors | 🚧 Phase 2 |
| 💊 E-Prescriptions | Digital prescriptions with QR codes | 🚧 Phase 2 |

### For Doctors
| Feature | Description | Status |
|---------|-------------|--------|
| 🏥 NMC Verification | Automated registration validation | ✅ Phase 1 |
| 📅 Schedule Management | Availability and booking management | 🚧 Phase 2 |
| 🤖 AI Scribe | Automated clinical notes (RMP-reviewed only) | 🚧 Phase 3 |

---

## ⚡ Quick Start

### Prerequisites

- Node.js 18+
- Python 3.9+
- npm or yarn
- Vercel CLI (`npm i -g vercel`)
- Git

### 1. Clone Repository

```bash
git clone https://github.com/your-org/swasthyasetu.git
cd swasthyasetu
```

### 2. Setup Web Application

```bash
cd web
npm install
cp .env.example .env.local
npm run dev
```

Web app will be available at `http://localhost:3000`

### 3. Setup API Server

```bash
cd api
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate  # Windows
pip install -r requirements.txt
cp .env.example .env.local
uvicorn main:app --reload --port 8000
```

API will be available at `http://localhost:8000`

---

## 🚀 Deployment

### Deploy to Vercel

#### Step 1: Deploy API

```bash
cd api
vercel login
vercel link
vercel --prod
```

Note the deployed URL: `https://api-swasthyasetu.vercel.app`

#### Step 2: Deploy Web App

```bash
cd web
echo "NEXT_PUBLIC_API_URL=https://api-swasthyasetu.vercel.app" > .env.local
vercel --prod
```

---

## 🔐 Environment Variables

### Web App (`web/.env.local`)

```env
NEXT_PUBLIC_APP_NAME=SwasthyaSetu
NEXT_PUBLIC_APP_VERSION=1.0.0
NEXT_PUBLIC_API_URL=https://api-swasthyasetu.vercel.app
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_ABHA_ENABLED=true
```

### API (`api/.env.local`)

```env
APP_NAME=SwasthyaSetu API
ENVIRONMENT=production
SECRET_KEY=your-super-secret-key-min-32-chars-long
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key
ABDM_SANDBOX_URL=https://dev.abdm.gov.in/api
ABDM_CLIENT_ID=your-abdm-client-id
ABDM_CLIENT_SECRET=your-abdm-client-secret
```

---

## 🐛 Troubleshooting

### 404: NOT_FOUND Error

**Cause**: Vercel cannot find the build output or entry point.

**Solution**:
```bash
# Ensure you're deploying from the correct directory
cd web  # or cd api
vercel --prod

# Check vercel.json exists
cat vercel.json

# Verify build output directory exists after local build
npm run build
ls -la .next
```

### Build Fails on Vercel

**Cause**: Dependencies not resolved.

**Solution**:
```javascript
// Use standalone output in next.config.js
module.exports = {
  output: 'standalone',
}
```

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Commit** your changes
4. **Push** to the branch
5. **Open** a Pull Request

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file.

---

<p align="center">
  <b>Built with ❤️ for Bharat</b>
</p>

---

## Hindi विवरण

### स्वास्थ्यसेतु - भारत का टेलीकंसल्टेशन प्लेटफॉर्म

**स्वास्थ्यसेतु** एक द्विभाषी (हिंदी/अंग्रेजी) टेलीकंसल्टेशन प्लेटफॉर्म है जो भारतीय स्वास्थ्य पारिस्थितिकी तंत्र के लिए बनाया गया है।

### मुख्य विशेषताएं

- ✅ **एनएमसी अनुपालित** - केवल सत्यापित डॉक्टर
- ✅ **आभा एकीकृत** - आयुष्मान भारत डिजिटल मिशन
- ✅ **डेटा स्थानीयकरण** - सभी डेटा भारत में संग्रहीत
- ✅ **सुरक्षित** - एंड-टू-एंड एन्क्रिप्शन

### त्वरित प्रारंभ

```bash
# वेब ऐप स्थापित करें
cd web
npm install
npm run dev

# एपीआई सर्वर स्थापित करें
cd api
pip install -r requirements.txt
uvicorn main:app --reload
```

**संपर्क**: support@swasthyasetu.in | **वेबसाइट**: https://swasthyasetu.vercel.app
