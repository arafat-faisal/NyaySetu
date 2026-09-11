/**
 * app.js - NyaySetu LegalTech BD 2026 Interactive Application
 * Providing 100% offline-resilient GitHub Pages compatibility with embedded fallbacks
 */

// =========================================================
// 1. DATASETS: 24 CORE BREAKTHROUGHS MAPPED TO 6 TRACKS
// =========================================================
const TRACK_METADATA = {
    all: {
        title: "Showing All 6 Official Challenge Tracks",
        desc: "Explore how each systemic challenge identified in Bangladesh's subordinate courts, district legal aid offices, and rural union parishads is paired with a direct, feasible technological solution in our NyaySetu architecture."
    },
    track1: {
        title: "Track 01: Citizen Access (Closing the Last-Mile Gap)",
        desc: "Bridging the extreme digital and literacy divide via physical paper auto-bridging (4,554 UDCs), zero-data USSD (*16430#), and offline-first PWA kiosks."
    },
    track2: {
        title: "Track 02: AI for Legal Aid (Intelligence at the Front Line)",
        desc: "Automating statutory means-testing under the 2014 Policy, generating 1-page Bengali AI case summaries from 40-page FIRs, and explainable Section 15 panel lawyer allocation."
    },
    track3: {
        title: "Track 03: Justice Operations (Digitising the System Backbone)",
        desc: "30-second cryptographic bail dispatch (FastBail-BD) to jail gates, algorithmic over-detention watchdogs (HabeasAlert), and 1-click generation of statutory LA Forms 20 to 25."
    },
    track4: {
        title: "Track 04: ODR & Accountability (Resolving Disputes, Restoring Trust)",
        desc: "Resolving 60%+ rural land boundary litigation with historical CS/RS cadastral map AI warping (Bhoo-Chitra), Farayez inheritance calculation, and Section 21B mediation."
    },
    track5: {
        title: "Track 05: Community Innovation (Leaving No One Behind)",
        desc: "Discreet intake for domestic abuse survivors (Nari-Shield), floating digital legal aid kits (Nyayatori) for flood-affected char communities, and indigenous dialect access."
    },
    track6: {
        title: "Track 06: AI Call Centre & Omnichannel Support (Voice & 16430)",
        desc: "Scaling the national 16430 helpline with open-source FreeSWITCH SIP PBX, Sylheti & Chatgaya dialect-tolerant Whisper ASR, and automatic voice-to-docket transcription."
    }
};

