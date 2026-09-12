# MASTER PROMPT: Multi-LLM UI/UX Design & Architecture Challenge

> **Prompt Instructions for the Evaluator**: Copy and paste the prompt below into any frontier AI model (Claude 3.7 Sonnet / Opus, GPT-4o / GPT-5, Gemini 1.5 / 2.0 Pro, DeepSeek R1 / V3, Mistral Large, etc.) along with the 3 attachment files in this folder.

---

```markdown
# MISSION: Design and Implement the Next-Generation Sovereign Judicial Workspace Cockpit for "NyaySetu (ন্যায়সেতু)"

You are tasked with designing and implementing an extraordinary, world-class UI/UX architecture and complete working frontend application for **NyaySetu (ন্যায়সেতু — The Justice Bridge)**, the digital legal aid operations platform for Bangladesh.

You are acting as an elite **Principal Design Architect & Lead Frontend Engineer**. You have complete creative autonomy. Think entirely on your own and invent your own distinct, original, and breathtaking visual and interaction paradigm. Do not mimic generic templates, cookie-cutter dashboards, or simplistic AI boilerplate. Build a solution that feels like it was crafted with immense care, love, and obsessive attention to detail by the world's finest design engineer.

---

## 1. PROJECT CONTEXT & THE PROBLEM TO SOLVE
Bangladesh's formal judicial system is burdened with **4.64 million pending cases**, with **over 70% of the 85,000+ prison inmates being undertrial detainees** who have never received a trial verdict. Only **27 full-time District Legal Aid Officers (DLAOs)** serve all 64 districts (1 officer per 6.3M citizens). Physical paper bail orders take up to **14 days** to travel by courier between court clerks and prison gates, causing weeks of unlawful continued detention. Meanwhile, 25%+ of the vulnerable population cannot read or write, and 50M+ rural citizens rely exclusively on basic 2G button phones without internet access.

**NyaySetu** bridges this crisis through an omnichannel, 4-tier justice operations infrastructure connecting grassroots citizens directly to courts and prisons.

---

## 2. STRICT DESIGN & TECHNICAL RULES (NON-NEGOTIABLE)

### Rule 1: STRICT ZERO EMOJIS (100% Crisp Vector SVGs)
- **Absolute prohibition of unicode emojis** anywhere in the system (no scales, no gavels, no phones, no shields, no robot faces, no alert triangles as unicode).
- Every single indicator, icon, button, badge, and navigation item MUST use **real, handcrafted inline SVG vector icons** with pixel-perfect stroke geometry and consistent stroke-width.

### Rule 2: NEVER GENERIC ANYTHING (Deep Authentic Bangladesh Grounding)
- Avoid generic placeholders ("Lorem ipsum", "John Doe", "Case #123").
- Use authentic legal, administrative, and geographic references of Bangladesh:
  - The **Legal Aid Services Act 2000** (আইনগত সহায়তা প্রদান আইন, ২০০০).
  - The **Legal Aid Services Policy 2014, Paragraph 2** (14 statutory citizen categories eligible for free aid, annual income threshold $\le$ BDT 150,000).
  - **Section 15 Gender Quota**: Statutory mandate that **at least one-third (33.3%) of all state-funded legal aid cases must be assigned to qualified female advocates**.
  - **Code of Criminal Procedure 1898 (§497 Bail)** and Bangladesh Constitution (Articles 33 & 34).
  - Authentic administrative jurisdictions: Upazilas, Union Digital Centres (4,554 UDCs), Mouzas, and CJM/Sessions courts.
  - Official Bangladesh Gazette Forms: **LA Form 20, 21, 23, and 25**.

### Rule 3: SOPHISTICATED COLOR PALETTES & SURFACE ELEVATIONS
- Do NOT use generic, saturated primary colors (plain red, plain blue, plain green).
- Curate harmonious, sophisticated palettes with deliberate surface elevation hierarchy (e.g. deep judicial obsidian, sovereign emerald, titanium slate, luminous accents, or warm legal ivory/bronze).
- Design distinct surface depths (`--surface-base`, `--surface-panel`, `--surface-elevated`, `--surface-overlay`) with micro-borders, hairline accents, and subtle highlight edges.
- Provide a responsive theme selector supporting multiple curated aesthetics.

### Rule 4: MODERN APP SHELL ARCHITECTURE & ERGONOMIC RESPONSIVENESS
- **Do NOT build a lazy, endless vertical scroll of identical stacked cards**.
- Build an **Operating System Workspace / Command Cockpit**:
  - A persistent, sleek **Sidebar Navigation Rail** (with hotkeys `[1]` to `[6]`, status badges, and collapse toggle).
  - A focused **Central Stage** where only the active workspace renders with 100% of the user's attention.
  - A persistent **Command Header** with breadcrumbs and live system telemetry.
  - A persistent **Status Footer** tracking background thread latency and cryptography health.
  - A native-feeling **Mobile Bottom Navigation Dock** for smartphone viewports (< 768px).
- Sizing and typography must follow a strict scale: 11px micro-labels, 13px data tokens, 15px UI text, 20px+ panel titles (using modern typography pairings like Outfit, Inter, JetBrains Mono, and Hind Siliguri for Bangla).

### Rule 5: MULTITHREADED PERFORMANCE & RESILIENT TECH STACK
- **Technologies**: Vanilla HTML5, Vanilla CSS3 (CSS Grid, Subgrid, Custom Properties, Container Queries), and Modern ES6+ Asynchronous JavaScript.
- **Web Workers**: Heavy computations (cryptographic signing, spatial coordinate warping matrices, and Quranic Farayez fractional inheritance math) must be offloaded to dedicated browser Web Workers (`worker-compute.js`) to guarantee 60fps UI responsiveness.
- **Client-Side Resilient**: Zero mandatory backend server or Node.js runtime required to run the prototype; must execute 100% in modern browsers and host directly on GitHub Pages.

---

## 3. THE 6 CORE SUBSYSTEMS YOU MUST ARCHITECT & IMPLEMENT

1. **Workspace 1: Case Docket & Nyay-Triage (Tier 3)**:
   - High-density 3-pane master-detail data grid pre-loaded with **10 authentic Bangladesh cases** (undertrial detention in Kashimpur, river char land grab, garment worker unpaid wages, domestic abuse, etc.).
   - Instant search/filter by applicant name, NID, district, and urgency chips (Red Alert, High Priority, Standard ADR).
   - Dynamically generated **1-Page Bengali Case Brief (`বাংলা কেস ব্রিফ`)** with facts (150 words), statutory sections, and admissibility checks against Paragraph 2 of the 2014 Policy.
   - **Section 15 Panel Advocate Allocator** with a real-time compliance meter enforcing the **33.3% female advocate quota**.
   - 1-click official statutory form generation (LA Form 20, 21, 23, 25).

2. **Workspace 2: KanthoNyay 16430 Hotline & Physical Retro Phone Console (Tier 1)**:
   - Call center terminal with dialect switcher (*Sylheti*, *Chatgaya*, *Standard Bangla*), live audio waveform visualizer bars, and real-time streaming Bengali transcriptions.
   - Authentic **3D-styled Nokia feature phone emulator** featuring a textured casing, illuminated monochrome yellow-green LCD screen, and **Web Audio API DTMF dual-tone key beeps** when dialing `*16430#` and navigating hierarchical USSD service menus.

