# Challenge 4: Multi-LLM Opinion Workspace
## Legal Tech Hackathon 2026 — Online Dispute Resolution (ODR) and Accountability

Welcome to the dedicated workspace for **Challenge 4: Online Dispute Resolution (ODR) and Accountability**.

---

### 1. DIRECTORY STRUCTURE

```
Challenge_4_Multi_LLM_Opinion/
├── MASTER_PROMPT.md                                  # Complete master prompt to paste into AI models
├── ATTACHMENT_1_OFFICIAL_CHALLENGE_AND_CASE_STUDY.md # Verbatim official text, scenario, constraints
├── ATTACHMENT_2_BANGLADESH_ODR_AND_LEGAL_FRAMEWORK.md# Statutory grounding (LASA Sec 21A, DV Act, Dowry Act)
├── ATTACHMENT_3_MINIMUM_DIGITAL_ODR_SYSTEM_ARCHITECTURE.md # 5-stage low-bandwidth architecture & exit flow
├── BENCHMARK_PROPOSED_SOLUTION.md                   # Reference benchmark draft (348 words)
├── SYNTHESIS_AND_MERGE_MATRIX.md                    # 10-model scoring and comparison tracker
├── README.md                                        # This navigation guide
└── responces/                                       # Placeholders for all 10 frontier models
    ├── chatgpt/responce.txt
    ├── claude/responce.txt
    ├── deepseek/responce.txt
    ├── gemini/responce.txt
    ├── gpt5/responce.txt
    ├── grok/responce.txt
    ├── meta/responce.txt
    ├── mistral/responce.txt
    ├── perplexity/responce.txt
    └── sakana/responce.txt
```

---

### 2. HOW TO RUN THE MULTI-LLM EVALUATION

1. Open `MASTER_PROMPT.md` and copy the prompt text.
2. Provide the 3 attachments (`ATTACHMENT_1`, `ATTACHMENT_2`, `ATTACHMENT_3`) to the frontier AI models:
   - ChatGPT / GPT-4o
   - Claude 3.7 Sonnet / Thinking
   - DeepSeek R1 / V3
   - Gemini 2.0 Pro
   - GPT-5 / o1 / o3-mini
   - Grok
   - Meta Llama 3.3
   - Mistral Large
   - Perplexity Pro
   - Sakana AI
3. Paste each model's full response into its respective `responces/<model>/responce.txt` file.
4. Notify the assistant once all responses are saved. We will immediately compile all raw data and the Master Prompt into a single comprehensive dossier (`CHALLENGE_4_ALL_RAW_DATA_AND_MASTER_PROMPT.md`) for your high-level Master AI.

---

### 3. MANDATORY CONSTRAINTS REMINDER
- Maximum **350 words** total in the final draft (including process diagram explanation).
- Must explicitly cover: `Citizen entry → eligibility/intake → mediation → outcome → record/follow-up`.
- Must explicitly state the **one condition under which the process stops and refuses online mediation**, and what the system does instead.
- Zero emojis.
- Zero section symbol `§` (spell out "Section" / "Sections").