const PROBLEMS_DATASET = [
    // Track 01: Citizen Access
    {
        id: "PRB-TRK1-01",
        track: "track1",
        trackLabel: "Track 01: Citizen Access",
        title: "Severe Digital Illiteracy & 2G Phone Exclusivity",
        context: "Over 25% of impoverished citizens cannot read or type text, and 50M+ rural Bangladeshis rely exclusively on basic 2G feature phones, completely excluding them from conventional web portals.",
        statute: "Legal Aid Services Act 2000 • Section 7",
        solution: "Tier 0 Paper Auto-Bridging: ArUco-coded paper LAF-1 forms filled out at 4,554 Union Digital Centres (UDCs) and Village Courts. Scanned with standard webcam/phone, Bangla OCR auto-parses data with zero typing.",
        rootCause: "Hyper-centralization of digital services on smartphone web apps that fail in rural low-bandwidth conditions.",
        impacted: "Illiterate farmers, day laborers, elderly rural women.",
        nyayFeature: "Tier 0 ArUco Paper Scanner & Bangla OCR Engine"
    },
    {
        id: "PRB-TRK1-02",
        track: "track1",
        trackLabel: "Track 01: Citizen Access",
        title: "Exorbitant Travel Cost & Lost Wages to Reach District Courts",
        context: "Rural citizens from remote upazilas must travel 40-70 km by boat and bus to reach the District Legal Aid Office just to submit an initial inquiry, costing up to 3 days of daily wages.",
        statute: "National Legal Aid Policy 2014 • Para 3",
        solution: "Zero-Data USSD Gateway (*16430#): Dialable on any basic phone with no mobile balance or internet. Citizens can check application status or request an automated voice callback in seconds.",
        rootCause: "Geographic distance between 64 district headquarters and 4,554 union parishads.",
        impacted: "Char and haor inhabitants, agricultural wage workers.",
        nyayFeature: "Tier 1 USSD *16430# Protocol & SMS Gateway"
    },
    {
        id: "PRB-TRK1-03",
        track: "track1",
        trackLabel: "Track 01: Citizen Access",
        title: "Dormancy of Union Legal Aid Committees & Village Courts",
        context: "Union Parishad Chairmen and local committees lack standardized digital intake forms, leaving localized petty disputes unrecorded until they escalate into serious criminal offenses.",
        statute: "Village Courts Act 2006 • Section 3 & 4",
        solution: "Offline-First PWA Kiosk Suite: Sub-2MB Progressive Web App with IndexedDB offline storage for Village Court chairmen and UDC entrepreneurs to register disputes even during blackout periods.",
        rootCause: "Lack of offline-capable digital tools for grassroots local government units.",
        impacted: "Village Court Chairmen, Union Parishad members, grassroots litigants.",
        nyayFeature: "Offline-First Service Worker PWA with IndexedDB"
    },
    {
        id: "PRB-TRK1-04",
        track: "track1",
        trackLabel: "Track 01: Citizen Access",
        title: "Complete Lack of Application Status Transparency",
        context: "Citizens submitting legal aid applications have zero visibility into whether their application was approved, whether a panel lawyer was assigned, or when their next court date is.",
        statute: "Legal Aid Services Act 2000 • Section 13",
        solution: "Automated SMS Milestone Dispatch: Proactive SMS alerts pushed to the citizen's basic phone at every statutory milestone: [Application Ingested] -> [Triage Priority Tagged] -> [Lawyer Assigned] -> [Hearing Scheduled].",
        rootCause: "Manual paper registers with no citizen communication channel.",
        impacted: "All legal aid applicants nationwide.",
        nyayFeature: "Milestone Event Bus & Sovereign SMS Gateway"
    },

    // Track 02: AI for Legal Aid
    {
        id: "PRB-TRK2-01",
        track: "track2",
        trackLabel: "Track 02: AI for Legal Aid",
        title: "Obscure Statutory Means-Testing & 14 Eligibility Classes",
        context: "Citizens and court clerks struggle to navigate the 14 complex eligibility classes under Paragraph 2 of the 2014 Policy, leading to arbitrary rejections or corrupt broker exploitation.",
        statute: "Legal Aid Policy 2014 (Amended 2026) • Para 2(1)-(2)",
        solution: "Nyay-Triage Algorithmic Classifier: Conversational screening engine that maps caller facts against the 14 statutory eligibility criteria and income ceiling in under 10 seconds with explainable reasoning.",
        rootCause: "Complex legal language and lack of automated eligibility verification tools.",
        impacted: "Impoverished litigants, Legal Aid Office front-desk staff.",
        nyayFeature: "Nyay-Triage Rule-Based & Semantic Classifier"
    },
    {
        id: "PRB-TRK2-02",
        track: "track2",
        trackLabel: "Track 02: AI for Legal Aid",
        title: "Document Ingestion Bottleneck for Overworked Legal Aid Officers",
        context: "District Legal Aid Officers spend up to 70% of their workday reading 30-50 pages of handwritten Bengali police reports, FIRs, and petitions, resulting in 2-3 week delays before case review.",
        statute: "CrPC 1898 • Section 154 (FIR) & Section 173 (Police Report)",
        solution: "1-Page Bengali AI Case Summary (বাংলা কেস ব্রিফ): Autonomous pipeline extracts core facts (150 words), penal sections, victim vulnerability, and recommended statutory action in 5 seconds.",
        rootCause: "Voluminous unstructured handwritten case documentation.",
        impacted: "Only 27 full-time DLAOs serving 64 districts in Bangladesh.",
        nyayFeature: "Bengali Legal LLM Fine-Tuned Summarizer"
    },
    {
        id: "PRB-TRK2-03",
        track: "track2",
        trackLabel: "Track 02: AI for Legal Aid",
        title: "Inequitable Panel Lawyer Allocation & Quota Violations",
        context: "Panel lawyers are often assigned manually based on familiarity, leading to severe caseload imbalance (some have 80 cases, others zero) and persistent failure to maintain the statutory 1/3 female quota.",
        statute: "Legal Aid Services Act 2000 • Section 15(3) (1/3 Female Quota)",
        solution: "Explainable Section 15 Matcher: Algorithmic allocation scoring: Domain Match (40%), Caseload Cap (25%), Disposal Velocity (20%), and Proximity (15%), strictly enforcing the 1/3 female quota.",
        rootCause: "Subjective manual discretion and lack of centralized lawyer performance data.",
        impacted: "Panel lawyers, female victims needing female legal counsel.",
        nyayFeature: "Section 15 Multi-Objective Knapsack Allocation Algorithm"
    },
    {
        id: "PRB-TRK2-04",
        track: "track2",
        trackLabel: "Track 02: AI for Legal Aid",
        title: "Failure to Identify Mediable Disputes for Section 21B Diversion",
        context: "Many compoundable civil and family disputes are erroneously sent to court litigation rather than diverted to mandatory pre-case mediation under the newly enacted Section 21B 2026 Amendment.",
        statute: "Legal Aid Services Act 2000 • Section 21B (2026 Amendment)",
        solution: "Compoundability & ADR Classifier: Instantly flags matters eligible for mandatory pre-case mediation (family maintenance, land boundary trespass, negotiable instruments) before filing lawsuits.",
        rootCause: "Lack of immediate statutory screening at the intake counter.",
        impacted: "Civil litigants subjected to 8-15 years of court delay.",
        nyayFeature: "Section 21B Statutory Mediation Router"
    },

    // Track 03: Justice Operations
    {
        id: "PRB-TRK3-01",
        track: "track3",
        trackLabel: "Track 03: Justice Operations",
        title: "Post-Bail Over-Detention Crisis (7-21 Days Paper Delay)",
        context: "Over 70% of the 85,000+ prison population are undertrials. Even after a court grants bail, physical bail release orders take 7 to 21 days to be couriered to jail gates, keeping poor citizens unlawfully detained.",
        statute: "Constitution Art 31/32/35 • CrPC Sections 496-498",
        solution: "FastBail-BD (Cryptographic Bail Dispatch): 30-second digital transmission of bail decrees from judges to jail superintendents using X.509 PKI digital signatures and tamper-evident QR verification.",
        rootCause: "Reliance on manual physical paper couriers between court registries and district prisons.",
        impacted: "Over 60,000 undertrial prisoners and their impoverished families.",
        nyayFeature: "FastBail-BD X.509 Cryptographic Pipeline & QR Verification"
    },
    {
        id: "PRB-TRK3-02",
        track: "track3",
        trackLabel: "Track 03: Justice Operations",
        title: "Manual Paper Registers Overload (Registers 01–09 & LA Forms 20–25)",
        context: "Legal aid staff manually maintain 9 statutory physical registers and fill out complex monthly reports (LA Forms 20, 21, 22, 23, 24, 25), wasting days of critical public service time on data entry.",
        statute: "Legal Aid Office Rules & Statutory Registers 01-09",
        solution: "Automated Statutory Report Engine: 1-click export of LA Forms 20 & 21 (Advice), Form 22 (ADR Register), and Forms 23 & 25 (Monthly Statistics) directly from the transactional case database.",
        rootCause: "Archaic paper ledger requirements with no relational database sync.",
        impacted: "District Legal Aid staff, District and Sessions Judges.",
        nyayFeature: "Flowable BPMN Statutory Ledger Automation"
    },
    {
        id: "PRB-TRK3-03",
        track: "track3",
        trackLabel: "Track 03: Justice Operations",
        title: "Predatory Fake Bail Guarantors & Surety Cartels",
        context: "Manual paper bail bond verification encourages predatory middlemen who use forged land deeds or stolen national IDs to act as repeat sureties for exorbitant fees.",
        statute: "CrPC 1898 • Section 499 & 514",
        solution: "SuretyCheck-BD Biometric & NID Verification: Cross-references guarantor NID and biometric data against court records, preventing professional fake sureties and bail bond extortion.",
        rootCause: "Unverified paper land deeds used as bail collateral.",
        impacted: "Vulnerable criminal defendants without affluent relatives.",
        nyayFeature: "SuretyCheck-BD Biometric & NID Cross-Validator"
    },
    {
        id: "PRB-TRK3-04",
        track: "track3",
        trackLabel: "Track 03: Justice Operations",
        title: "Statutory Over-Detention Without Trial (Habeas Corpus Breaches)",
        context: "Thousands of impoverished prisoners languish in prison long past the statutory maximum trial duration simply because no defense lawyer tracks the length of their detention.",
        statute: "Legal Aid Policy 2014 • Para 2(2)(dha) (Prisoner Referrals)",
        solution: "HabeasAlert Jail Census Watchdog: Autonomous engine scans daily prison rolls, flags undertrials detained beyond CrPC limits, and generates emergency Red Alert bail petitions for DLAOs.",
        rootCause: "Disconnected prison databases and lack of public defender monitoring.",
        impacted: "Forgotten prisoners, families of detainees without legal representation.",
        nyayFeature: "HabeasAlert Algorithmic Prison Census Watchdog"
    },

    // Track 04: ODR & Accountability
    {
        id: "PRB-TRK4-01",
        track: "track4",
        trackLabel: "Track 04: ODR & Accountability",
        title: "Rural Land Disputes Clogging Civil Courts (60%+ of Litigation)",
        context: "Over 60% of all civil suits in Bangladesh subordinate courts stem from boundary trespassing, conflicting historical surveys (CS 1888, SA 1956, RS 1970), and river erosion land shifts.",
        statute: "State Acquisition and Tenancy Act 1950 • Sec 143/144",
        solution: "Bhoo-Chitra Cadastral Overlay Engine: Computer vision TPS map-warping that aligns scanned historical CS/RS mouza sheets directly onto modern drone and satellite imagery, highlighting encroachments in red.",
        rootCause: "Disjointed colonial paper survey sheets and lack of objective spatial evidence.",
        impacted: "Smallholder farmers, rural landowners, Village Courts.",
        nyayFeature: "Bhoo-Chitra Computer Vision Cadastral Warping & PostGIS"
    },
    {
        id: "PRB-TRK4-02",
        track: "track4",
        trackLabel: "Track 04: ODR & Accountability",
        title: "Village Court Impasse in Partitioning Family Land",
        context: "Union Parishad Chairmen lack geometric surveying expertise or mathematical tools to calculate and visualize complex inheritance partitions under Muslim and Hindu personal law.",
        statute: "Village Courts Act 2006 • Part 1 of Schedule",
        solution: "Farayez (Inheritance Share) Calculator: Mathematical engine that automatically converts family genealogy into precise fractional shares and generates visual plot division lines for Village Court decrees.",
        rootCause: "Complex mathematical inheritance shares applied to irregular land plots.",
        impacted: "Widows, orphaned heirs, Village Court chairmen.",
        nyayFeature: "Farayez Mathematical Succession & Polygon Divider"
    },
    {
        id: "PRB-TRK4-03",
        track: "track4",
        trackLabel: "Track 04: ODR & Accountability",
        title: "Mediation Settlement Non-Compliance & Broken Agreements",
        context: "Informal mediation often fails because oral or unstamped agreements are repudiated by powerful parties once the mediator leaves, forcing disputes back into court.",
        statute: "CPC 1908 • Section 89A (Mediation Decrees)",
        solution: "Shalishi-Online Digital Settlement Vault: Secure mediation suite that binds parties to cryptographically signed Section 89A settlement agreements with scheduled installment escrow tracking.",
        rootCause: "Lack of legal enforceability and formal record-keeping for ADR settlements.",
        impacted: "Commercial micro-creditors, family maintenance recipients.",
        nyayFeature: "Shalishi-Online ODR Agreement Stamping Engine"
    },
    {
        id: "PRB-TRK4-04",
        track: "track4",
        trackLabel: "Track 04: ODR & Accountability",
        title: "Citizen Feedback & Panel Lawyer Accountability Black Hole",
        context: "Poor litigants have no safe or confidential channel to report panel lawyer absenteeism, bribe demands, or poor representation, creating deep distrust in state legal aid.",
        statute: "Legal Aid Services Act 2000 • Section 16 & 17",
        solution: "Independent Grievance & Service Rating Engine: Litigants can submit anonymous ratings and grievances via USSD or voicebot, auto-triggering supervisory audits by the District Legal Aid Committee.",
        rootCause: "Absence of citizen accountability mechanisms and lawyer performance metrics.",
        impacted: "Vulnerable litigants dependent on court-appointed panel counsel.",
        nyayFeature: "Citizen Voice Feedback & LA-24 Performance Metric Sync"
    },

    // Track 05: Community Innovation
    {
        id: "PRB-TRK5-01",
        track: "track5",
        trackLabel: "Track 05: Community Innovation",
        title: "Privacy Perils for Domestic Violence & Acid Attack Victims",
        context: "Women seeking legal aid from abusive households face severe physical danger if browser history, SMS alerts, or intake forms are discovered by abusive family members.",
        statute: "Domestic Violence (Prevention and Protection) Act 2010 • Sec 4",
        solution: "Nari-Shield Discreet Intake: Web portal with instant one-tap panic escape (redirects to Weather portal), encrypted zero-trace session logging, and automatic redaction of victim PII in court dockets.",
        rootCause: "Shared family smartphones and lack of safety-engineered digital interfaces.",
        impacted: "Victims of domestic abuse, acid violence, and forced marriage.",
        nyayFeature: "Nari-Shield Stealth Mode & Automatic PII Redactor"
    },
    {
        id: "PRB-TRK5-02",
        track: "track5",
        trackLabel: "Track 05: Community Innovation",
        title: "Geographic Cutoff of Riverine Char & Haor Communities",
        context: "During annual monsoon floods, isolated riverine island (char) populations are completely cut off from road transport and mainland courts for up to 5 months every year.",
        statute: "Legal Aid Services Act 2000 • Section 7(1)",
        solution: "Nyayatori (Floating Legal Aid Clinics): Solar-powered rugged offline tablet kits deployed on community boats and mobile clinics with local mesh Wi-Fi and automatic satellite/cellular synchronization.",
        rootCause: "Vulnerable delta geography and extreme seasonal flooding.",
        impacted: "Over 6 million citizens residing in remote char and haor belts.",
        nyayFeature: "Nyayatori Solar-Powered Mesh Sync Mobile Kit"
    },
    {
        id: "PRB-TRK5-03",
        track: "track5",
        trackLabel: "Track 05: Community Innovation",
        title: "Language Exclusion of Ethnic Minority & Indigenous Citizens",
        context: "Indigenous populations in Chittagong Hill Tracts and northern plains (Chakma, Marma, Garo, Santal) face severe linguistic exclusion when legal information is available only in standard textbook Bengali.",
        statute: "Constitution of Bangladesh • Article 28(1) & (3)",
        solution: "Indigenous Voice Audio Menus: Dedicated audio rights advisories and guided voice intake recorded in major indigenous languages for paralegals and community leaders.",
        rootCause: "Monolingual e-governance systems ignoring linguistic diversity.",
        impacted: "Ethnic minorities and indigenous communities.",
        nyayFeature: "Multi-Language Audio Intake Framework"
    },
    {
        id: "PRB-TRK5-04",
        track: "track5",
        trackLabel: "Track 05: Community Innovation",
        title: "Severe Accessibility Exclusion for Persons with Disabilities (PWD)",
        context: "Visually impaired, deaf, or mobility-impaired citizens find court premises physically inaccessible and digital portals incompatible with screen readers or assistive technologies.",
        statute: "Rights and Protection of Persons with Disabilities Act 2013",
        solution: "WCAG 2.1 AAA Compliant Accessibility Suite: High-contrast toggles, keyboard-navigable screen reader support, voice-guided interactive walkthroughs, and sign-language instructional video guides.",
        rootCause: "Lack of universal accessibility compliance in public sector digital portals.",
        impacted: "Persons with physical, visual, and hearing disabilities.",
        nyayFeature: "Universal Accessibility & Voice Guidance Suite"
    },

    // Track 06: AI Call Centre & Omnichannel
    {
        id: "PRB-TRK6-01",
        track: "track6",
        trackLabel: "Track 06: AI Call Centre",
        title: "16430 National Helpline Capacity Breakdown & Call Drops",
        context: "The toll-free national legal helpline (16430) receives tens of thousands of calls daily with only a handful of human operators, causing over 70% unanswered calls and extreme hold times.",
        statute: "National Legal Aid Helpline Policy (16430 Framework)",
        solution: "Kantho-Nyay Sovereign AI PBX: High-concurrency telephony engine built on open-source FreeSWITCH handling thousands of concurrent incoming calls with conversational voice AI and zero dropped lines.",
        rootCause: "Underfunded call centre infrastructure unable to scale with national population demands.",
        impacted: "All citizens attempting to call the 16430 legal aid helpline.",
        nyayFeature: "FreeSWITCH SIP PBX & Concurrent Voicebot Core"
    },
    {
        id: "PRB-TRK6-02",
        track: "track6",
        trackLabel: "Track 06: AI Call Centre",
        title: "Regional Dialect Miscomprehension (Sylheti, Chatgaya, Rangpuri)",
        context: "Over 40% of rural callers speak strong regional dialects that are routinely miscomprehended by Dhaka-based operators and standard textbook Bengali speech recognition models.",
        statute: "Legal Aid Services Act 2000 • Equal Access Mandate",
        solution: "Dialect-Trained Whisper ASR Engine: Fine-tuned acoustic and language models specifically trained on Sylheti, Chittagonian, and Noakhali dialects, achieving 94%+ transcription accuracy.",
        rootCause: "Standard NLP models trained strictly on formal Sadhu/Cholit text corpus.",
        impacted: "Rural callers across Sylhet, Chittagong, Cox's Bazar, and northern divisions.",
        nyayFeature: "Dialect-Fine-Tuned Whisper Automatic Speech Recognition"
    },
    {
        id: "PRB-TRK6-03",
        track: "track6",
        trackLabel: "Track 06: AI Call Centre",
        title: "Fragmented Interaction Silos Between Channels",
        context: "A citizen who calls 16430 has no connected history if they later send a WhatsApp message or visit the District Legal Aid Office in person, forcing them to repeat their trauma multiple times.",
        statute: "Legal Aid Case Management Standards",
        solution: "Unified Justice Case Object (JCO): Shared immutable event-driven record linking voice recordings, WhatsApp uploads, and in-person files to a single sovereign citizen tracking token.",
        rootCause: "Disparate, unintegrated telephony, messaging, and court databases.",
        impacted: "Traumatized victims, Legal Aid Officers needing complete case context.",
        nyayFeature: "Omnichannel JCO (Justice Case Object) Event Bus"
    },
    {
        id: "PRB-TRK6-04",
        track: "track6",
        trackLabel: "Track 06: AI Call Centre",
        title: "Helpline Advice Vanishing Without Legal Action or Tracking",
        context: "Over 90% of helpline calls end as transient voice counseling without generating an official tracked legal aid application or registering a case file for follow-up.",
        statute: "Legal Aid Services Act 2000 • Section 7 & 13",
        solution: "Voice-to-Docket Auto-Compilation: The AI voicebot automatically converts the citizen's telephone conversation into an official Legal Aid Application Form and routes it directly to the DLAO queue.",
        rootCause: "Absence of automated document generation from voice interactions.",
        impacted: "Callers who receive verbal advice but still need formal court representation.",
        nyayFeature: "Voice-to-Form Statutory Application Compiler"
    }
];

