# MASTER PROMPT: Multi-LLM Expert Panel for Challenge 3 (Justice Operations)

> **Instructions for the Evaluator / Prompt Operator**:  
> Copy and paste the prompt below into any frontier AI model (Claude 3.7 Sonnet / Opus, GPT-4o / GPT-5, Gemini 1.5 / 2.0 Pro, DeepSeek R1 / V3, Mistral Large, Llama 3.3, etc.) along with the 3 attached documents (`ATTACHMENT_1_OFFICIAL_CHALLENGE_AND_CASE_STUDY.md`, `ATTACHMENT_2_BANGLADESH_JUDICIAL_AND_PRIORITY_FRAMEWORK.md`, and `ATTACHMENT_3_JUSTICE_OPERATIONS_SYSTEM_ARCHITECTURE.md`).

---

```markdown
# MISSION: Formulate the Winning Response for Challenge 3 (Justice Operations) — Legal Tech Hackathon 2026

You are serving as a **Principal Judicial Operations Architect and Court Technology Strategist** specializing in Bangladesh judicial administration, legal aid case management, and fair algorithmic decision-support.

You are competing in the prestigious **Legal Tech Hackathon 2026** (Round 1 Submission). Your team is required to submit an authoritative, rigorous, and legally grounded solution to **Challenge 3: Justice Operations**.

---

## 1. THE CASE SCENARIO & OPERATIONAL PROBLEM

- **The Scenario**: Ripon's application (filed on behalf of his sister Moyuri Akter, who suffers nighttime domestic battery, 5-month food deprivation of her 4-year-old daughter, and coercive motorcycle dowry demands under threat of abandonment, while trapped in a surveilled household in Kalai) reaches the **Joypurhat District Legal Aid Office** on a working day along with a large number of other incoming files (undertrial bail petitions, land dispossession, unpaid garment wages, family disputes).
- **The Challenge**: Some of those incoming files need immediate attention based on urgency, legal merit, vulnerability, or likelihood of requiring prompt intervention compared to other filed cases without harming anyone. The office wants to introduce a digital system that helps officers see which cases may require immediate action.
- **The Goal**: Design a fair, transparent, and legally sound mechanism to support the District Legal Aid Officer (DLAO) in assessing the relative priority and merit of incoming cases.

---

## 2. THE 4 COMPULSORY QUESTIONS TO ANSWER

You must choose **THREE specific factors** and address all four core questions:
1. **What THREE factors should the DLAO consider when assessing the priority of a case?**
2. **How could those factors be captured and represented digitally?**
3. **How could the system help the DLAO compare or prioritize cases without automatically replacing the DLAO's legal judgment?**
4. **What safeguard would you introduce to prevent an applicant from being unfairly deprioritized because of incomplete information, vulnerability, or limited digital access?**

---

## 3. CRITICAL SUBMISSION RULES & CONSTRAINTS

1. **Word Count Limit**: **STRICTLY MAXIMUM 300 WORDS** for the final official submission draft. The hackathon web portal enforces a hard cut-off.
2. **AI-Human Boundary Rule**: Under Bangladesh judicial service rules and Legal Aid Services Act 2000 Section 21A, the DLAO is a serving judicial officer (Senior Assistant Judge / Joint District Judge). The system must serve as an explainable decision-support dashboard, NEVER an automated decider replacing judicial discretion.
3. **Anti-Deprioritization Safeguard**: You must introduce a concrete, innovative safeguard ensuring that incomplete applications (e.g., Moyuri's missing NID locked in her husband's almirah, or Ripon's voice-only proxy intake) are not pushed to the bottom of the pile.
4. **No Section Symbols (`§`)**: Do not use the section symbol (`§`) to avoid character encoding errors in web submission forms. Spell out **"Section"** or **"Sections"** in plain text.
5. **Strict Zero Emojis**: Maintain a formal, authoritative judicial-technical tone with 100% clean plain text (no unicode emojis).
6. **Authentic Bangladesh Statutory Citations**: Ground your factors and safeguards in authentic Bangladesh statutes:
   - Domestic Violence (Prevention and Protection) Act 2010 (Section 3 domestic violence definition, Section 11(1) representative application, Section 13 interim protection, Section 15 residence, Section 16 maintenance);
   - Dowry Prohibition Act 2018 Section 3 (motorcycle demand);
   - Legal Aid Services Act 2000 & 2026 Amendments (Section 21A DLAO judicial mandate, Section 7 digital infrastructure);
   - Legal Aid Services Policy 2014 Paragraph 2 (statutory priority categories);
   - Penal Code Sections 323 and 325 (physical hurt/grievous hurt);
   - Constitution of Bangladesh Article 27 (equality before law) and Article 32 (right to life).

---

## 4. REQUIRED OUTPUT STRUCTURE

Please organize your response into two distinct sections:

### SECTION 1: OFFICIAL SUBMISSION RESPONSE (MAXIMUM 300 WORDS)
*This is the exact, polished text to be pasted into the hackathon submission portal. It must directly and elegantly address all 4 required questions within 280–300 words. State the exact word count at the bottom.*

Must clearly cover:
- **The Three Factors** chosen for priority assessment.
- **Digital Capture & Representation** of those factors.
- **Decision-Support Mechanism** (how it assists without replacing the DLAO's judicial judgment).
- **Anti-Deprioritization Safeguard** (protecting applicants with incomplete data, vulnerability, or limited digital access).

### SECTION 2: ARCHITECTURAL, ALGORITHMIC & JURISPRUDENTIAL RATIONALE
*Provide a detailed technical, operational, and legal rationale supporting your submission draft, including:*
1. **Factor Breakdown & Statutory Matrix**: Full justification of why the three factors reflect Bangladesh judicial priorities.
2. **Digital Data Structure & Scoring Logic**: Detailed multi-attribute vector schema and explainable reason-card architecture.
3. **UI/UX Decision Cockpit Design**: How the DLAO interacts with the triage queue (sorting, filtering, overriding, and audit logging).
4. **Data-Deficit Protection Protocol**: Comprehensive explanation of how the system treats missing documentation as an indicator of vulnerability rather than a basis for penalization.
```
