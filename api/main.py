"""
SwasthyaSetu API - Vercel Optimized
FastAPI application for teleconsultation platform
Compatible with Python 3.9+
"""

import os
import sys
from datetime import datetime

# Add current directory to path for imports
sys.path.insert(0, os.path.dirname(__file__))

# Try to import FastAPI with fallback
try:
    from fastapi import FastAPI, Request, HTTPException
    from fastapi.middleware.cors import CORSMiddleware
    from fastapi.responses import JSONResponse
except ImportError as e:
    print(f"Failed to import FastAPI: {e}")
    raise

app = FastAPI(
    title="SwasthyaSetu API",
    description="NMC Compliant Teleconsultation Platform API",
    version="1.0.0",
    docs_url="/api/docs" if os.getenv("VERCEL_ENV") != "production" else None,
    redoc_url="/api/redoc" if os.getenv("VERCEL_ENV") != "production" else None,
)

# CORS - Allow all origins for development
allowed_origins = [origin.strip() for origin in os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(",") if origin.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    """Root endpoint"""
    return {
        "message": "SwasthyaSetu API",
        "version": "1.0.0",
        "docs": "/api/docs",
        "health": "/api/health"
    }

@app.get("/api/health")
def health_check():
    """Health check endpoint for Vercel"""
    return {
        "status": "healthy",
        "timestamp": datetime.utcnow().isoformat(),
        "version": "1.0.0",
        "environment": os.getenv("VERCEL_ENV", "development"),
        "region": "bom1"
    }

@app.get("/api/compliance/status")
def compliance_status():
    """Public compliance status endpoint"""
    return {
        "nmc_compliant": False,
        "abdm_integrated": False,
        "mode": "sandbox_demo",
        "data_localization": "Deployment configured for India (Mumbai Region)",
        "encryption": "Provided by HTTPS and configured storage provider",
        "last_audit": datetime.utcnow().isoformat(),
        "certifications": ["ISO27001_In_Progress"]
    }

# ABHA Routes
@app.post("/api/abha/initiate-link")
async def initiate_abha_link(data: dict):
    """Initiate ABHA linking - sends OTP"""
    return {
        "success": True,
        "message": "OTP sent successfully",
        "txn_id": "txn-" + datetime.utcnow().strftime("%Y%m%d%H%M%S")
    }

@app.post("/api/abha/verify-link")
async def verify_abha_link(data: dict):
    """Verify OTP and complete ABHA linking"""
    return {
        "success": True,
        "message": "ABHA ID linked successfully",
        "abha_details": {
            "name": "Patient Name",
            "gender": "M",
            "year_of_birth": 1990,
            "mobile": "******7890",
        }
    }

@app.get("/api/abha/status")
async def get_abha_status():
    """Check ABHA linking status"""
    return {
        "linked": True,
        "abha_number": "1234********",
        "linked_at": datetime.utcnow().isoformat()
    }

# Doctor Routes
@app.get("/api/doctors/search")
async def search_doctors(
    specialty: str = None,
    language: str = None,
    available_now: bool = False
):
    """Search NMC-verified doctors"""
    doctors = [
        {
            "id": "doc-1",
            "full_name": "Dr. Rajesh Kumar",
            "nmc_registration_number": "12345",
            "nmc_verified": True,
            "specialty": "General Medicine",
            "qualification": "MBBS, MD",
            "years_of_experience": 12,
            "consultation_fee": 300,
            "languages_spoken": ["hi", "en"],
            "is_online": True,
            "state_medical_council": "Delhi Medical Council"
        },
        {
            "id": "doc-2",
            "full_name": "Dr. Priya Sharma",
            "nmc_registration_number": "67890",
            "nmc_verified": True,
            "specialty": "Cardiology",
            "qualification": "MBBS, MD, DM",
            "years_of_experience": 15,
            "consultation_fee": 500,
            "languages_spoken": ["hi", "en", "mr"],
            "is_online": False,
            "state_medical_council": "Maharashtra Medical Council"
        }
    ]

    if specialty:
        doctors = [d for d in doctors if d["specialty"].lower() == specialty.lower()]

    if available_now:
        doctors = [d for d in doctors if d["is_online"]]

    return doctors

@app.post("/api/doctors/register")
async def register_doctor(data: dict):
    """Register new doctor with NMC verification"""
    return {
        "success": True,
        "doctor_id": "doc-new-" + datetime.utcnow().strftime("%Y%m%d%H%M%S"),
        "message": "Registration submitted. NMC verification in progress.",
        "verification_status": "PENDING"
    }

@app.get("/api/doctors/profile/{doctor_id}")
async def get_doctor_profile(doctor_id: str):
    """Get doctor profile with NMC details"""
    return {
        "id": doctor_id,
        "full_name": "Dr. Rajesh Kumar",
        "qualifications": "MBBS, MD (Medicine)",
        "specialty": "General Medicine",
        "years_of_experience": 12,
        "languages_spoken": ["English", "Hindi"],
        "consultation_fee": 300,
        "nmc_registration": {
            "registration_number": "12345",
            "registration_council": "Delhi Medical Council",
            "registration_year": 2012,
            "verification_status": "Verified",
            "verified_date": "2024-01-01"
        },
        "availability": {
            "is_online": True,
            "next_available_slot": "2024-01-15T10:00:00Z",
            "consultation_modes": ["VIDEO", "AUDIO", "CHAT"]
        }
    }

# Auth Routes
@app.post("/api/auth/login")
async def login(data: dict):
    """User login"""
    return {
        "success": True,
        "token": "mock-jwt-token",
        "user": {
            "id": "user-123",
            "email": data.get("email"),
            "role": "patient"
        }
    }

@app.post("/api/auth/register")
async def register(data: dict):
    """User registration"""
    return {
        "success": True,
        "user_id": "user-new-" + datetime.utcnow().strftime("%Y%m%d%H%M%S"),
        "message": "Registration successful"
    }

# Error handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """Global exception handler"""
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal server error",
            "message": str(exc) if os.getenv("DEBUG") == "true" else "Something went wrong"
        }
    )

# Vercel serverless handler
handler = app

# For local development
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