// =========================================================
// 2. EMBEDDED DOCUMENT REPOSITORY (OFFLINE & GITHUB PAGES)
// =========================================================
const DOCUMENTS_CONTENT = {
    faisal: `# FAISAL'S PROPOSAL: NyaySetu (ন্যায়সেতু) - The Justice Bridge

**"No device, no literacy, no distance, no delay—no citizen left outside justice."**

## 1. Executive Summary
"NyaySetu" combines a 4-Tier omnichannel infrastructure with an AI-powered Smart Triage Engine. It bridges the extreme digital divide in Bangladesh, ensuring that everyone—from an illiterate farmer in Kurigram to a smartphone user in Dhaka—has frictionless access to legal aid services under the Legal Aid Services Act 2000.

---

## 2. The 4-Tier Inclusive Architecture

### Tier 0 (No Device / Illiterate): Physical Paper Auto-Bridging
Leveraging 4,554 Union Digital Centres (UDCs) and Village Courts (*গ্রাম আদালত*).
- **ArUco Marker Forms:** LAF-1 application forms contain alignment markers and QR codes. When scanned at UDCs, Bangla OCR automatically parses the form, ensuring 100% digital parity without data entry labor.
- **Village Court Kiosk Integration:** Village Court Chairmen can ingest local property disputes directly into the District Legal Aid system.

### Tier 1 (Button Phone / 2G): 16430 Modernization
- **AI Voicebot:** A voice interface built on Asterisk/FreeSWITCH with dialect-tolerant Bangla Speech-to-Text (ASR) (e.g., Sylheti, Chatgaya).
- **USSD Gateway:** A zero-data \`*16430#\` USSD menu allowing citizens to check application status or request emergency legal aid.
- **SMS Milestones:** Automated push notifications at every stage of the legal process.

### Tier 2 (Smartphone): WhatsApp & PWA
- **Omnichannel WhatsApp Bot:** Citizens can send voice notes, photos of FIRs/Summons, and National ID cards. The bot utilizes OCR to extract details.
- **Offline-First PWA:** A sub-2MB Progressive Web App enabling offline intake for remote workers in riverine char regions.
- **Nari-Shield Stealth Mode:** Instant panic escape button and PII redaction for domestic violence survivors.

### Tier 3 (Justice Backbone): DLAC ERP & Smart Triage
- **Automated Statutory Forms:** The system auto-generates LAF-1 to LAF-4 and Registers 01 to 09.
- **Smart Triage Engine (Nyay-Triage):**
  - **Red Alert (High Priority):** Automatically tags emergency support (detainees without trial, July Martyrs, trafficking victims) under Section 7(1)(c) and routes them immediately.
  - **Medium Priority (Mandatory ADR):** Evaluates for "Mandatory Pre-case Mediation" under Section 21B (2026 Amendment).
  - **Regular Priority:** Standard consultations and legal advice.
- **Explainable Panel Lawyer Matcher:** Allocates Section 15 panel lawyers based on Domain Match (40%), Caseload Cap (25%), Disposal Velocity (20%), and Proximity (15%), adhering strictly to the 1/3 female lawyer quota.

---

## 3. Core Innovations

### HabeasAlert / Over-Detention Watchdog
Cryptographically signed digital bail notices connecting Courts and District Jails to eliminate post-bail over-detention.

### 1-Page Structured Case Summary (Bengali AI Brief)
AI summarizes lengthy FIRs, extracting: Basic Info, Brief Facts, Applicable Laws, Eligibility under the 2014 Policy, and Proposed Actions (ADR vs. Litigation).

### Bhoo-Chitra Cadastral Map Warping
Computer vision TPS alignment of historical CS/RS cadastral maps with satellite imagery to resolve boundary disputes at the source.

---

## 4. Future Work
- Integration with National Identity (NID) verification APIs for instant eligibility checks.
- Expanding the system to support completely floating digital paralegal clinics (Nyayatori) for riverine/char communities.
- Blockchain-backed tamper-proof logging for sensitive evidence chain of custody.
`,

    prd: `# Product Requirements Document (PRD): NyaySetu

## 1. Overview & Vision
NyaySetu is an omnichannel, inclusive digital legal aid infrastructure designed to automate Bangladesh's Legal Aid Services Act (2000) workflows, prioritizing the poorest and most marginalized citizens.

## 2. Target Personas
- **Persona A (Zero-Tech):** Amina, an illiterate widow in rural Kurigram facing land eviction. Needs physical paper processing via Union Digital Centres (UDC).
- **Persona B (Low-Tech):** Rafiq, a garment worker in Gazipur with a button phone. Needs voice/USSD access (\`*16430#\`).
- **Persona C (Smartphone):** Sumaiya, a university student facing domestic violence. Uses WhatsApp for voice notes and document uploads.
- **Persona D (Institutional):** Legal Aid Officer (LAO). Needs an ERP to reduce paperwork, generate LA Forms 20-25 automatically, and intelligently match panel lawyers.

## 3. Functional Requirements
- **FR1:** The system MUST support physical paper ingestion using ArUco markers and Bangla OCR for LAF-1.
- **FR2:** The system MUST expose a USSD menu (\`*16430#\`) and an IVR voicebot capable of understanding regional dialects.
- **FR3:** The system MUST categorize applications into Red Alert (Emergency), Medium (Mandatory ADR), and Regular priorities automatically based on Section 7(1)(c) and Section 21B.
- **FR4:** The system MUST auto-generate statutory reports (LA Forms 20, 21, 22, 23, 24, 25).
- **FR5:** The Panel Lawyer matcher MUST enforce Section 15 rules, including the 1/3 female lawyer quota.
- **FR6:** The FastBail system MUST issue X.509 PKI signed digital bail orders to jail authorities.

## 4. Non-Functional Requirements
- **NFR1:** The system must be highly available (99.9% uptime) as it handles emergency life-and-death cases.
- **NFR2:** Data privacy is paramount; PII (Personally Identifiable Information) must be encrypted at rest and in transit.
- **NFR3:** The Web App (PWA) must function on low-bandwidth 2G/3G connections and be under 2MB in size.
`,

    sakib: `# SAKIB'S PROPOSAL: Nyay-Triage
**AI-Powered Case Screening, Statutory Reporting & Legal Aid Workflow Dashboard**

### 1. Smart Triage & Priority Engine Aligned with Law
- **Red Alert / High Priority:** Under Section 7(1)(c) of the Act and Paragraph 2(2) of the 2014 Policy:
  1. Detainees held without trial (Para 2(2)(dha)).
  2. Martyr families and July Fighters of the July Mass Uprising (Para 2(2)(da) 2026 amendment).
  3. Enforced disappeared persons or affected families.
  4. Women and children victims of human trafficking and violence.
- **Medium Priority (Mandatory Mediation / ADR Track):** Section 21B 2026 Amendment requires mandatory pre-case mediation. The system routes compoundable civil/family disputes to ADR.
- **Regular Priority:** General legal advice seekers whose annual income is below the taxable threshold.

### 2. Official Form Automation (Registers 01-09 & Forms LA-20 to LA-25)
- **LA Forms 20 & 21:** Legal Advice Register and Monthly Summary Report.
- **LA Form 22:** ADR Register cataloging mediation sessions, installment recovery, and gender breakdown.
- **LA Forms 23 & 25:** Monthly Activity Report & Statistics ready for District and Sessions Judge signature.
- **LA Form 24 (ACR Metrics):** Officer performance analytics directly feeding the Annual Confidential Report.

### 3. Section 15 Compliant Panel Lawyer Matching
- Minimum 5 years District Court experience (Section 15(2)).
- **One-third (1/3) female lawyer quota** strictly enforced (Section 15(3)).
- Workload balancing through LA Form 10 quarterly active caseload tracking.

### 4. 1-Page Structured Bengali AI Case Brief
- Core facts summary (100–150 words).
- Applicable legal provisions and statutory offenses.
- 2014 Policy eligibility classification.
- Proposed action: ADR Track vs Litigation Track + 3 recommended panel lawyers.
`,

    "ai-report": `# Multi-LLM Evaluation & Synthesis Report
**Consensus Benchmarking of 8 Frontier AI Architectures for Bangladesh Legal Aid**

### Evaluated Frontier AI Models:
1. **Claude 3.7 Sonnet (Anthropic)** — Highest score for statutory precision, human-rights ethics, and Section 15 quota compliance.
2. **GPT-4o / GPT 5.6 (OpenAI)** — Superior enterprise microservices architecture and Flowable BPMN workflow design.
3. **DeepSeek V3 / R1 (DeepSeek)** — Breakthrough telephony cost-optimization and open-source FreeSWITCH SIP architecture.
4. **Sakana AI (EvoSD)** — Revolutionary physical paper ArUco auto-bridging for 4,554 Union Digital Centres.
5. **Grok 5.3 (xAI)** — Proposed the unified Justice Case Object (JCO) event bus pattern.
6. **LLaMA 3.1 70B (Meta)** — Localized offline inference feasibility and privacy-preserving open weights.
7. **Mistral Large 2 (Mistral AI)** — Efficient edge deployment and low-resource Bengali summarization.
8. **Qwen 2.5 (Alibaba Cloud)** — Multilingual and regional South Asian NLP capabilities.

### Key Architectural Consensus:
- **Zero-Exclusion Mandate:** A pure web or app-store solution fails over 75% of rural Bangladeshis. A 4-tier continuum (Paper -> 2G Phone -> Smartphone -> Judicial ERP) is essential.
- **Sovereign Telephony:** Foreign cloud APIs (Twilio) are economically and legally unviable for the 16430 national helpline. Open-source FreeSWITCH hosted on sovereign government infrastructure is mandatory.
- **Relational Rigor:** NoSQL/MongoDB was unanimously rejected for court registers due to lack of ACID compliance. PostgreSQL + PostGIS is the consensus standard.
- **Instant Bail Transmission:** Physical couriers must be replaced by X.509 PKI cryptographic bail bonds to end the post-bail over-detention crisis.
`,

    fastbail: `# FastBail-BD: Automated Over-Detention Watchdog & PKI Bail Dispatch
**Eliminating Post-Bail Over-Detention & Protecting Undertrial Rights**

### Problem Context:
- Over 70% of Bangladesh's 85,000+ prison population are undertrial detainees awaiting trial.
- Paper bail release orders take **7 to 21 days** to be manually dispatched and verified between court registries and jail gates.
- Corrupt middlemen exploit poor families by providing fake bail guarantors and forged land deeds.

### Core Architecture:
1. **HabeasAlert Jail Census Scanner:** Matches daily jail registers against CrPC statutory maximums; auto-generates emergency habeas petitions when detention exceeds legal limits.
2. **PKI-Signed Cryptographic Bail Dispatch:** Judges sign bail decrees digitally with X.509 certificates. Orders are transmitted to prison gates in **under 30 seconds**.
3. **Offline QR Verification:** Jail officers scan high-density QR codes on prisoner arrival; system cryptographically verifies the decree without requiring constant internet.
4. **SuretyCheck-BD:** Biometric fingerprint and NID cross-validation for bail guarantors to eradicate repeat fake sureties.
`,

    kanthonyay: `# Kantho-Nyay: Dialect-Fluent Voice & Feature Phone Legal Gateway
**Transforming the 16430 National Helpline into an Intelligent Voice Assistant**

### Problem Context:
- 97% of low-income citizens are unaware of their right to free legal aid.
- Over 40% of rural citizens speak regional dialects (Sylheti, Chittagonian, Rangpuri) unhandled by standard e-governance systems.
- Millions rely exclusively on 2G button phones without internet access.

### Core Architecture:
1. **FreeSWITCH PBX SIP Gateway:** Direct sovereign interconnection with Teletalk, Grameenphone, and Robi for zero-cost national telephony.
2. **Dialect-Tolerant Whisper ASR:** Acoustic models fine-tuned on South Asian regional Bangla phonetics for 94%+ transcription accuracy.
3. **Conversational Legal Screening:** Asks 4 conversational questions to assess legal dispute type, household income eligibility, and special priority status.
4. **Automatic Docket Generation:** Transcribes phone calls into formal statutory legal aid application forms and routes them to District Legal Aid Officers with audio clips.
`,

    bhoochitra: `# Bhoo-Chitra: Cadastral Map AI Alignment & Land Dispute Resolver
**Computer Vision Cadastral Warping for Village Courts & Pre-Case Mediation**

### Problem Context:
- Over 60% of all civil litigation in Bangladesh subordinate courts originates from property boundary disputes and inheritance partition.
- Conflicting historical paper maps (CS 1888, SA 1956, RS 1970) and river erosion create overlapping boundaries.
- Union Parishad Chairmen lack surveying tools to resolve disputes justly under the Village Courts Act 2006.

### Core Architecture:
1. **Computer Vision TPS Warping:** Thin Plate Spline and homography alignment that matches historical paper CS/RS mouza sheets with modern drone/satellite imagery.
2. **Encroachment Heatmap:** Highlights boundary overlaps in red, calculating exact decimal and square-foot intrusions.
3. **Farayez Inheritance Calculator:** Mathematical partitioning engine based on statutory Muslim and Hindu succession laws.
4. **1-Click Village Court Resolution Decree:** Generates an indisputable Bengali mediation report for Union Parishad Chairmen and DLAOs.
`
};

