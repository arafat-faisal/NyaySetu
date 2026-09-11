### **Project Name (Proposed Title)**

**"Kantho-Nyay: Dialect-Fluent Voice & Feature Phone Legal Aid Gateway for Low-Literacy Citizens"**

---

### **1. Executive Summary & Problem Addressed**

In Bangladesh, over **97% of eligible citizens are unaware** of their constitutional right to free government legal aid under the Legal Aid Services Act 2000. Furthermore:
- **Literacy & Language Barrier:** Over 40% of rural citizens communicate in regional dialects (such as Sylheti, Chittagonian, Noakhali, Rangpuri) that fail completely on standard textbook Bangla e-government portals.
- **Digital Divide:** Millions of low-income women, day laborers, and farmers do not own smartphones or have active mobile broadband—they rely on simple 2G feature phones.
- **National Hotline Bottleneck:** The National Legal Aid Services Organization (NLASO) toll-free helpline (**16430**) operates with limited human operators, leading to severe call drops and long hold times during peak hours.

**Kantho-Nyay** bridges this divide by turning any basic mobile phone call into a voice-guided, dialect-tolerant legal aid intake assistant.

---

### **2. Core System Features & Workflow**

#### **a. Dialect-Tolerant Voice Intake (IVR & Speech-to-Text)**
- Citizens dial the toll-free **16430** helpline from any basic feature phone (no internet or smartphone needed).
- The system greets callers in natural conversational Bangla and recognizes their dialect (Sylheti, Chittagonian, or Standard Bangla).
- Using fine-tuned Automatic Speech Recognition (ASR), it transcribes the caller's spoken complaint into structured legal text.

#### **b. Automated Legal Eligibility Screening (2014 Policy Check)**
- The voice assistant asks 4 simple conversational questions:
  1. Nature of the dispute (land grab, domestic abuse, wrongful arrest, wage theft, family).
  2. Estimated monthly household income (checking if below taxable threshold as per **Paragraph 2(1)(a)** of the 2014 Policy).
  3. Special vulnerability flags: Detainee family, female victim of violence, person with disability, or minority group.
- The AI classifies eligibility in real time without the caller needing to fill out a paper application.

#### **c. Instant Application Drafting & District Office Routing**
- The system automatically compiles the caller's recorded voice complaint into the official **NLASO Legal Aid Application Form**.
- An automated SMS notification with a tracking tracking token (tracking ID) is sent to the caller's phone.
- The complaint is routed directly to the relevant **District Legal Aid Officer (DLAO)** dashboard with an audio preview and transcribed Bengali brief.

#### **d. Village Court & ADR Referral Engine**
- If the dispute is a small compoundable matter within the jurisdiction of the **Village Courts Act 2006** (claims up to BDT 75,000) or suitable for **Section 21B Mandatory Pre-case Mediation**, the voice bot informs the citizen and schedules a grassroots mediation session.

---

### **3. Aligned Legal Framework**

1. **Legal Aid Services Act 2000 (Section 7):** Mandates accessible legal counseling and aid for underprivileged citizens.
2. **Legal Aid Policy 2014 (Paragraph 2 & 3):** Establishes qualification criteria and guarantees that general legal advice is open to all citizens without cost.
3. **Village Courts Act 2006 (Amended 2013):** Diverts localized community disputes to Union Parishad arbitration.
4. **National Telecom & ICT Policies:** Leverages national toll-free shortcode infrastructure (16430).

---

### **4. Technology Stack**

- **Telephony & Voice Gateway:** Asterisk / FreeSWITCH / Twilio SIP Gateway (integrates directly with 2G/3G telecom networks).
- **Speech-to-Text (ASR):** Open-source Whisper fine-tuned on South Asian Bangla dialects (Sylheti, Chittagonian) + Coqui TTS for natural voice synthesis.
- **Intake Intelligence:** Python (FastAPI), LangChain, Llama 3 / Claude API with structured JSON schema outputs.
- **Backend & Database:** PostgreSQL with pgvector (for precedent & policy retrieval), Redis for active call session caching.
- **Frontend Dashboard:** React / Vite clean administrative dashboard for Legal Aid Officers to review voice intakes and listen to original audio clips.

---

### **5. Hackathon Prototype & Demo Scope**

1. **Live Call / Audio Simulation:** Speak in Sylheti or conversational Bangla into the microphone describing a dispute.
2. **Real-Time Extraction:** Watch the system transcribe the speech, extract facts, identify legal categories, and verify income eligibility.
3. **Auto-Generated PDF:** Generate a completed official NLASO Application Form ready for submission.
4. **Officer Review:** View the incoming voice complaint in the District Legal Aid Officer queue with a 1-click approval workflow.
