# ATTACHMENT 3: MINIMUM DIGITAL ODR SYSTEM ARCHITECTURE
## Practical System Design for Low-Bandwidth, Asymmetric Tech Environments

---

### 1. ARCHITECTURAL OVERVIEW & REAL-WORLD CONSTRAINTS

The Digital Legal Aid System (DLAS) ODR module must bridge severe technological and physical divides between three stakeholders:
- **Party A (Moyuri Akter)**: In Kalai, Joypurhat. Button phone surveilled by mother-in-law, unstable 2G network, 20-minute Friday midday safe window, zero internet literacy.
- **Party B (Sohel)**: In Gazipur. Migrant industrial worker, possesses a smartphone, uncomfortable with complex mobile apps, works long factory shifts.
- **Facilitator / Proxy (Ripon)**: Blind, voice-reliant, unable to interact with text, captcha, or visual OTPs.
- **Institutional Authority (DLAO / Mediator)**: Joypurhat District Court, statutory judicial authority under Section 21A of Legal Aid Services Act 2000.

**Core Design Philosophy**: High-bandwidth video conferencing (Zoom/Teams/WebRTC) is **completely unviable**. The minimum digital process must be **low-bandwidth, asynchronous, voice-first, and caucus-based**, operating over standard cellular voice (PSTN/IVR), SMS, and local Union Digital Center (UDC) touchpoints.

---

### 2. THE 5-STAGE MINIMUM DIGITAL ODR LIFECYCLE

```
+---------------------------------------------------------------------------------------------------+
|                                  THE 5-STAGE DIGITAL ODR LIFECYCLE                                |
+---------------------------------------------------------------------------------------------------+
| 1. CITIZEN ENTRY      : Voice IVR (16699) / Assisted UDC Voice Capture (Zero-Screen Barrier)      |
| 2. ELIGIBILITY/INTAKE : Eligibility Check + Safe-Window Screening + Power-Asymmetry Filter       |
| 3. MEDIATION          : Asynchronous Tele-Caucus (Separate Audio Calls; No Joint Confrontation)   |
| 4. OUTCOME            : Voice-Readout Agreement + UDC/Parishad Biometric + DLAO Sec 21A Decree    |
| 5. RECORD/FOLLOW-UP   : MFS (bKash/Nagad) Digital Escrow + Automated Ledger + Default Escalation  |
+---------------------------------------------------------------------------------------------------+
```

---

### 3. DETAILED STAGE-BY-STAGE FUNCTIONALITY

#### Stage 1: Citizen Entry (Zero-Screen Voice Gateway)
- **Mechanism**: Ripon dials 16699 or visits the local Kalai Union Digital Center (UDC). An IVR voice agent or UDC entrepreneur initiates a voice-guided ticket.
- **Voice Intake**: Ripon records his spoken testimony without needing to read screens, solve captchas, or input visual OTPs.
- **Third-Party Tagging**: System tags the intake as a representative application under Section 11(1) of the Domestic Violence Act 2010.
- **Safe Contact Registration**: System logs Moyuri's mother's phone number as the verified contact, records Moyuri's safe window (Friday 12:45 PM – 1:15 PM), and sets a strict system rule: `NO UNSCHEDULED OUTBOUND SMS/CALLS TO VICTIM BUTTON PHONE`.

#### Stage 2: Eligibility, Intake & Pre-Mediation Safety Screening
- **Statutory Verification**: Automatic cross-check against Legal Aid Services Policy 2014 income criteria (rural distressed woman with child qualifies unconditionally).
- **Party B Notice**: System generates an automated IVR call and SMS to Sohel in Gazipur: informing him of an amicable pre-case family mediation invitation at zero cost under Legal Aid Services Act 2000 Section 21A.
- **Mandatory Pre-Session Power Asymmetry & Safety Screen**:
  - During Moyuri's safe 20-minute Friday window, a female legal aid officer or trained paralegal conducts a confidential 1-on-1 audio intake.
  - Screen checks: Is there active physical battery? Are there criminal dowry threats? Is there coercion?
  - **Decision Gate**: If domestic battery or dowry extortion is detected, ODR is **REFUSED AND HALTED IMMEDIATELY** (see Section 4 below). Only pure maintenance/support terms may proceed to mediation.