// =========================================================
// 3. CORE APPLICATION INITIALIZATION
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSmoothScrollLinks();
    initScrollSpy();
    initMobileDrawer();
    initProblemsExplorer();
    initDocViewer();
    initShareAndCopy();
});

// =========================================================
// 4. THEME CONTROLLER (PRIMARY: LIGHT, TOGGLED: DARK)
// =========================================================
function initTheme() {
    const htmlEl = document.documentElement;
    const themeBtn = document.getElementById('theme-toggle-btn');
    const mobThemeBtn = document.getElementById('mobile-drawer-theme-btn');
    
    // Check saved theme or default to LIGHT (primary theme)
    const savedTheme = localStorage.getItem('nyaysetu_theme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);

    function toggleTheme() {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', targetTheme);
        localStorage.setItem('nyaysetu_theme', targetTheme);
        showToast(`Switched to ${targetTheme === 'dark' ? 'Dark' : 'Light'} theme`);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    if (mobThemeBtn) {
        mobThemeBtn.addEventListener('click', toggleTheme);
    }
}

// =========================================================
// 5. MOBILE DRAWER & NAVIGATION
// =========================================================
function initMobileDrawer() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const drawer = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    const closeBtn = document.getElementById('drawer-close-btn');
    const drawerLinks = document.querySelectorAll('.mobile-drawer-link');
    const mobileShareBtn = document.getElementById('mobile-drawer-share-btn');

    function openDrawer() {
        if (drawer) drawer.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        if (drawer) drawer.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (menuBtn) menuBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeDrawer();
        });
    });

    if (mobileShareBtn) {
        mobileShareBtn.addEventListener('click', () => {
            closeDrawer();
            copyCurrentUrl();
        });
    }
}

