# ATTACHMENT 3: DLAS VOICE AI ARCHITECTURE & SAFETY PROTOCOLS

This document details the operational environment, technical constraints, accessibility requirements, and safety protocols for the Digital Legal Aid System (DLAS) Voice AI Assistant.

---

## 1. CALLER ACCESSIBILITY PROFILE (RIPON)

- **Disability & Sensory Profile**: Blind since childhood; navigates via auditory memory and step counting.
- **Hardware**: Handed-down basic Android smartphone. Can dial numbers, receive incoming calls, and record voice notes.
- **Digital Barriers**:
  - Cannot read text, printed forms, PDF documents, or optical screens.
  - Cannot solve visual captchas, SMS-based OTPs, or complex multi-step mobile apps.
  - The smartphone's built-in screen reader announces English OS menus but falls completely silent on Bengali interface labels.
- **System Obligation**:
  - The interaction must be **100% voice-driven** in natural, spoken Bangla.
  - No text SMS, no web URLs, and no graphical inputs can be required of Ripon.
  - Audio confirmations must provide an easily memorizable verbal reference code (e.g., a simple 4-digit spoken token).

---

## 2. VICTIM SURVEILLANCE & VULNERABILITY PROFILE (MOYURI)

- **Isolation**: Confined to a rural tin-roofed house in Kalai Upazila, Joypurhat (30 km from District Court). Has never traveled alone and lacks transport fares.
- **Surveillance Ecosystem**:
  - Only one smartphone in the household, kept in the husband's (Sohel's) pocket.
  - Moyuri only has access to a shared basic button phone controlled by her mother-in-law.
  - Outgoing call logs are inspected by the family; incoming calls are answered or scrutinized by in-laws.
  - Her National ID (NID) card is physically locked in Sohel's wardrobe.
- **Extreme Peril ("Do-No-Harm" Directive)**:
  - **Zero Unsolicited Push**: An automated SMS or standard callback to the button phone will immediately be detected by the in-laws or husband, directly triggering severe retaliatory domestic violence.
  - **The Lone Safe Window**: Moyuri can speak privately for roughly **20 minutes on Friday midday** (while Sohel attends the mosque for Jumu'ah prayer and her mother-in-law rests).
  - **Alternative Covert Verification**: Offline verification via a female Upazila Women Affairs Officer, female Union Parishad member, or DLAO community para-legal under an innocent domestic health or welfare cover.

---

## 3. THE 4 MANDATORY SYSTEM BOUNDARIES (EVALUATION MATRIX)

### Boundary 1: What the AI Can Do
1. **Empathetic Voice Intake**: Listen actively to spoken colloquial Bangla, accommodating regional accents and natural speech pauses.
2. **Entity Extraction**: Parse unstructured verbal narration into structured intake fields:
   - Primary Victim: Moyuri Akter, age ~24, Kalai, Joypurhat.
   - Dependent: 4-year-old daughter.
   - Alleged Perpetrator: Sohel (husband, rice mill worker).
   - Informant/Caller: Ripon (brother, visually impaired, contact phone).
   - Core Allegations: Physical assault, 5-month economic deprivation/starvation, coercive motorcycle dowry demand under threat of second marriage.
3. **Safety & Surveillance Flagging**: Tag the case as an **Extreme Surveillance Hazard**; record the Friday 20-minute safe call window; lock down all automated outbound communications.
4. **General Rights Orientation**: Reassure Ripon in calm Bangla that government legal aid is completely free under national law, and confirm that an officer will review the case.
5. **Dossier Compilation**: Compile a standardized "Third-Party Intake Packet" for the District Legal Aid Officer (DLAO).

### Boundary 2: What the AI Should NOT Do
1. **Never Give Substantive Legal Advice**: Must not evaluate evidentiary strength, predict court verdicts, or recommend specific adversarial litigation strategies.
2. **Never Make Final Eligibility Determinations**: Must not accept or reject the legal aid application; statutory authority rests solely with the human DLAO.
3. **Never Reject Due to Incomplete Data**: Must not drop or stall the inquiry because Moyuri's NID number is missing or because the applicant is not personally on the line.
4. **Never Contact the Victim's Household Automatically**: Must strictly prohibit automated SMS, IVR robocalls, or automated letters to Moyuri's household.
5. **Never Treat Proxy Claims as Established Truth**: Must not register the case as a verified legal affidavit or issue notices to the husband without prior human verification.

### Boundary 3: When Escalation Occurs
The AI must trigger immediate high-priority escalation to a human legal aid officer or panel lawyer upon identifying any of the following triggers:
- **Physical Safety Red Flags**: Ongoing nighttime battery, threat of bodily harm, or severe physical violence (Penal Code §§ 323, 325).
- **Destitution / Child Endangerment**: 5-month deprivation of food and basic sustenance for an infant/child (DV Act § 12).
- **Coercive Extortion & Abandonment**: Dowry demand coupled with immediate threat of bigamy/abandonment (Dowry Prohibition Act §§ 3, 4).
- **High-Risk Proxy Dynamic**: The primary victim is under domestic surveillance and unable to reach assistance independently.
- **Caller Distress**: Acute panic, disorientation, or emergency crying/distress detected in the audio stream.

### Boundary 4: What Information Must Be Captured for the Human Officer
Given that Moyuri never speaks to the system directly, the AI must deliver a structured **Third-Party Intake Brief** to the DLAO containing:
1. **Informant Credibility & Vulnerability Context**: Ripon's identity, relationship (brother), contact number, and visual disability status.
2. **Victim & Dependent Profile**: Moyuri's identity, location (village, Kalai upazila, Joypurhat), child's age (4 years), lack of personal NID/phone.
3. **Factual Narrative of Allegations**: Specific abuse patterns (nighttime beatings, 5-month economic abandonment, motorcycle dowry demand, threat of second marriage).
4. **Strict Safety & Communications Protocol**:
   - Explicit Warning: "DO NOT SEND SMS OR OUTBOUND CALL TO RESIDENCE BUTTON PHONE."
   - Actionable Contact Protocol: "Permissible confidential window: Friday 1:15 PM - 1:35 PM only" OR "Recommend covert dispatch of Upazila Women Affairs Protection Officer / Female UP Member."
5. **Statutory Classification Tag**: Prima facie indicators under Domestic Violence Act 2010 (Sec 10 Protection, Sec 11 Residence, Sec 12 Maintenance) and Dowry Prohibition Act 2018.
6. **Data Integrity Marker**: Labeled explicitly as *"Unverified Third-Party Information - Direct Victim Verification Required"*.
