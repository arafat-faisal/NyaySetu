# Architecture Decision Records (ADR): NyaySetu

## ADR 1: Telephony Infrastructure for 16430
- **Context:** Bangladesh's legal aid helpline (16430) requires an IVR, USSD capabilities, and dialect-specific speech-to-text.
- **Decision:** We will use **Asterisk / FreeSWITCH** for the PBX core.
- **Rationale:** These are robust open-source telephony engines capable of handling concurrent VoIP/SIP sessions, easily scriptable via Python/AGI for custom AI voicebot integration.

## ADR 2: Primary Database Selection
- **Context:** The system needs to store case data, geographical location of incidents, and handle complex relational structures representing the 2000 Act and 2014 Policy.
- **Decision:** We will use **PostgreSQL with PostGIS**.
- **Rationale:** PostgreSQL provides excellent relational integrity (ACID compliance) required for legal records. PostGIS allows us to perform geospatial queries (e.g., matching a victim in a specific Upazila to the nearest panel lawyer based on distance).

## ADR 3: Event-Driven Architecture (JCO Bus)
- **Context:** Tiers 0, 1, 2, and 3 need to share state seamlessly without tight coupling.
- **Decision:** Implement a **Justice Case Object (JCO)** pattern transmitted via **NATS** or **RabbitMQ**.
- **Rationale:** An immutable event-driven architecture ensures that a case filed via USSD immediately syncs with the District Legal Aid Office ERP, preventing data silos.

## ADR 4: Workflow Engine for Statutory Forms
- **Context:** The manual generation of Registers 01-09 and LA Forms 20-25 needs automation based on state changes.
- **Decision:** Use **Flowable BPMN**.
- **Rationale:** Flowable is an open-source, Java-based Business Process Model and Notation engine that excels at representing human-in-the-loop statutory workflows and complex rule evaluations.
