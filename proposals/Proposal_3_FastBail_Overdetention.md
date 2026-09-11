### **Project Name (Proposed Title)**

**"FastBail-BD: Automated Under-Trial Over-Detention Watchdog & PKI Cryptographic Bail Dispatch Network"**

---

### **1. Executive Summary & Problem Addressed**

In Bangladesh's correctional system:
- **70%+ Under-Trial Prison Population:** More than 70% of individuals incarcerated in Bangladesh prisons are under-trial detainees awaiting final judgment.
- **Physical Bail Dispatch Bottleneck:** Even after a competent court grants bail, releasing the detainee takes **7 to 21 days** because physical bail orders must be manually dispatched, couriered, and hand-verified between court registries and jail gates.
- **Statutory Over-Detention Breaches:** Thousands of poor detainees remain incarcerated long past the statutory time limits set by law simply because no public defender tracks the duration of their detention.
- **Surety Fraud & Rent-Seeking:** The manual bail bond verification process encourages middleman bribery and fraudulent sureties who use fake land deeds or identities to guarantee bail.

**FastBail-BD** combines an algorithmic jail census watchdog with a secure, PKI-signed digital bail dispatch network to instantly secure the release of entitled citizens.

---

### **2. Core System Features & Workflow**

#### **a. HabeasAlert: Algorithmic Jail Census Watchdog**
- Ingests daily jail roll registers and matches each detainee's detention duration against statutory maximums under the **Code of Criminal Procedure (CrPC)** and special laws.
- Detects detainees who:
  1. Have been detained without trial exceeding the maximum punishment of their charged offense.
  2. Have not had a hearing scheduled within 180 days.
  3. Qualify for mandatory state legal defense under **Paragraph 2(2)(dha)** of the Legal Aid Policy.
- Flags these cases on the **District Legal Aid Officer (DLAO)** dashboard as **"Red Alert Over-Detention"** for immediate habeas corpus or emergency bail petition drafting.

#### **b. PKI-Signed Cryptographic Bail Dispatch**
- When a judge signs a bail order in court, the system generates a secure, tamper-proof PDF with an embedded server-side cryptographic digital signature and high-density QR code (**X.509 PKI Standard**).
- The order is instantly transmitted via an encrypted judicial pipeline to the Central/District Jail Superintendent within **30 seconds** of judicial approval—completely eliminating 14-day manual courier delays.

#### **c. SuretyCheck-BD (Biometric & NID Verification)**
- Replaces manual paper land deeds with biometric fingerprint and NID cross-matching for bail guarantors.
- Prevents professional fake sureties and corrupt bail bond rent-seeking by verifying that each guarantor is an authentic, non-blacklisted family member or community member.

#### **d. Real-Time Litigant SMS Tracker**
- The detainee’s family receives automated SMS milestones:
  - `[Step 1] Bail Order Granted by Court`
  - `[Step 2] PKI Order Received by Jail Authority`
  - `[Step 3] Guarantor Verified`
  - `[Step 4] Detainee Released from Prison Gate`

---

### **3. Aligned Legal Framework**

1. **Constitution of Bangladesh (Articles 31, 32, and 35):** Guarantees right to life, personal liberty, and prompt and public trial without unlawful detention.
2. **Legal Aid Services Act 2000 (Section 7(1)(c)):** Mandates emergency legal aid representation for detainees unable to secure bail due to poverty.
3. **Legal Aid Policy 2014 (Paragraph 2(2)(dha)):** Prioritizes legal defense for detainees held in prison without trial.
4. **Code of Criminal Procedure (CrPC Sections 496, 497, 498):** Governs statutory grounds and procedure for bail granting.
5. **Information & Communication Technology (ICT) Act 2006:** Recognizes cryptographic electronic signatures and tamper-evident digital court orders.

---

### **4. Technology Stack**

- **Backend & Core Engine:** Node.js / Express or Python FastAPI with async task queues (Celery / BullMQ).
- **Cryptography & Signatures:** OpenSSL, Node-Forge (X.509 certificates, SHA-256 PKI digital signatures, QR payload hashing).
- **Database & Security:** PostgreSQL with Row-Level Security (RLS) and AES-256 column-level encryption for sensitive prisoner PII.
- **Identity & Biometrics:** NID Verification API integration mock + WebAuthn / Biometric scanner drivers.
- **Frontend Dashboard:** React + TailwindCSS dark judicial dashboard with real-time status tickers and live dispatch verification.

---

### **5. Hackathon Prototype & Demo Scope**

1. **Over-Detention Alert Simulation:** Upload mock prison register with 50 detainees; watchdog instantly flags 5 critical cases exceeding statutory limits.
2. **Judicial Bail Granting:** Judge clicks "Grant Bail with PKI Seal" — generates verifiable cryptographically signed PDF order.
3. **Instant Jail Verification:** Jail officer scans the QR code at the prison gate terminal; system cryptographically verifies the signature against the court's public key.
4. **Surety Verification:** Check guarantor NID and biometric match in under 5 seconds.
