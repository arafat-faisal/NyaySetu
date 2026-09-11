# NyaySetu (ন্যায়সেতু) — Digital Legal Aid Platform for Bangladesh ⚖️🇧🇩

> **Live Website Showcase:** [https://arafat-faisal.github.io/NyaySetu/](https://arafat-faisal.github.io/NyaySetu/)  
> **Grand Challenge:** Legal Tech Hackathon 2026 — *Accelerating Digital Legal Aid Services in Bangladesh (ADLASB)*  
> **Funding & Implementation:** European Union (EU) • Directorate of Bangladesh Legal Aid (DBLA) / Ministry of Law, Justice & Parliamentary Affairs • Technical Assistance by UNDP Bangladesh  

---

## 🌟 Executive Summary

**"No device, no literacy, no distance, no delay — no citizen left outside justice."**

In Bangladesh, over **4.639 Million cases** clog subordinate courts, **70%+ of prison inmates** are undertrial detainees awaiting trial, and **97% of eligible citizens** are unaware of free state legal aid. Furthermore, 25%+ illiteracy and dialect exclusion (Sylheti, Chatgaya, Rangpuri) render conventional web apps unusable for marginalized citizens.

**NyaySetu (ন্যায়সেতু)** is an inclusive **4-Tier Omnichannel Legal Aid Platform** that bridges the extreme socio-economic and digital divide in Bangladesh.

---

## 🏛️ 4-Tier Inclusive Architecture

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                             CITIZEN INTAKE CONTINUUM                             │
├─────────────────┬──────────────────┬──────────────────────┬──────────────────────┤
│     TIER 0      │      TIER 1      │        TIER 2        │        TIER 3        │
│  (Zero-Device / │  (Button Phone / │     (Smartphone /    │ (Justice Operations  │
│   Illiterate)   │     2G Voice)    │      Paralegal)      │       Backbone)      │
├─────────────────┼──────────────────┼──────────────────────┼──────────────────────┤
│ • 4,554 UDCs &  │ • FreeSWITCH SIP │ • WhatsApp Bot       │ • Spring Boot 3 ERP  │
│   Village Court │   National PBX   │ • Voice notes & OCR  │ • Nyay-Triage Engine │
│ • ArUco Form    │ • 16430 Dialect  │ • Sub-2MB Offline    │ • Auto-generate      │
│   LAF-1 auto-OCR│   Whisper ASR    │   Service Worker PWA │   Forms LA-20 to 25  │
│ • Zero typing   │ • Zero-data USSD │ • Nari-Shield Panic  │ • Sec 15 1/3 Female  │
│   requirement   │   (*16430#)      │   Escape for DV      │   Lawyer Allocation  │
└─────────────────┴──────────────────┴──────────────────────┴──────────────────────┘
```

---

## 🎯 Alignment With the 6 Official Hackathon Tracks

| Track # | Official Track Challenge | Identified Ground Bottleneck | NyaySetu Engineered Breakthrough |
|---|---|---|---|
| **Track 01** | **Citizen Access** (Last-Mile Gap) | Illiteracy & 2G feature phones exclude millions from web portals. | **Tier 0 Paper Auto-Bridging** (ArUco scanner at 4,554 UDCs) + **USSD `*16430#`**. |
| **Track 02** | **AI for Legal Aid** (Frontline Intelligence) | DLAOs spend 70% of time reading 40-page handwritten Bengali FIRs. | **1-Page Bengali AI Brief** + **Nyay-Triage Rule & Semantic Classifier**. |
| **Track 03** | **Justice Operations** (System Backbone) | 7-21 day courier delay transmitting paper bail orders causes over-detention. | **FastBail-BD** (30-second X.509 PKI bail dispatch) + **HabeasAlert** prison census watchdog. |
| **Track 04** | **ODR & Accountability** (Dispute Resolution) | 60%+ civil suits are rural land disputes from unaligned CS/RS maps. | **Bhoo-Chitra Cadastral Warping** (AI map alignment) + **Farayez Inheritance Calculator**. |
| **Track 05** | **Community Innovation** (Leave No One Behind) | Domestic violence victims risk retribution if digital history is found. | **Nari-Shield Stealth Mode** + **Nyayatori Floating Clinics** for riverine chars. |
| **Track 06** | **AI Call Centre & Omnichannel** (16430 Hotline) | 16430 hotline drops 70%+ of calls; Sylheti/Chatgaya dialects fail standard NLP. | **FreeSWITCH Sovereign SIP Core** + **Dialect-Trained Whisper ASR**. |

---

## ⚡ Technical Stack & Architectural Decisions (ADR)

- **Core ERP Backend:** Java (Spring Boot 3) + Flowable BPMN Engine (ACID compliance for statutory Registers 01-09).
- **AI / ML Microservices:** Python (FastAPI) + Fine-tuned Whisper Bengali Dialect ASR + Quantized LLaMA / DeepSeek.
- **Database & Geospatial:** PostgreSQL 16 + PostGIS extension (geospatial radius queries for Section 15 panel lawyer allocation).
- **Frontend / Client:** Sub-2MB Progressive Web App (PWA) with IndexedDB offline-first synchronization.
- **Telephony & Communications:** FreeSWITCH / Asterisk PBX core with BTRC-authorized SIP trunking (sovereign zero-per-minute cost).
- **Security & Digital Bail:** OpenSSL X.509 PKI digital signatures + AES-256-GCM encryption.

---

## 📁 Repository Structure

```
NyaySetu/
├── index.html                   # Single-Page Showcase Dashboard (4 Mandated Sections)
├── styles.css                   # Obsidian & Emerald Dark / Crisp Pearl Light Design System
├── app.js                       # Live Search, 6-Track Filtering, Proposal Viewer & Offline Fallbacks
├── README.md                    # Project Documentation
├── assets/                      # Production CSS & JS assets
│   ├── css/styles.css
│   └── js/app.js
├── proposals/                   # Complete Statutory Proposals & Architectural Specifications
│   ├── FAISAL_Proposal.md       # Master Proposal: NyaySetu - The Justice Bridge
│   ├── SAKIB_Proposal.md        # Nyay-Triage & Statutory Forms LA-20 to LA-25
│   ├── Proposal_2_KanthoNyay_Voice_AI.md
│   ├── Proposal_3_FastBail_Overdetention.md
│   ├── Proposal_4_BhooChitra_Land_AI.md
│   └── docs/
│       ├── PRD.md               # Product Requirements Document & User Personas
│       ├── TechStack.md         # Technology Stack Comparisons & Rationale
│       └── ADR.md               # Architecture Decision Records (ADR 001 to 004)
└── data/                        # Datasets (Problem Clusters, Agent Responses, Top Ideas)
```

---

## 👥 Team Composition & Statutory Alignment

In accordance with the mandatory rules of the Legal Tech Hackathon 2026:
- ⚖️ **Law Discipline Representation:** Statutory adherence to the Legal Aid Services Act 2000, 2014 Policy, Village Courts Act 2006, and Code of Civil Procedure (CPC Sec 89A).
- 💻 **Computer Science & IT Representation:** Full-stack distributed systems, sovereign SIP telephony, edge AI, and PKI cryptography.
- 👩 **Gender Diversity:** Prioritizing women's legal protection, Section 15(3) mandatory 1/3 female panel lawyer quota, and Nari-Shield discreet intake.

---

© 2026 Legal Tech Hackathon BD • Accelerating Digital Legal Aid Services in Bangladesh (ADLASB).