3. **Workspace 3: FastBail-BD Cryptographic Release & Gate Verification (Tier 3)**:
   - Dual judicial workbench comparing magistrate bail granting (under CrPC §497) with real-time digital signature generation (`Ed25519` or `RSA-4096 / SHA-256`).
   - Renders a printable judicial pass with high-density vector QR code.
   - Simulated **Prison Gate Terminal Camera Scanner** that decodes the QR token, verifies it against the Supreme Court Public Key in under 1ms, and outputs real-time terminal audit authorization logs.

4. **Workspace 4: Bhoo-Chitra Cadastral GIS & Farayez Inheritance Engine (Tier 3)**:
   - Full-width GIS workstation with coordinate HUD overlay (Mouza, Dag No, Encroachment).
   - Interactive split-screen sliding comparison between British colonial CS 1888 cadastral survey maps and modern satellite imagery, visually exposing an exact **14.8 decimal boundary intrusion polygon**.
   - Interactive **Farayez Inheritance Calculator** computing strict Quranic fractional shares (*Ashab al-Furud*) and residuary (*Asabah*) shares across widows, sons, daughters, mother, and father, dividing parcel acreage mathematically off the main thread.

5. **Workspace 5: ArUco Optical Paper Ingestion Station (Tier 0)**:
   - High-tech document inspection bay simulating a smartphone camera scanning physical `LAF-1` paper application forms.
   - Animates 4-corner ArUco fiducial marker tracking, laser sweep line, perspective un-warping, and structured Bengali JSON field extraction with confidence scores.