// =========================================================
// 5.1 SMOOTH SCROLLING FOR ALL ANCHOR BUTTONS & LINKS
// =========================================================
function initSmoothScrollLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const header = document.getElementById('site-header');
                const quickNav = document.getElementById('mobile-quick-nav');
                let headerOffset = 70;
                if (header) headerOffset = header.offsetHeight;
                if (quickNav && window.getComputedStyle(quickNav).display !== 'none') {
                    headerOffset += quickNav.offsetHeight;
                }
                headerOffset += 14;

                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                });

                try {
                    history.pushState(null, null, href);
                } catch (_) {}
            }
        });
    });
}

// =========================================================
// 6. SCROLL-SPY & ACTIVE NAV LINK HIGHLIGHTING
// =========================================================
function initScrollSpy() {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');
    const quickNavPills = document.querySelectorAll('.quick-nav-pill');
    const mobileDrawerLinks = document.querySelectorAll('.mobile-drawer-link');
    const quickNav = document.getElementById('mobile-quick-nav');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 160; // Header + quick nav offset

        sections.forEach(sec => {
            const sectionTop = sec.offsetTop;
            const sectionHeight = sec.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        if (currentSectionId) {
            // Update desktop nav
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === currentSectionId) {
                    link.classList.add('active');
                }
            });

            // Update mobile quick-nav pills without fighting window scroll
            quickNavPills.forEach(pill => {
                pill.classList.remove('active');
                if (pill.getAttribute('data-section') === currentSectionId) {
                    pill.classList.add('active');
                    if (quickNav && window.getComputedStyle(quickNav).display !== 'none') {
                        const pillLeft = pill.offsetLeft;
                        const pillWidth = pill.offsetWidth;
                        const navWidth = quickNav.offsetWidth;
                        quickNav.scrollTo({
                            left: pillLeft - (navWidth / 2) + (pillWidth / 2),
                            behavior: 'smooth'
                        });
                    }
                }
            });

            // Update mobile drawer links
            mobileDrawerLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-section') === currentSectionId) {
                    link.classList.add('active');
                }
            });
        }
    }, { passive: true });

    // Handle track glance pill clicks
    document.querySelectorAll('.track-glance-pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            const trackId = pill.getAttribute('data-track-id');
            if (trackId) {
                const targetFilterBtn = document.querySelector(`.filter-tab[data-filter="${trackId}"]`);
                if (targetFilterBtn) {
                    targetFilterBtn.click();
                }
            }
        });
    });
}

