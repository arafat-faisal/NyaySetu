# Attachment 1: NyaySetu (ন্যায়সেতু) — System Architecture & Operational Blueprint

**Prepared for Multi-LLM UI/UX Architecture & Interface Challenge**  
*System: NyaySetu (Omnichannel Digital Legal Aid Platform for Bangladesh)*  
*Context: National Legal Tech Hackathon 2026 (European Union • UNDP • Ministry of Law, Justice & Parliamentary Affairs)*

---

## 1. The Core Problem in Bangladesh
Bangladesh's formal judiciary faces a crisis of scale and accessibility:
- **4.64 million pending cases** backlogging subordinate and appellate courts nationwide.
- **Over 70% of all prison inmates (85,000+ total)** are undertrial detainees who have never received a trial verdict, many detained past their statutory maximum sentence due to poverty and lack of representation.
- **27 full-time Legal Aid Officers (DLAOs)** serve all 64 districts (approximately 1 officer per 6.3 million citizens).
- **The 14-Day Paper Dispatch Delay**: Physical court bail orders take up to 2 weeks to travel by physical courier between magistrates and prison gates, causing unlawful continued detention.
- **Digital & Literacy Barriers**: 25%+ of the vulnerable population cannot read or write Bengali text, and over 50 million citizens in rural riverine areas rely on basic 2G feature phones without internet access.

---

