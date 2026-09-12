# Challenge 2: AI for Legal Aid (Multi-LLM Opinion Panel)

Welcome to the **Challenge 2 Multi-LLM Opinion Panel** workspace for the **Legal Tech Hackathon 2026** (Round 1 Submission).

This workspace is specifically dedicated to formulating, gathering frontier AI opinions, and synthesizing the winning response for **Challenge 2: AI for Legal Aid** based on the official hackathon case study (*The Case: Moyuri of Kalai, Joypurhat*).

---

## 1. FOLDER STRUCTURE

```
Challenge_2_Multi_LLM_Opinion/
├── MASTER_PROMPT.md                                      <-- Master prompt to copy & paste into frontier LLMs
├── ATTACHMENT_1_OFFICIAL_CHALLENGE_AND_CASE_STUDY.md     <-- Official challenge text, case study & rubric
├── ATTACHMENT_2_BANGLADESH_LEGAL_STATUTES_AND_PROCEDURES.md <-- Applicable BD laws (DV Act 2010, Dowry 2018, LASA 2000)
├── ATTACHMENT_3_DLAS_VOICE_AI_ARCHITECTURE_AND_SAFETY_PROTOCOLS.md <-- Technical, accessibility & safety constraints
├── SYNTHESIS_AND_MERGE_MATRIX.md                         <-- Comparative analysis & final merged winning draft
├── README.md                                             <-- This guide
└── responces/                                            <-- Save model responses here
    ├── claude/responce.txt
    ├── gpt/responce.txt
    ├── gemini/responce.txt
    ├── deepseek/responce.txt
    ├── mistral/responce.txt
    ├── meta/responce.txt
    └── sakana/responce.txt
```

---

## 2. HOW TO RUN THE PANEL

1. Open [`MASTER_PROMPT.md`](file:///d:/LegalHackathon/Challenge_2_Multi_LLM_Opinion/MASTER_PROMPT.md).
2. Copy the prompt block.
3. Attach or provide the three context files:
   - [`ATTACHMENT_1_OFFICIAL_CHALLENGE_AND_CASE_STUDY.md`](file:///d:/LegalHackathon/Challenge_2_Multi_LLM_Opinion/ATTACHMENT_1_OFFICIAL_CHALLENGE_AND_CASE_STUDY.md)
   - [`ATTACHMENT_2_BANGLADESH_LEGAL_STATUTES_AND_PROCEDURES.md`](file:///d:/LegalHackathon/Challenge_2_Multi_LLM_Opinion/ATTACHMENT_2_BANGLADESH_LEGAL_STATUTES_AND_PROCEDURES.md)
   - [`ATTACHMENT_3_DLAS_VOICE_AI_ARCHITECTURE_AND_SAFETY_PROTOCOLS.md`](file:///d:/LegalHackathon/Challenge_2_Multi_LLM_Opinion/ATTACHMENT_3_DLAS_VOICE_AI_ARCHITECTURE_AND_SAFETY_PROTOCOLS.md)
4. Submit to your selected frontier models (Claude 3.7 / Opus, GPT-4o / GPT-5, Gemini 1.5 / 2.0 Pro, DeepSeek R1 / V3, Mistral Large, Meta Llama 3.3, Sakana, etc.).
5. Paste their responses into the corresponding `responces/<model>/responce.txt` files.
6. We will then synthesize and merge the best elements into [`SYNTHESIS_AND_MERGE_MATRIX.md`](file:///d:/LegalHackathon/Challenge_2_Multi_LLM_Opinion/SYNTHESIS_AND_MERGE_MATRIX.md) to produce our final, perfectly calibrated $\le$ 300-word submission response!