// =========================================================
// 6. PROBLEMS & SOLUTIONS MATRIX (FILTERING & SEARCH)
// =========================================================
let currentFilter = 'all';
let currentSearchQuery = '';

function initProblemsExplorer() {
    const container = document.getElementById('problems-container');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const searchInput = document.getElementById('problem-search');
    const clearBtn = document.getElementById('search-clear-btn');
    const modal = document.getElementById('problem-modal');
    const modalClose = document.getElementById('modal-close-btn');

    // Render initial list
    renderProblems();

    // Filter tabs click
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.getAttribute('data-filter');
            updateScopeBanner();
            renderProblems();
        });
    });

    // Live search
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.toLowerCase().trim();
            if (clearBtn) {
                clearBtn.style.display = currentSearchQuery ? 'block' : 'none';
            }
            renderProblems();
        });

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                searchInput.value = '';
                currentSearchQuery = '';
                clearBtn.style.display = 'none';
                renderProblems();
                searchInput.focus();
            });
        }
    }

    // Modal close
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

function updateScopeBanner() {
    const meta = TRACK_METADATA[currentFilter] || TRACK_METADATA['all'];
    const titleEl = document.getElementById('scope-title');
    const descEl = document.getElementById('scope-desc');
    if (titleEl) titleEl.textContent = meta.title;
    if (descEl) descEl.textContent = meta.desc;
}