#### Stage 3: Mediation (Asynchronous Tele-Caucus Model)
- **No Joint Video Calls**: Avoids network buffering, tech intimidation, and emotional bullying.
- **Shuttle Tele-Mediation (Caucus)**: The mediator holds separate, asynchronous audio phone sessions:
  - Session with Sohel (scheduled during his factory break in Gazipur).
  - Session with Moyuri (conducted via a secure audio connection at the local Union Parishad / UDC with a female paralegal present, or during her Friday safe window).
- **Issue Narrowing**: The mediator addresses solely the maintenance allowance (monthly living allowance, food expenses, and child support for the 4-year-old daughter).

#### Stage 4: Outcome & Statutory Formalization
- **Voice-Readout Agreement**: The settlement terms are converted into automated Bangla Text-to-Speech (TTS) audio and played back to Ripon and Moyuri for informed verbal consent.
- **Execution**:
  - Sohel confirms consent via automated voice confirmation (IVR pressing 1 or verified OTP on his smartphone).
  - Moyuri executes via physical thumbprint at the Kalai Union Parishad / UDC witnessed by the female Union Parishad member.
- **Judicial Certification**: The DLAO reviews the digital settlement record in Joypurhat, applies a digital judicial signature, and formalizes it under **Section 21A(3) & 21A(4) of the Legal Aid Services Act 2000**.
- **Legal Effect**: Under Section 21A(4) and CPC Section 89A, the settlement carries the full evidentiary force and enforceability of a **Civil Court / Family Court Decree**.

#### Stage 5: Record, Follow-up & Automated Accountability
- **Digital Payment Ledger**: DLAS records the settlement schedule (e.g., BDT 4,000 monthly maintenance payable by the 5th of each month).
- **MFS Integration**: Integrated with Mobile Financial Services (bKash / Nagad / Rocket). Sohel remits funds via MFS using his DLAS case ID; funds are disbursed to Moyuri's mother's verified MFS wallet.
- **Silent Voice Verification**: Ripon receives an automated voice call: *"Monthly maintenance deposited successfully."* No risky SMS sent to Moyuri's surveilled button phone.
- **Automated Default Trigger**: If Sohel fails to remit by the 10th of the month, DLAS sends an automated warning call. If default exceeds 30 days, the system automatically files an **Execution Petition (Jari Mamla)** in the Joypurhat Family Court under Family Courts Act 2023 Section 14, attaching Sohel's Gazipur wages without Moyuri having to travel or hire a lawyer.

---

### 4. THE COMPULSORY STOP CONDITION & ALTERNATIVE PATHWAY

```
                             [PRE-SESSION SAFETY SCREEN]
                                          |
                   +----------------------+----------------------+
                   |                                             |
         [NO VIOLENCE / SAFE]                         [ACTIVE DOWRY / BATTERY]
                   |                                             |
        Proceed to Stage 3 ODR                         *** HALT ODR IMMEDIATELY ***
     (Maintenance Caucus Sessions)                               |
                                                +--------------------------------+
                                                |  SYSTEM AUTOMATIC DIVERSION:   |
                                                |  1. Lock ODR Pipeline          |
                                                |  2. Emergency Ex-Parte DV Act  |
                                                |     Sec 13 Protection Petition |
                                                |  3. Dowry Act Sec 3 Referral   |
                                                |  4. Upazila Officer Alert      |
                                                |  5. Local Paralegal Safe House |
                                                +--------------------------------+
```

- **The Stopping Condition**: The system refuses and halts online mediation if the safety screen or intake reveals **active domestic battery, threats of physical harm, or criminal dowry extortion (Dowry Prohibition Act 2018 Section 3)**.
- **What the System Does Instead**:
  1. Automatically terminates the mediation track and locks party communication to protect the victim.
  2. Directly generates an emergency judicial petition for the DLAO to move the Senior Judicial Magistrate under **Section 11 and Section 13 of the Domestic Violence Act 2010** for an ex-parte Interim Protection Order and Section 15 Residence Order.
  3. Transmits an urgent enforcement alert to the Upazila Women Affairs Officer (Enforcement Officer under DV Act Section 5).
  4. Prepares a formal criminal referral under Section 3 of the Dowry Prohibition Act 2018 for court prosecution.
  5. Dispatches a local Union Parishad legal aid volunteer to ensure Moyuri's immediate physical shelter and security.
