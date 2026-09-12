# SYNTHESIS & MERGE MATRIX: Challenge 2 (AI for Legal Aid)

**Competition**: Legal Tech Hackathon 2026 (Round 1 Submission)  
**Portal**: legal-hackathon.tech/dashboard/submission/1  
**Target**: Challenge 2: AI for Legal Aid  
**Target Word Count**: Exactly <= 300 words (Official Submission Draft: 290 words)

---

## 1. MULTI-LLM PANEL EVALUATION & CONTRIBUTION MATRIX

We evaluated 10 frontier AI models across all 6 grading criteria:

| Model | Workflow Clarity | Safety & Anti-Surveillance | Statutory Grounding & Citations | Word Count | Key Contributions & Innovations |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **GPT-4o / GPT-5** | Exceptional | Exceptional | Masterclass | 290 | **Critical Legal Discovery**: Identified and corrected section numbering in DV Act 2010 (§11 application, §13 interim protection, §14 protection, §15 residence, §16 compensation/maintenance, §§5-6 Enforcement Officer). |
| **ChatGPT** | Exceptional | Exceptional | Masterclass | 284 | Grounded in Legal Aid Services Act 2000 (2026 Amendment §§2, 7, 21A-21D); highlighted Joypurhat mandatory pre-case mediation rollout (July 2026) and DLAO judicial status. |
| **Claude 3.7 / Opus** | Exceptional | Exceptional | Strong | 293 | Superb architectural pipeline (Stages 0-7); elegant voice-first framing; clear separation of AI triage vs human judicial authority. |
| **DeepSeek R1 / V3** | Strong | Exceptional | Strong | 298 | Clean 4-heading rubric structure; sharp definition of immediate escalation triggers and data integrity markers. |
| **Meta Llama 3.3** | Strong | Strong | Strong | 289 | Linked anti-surveillance protocols to Article 32 of the Constitution (Right to Life) and Penal Code §§323/325; concrete 4-digit spoken token. |
| **Mistral Large** | Strong | Strong | Moderate | 292 | Good narrative flow and structured Third-Party Intake Packet definition. |
| **Gemini 2.0 Pro** | Moderate | Strong | Moderate | 249 | Concise, but omitted several key statutory references; strong on button-phone risk mitigation. |
| **Sakana AI** | Strong | Strong | Strong | 298 | Solid operational boundaries and temporal safe-window mapping. |
| **Grok** | Strong | Strong | Moderate | 298 | Clear and punchy; good encapsulation of proxy representation principles. |
| **Perplexity** | Strong | Strong | Strong | 298 | Strong verification links to official BD Laws databases. |

---

## 2. THE WINNING SYNTHESIZED SUBMISSION (OFFICIAL SUBMISSION RESPONSE)

> **Submission Note**: Paste the text below directly into the hackathon submission portal for **Challenge 2**. It strictly satisfies every mandated element and is calibrated to **exactly 290 words** (within the 300-word limit).

