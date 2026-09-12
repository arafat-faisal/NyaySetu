# ATTACHMENT 3: JUSTICE OPERATIONS SYSTEM ARCHITECTURE & TRIAGE SPECIFICATIONS

This document outlines the technical design, data representation, decision-support interface, and algorithmic anti-bias safeguards for the District Legal Aid Office (DLAO) Case Management Dashboard in Joypurhat.

---

## 1. SYSTEM CONTEXT & OPERATIONAL ENVIRONMENT

- **User**: District Legal Aid Officer (Senior Assistant Judge / Joint District Judge) and office administrative staff.
- **Problem**: Influx of dozens of diverse legal-aid petitions daily (undertrial bail petitions, land disputes, unpaid wages, domestic abuse). The officer needs an immediate, transparent visual overview of which cases require prompt judicial attention without causing injustice to routine matters.
- **Guiding Principle**: **AI as Decision Support (HUD), NEVER as Decider**. The system must inform, highlight, and sort without automating legal determinations.

---

## 2. THE THREE TRIAGE FACTORS & DIGITAL REPRESENTATION

```
+---------------------------------------------------------------------------------------------------+
| CASE VECTOR: MOYURI AKTER (KALAI, JOYPURHAT) - VIA PROXY RIPON                                    |
+------------------------------------+----------------------------------+---------------------------+
| FACTOR 1: PHYSICAL PERIL & CHILD   | FACTOR 2: ASYMMETRY & SURVEIL-   | FACTOR 3: STATUTORY MERIT |
|           SUBSISTENCE              |           LANCE VULNERABILITY    |           & TIME-TO-HARM  |
+------------------------------------+----------------------------------+---------------------------+
| - Active Battery: TRUE             | - Surveillance Trap: CRITICAL    | - DV Act 2010: Sec 13, 16 |
| - Infant Deprivation: 5 Months     | - NID Access: LOCKED/BLOCKED     | - Dowry Act 2018: Sec 3   |
| - Ongoing Hurt: Penal Code 323/325 | - Proxy Disability: BLIND        | - Bigamy Deadline: IMMINENT|
| - Urgency Score: TIER 1 RED        | - Digital Barrier: VOICE-ONLY    | - Irremediable Risk: HIGH |
+------------------------------------+----------------------------------+---------------------------+
```

### Factor 1: Imminent Threat to Life, Physical Integrity & Minor Welfare
- **Definition**: Acute risk of physical battery, injury, or infant starvation requiring immediate protective intervention.
- **Digital Representation**:
  - Binary emergency indicators (`ACTIVE_BATTERY = TRUE`, `MINOR_AT_RISK = TRUE`).
  - Recency timestamp tracking frequency of assaults.
  - Color-coded severity badge: Red Alert (Imminent Harm), Amber (Ongoing Dispute), Green (Preventative).

### Factor 2: Structural Vulnerability & Communication Quarantine
- **Definition**: Inability of the victim to seek assistance independently due to domestic surveillance, lack of independent telephone, confinement, poverty, or disability.
- **Digital Representation**:
  - Multi-tag categorical vulnerability array (`[SURVEILLANCE_LOCKED, SHARED_PHONE, PROXY_DISABILITY, DISTANCE_TO_COURT_30KM]`).
  - "No-Contact Quarantine" badge warning the officer that unsolicited electronic communication is hazardous.
  - Safe-window metadata tag (`SAFE_CONTACT_WINDOW: "Fri 1:15-1:35 PM"`).

### Factor 3: Prima Facie Statutory Merit & Irremediable Temporal Harm
- **Definition**: Availability of clear statutory remedies where delay will cause permanent, irreversible legal or personal damage.
- **Digital Representation**:
  - Structured statutory remedy array:
    - `DV_ACT_SEC_13_INTERIM_PROTECTION` (ex parte order against battery);
    - `DV_ACT_SEC_15_RESIDENCE_ORDER` (barring eviction from tin-roofed house);
    - `DV_ACT_SEC_16_MAINTENANCE` (food and medical relief for child);
    - `DOWRY_ACT_2018_SEC_3` (criminal prosecution for motorcycle extortion).
  - Temporal risk flag: `IMMINENT_SECOND_MARRIAGE_THREAT = HIGH`.

---

## 3. DECISION-SUPPORT HUD (PRESERVING JUDICIAL JUDGMENT)

To ensure the digital system never replaces the DLAO's legal judgment:
1. **Explainable Factor Cards (No Black-Box Scoring)**:
   - Instead of assigning an opaque number (e.g., "Score: 87/100"), the system presents an **Explainable Reason Card**:  
     *“Ranked in Tier 1 (Urgent) due to: (1) Active nighttime battery, (2) 4-year-old child starvation, (3) Household surveillance trap, (4) Coercive dowry deadline.”*
2. **Interactive Judicial Triage Queue**:
   - The DLAO can sort cases dynamically by any column (e.g., Urgency, Statutory Remedy, Vulnerability, Date of Receipt).
   - The DLAO retains 1-click manual reordering and overriding capability.
   - Any judicial reclassification is logged with a brief note for administrative auditability, preserving full judicial independence.
3. **No Automatic Actions**:
   - The system NEVER approves aid, rejects applications, issues notices, or dismisses files automatically. All substantive actions require explicit judicial sign-off.

---

## 4. THE INVERSE-UNCERTAINTY SAFEGUARD (ANTI-DEPRIORITIZATION PROTOCOL)

### The Problem:
In standard IT systems, incomplete applications (e.g., missing NID, lack of documentary proof, missing victim phone number) are automatically deprioritized or rejected as "incomplete drafts." In legal aid, however, **incomplete data is itself the hallmark of extreme vulnerability** (e.g., Moyuri cannot provide her NID because her abusive husband has locked it in his wardrobe).

### The Solution: "Vulnerability Floor & Data-Deficit Protection Protocol":
1. **The Incomplete-Data Protective Floor**:
   - The algorithm strictly forbids treating missing identity credentials or absent documents as negative weights in priority ranking.
   - Any file tagged with a data deficit originating from a marginalized channel (voice hotline, proxy filing, rural union) is automatically assigned a **Vulnerability Floor**.
2. **Flagged for Expedited Human Investigation**:
   - Rather than dropping to the bottom of the queue, the system marks the case with a special **"Data Deficit / Vulnerability Alert"**, surfacing it to the top of the DLAO's review stack.
   - The system suggests an actionable human investigation step: *“NID unavailable due to reported domestic confinement. Recommend covert verification via Upazila Women Affairs Enforcement Officer under Section 11 of the Domestic Violence Act 2010.”*
3. **Zero-Drop Guarantee**:
   - No case can be deprioritized, archived, or deferred without positive, affirmative review by the DLAO.
