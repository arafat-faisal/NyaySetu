# BENCHMARK REFERENCE SOLUTION: Challenge 3 (Justice Operations)

This document contains the benchmark submission solution for **Challenge 3: Justice Operations** (Legal Tech Hackathon 2026), calibrated to **exactly 290 words** (within the 300-word limit).

---

### OFFICIAL SUBMISSION DRAFT (290 WORDS)

To support the Joypurhat District Legal Aid Officer (DLAO) without replacing judicial discretion under Legal Aid Services Act 2000 Section 21A, the system employs an explainable decision-support dashboard evaluating three statutory factors:

1. Physical Peril and Dependent Deprivation: Acute risk of bodily harm (Penal Code Sections 323 and 325) and infant sustenance denial (Domestic Violence Act Sections 3 and 16). Captured digitally via binary emergency flags (active battery, infant starvation) and incident recency timestamps, generating a Tier-1 “Immediate Harm” visual badge.

2. Structural Vulnerability and Communication Quarantine: Compounded barriers including domestic surveillance, lack of personal phone, locked documents, and proxy disability (Legal Aid Policy 2014). Captured as a categorical vulnerability vector (monitored phone, blind caller, 30-kilometer distance) with an explicit “No-Contact Quarantine” tag.

3. Statutory Merit and Irremediable Temporal Risk: Availability of urgent remedies where delay causes irreversible harm, including Interim Protection (Domestic Violence Act Section 13), Residence Orders (Section 15), or coercive dowry extortion with bigamy threats (Dowry Prohibition Act 2018 Section 3). Captured as a structured remedy array and temporal deadline indicator.

Decision-Support Mechanism: The dashboard visualizes cases in transparent urgency bands (Tier-1 Emergency, Tier-2 Urgent, Tier-3 Standard) accompanied by plain-text explainable reason cards detailing factors rather than an opaque algorithmic score. The DLAO retains full interactive control to reorder, filter, and assign cases, recording judicial overrides in an audit log.

Anti-Deprioritization Safeguard: The system enforces an “Inverse-Uncertainty Vulnerability Floor.” Applications missing standard data (such as Moyuri’s locked NID or unverified phone) are algorithmically barred from demotion. Instead, data deficits from marginalized or proxy intakes trigger a “Vulnerability Investigation Tag,” prioritizing the file for expedited human review and recommending covert field verification via the Upazila Women Affairs Enforcement Officer under Domestic Violence Act Sections 5, 6, and 11.

---

### COMPLIANCE AUDIT AGAINST CHALLENGE 3 RUBRIC

| Mandatory Rubric Question | Solution Formulation | Word Limit Audit |
| :--- | :--- | :--- |
| **1. What THREE factors should DLAO consider?** | (1) Physical Peril & Dependent Deprivation, (2) Structural Vulnerability & Communication Quarantine, (3) Statutory Merit & Irremediable Temporal Risk. | Fully Answered |
| **2. How captured & represented digitally?** | Binary flags + recency timestamps; categorical vulnerability vector + quarantine tag; structured statutory remedy array + deadline indicator. | Fully Answered |
| **3. How system helps DLAO without replacing legal judgment?** | Transparent urgency bands, explainable reason cards (no black-box AI score), full interactive control with judicial override audit logging. | Fully Answered |
| **4. What safeguard against unfair deprioritization?** | "Inverse-Uncertainty Vulnerability Floor" where data deficits bar demotion and trigger an expedited human review and covert verification. | Fully Answered |
| **Word Count Limit** | **Exactly 290 words** / 300 words max. | Passed ($\le 300$) |
| **Formatting** | Zero section symbols (`§`), zero emojis, 100% clean text. | Passed |
