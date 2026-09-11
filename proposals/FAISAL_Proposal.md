# FAISAL'S PROPOSAL: NyaySetu (ন্যায়সেতু) - The Justice Bridge

**"No device, no literacy, no distance, no delay—no citizen left outside justice."**

## 1. Executive Summary
"NyaySetu" combines a 4-Tier omnichannel infrastructure with an AI-powered Smart Triage Engine. It bridges the extreme digital divide in Bangladesh, ensuring that everyone—from an illiterate farmer to a smartphone user—has frictionless access to legal aid services.

## 2. The 4-Tier Inclusive Architecture

### Tier 0 (No Device / Illiterate): Physical Paper Auto-Bridging
Leveraging 4,554 Union Digital Centres (UDCs) and Village Courts (*গ্রাম আদালত*).
- **ArUco Marker Forms:** LAF-1 forms contain alignment markers and QR codes. When scanned at UDCs, Bangla OCR automatically parses the form, ensuring 100% digital parity without data entry labor.

### Tier 1 (Button Phone / 2G): 16430 Modernization
- **AI Voicebot:** A voice interface built on Asterisk/FreeSWITCH with dialect-tolerant Bangla Speech-to-Text (ASR) (e.g., Sylheti, Chatgaya).
- **USSD Gateway:** A zero-data `*16430#` USSD menu allowing citizens to check application status or request emergency legal aid.

### Tier 2 (Smartphone): WhatsApp & PWA
- **Omnichannel WhatsApp Bot:** Citizens can send voice notes, photos of FIRs/Summons, and National ID cards. The bot utilizes OCR to extract details.
- **Offline-First PWA:** A sub-2MB Progressive Web App enabling offline intake for remote workers.

### Tier 3 (Justice Backbone): DLAC ERP & Smart Triage
- **Automated Statutory Forms:** The system auto-generates LAF-1 to LAF-4 and Registers 01 to 09.
- **Smart Triage Engine (Nyay-Triage):**
  - **Red Alert (High Priority):** Automatically tags emergency support (detainees without trial, July Martyrs, trafficking victims) under Section 7(1)(c) and routes them immediately.
  - **Medium Priority (Mandatory ADR):** Evaluates for "Mandatory Pre-case Mediation" under Section 21B (2026 Amendment).
  - **Regular Priority:** Standard consultations and legal advice.
- **Explainable Panel Lawyer Matcher:** Allocates Section 15 panel lawyers based on Domain Match (40%), Caseload Cap (25%), Disposal Velocity (20%), and Proximity (15%), adhering strictly to the 1/3 female lawyer quota.

## 3. Core Innovations

### HabeasAlert / Over-Detention Watchdog
Cryptographically signed digital bail notices connecting Courts and District Jails to eliminate post-bail over-detention.

### 1-Page Structured Case Summary (Bengali AI Brief)
AI summarizes lengthy FIRs, extracting: Basic Info, Brief Facts, Applicable Laws, Eligibility under the 2014 Policy, and Proposed Actions (ADR vs. Litigation).

## 4. Future Work
- Integration with National Identity (NID) verification APIs for instant eligibility checks.
- Expanding the system to support completely floating digital paralegal clinics (Nyayatori) for riverine/char communities.
- Blockchain-backed tamper-proof logging for sensitive evidence chain of custody.