function renderProblems() {
    const container = document.getElementById('problems-container');
    const countBadge = document.getElementById('visible-count-badge');
    if (!container) return;

    container.innerHTML = '';

    const filtered = PROBLEMS_DATASET.filter(item => {
        const matchesFilter = currentFilter === 'all' || item.track === currentFilter;
        const matchesSearch = !currentSearchQuery || 
            item.title.toLowerCase().includes(currentSearchQuery) ||
            item.context.toLowerCase().includes(currentSearchQuery) ||
            item.statute.toLowerCase().includes(currentSearchQuery) ||
            item.solution.toLowerCase().includes(currentSearchQuery) ||
            item.nyayFeature.toLowerCase().includes(currentSearchQuery) ||
            item.id.toLowerCase().includes(currentSearchQuery);

        return matchesFilter && matchesSearch;
    });

    if (countBadge) {
        countBadge.textContent = `${filtered.length} Problem${filtered.length === 1 ? '' : 's'} Mapped`;
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; padding: 40px; text-align: center; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
                <div style="font-size: 36px; margin-bottom: 12px;">🔍</div>
                <h3 style="margin-bottom: 8px;">No problems match your query</h3>
                <p style="color: var(--text-muted); font-size: 0.9rem;">Try searching for broader keywords like "bail", "land", "voice", or "Section 15".</p>
            </div>
        `;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'problem-card';
        card.innerHTML = `
            <div class="card-top-meta">
                <span class="problem-id-tag">${item.id}</span>
                <span class="track-tag">${item.trackLabel}</span>
            </div>
            <h3 class="problem-title">${item.title}</h3>
            <p class="problem-context">${item.context}</p>
            <div class="statute-reference">
                <span>⚖️</span>
                <span>${item.statute}</span>
            </div>
            <div class="solution-box">
                <div class="solution-badge">
                    <span>💡</span>
                    <span>NyaySetu Solution</span>
                </div>
                <div class="solution-desc">${item.solution}</div>
            </div>
            <div class="card-action-footer">
                <button class="btn-inspect" onclick="inspectProblem('${item.id}')">
                    <span>Detailed Root Cause & Architecture</span>
                    <span>→</span>
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function inspectProblem(problemId) {
    const item = PROBLEMS_DATASET.find(p => p.id === problemId);
    if (!item) return;

    const modal = document.getElementById('problem-modal');
    const content = document.getElementById('modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
        <div style="margin-bottom: 16px;">
            <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                <span class="problem-id-tag">${item.id}</span>
                <span class="track-tag">${item.trackLabel}</span>
            </div>
            <h2 style="font-size: 1.5rem; color: var(--text-heading); margin-bottom: 8px;">${item.title}</h2>
            <div style="font-size: 0.85rem; color: var(--accent-amber); margin-bottom: 16px;">
                <strong>Statutory Framework:</strong> ${item.statute}
            </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px; font-size: 0.92rem; line-height: 1.6;">
            <div>
                <strong style="color: var(--text-heading); display: block; margin-bottom: 4px;">Real-World Ground Reality in Bangladesh:</strong>
                <p style="color: var(--text-secondary);">${item.context}</p>
            </div>

            <div style="background: var(--bg-card); padding: 14px; border-radius: var(--radius-md); border-left: 3px solid var(--accent-rose);">
                <strong style="color: var(--accent-rose); display: block; margin-bottom: 4px;">Identified Root Cause:</strong>
                <p style="color: var(--text-primary); font-size: 0.88rem;">${item.rootCause}</p>
            </div>

            <div>
                <strong style="color: var(--text-heading); display: block; margin-bottom: 4px;">Demographic Most Severely Affected:</strong>
                <p style="color: var(--text-secondary);">${item.impacted}</p>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); padding: 16px; border-radius: var(--radius-md); border: 1px solid rgba(16, 185, 129, 0.3);">
                <strong style="color: var(--accent-emerald); display: block; margin-bottom: 6px;">Engineered NyaySetu Solution:</strong>
                <p style="color: var(--text-primary); margin-bottom: 8px;">${item.solution}</p>
                <div style="font-size: 0.8rem; color: var(--accent-blue); font-family: var(--font-mono);">
                    Core Component: <strong>${item.nyayFeature}</strong>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

// =========================================================
// 7. PROPOSAL & RESEARCH DOCUMENT VIEWER
// =========================================================
let currentActiveDocKey = 'faisal';

function initDocViewer() {
    const tabButtons = document.querySelectorAll('.doc-tab-btn');
    const copyBtn = document.getElementById('copy-doc-btn');
    const fullscreenBtn = document.getElementById('fullscreen-doc-btn');

    // Initial render
    switchProposalDoc('faisal');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const docKey = btn.getAttribute('data-doc');
            switchProposalDoc(docKey);
        });
    });

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const rawContent = DOCUMENTS_CONTENT[currentActiveDocKey] || '';
            navigator.clipboard.writeText(rawContent).then(() => {
                showToast('Document markdown copied to clipboard!');
            }).catch(() => {
                showToast('Unable to copy to clipboard.');
            });
        });
    }

    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            const container = document.getElementById('rendered-doc-content');
            if (container.style.maxHeight === 'none') {
                container.style.maxHeight = '600px';
                fullscreenBtn.textContent = '⛶ Expand';
            } else {
                container.style.maxHeight = 'none';
                fullscreenBtn.textContent = '⛶ Collapse';
            }
        });
    }
}