```text
The Digital Legal Aid System (DLAS) AI serves strictly as a voice-first intake and triage gateway, not a digital adjudicator. The entire interaction is conducted in natural spoken Bangla, accommodating Ripon’s blindness without requiring visual forms, captchas, OTPs, or NID.

What AI can do: Conduct empathetic voice intake; extract structured entities (victim Moyuri, age 24, Kalai, Joypurhat; 4-year-old daughter; perpetrator Sohel; informant Ripon, blind brother); stamp all data as “Unverified Third-Party Information” under Domestic Violence Act 2010 §11(1); activate an “Extreme Surveillance Lock” disabling all automated outbound SMS/calls to the household button phone; record Moyuri’s Friday midday 20-minute safe window; reassure Ripon that government legal aid is free under Legal Aid Services Act 2000; provide a memorizable spoken 4-digit token; and compile an auditable Third-Party Intake Brief for the Joypurhat District Legal Aid Officer (DLAO).

What AI should not do: Give substantive legal advice; assess credibility; make final eligibility or case-admission determinations (reserved exclusively for DLAO under LASA 2000 §21A); reject for missing NID or victim absence; initiate any contact with the monitored button phone or Sohel; or treat proxy claims as verified affidavits.

When escalation occurs: Immediate high-priority human escalation is triggered by ongoing nighttime battery (Penal Code §§323/325), five-month child and maternal starvation (DV Act §§3, 16), dowry extortion with bigamy threats (Dowry Prohibition Act 2018 §3), monitored communications preventing direct access, or caller distress.

Information captured for human officer: Ripon’s contact, relationship, and voice-only need; Moyuri’s location, locked NID, and dependent; factual chronology; strict safety protocol (“DO NOT SEND SMS OR OUTBOUND CALL TO BUTTON PHONE”); Friday 1:15–1:35 PM window; recommendation for covert field verification via the Upazila Women Affairs Enforcement Officer (DV Act §§5–6, 11); and data-integrity marker: “Unverified Third-Party Information — Direct Victim Verification Required.”
```

**Exact Word Count**: **290 words** / 300 words max.

---

## 3. COMPREHENSIVE ARCHITECTURAL, SAFETY & STATUTORY RATIONALE

