# EVALUATION MASTER PROMPT: Challenge 2 Cross-Check Audit

> **Instructions for the Evaluator**:  
> Copy and paste the prompt block below into **ChatGPT (GPT-4o / o1)** and **Claude 3.7 Sonnet / Opus**.  
> Paste their full evaluations into:
> - `cross_check_evaluation/gpt_critique.txt`
> - `cross_check_evaluation/claude_critique.txt`

---

```markdown
# JUDICIAL & TECHNICAL AUDIT: Legal Tech Hackathon 2026 — Challenge 2 Evaluation

You are serving as a Senior Judge and Technical Evaluator for the **Legal Tech Hackathon 2026** (organized around the Directorate of Bangladesh Legal Aid and the ADLASB project).

You are tasked with conducting an uncompromising, rigorous evaluation of our team's draft submission for **Challenge 2: AI for Legal Aid**.

---

## 1. THE OFFICIAL PROBLEM STATEMENT & CONSTRAINTS

### The Scenario:
- **Moyuri Akter (24)**: Lives in a tin-roofed house in Kalai Upazila, Joypurhat. Suffers nighttime beatings from husband Sohel (rice mill worker), 5 months without food/expenses for her and 4-year-old daughter, and coercive motorcycle dowry demands under threat of second marriage.
- **Surveillance Hazard**: Husband holds the only smartphone. Moyuri has a basic button phone kept by her mother-in-law where call logs are inspected. An SMS or call to this phone will trigger severe domestic violence. NID locked in husband's almirah. Court is 30 km away. Only safe window is roughly 20 minutes on Friday midday during Jumu'ah prayer.
- **The Caller (Ripon, 32)**: Moyuri's blind brother. Memorized 16699 helpline from a loudspeaker van. Can dial and speak, but cannot read forms, PDFs, captchas, or OTPs. Screen reader fails on Bengali text. Does not know Moyuri's NID.
- **The Inbound Call**: Ripon calls 16699 and says in Bangla:
  > “আমার বোনের স্বামী তাকে মারধর করে, পাঁচ মাস ধরে কোনো খরচও দেয় না। বোনের কাছে ফোন নাই, আমি চোখে দেখি না। আমরা এখন কী করতে পারি?”
- **Core Rule**: AI provides primary support only; human-centric intervention is required for final legal assistance and case management. All info from Ripon must be treated as unverified third-party information until safely verified directly with Moyuri.

### Mandatory Rubric Elements:
1. Proposed AI-assisted workflow from Ripon's first interaction to human intervention.
2. Situations where AI triggers an urgent human review.
3. What AI can do.
4. What AI should not do.
5. When escalation occurs.
6. What information should be captured for the human officer, given that the person the case is about never speaks directly to the system.
7. **Hard Constraint**: STRICTLY MAXIMUM 300 WORDS (Competition portal enforces a hard cutoff). No emojis. Clean text without special symbols (§).

---

## 2. OUR CURRENT DRAFT SUBMISSION (290 WORDS)

```text
DLAS AI functions strictly as a voice-first intake and triage gateway, not an adjudicator. The entire interaction occurs in spoken Bangla, accommodating Ripon's blindness without requiring visual forms, captchas, OTPs, or NID.

What AI can do: Conduct empathetic voice intake; extract structured entities (victim Moyuri, age 24, Kalai, Joypurhat; 4-year-old daughter; perpetrator Sohel; informant Ripon, blind brother); label all data as “Unverified Third-Party Information” under Domestic Violence Act 2010 Section 11(1); activate an “Extreme Surveillance Lock” disabling automated outbound SMS/calls to the household button phone; record Moyuri's Friday midday 20-minute safe window; reassure Ripon that government legal aid is free under Legal Aid Services Act 2000; issue a spoken 4-digit token; and compile an auditable intake brief for the Joypurhat District Legal Aid Officer (DLAO).

What AI should not do: Give substantive legal advice; assess credibility; make eligibility or case-admission decisions (reserved exclusively for DLAO under Legal Aid Services Act 2000 Section 21A); reject for missing NID or victim absence; contact the monitored button phone or Sohel; or treat proxy claims as verified affidavits.

When escalation occurs: Immediate high-priority human escalation is triggered by ongoing nighttime battery (Penal Code Sections 323 and 325), five-month child and maternal starvation (Domestic Violence Act Sections 3 and 16), dowry extortion with bigamy threats (Dowry Prohibition Act 2018 Section 3), monitored communications preventing direct access, or caller distress.

Information captured for human officer: Ripon's contact, relationship, and voice-only need; Moyuri's location, locked NID, and dependent; factual chronology; strict safety protocol (“DO NOT SEND SMS OR OUTBOUND CALL TO BUTTON PHONE”); Friday 1:15–1:35 PM window; recommendation for covert field verification via Upazila Women Affairs Enforcement Officer (Domestic Violence Act Sections 5, 6, and 11); and data-integrity marker: “Unverified Third-Party Information — Direct Victim Verification Required.”
```

---

## 3. YOUR EVALUATION TASK

Provide an objective, constructive evaluation:
1. **Score out of 100** based on the official hackathon criteria.
2. **Specific Critiques & Vulnerabilities**: Why might an evaluator rate this low? Where does it feel too abstract, legally crowded, or operationally incomplete?
3. **Audit against the 4 Required Questions**: Did it clearly distinguish the workflow vs the 4 bullet points?
4. **The Perfect 100/100 Rewrite**: Rewrite the submission text so that it scores maximum points, covers every single requirement with flawless operational clarity, keeps the authentic statutory references, and stays **strictly under 300 words**.
```