6. **Workspace 6: WhatsApp Web Legal Client & Nari-Shield Safe Mode (Tier 2)**:
   - Interactive messaging client where citizens can send simulated text/voice messages and receive automated NLASO AI legal triage responses with tracking IDs.
   - **Nari-Shield Protocol**: Prominent emergency exit button (**"জরুরি প্রস্থান (Panic Escape)"** or `Esc` key) that immediately transforms the interface into an innocent undercover lifestyle and cooking recipe portal (*Ilish Polao Recipe & Weather Digest*) to protect victims of domestic abuse from surveillance.

7. **Universal Architecture Configurator Hub (`Ctrl + K`)**:
   - An interactive command deck allowing judges to dynamically switch the underlying algorithms for every subsystem:
     - *Triage Engine*: Hybrid Ensemble vs. Pure 2014 Statutory Rules vs. Generative Legal LLM.
     - *Bail Cryptography*: Ed25519 Curve (384 bytes) vs. X.509 RSA-4096 vs. NIST P-256 ECDSA.
     - *Map Warping*: Thin Plate Spline (TPS) vs. Projective Homography (4-pt DLT) vs. Delaunay Triangulation.
     - *Speech Pipeline*: FreeSWITCH SIP + Coqui ASR vs. Asterisk PBX vs. Browser WebRTC.
     - *Paper Ingestion*: ArUco Quad Warp vs. Segmented Field OCR vs. WebAssembly WASM.

---

## 4. ATTACHMENTS PROVIDED FOR FULL CONTEXT
Please study the 3 companion files provided in this workspace:
1. `ATTACHMENT_1_SYSTEM_ARCHITECTURE.md`: Complete operational blueprints, end-to-end workflows, and algorithmic methods.
2. `ATTACHMENT_2_LEGAL_FRAMEWORK_AND_STATUTES.md`: Statutory legal framework, 2014 Policy Para 2 criteria, Gazette forms, and Hackathon track specifications.
3. `ATTACHMENT_3_GROUNDED_SCENARIOS_AND_SCHEMAS.json`: Structured dataset containing 10 rich Bangladesh legal aid cases, statutory parameters, and the algorithm configuration matrix.

---

## 5. DELIVERABLE SPECIFICATION
Provide:
1. **Design Philosophy & Interaction Concept**: Your unique design thesis, spatial philosophy, typography, and color theory.
2. **Complete, Production-Grade Frontend Code**:
   - `index.html`: Fully structured semantic markup for the App Shell and 6 workstations.
   - `styles.css`: Complete, ultra-premium design system, CSS Grid layouts, surface elevations, tactile styling, and responsiveness.
   - `app.js`: Reactive workspace router, keyboard shortcuts, Web Audio synthesizer, and state machine.
   - `worker-compute.js`: Dedicated multithreaded Web Worker executing cryptographic hashing, spatial warping matrices, and Farayez math off-thread.
```
