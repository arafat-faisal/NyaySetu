# Tech Stack Comparison & Selection

This document outlines the comparative analysis of various technology stacks considered for building the NyaySetu platform, providing justifications for our final selections.

## 1. Backend Framework

### Candidates
- **Node.js (Express/NestJS):** High I/O performance, large ecosystem.
- **Python (FastAPI/Django):** Excellent for AI/ML integration, rapid development.
- **Java (Spring Boot):** Enterprise-grade, highly scalable, excellent integration with BPMN engines.

### Selection: **Java (Spring Boot) + Python (FastAPI) Microservices**
**Reasoning:** We selected a hybrid approach. Spring Boot will serve as the robust, transactional core ERP (Tier 3) due to its mature ecosystem and seamless integration with Flowable BPMN (which is Java-based). Python (FastAPI) will handle the AI Voicebot and ML inferences (OCR, Triage matching) where Python reigns supreme.

## 2. Database & Data Storage

### Candidates
- **MongoDB:** Flexible schema, fast JSON ingestion.
- **MySQL:** Standard relational database.
- **PostgreSQL (with PostGIS):** Advanced relational features, robust geospatial queries.

### Selection: **PostgreSQL + PostGIS**
**Reasoning:** Legal records require strict ACID compliance and relational integrity (e.g., linking a Case to a Beneficiary, a Panel Lawyer, and multiple Hearing Dates). PostGIS allows us to calculate proximity for Panel Lawyer assignments based on Upazila/District geometries. MongoDB was discarded because document stores lack the rigid schema enforcement required for statutory compliance.

## 3. Frontend & Mobile (Tier 2 & 3)

### Candidates
- **Flutter:** Single codebase for Web, iOS, Android.
- **React Native:** Good for mobile, less ideal for complex web dashboards.
- **Next.js / React (PWA):** Best web performance, highly accessible, supports offline PWA.

### Selection: **React (Progressive Web App)**
**Reasoning:** Given the constraints of rural areas, forcing users to download an app from the Play Store is a barrier. A sub-2MB React PWA can be accessed instantly via a browser link, cached for offline use, and updated seamlessly. Flutter was discarded due to larger bundle sizes on the web.

## 4. Telephony & Communications (Tier 1)

### Candidates
- **Twilio API:** Easy to use, SaaS, pay-per-minute.
- **Asterisk / FreeSWITCH:** Open-source, self-hosted PBX.

### Selection: **FreeSWITCH**
**Reasoning:** For a national 16430 helpline in Bangladesh, relying on a foreign SaaS provider (Twilio) presents data sovereignty issues and recurring high costs. FreeSWITCH allows the government to host the infrastructure locally and integrate directly with local telecom operators via SIP/SMPP at a fraction of the operational cost.