## 2. The 4-Tier Omnichannel Architecture
NyaySetu addresses these challenges through a continuous access spectrum ensuring zero exclusion:

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                           CITIZEN ACCESS CONTINUUM                             │
├─────────────────┬─────────────────┬────────────────────┬───────────────────────┤
│ Tier 0: Paper   │ Tier 1: 2G Voice│ Tier 2: Messaging  │ Tier 3: Officer Hub   │
│ & Physical OCR  │ & Retro USSD    │ & Web PWA          │ & Judicial Workbench  │
├─────────────────┼─────────────────┼────────────────────┼───────────────────────┤
│ • ArUco corners │ • 16430 Hotline │ • WhatsApp Legal   │ • DLAC Officer Triage │
│ • 4,554 Union   │ • Regional      │   Intake Bot       │ • 1-Page Bangla Brief │
│   Digital Ctrs  │   Dialect ASR   │ • Nari-Shield Safe │ • FastBail PKI Release│
│ • Optical Quad  │ • *16430# USSD  │   Discreet Panic   │ • Bhoo-Chitra GIS Map │
│   Perspective   │   Nokia feature │   Escape Portal    │ • Sec 15 Quota (33.3% │
│   Correction    │   phone menus   │ • Sub-2MB Offline  │   Female Lawyers)     │
└─────────────────┴─────────────────┴────────────────────┴───────────────────────┘
```

---

## 3. Subsystem Breakdown & Technical Mechanics

### Subsystem A: Tier 0 — ArUco Optical Paper Ingestion
- **Concept**: Citizens who only have paper application forms (`LAF-1`) take them to Union Digital Centres (UDCs). A standard smartphone camera or basic webcam scans the sheet.
- **Mechanics**: 4 ArUco fiducial corner markers (`DICT_4X4_50`) are detected. Even if the sheet is tilted, wrinkled, or photographed at an angle, 4-point projective homography restores it to a flat plane. Bangla OCR extracts citizen name, NID, and dispute details into structured JSON.

### Subsystem B: Tier 1 — KanthoNyay 16430 Dialect Voice AI & USSD
- **Voice AI Hotline**: Handles citizen calls over government toll-free number `16430`. Dialect-adaptive acoustic models transcribe regional dialects (*Sylheti*, *Chatgaya*, *Standard Bangla*), extract legal intent, and generate automated case intake drafts.
- **Interactive USSD (*16430#) on 2G Feature Phones**: Accessible without internet. A hierarchical menu tree (`1. Check Status`, `2. Emergency Bail Rights`, `3. Farayez Share Calculator`, `4. Request Call Back`) sends instant flash SMS alerts.

### Subsystem C: Tier 2 — WhatsApp Legal Intake & Nari-Shield Safe Gateway
- **WhatsApp Web Bot**: Citizens can submit voice notes, photographs of police charge sheets, or text messages to receive conversational statutory advice.
- **Nari-Shield Survivor Safety**: For domestic abuse and dowry harassment victims facing physical surveillance, a single click on **"জরুরি প্রস্থান (Panic Escape)"** or hitting `Esc` instantly replaces the legal screen with an innocent lifestyle, recipe, and weather portal (*Ilish Polao Recipe & Weather Digest*), preventing retaliatory harm.

### Subsystem D: Tier 3 — DLAC Officer Docket & Nyay-Triage
- **Master Case Queue**: Prioritizes incoming disputes based on vulnerability (Red Alert: undertrials, bonded labor, child trafficking; Yellow: land grab, unpaid wages; Green: civil inheritance).
- **1-Page Bengali Case Brief (`বাংলা কেস ব্রিফ`)**: Synthesizes 40-page police records into a single page with facts (150 words), statutory CrPC/Penal Code articles, and admissibility flags.
- **Section 15 Panel Advocate Matching**: Enforces the statutory requirement of allocating **at least 33.3% of legal aid cases to female advocates**, with real-time quota compliance tracking.

### Subsystem E: Tier 3 — FastBail-BD Cryptographic Bail Dispatch
- **Problem**: Paper bail passes take 7–14 days to reach prisons.
- **Solution**: When a magistrate grants bail under CrPC §497, the system generates a digitally signed judicial payload containing inmate ID, case number, court seal, and cryptographic signature (`Ed25519` or `RSA-4096 / SHA-256`).
- **Prison Gate Verification**: Prison wardens use an offline terminal camera to scan the high-density QR pass. The terminal verifies the signature against the Supreme Court Public Key in under 1 millisecond, authorizing instant inmate release.

### Subsystem F: Tier 3 — Bhoo-Chitra Cadastral GIS & Farayez Engine
- **Cadastral Map Warping**: Historical British CS 1888 mouza survey cloth maps have shrunk, folded, or warped over 130 years. Using Thin Plate Spline (TPS) non-linear elastic transformation, the historical map is warped to align sub-pixel with modern satellite imagery, visually exposing boundary shifts and calculating exact encroachment in decimals (e.g. 14.8 decimals).
- **Farayez Inheritance Calculator**: Computes strict Islamic Quranic fractions (*Ashab al-Furud*) and residuary (*Asabah*) shares across widows, sons, daughters, mother, and father, dividing parcel acreage mathematically.

---

## 4. Multi-Method Configurable Architecture Matrix
The system is designed so that judicial administrators can toggle between alternative production algorithms:

| Subsystem | Method 1 | Method 2 | Method 3 |
| :--- | :--- | :--- | :--- |
| **Legal Triage** | Hybrid Ensemble (Rules + LLM) | Pure 2014 Statutory Rules (Para 2) | Generative Legal LLM (Llama 3.3 70B) |
| **Bail Cryptography**| Ed25519 Curve (384-byte micro-QR) | X.509 RSA-4096 / SHA-256 | NIST P-256 ECDSA (National e-Gov) |
| **Cadastral Warping**| Thin Plate Spline (Elastic TPS) | Projective Homography (4-point DLT) | Delaunay Triangulation (Piecewise Affine) |
| **Speech Pipeline**  | FreeSWITCH SIP + Coqui ASR | Asterisk PBX Core + GSM 6.10 | Browser WebRTC Audio Stream |
| **Paper Ingestion**  | ArUco Quad Homography Warp | Segmented Bounding-Box OCR | Client-side WebAssembly Edge PWA |

---

## 5. Technology Stack & Runtime Constraints
- **Core Languages**: Modern Vanilla HTML5, Vanilla CSS3 (Custom Properties, CSS Grid, Container Queries), and Modern ES6+ JavaScript.
- **Multithreading**: Dedicated Web Worker (`worker-compute.js`) offloading cryptographic signing, matrix warping, and mathematical fractions off the main thread.
- **Zero Framework Bloat**: No mandatory Node.js or React runtime required for deployment; 100% client-side resilient and hostable on GitHub Pages.