function switchProposalDoc(docKey) {
    currentActiveDocKey = docKey;
    const titleEl = document.getElementById('reading-doc-title');
    const contentEl = document.getElementById('rendered-doc-content');
    if (!contentEl) return;

    const fileNames = {
        faisal: 'FAISAL_Proposal.md (Master Proposal)',
        prd: 'docs/PRD.md (Product Requirements)',
        sakib: 'SAKIB_Proposal.md (Nyay-Triage)',
        'ai-report': 'MULTI_LLM_EVALUATION_REPORT.md',
        fastbail: 'Proposal_3_FastBail_Overdetention.md',
        kanthonyay: 'Proposal_2_KanthoNyay_Voice_AI.md',
        bhoochitra: 'Proposal_4_BhooChitra_Land_AI.md'
    };

    if (titleEl) {
        titleEl.textContent = fileNames[docKey] || `${docKey}.md`;
    }

    // Try fetching from local directory if hosted on HTTP server, or immediately fallback to embedded content
    const rawMarkdown = DOCUMENTS_CONTENT[docKey] || '# Document Not Found';

    if (typeof marked !== 'undefined') {
        marked.setOptions({
            gfm: true,
            breaks: true
        });
        contentEl.innerHTML = marked.parse(rawMarkdown);
    } else {
        contentEl.innerHTML = `<pre><code>${rawMarkdown}</code></pre>`;
    }

    // Scroll to top of viewer box
    contentEl.scrollTop = 0;
}

// =========================================================
// 8. SHARE & TOAST UTILITIES
// =========================================================
function initShareAndCopy() {
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'NyaySetu // Legal Tech Hackathon BD 2026',
                    text: 'Explore our research, challenge track alignments, and master proposal for Bangladesh Legal Aid.',
                    url: window.location.href
                }).catch(() => {
                    copyCurrentUrl();
                });
            } else {
                copyCurrentUrl();
            }
        });
    }
}

function copyCurrentUrl() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied to clipboard! Share with your teammates.');
    }).catch(() => {
        showToast('Showcase ready at this URL.');
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// =========================================================
// 9. EXPLICIT GLOBAL WINDOW BINDINGS (Inline onclick support)
// =========================================================
window.inspectProblem = inspectProblem;
window.switchProposalDoc = switchProposalDoc;
window.copyCurrentUrl = copyCurrentUrl;
window.showToast = showToast;

