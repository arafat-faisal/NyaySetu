# MASTER PROMPT: Multi-LLM Expert Panel for Challenge 4 (Online Dispute Resolution and Accountability)

> **Instructions for the Evaluator / Prompt Operator**:  
> Copy and paste the prompt below into any frontier AI model (Claude 3.7 Sonnet / Opus, GPT-4o / GPT-5, Gemini 1.5 / 2.0 Pro, DeepSeek R1 / V3, Mistral Large, Llama 3.3, Grok, Perplexity, etc.) along with the 3 attached documents:
> 1. `ATTACHMENT_1_OFFICIAL_CHALLENGE_AND_CASE_STUDY.md`
> 2. `ATTACHMENT_2_BANGLADESH_ODR_AND_LEGAL_FRAMEWORK.md`
> 3. `ATTACHMENT_3_MINIMUM_DIGITAL_ODR_SYSTEM_ARCHITECTURE.md`

---

```markdown
# MISSION: Formulate the Winning Response for Challenge 4 (Online Dispute Resolution and Accountability) — Legal Tech Hackathon 2026

You are serving as a **Principal Online Dispute Resolution (ODR) Architect, Senior Bangladesh Family Law Jurist, and Court Systems Technologist**.

You are competing in the prestigious **Legal Tech Hackathon 2026** (Round 1 Submission on `legal-hackathon.tech/dashboard/submission/1`). Your team is required to submit an authoritative, legally watertight, and practically implementable solution for **Challenge 4: Online Dispute Resolution (ODR) and Accountability**.

---

## 1. THE OFFICIAL PROBLEM STATEMENT & CONTEXT

> **Official Problem Text**:
> **Scenario**: Recent legal aid reforms have strengthened the role of mediation, including pre-case mediation under the amended framework, and the DBLA website publishes information on ODR-related activities. The legal aid officer wants to test whether the maintenance claim and the dowry demand can be settled through mediation before any case is filed.
>
> Sohel has taken work in Gazipur and now stays there. Moyuri is in the village, where the network drops for hours and she can speak only in short windows. Neither of them is comfortable with technology, and Ripon cannot read a document that is sent to him.
>
> **Maximum: 350 words plus an explanation of a simple process diagram.**
>
> Design the minimum digital process that could allow this dispute to move from initial legal aid contact to online mediation and then to a properly documented mediation outcome within the legal aid system.
>
> Your team must identify:
> `Citizen entry → eligibility/intake → mediation → outcome → record/follow-up`
>
> You must also state **one condition under which your process should stop and refuse to move this dispute to online mediation, and what the system does instead.**
>
> You do not need to build the system. `*0/350 words`

---

## 2. REAL-WORLD CONSTRAINTS & OPERATIONAL ASYMMETRIES

Your design must solve for extreme real-world digital, physical, and legal asymmetries:
1. **Moyuri (Kalai, Joypurhat)**: Trapped in rural in-laws' home, button phone held by mother-in-law (call logs checked), unstable 2G cellular network dropping for hours, zero internet literacy, can only speak safely for ~20 minutes on Friday midday while husband is at mosque.
2. **Sohel (Gazipur)**: Migrant industrial/mill worker, possesses a smartphone in his pocket, uncomfortable with complex apps, works long factory shifts.
3. **Ripon (Blind Proxy)**: Relies exclusively on voice calls, cannot read screens, captchas, OTPs, or PDF documents.
4. **DLAO (Joypurhat Court Complex)**: Serving judicial officer (Senior Assistant Judge) with statutory pre-case mediation powers under Section 21A of Legal Aid Services Act 2000.
5. **The Two Distinct Claims**:
   - Maintenance for wife and child (compoundable civil claim under Family Courts Act 2023 Section 5 and Domestic Violence Act 2010 Section 16).
   - Dowry motorcycle demand backed by battery and threats (non-compoundable, cognizable criminal offense under Dowry Prohibition Act 2018 Section 3).

---

## 3. STRICT SUBMISSION RULES & CONSTRAINTS

1. **Word Count Limit**: **STRICTLY MAXIMUM 350 WORDS** for the final official submission draft (including the explanation of the simple process diagram). The hackathon portal enforces a hard submission cut-off.
2. **Mandatory 5-Stage Architecture**: You must explicitly identify each required stage:
   `Citizen entry → eligibility/intake → mediation → outcome → record/follow-up`
3. **Mandatory Stop/Refusal Condition**: You must clearly state the exact condition under which online mediation is halted/refused, and what the system does instead (alternative judicial/emergency pathway).
4. **Low-Bandwidth Practicality**: Heavy video conferencing (Zoom/WebRTC) is technically and culturally impossible here. Design an asynchronous, voice-first, tele-caucus (shuttle audio) model supported by local Union Digital Center (UDC) touchpoints.
5. **No Section Symbols (`§`)**: Do not use the section symbol (`§`) in the submission text to prevent web form encoding errors. Spell out **"Section"** or **"Sections"**.
6. **Strict Zero Emojis**: Maintain an authoritative judicial, administrative, and systems engineering standard with 100% clean plain text (no unicode emojis).
7. **Authentic Bangladesh Statutory Grounding**: Anchor your response in:
   - Legal Aid Services Act 2000 & 2026 Amendments (Section 21A DLAO pre-case mediation and decree enforceability);
   - Code of Civil Procedure 1908 (Section 89A mediation decree);
   - Family Courts Act 2023 (Sections 4, 5, 14 maintenance jurisdiction and reconciliation);
   - Domestic Violence (Prevention and Protection) Act 2010 (Section 3 abuse, Section 11 representative filing, Section 13 interim protection order, Section 15 residence order, Section 16 maintenance);
   - Dowry Prohibition Act 2018 (Section 3 criminal dowry prohibition).

---

## 4. REQUIRED OUTPUT STRUCTURE

Please format your response into two distinct parts:

### PART 1: OFFICIAL SUBMISSION RESPONSE (MAXIMUM 350 WORDS)
*This is the exact, polished text to be pasted directly into the hackathon submission portal. It must directly fulfill all required prompts within 330–350 words, including a clear text-based process diagram and its explanation. State the exact word count at the end.*

Must include:
- **Process Diagram & Flow**: A compact visual/ASCII flow representing the 5 stages plus the refusal branch.
- **The 5-Stage Minimum Digital Process**: Crisp, actionable explanation of `Citizen entry → eligibility/intake → mediation → outcome → record/follow-up`.
- **The Compulsory Stop Condition & Alternative Judicial Pathway**: Clear statement of the condition stopping online mediation and the exact alternative legal remedy executed.

### PART 2: ARCHITECTURAL, LEGAL & OPERATIONAL DEEP-DIVE
*Provide a rigorous technical, operational, and legal rationale explaining:*
1. **Statutory & Ethical Framework**: Why maintenance is compoundable while dowry demands legally and ethically bar mediation.
2. **Low-Bandwidth Asynchronous Caucus Design**: How audio shuttle mediation bridges Gazipur factory shifts and Kalai 2G rural network drops.
3. **Zero-Screen Accessibility & Safety Protocol**: How Ripon's blindness and Moyuri's surveillance risks are handled.
4. **Enforceability & MFS Accountability**: How settlement terms convert to a court decree under Section 21A and automate bKash/Nagad maintenance tracking.
```