### 3.1 Statutory Authority & Legal Correction
A major differentiator of our response is authentic statutory alignment with the official **Laws of Bangladesh (BD Laws)** database:
1. **Domestic Violence (Prevention and Protection) Act, 2010**:
   - **Section 3**: Comprehensive definition of domestic violence (physical abuse, psychological abuse, and economic abuse including deprivation of basic necessities and child maintenance).
   - **Section 11(1)**: Explicit statutory authority enabling an application to the Magistrate by the aggrieved person, an **Enforcement Officer, service provider, or any other person on her behalf** (statutory legal basis for Ripon's proxy intake).
   - **Sections 5 & 6**: Establishment of the **Enforcement Officer** (defined as the Upazila Women Affairs Officer) with statutory duties to facilitate legal aid, file protection applications, and coordinate safe shelters.
   - **Section 10**: Absolute right to reside in the shared residence.
   - **Section 13**: Ex-parte **Interim Protection Order**.
   - **Section 14**: Comprehensive **Protection Order**.
   - **Section 15**: **Residence Order** prohibiting eviction or alienation of the home.
   - **Section 16**: **Monetary Relief, Compensation & Maintenance** for victim and child.
2. **Legal Aid Services Act, 2000 & 2026 Amendments**:
   - **Section 21A**: Legal Aid Officers are judicial officers appointed from the Bangladesh Judicial Service (Senior Assistant Judges/Joint District Judges) empowered with exclusive statutory authority for legal advice, case admission, and mediation.
   - **Section 7(1)(c),(g),(n)**: Statutory mandate for emergency legal support, referral, digital accessibility, and database information security.
   - **Joypurhat Rollout Context**: Under the 2026 amendments, mandatory pre-case mediation was notified for Joypurhat from 31 July 2026 (including Dowry Act disputes). A human DLAO must decide whether mediation or emergency court protection under DV Act §13 is legally appropriate; AI must never auto-divert active domestic violence to mediation.
3. **Dowry Prohibition Act, 2018**:
   - **Section 3**: Direct offense of demanding dowry (coercive demand for a motorcycle under threat of abandonment/polygamy). Offenses are cognizable and non-bailable.

---

### 3.2 Decision Workflow: Ripon's First Interaction to DLAO Intervention

```
+---------------------------------------------------------------+
| STAGE 1: INBOUND VOICE INTAKE (16699)                         |
| Ripon calls 16699 from basic phone.                           |
| 100% Spoken Bangla Voice Interface. No SMS, OTPs, or Captchas.|
+-------------------------------+-------------------------------+
                                |
                                v
+---------------------------------------------------------------+
| STAGE 2: ASR & NLU ENTITY EXTRACTION                          |
| Real-time spoken Bangla transcription with dialect tolerance. |
| Extracts: Victim (Moyuri, 24, Kalai), Dependent (Child 4yo),  |
| Perpetrator (Sohel), Informant (Ripon, blind brother),        |
| Allegations (nighttime beatings, 5-mo starvation, dowry).     |
+-------------------------------+-------------------------------+
                                |
                                v
+---------------------------------------------------------------+
| STAGE 3: PROXY CLASSIFICATION & PROVENANCE LOCK               |
| Tags caller as Third-Party Proxy under DV Act §11(1).         |
| Hard stamp: "UNVERIFIED THIRD-PARTY INFORMATION -             |
| DIRECT VICTIM VERIFICATION & CONSENT REQUIRED".              |
+-------------------------------+-------------------------------+
                                |
                                v
+---------------------------------------------------------------+
| STAGE 4: SAFETY TRIAGE & "EXTREME SURVEILLANCE LOCK"          |
| Detects: Monitored button phone, locked NID, husband control. |
| System Action: HARD BLOCK on all automated outbound SMS,     |
| IVR robocalls, or callbacks to household button phone.        |
| Records confidential window: Friday 1:15-1:35 PM (Jumu'ah).   |
+-------------------------------+-------------------------------+
                                |
                                v
+---------------------------------------------------------------+
| STAGE 5: VOICE REASSURANCE & MEMORIZABLE TOKEN                |
| Spoken confirmation: Government legal aid is 100% free.       |
| Reads back a simple, memorizable 4-digit spoken token         |
| (e.g., "7-2-9-1") to Ripon without requiring screen reading.  |
+-------------------------------+-------------------------------+
                                |
                                v
+---------------------------------------------------------------+
| STAGE 6: AUDITABLE DOSSIER COMPILATION & ESCALATION           |
| Compiles structured Third-Party Intake Packet.                |
| Immediate high-priority queue / warm transfer to Joypurhat   |
| District Legal Aid Officer (DLAO) and panel lawyers.          |
+-------------------------------+-------------------------------+
                                |
                                v
+---------------------------------------------------------------+
| STAGE 7: HUMAN DLAO JUDICIAL INTERVENTION                     |
| DLAO plans confidential verification via Upazila Women        |
| Affairs Enforcement Officer (DV Act §§5-6) or Friday window; |
| Evaluates legal remedies (§§13, 14, 15, 16 DV Act 2010);     |
| Exercises exclusive judicial discretion under LASA 2000 §21A.|
+---------------------------------------------------------------+
```

---

### 3.3 Zero-Harm Anti-Surveillance Safeguards
- **Button Phone Risk**: The shared button phone is inspected by the mother-in-law and husband. An unexpected digital touchpoint (SMS confirmation, IVR robocall, or missed call) would immediately betray Moyuri, exposing her to severe assault under Penal Code §§323/325 and violating her constitutional right to life (Article 32). The system hard-codes a **"Zero Unsolicited Push Lock"**.
- **The Friday 20-Minute Window**: Stored strictly as a human-directed operational note (Friday 1:15–1:35 PM during Jumu'ah prayer), not an automated appointment slot.
- **Covert Field Verification Mechanism**: The system explicitly recommends that the DLAO dispatch the female **Upazila Women Affairs Enforcement Officer** (under Sections 5–6 of the DV Act 2010) or a female Union Parishad member under an innocuous cover (e.g., routine maternal/child health or social welfare outreach), completely bypassing the monitored phone.

---

### 3.4 Accessibility Accommodations for Blind Proxy (Ripon)
- **100% Conversational Audio**: Eliminates all visual dependencies.
- **No Captchas or SMS OTPs**: Avoids creating a dead-end on Bengali labels where screen readers go silent.
- **Spoken 4-Digit Token**: Audible, memorable token suited to Ripon's auditory memory skills.
- **Data Gap Grace**: Missing NID or lack of documents is logged as an ordinary gap for human resolution, never as a barrier to intake.
