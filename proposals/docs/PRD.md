# Product Requirements Document (PRD): NyaySetu

## 1. Overview
NyaySetu is an omnichannel, inclusive digital legal aid infrastructure designed to automate Bangladesh's Legal Aid Services Act (2000) workflows, prioritizing the poorest and most marginalized citizens.

## 2. Target Audience (Personas)
- **Persona A (Zero-Tech):** Amina, an illiterate widow in rural Kurigram facing land eviction. Needs physical paper processing via UDC.
- **Persona B (Low-Tech):** Rafiq, a garment worker in Gazipur with a button phone. Needs voice/USSD access (`*16430#`).
- **Persona C (Smartphone):** Sumaiya, a university student facing domestic violence. Uses WhatsApp for voice notes and document uploads.
- **Persona D (Institutional):** Legal Aid Officer (LAO). Needs an ERP to reduce paperwork, generate LA Forms 20-25 automatically, and intelligently match panel lawyers.

## 3. Functional Requirements
- **FR1:** The system MUST support physical paper ingestion using ArUco markers and Bangla OCR for LAF-1.
- **FR2:** The system MUST expose a USSD menu and an IVR voicebot capable of understanding regional dialects.
- **FR3:** The system MUST categorize applications into Red Alert (Emergency), Medium (Mandatory ADR), and Regular priorities automatically based on Section 7(1)(c) and Section 21B.
- **FR4:** The system MUST auto-generate statutory reports (LA Forms 20, 21, 22, 23, 24, 25).
- **FR5:** The Panel Lawyer matcher MUST enforce Section 15 rules, including the 1/3 female lawyer quota.

## 4. Non-Functional Requirements
- **NFR1:** The system must be highly available (99.9% uptime) as it handles emergency life-and-death cases.
- **NFR2:** Data privacy is paramount; PII (Personally Identifiable Information) must be encrypted at rest and in transit.
- **NFR3:** The Web App (PWA) must function on low-bandwidth 2G/3G connections and be under 2MB in size.
