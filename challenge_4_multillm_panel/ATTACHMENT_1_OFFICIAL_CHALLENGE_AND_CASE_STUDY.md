# ATTACHMENT 1: OFFICIAL CHALLENGE AND CASE STUDY
## Legal Tech Hackathon 2026 — Round 1 Submission

---

### 1. GENERAL COMPETITION GUIDELINES & CONTEXT

- **Organizer / Context**: Directorate of Bangladesh Legal Aid (DBLA) and the Accelerating Digital Legal Aid Services in Bangladesh (ADLASB) project.
- **Official Portal**: `legal-hackathon.tech/dashboard/submission/1`
- **Guiding Principle**: *"Please solve the issues in a way where AI may only provide relevant primary support, but human-centric intervention is required for final legal assistance and case-management decisions."*
- **Research & Reference Mandate**: Solutions must reference authentic sources including DBLA Official Website (`nlaso.gov.bd`), National Legal Aid Helpline 16699, Legal Aid Services Act 2000 (and 2026 amendments), and relevant Bangladesh statutes.

---

### 2. THE OFFICIAL CASE STUDY: MOYURI OF KALAI, JOYPURHAT

> **Verbatim Case Text from Official Submission Document**:
>
> Moyuri Akter (pseudo name) is twenty four years old. She lives in a tin roofed house in a village under Kalai upazila of Joypurhat, one of the eight districts where the Accelerating Digital Legal Aid Services in Bangladesh (ADLASB) project works. She was married at eighteen.
>
> For the last two years her husband, Sohel (pseudo name), has been beating her, usually at night after he gets back from the rice mill. Five months ago, he stopped giving her anything for food or for their four-year old daughter. Since April last year, he has been saying he will marry again unless her family arranges a motorcycle for him.
>
> There is one smartphone in that house and Sohel keeps it in his pocket. Moyuri has an old button phone that stays with her mother-in-law through the day. She is allowed to call her own mother on it, and the call list gets checked afterwards. She has never opened the internet. Her national ID card is locked in Sohel's almirah. She has not travelled anywhere alone.
>
> The District Legal Aid Office sits in the court complex in Joypurhat town, about thirty kilometres away, and going there would mean a full day, two bus fares and an explanation she cannot give at home. She can speak without being overheard for roughly twenty minutes on a Friday, while Sohel is at the mosque and her mother-in-law is resting.
>
> Her brother, Ripon (pseudo name), is thirty-two and has been blind since a fever in his childhood. He lives with their mother, collects the disability allowance from the union parishad, and knows the bazar road by counting his steps. Last month a van with a loudspeaker came through Kalai bazar announcing that legal aid from the government is free and that anyone can call 16699. Ripon memorised the number the way he memorises everything, by saying it out loud until it stayed. He has a smartphone that his nephew handed down. He can dial, take calls, and record a voice message if somebody opens the app for him first. He cannot read a form, a PDF, a captcha or an OTP. The screen reader on the phone speaks the English menus and goes quiet on most Bangla labels.
>
> Ripon wants to file the application on his sister's behalf. He knows Sohel's name, the village, the union, and a bit about when the abuse started. He does not know her NID number. So everything the legal aid system learns about Moyuri is going to arrive in her brother's voice. Everything it sends back has to reach her without reaching her husband. An SMS that lands on that button-phone at the wrong hour will be read by somebody else in the house.
>
> *(NB. The abovementioned case effectively forces participants to think beyond a standard digital application and consider safety, accessibility, data privacy, consent, proxy representation, incomplete information, and human oversight).*

---

### 3. CHALLENGE 4: EXACT PROBLEM STATEMENT & CONSTRAINTS

> **Official Problem Text**:
>
> **Challenge 4: Online Dispute Resolution (ODR) and Accountability**
>
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

### 4. KEY OPERATIONAL & FACTUAL CONSTRAINTS

1. **Geographic Dispersion**:
   - Sohel is in Gazipur (migrant industrial/mill worker, smartphone user, technology uncomfortable).
   - Moyuri is in Kalai, Joypurhat (~250+ km apart, remote rural location, severe network drops).
   - District Legal Aid Officer (DLAO) is at the Joypurhat District Court Complex (~30 km from Kalai).
2. **Connectivity & Communication Asymmetry**:
   - Moyuri: Button phone held by mother-in-law, outgoing call log checked, 20-minute safe speaking window on Friday midday, no internet access, low network reliability.
   - Sohel: Has smartphone, working long industrial shifts in Gazipur.
   - Ripon: Blind, voice-reliant, zero visual text/captcha/OTP capability.
3. **Substantive Dual Claims**:
   - Claim A: Maintenance for Moyuri and 4-year-old daughter (civil/family claim; legally compoundable through mediation).
   - Claim B: Dowry demand (motorcycle extortion backed by threats of second marriage and past battery; criminal offense under Dowry Prohibition Act 2018).
4. **Mandatory Stopping Condition Requirement**:
   - Must explicitly define when the system refuses online mediation.
   - Must specify the exact alternative judicial / administrative pathway triggered instead.
