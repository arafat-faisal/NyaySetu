# Challenge 3: Justice Operations (Multi-LLM Opinion Panel)

Welcome to the **Challenge 3 Multi-LLM Opinion Panel** workspace for the **Legal Tech Hackathon 2026** (Round 1 Submission).

This workspace is specifically dedicated to formulating, gathering frontier AI opinions, and synthesizing the winning response for **Challenge 3: Justice Operations** based on the official hackathon case study (*The Case: Moyuri of Kalai, Joypurhat*) and DLAO case triage operations.

---

## 1. FOLDER STRUCTURE

```
Challenge_3_Multi_LLM_Opinion/
├── MASTER_PROMPT.md                                      <-- Master prompt to copy & paste into frontier LLMs
├── ATTACHMENT_1_OFFICIAL_CHALLENGE_AND_CASE_STUDY.md     <-- Official challenge text, case study & rubric
├── ATTACHMENT_2_BANGLADESH_JUDICIAL_AND_PRIORITY_FRAMEWORK.md <-- Judicial framework, DLAO mandate & LASA 2000
├── ATTACHMENT_3_JUSTICE_OPERATIONS_SYSTEM_ARCHITECTURE.md <-- Triage vectors, HUD design & anti-bias safeguards
├── SYNTHESIS_AND_MERGE_MATRIX.md                         <-- Comparative analysis & final merged winning draft
├── README.md                                             <-- This guide
└── responces/                                            <-- Save model responses here
    ├── claude/responce.txt
    ├── gpt/responce.txt
    ├── chatgpt/responce.txt
    ├── deepseek/responce.txt
    ├── mistral/responce.txt
    ├── gemini/responce.txt
    ├── meta/responce.txt
    ├── sakana/responce.txt
    ├── Grok/responce.txt
    └── perplexity/responce.txt
```

---

## 2. HOW TO RUN THE PANEL

1. Open [`MASTER_PROMPT.md`](file:///d:/LegalHackathon/Challenge_3_Multi_LLM_Opinion/MASTER_PROMPT.md).
2. Copy the prompt block.
3. Attach or provide the three context files:
   - [`ATTACHMENT_1_OFFICIAL_CHALLENGE_AND_CASE_STUDY.md`](file:///d:/LegalHackathon/Challenge_3_Multi_LLM_Opinion/ATTACHMENT_1_OFFICIAL_CHALLENGE_AND_CASE_STUDY.md)
   - [`ATTACHMENT_2_BANGLADESH_JUDICIAL_AND_PRIORITY_FRAMEWORK.md`](file:///d:/LegalHackathon/Challenge_3_Multi_LLM_Opinion/ATTACHMENT_2_BANGLADESH_JUDICIAL_AND_PRIORITY_FRAMEWORK.md)
   - [`ATTACHMENT_3_JUSTICE_OPERATIONS_SYSTEM_ARCHITECTURE.md`](file:///d:/LegalHackathon/Challenge_3_Multi_LLM_Opinion/ATTACHMENT_3_JUSTICE_OPERATIONS_SYSTEM_ARCHITECTURE.md)
4. Submit to your selected frontier models (Claude 3.7 / Opus, GPT-4o / GPT-5, ChatGPT, DeepSeek R1 / V3, Mistral Large, Gemini 2.0 Pro, Meta Llama 3.3, Sakana AI, Grok, Perplexity).
5. Paste their responses into the corresponding `responces/<model>/responce.txt` files.
6. We will then synthesize and merge the best elements into [`SYNTHESIS_AND_MERGE_MATRIX.md`](file:///d:/LegalHackathon/Challenge_3_Multi_LLM_Opinion/SYNTHESIS_AND_MERGE_MATRIX.md) and generate our clean, ready-to-paste submission draft!
