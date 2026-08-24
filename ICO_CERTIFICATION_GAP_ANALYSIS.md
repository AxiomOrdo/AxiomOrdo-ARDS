# ARDS Framework Shell Reuse Review — UK GDPR Scheme Option

**Review date:** 25 August 2026
**Review basis:** desk review of the ARDS repository plus the ICO’s current certification-scheme guidance, updated by the ICO on 13 February 2026.
**Purpose:** assess how much of ARDS can be reused as a framework for a future UK GDPR certification scheme.
**Status:** planning review, not legal advice and not an indication of ICO or UKAS approval.

## Executive answer

**ARDS does not need to become a GDPR programme.** It was designed as an open regulatory-data and technical-conformance framework. The useful question is whether its shell can host a separate UK GDPR scheme without starting again.

The answer is:

> **Yes, ARDS is a credible shell for a GDPR-specific profile, but it is not a lift-and-shift. The structural, documentation, provenance, versioning, registry and test-harness ideas are reusable. The UK GDPR substance, Target of Evaluation, legal crosswalk, assessment methodology, scheme manual, impartial delivery and accreditation evidence must be added as a distinct module.**

### Reuse assessment

These are directional planning estimates based on the public repository, not an engineering estimate:

| Layer | Reusability | What that means |
|---|---:|---|
| Document structure, terminology, normative language, versioning and RFC shell | **High — 70–90%** | Reuse the controlled-document pattern, clause numbering, change control and open consultation model. |
| Artefact/provenance model and audit-package concepts | **Medium-high — 60–80%** | Reuse ARDS as a machine-readable evidence and traceability layer, while adding privacy-specific fields and restrictions. |
| Validator, schemas, test fixtures, signed tokens and registry | **Medium — 40–60%** | Reuse the intended architecture and interfaces, but the actual implementation and privacy-safe operation still need to be built and tested. |
| Governance and technical certification programme | **Medium — 40–60%** | Reuse the Board, TAG, working-group and RFC skeleton; add legal competence, impartiality, independent decision-making and CB separation. |
| UK GDPR certification criteria and processing assessment | **Low — 10–25%** | ARDS currently contains technical interoperability requirements, not the required UK GDPR principles, rights, lawful-basis, DPIA, transfer and accountability outcomes. |
| UKAS/ISO 17065 delivery capability | **Very low — 0–20%** | This is a new capability or an external-CB partnership. The current AxiomOrdo technical certification flow cannot simply be relabelled. |

**Overall conclusion:** high reuse of the *framework shell*; medium reuse of the *technical assurance layer*; low reuse of the *GDPR regulatory content and accredited certification operation*. This is materially better than starting with a blank page, but the final scheme still needs substantial new privacy and conformity-assessment work.

### Recommended architecture

Keep the existing ARDS core neutral and create a separate profile or module, for example:

```text
ARDS Core
├── ARDS technical conformance (L1–L6)
├── FuelEU / CBAM / other regulatory domain packs
└── ARDS-UKGDPR profile or scheme module
    ├── UK GDPR certification criteria
    ├── Processing activity / ToE model
    ├── Privacy evidence and risk model
    ├── UK GDPR evaluation methodology
    ├── UK GDPR scheme manual
    └── Independent UKAS-accredited CB delivery
```

The ARDS core should not be rewritten as if it had always been GDPR-specific. A future UK GDPR profile should state exactly which ARDS artefacts, technical controls and evidence mechanisms it uses, and which requirements are new.

---

## 1. What this review is—and is not

### This review does

- assess ARDS against the reusable architecture implied by the ICO framework;
- identify the parts of the current ARDS shell that can be carried into a GDPR module;
- distinguish existing assets, adaptations and genuinely new work;
- explain the route from a technical standard to an ICO-approvable scheme;
- identify the first qualifying Target of Evaluation (ToE) that would be needed; and
- compare the reward and risk of building the module, partnering with a CB or pursuing accreditation directly.

### This review does not

- say that ARDS itself is a GDPR scheme;
- assume that ARDS or its customers process personal data;
- claim that any ARDS token, mark or level is ICO-approved or UK GDPR certification;
- replace a UK privacy lawyer, DPO, UKAS or ICO discussion; or
- assume that a technical schema can certify an entire organisation.

### The first DPO question

Before building a GDPR profile, establish whether the proposed ARDS implementation or service actually processes **personal data**. Some regulatory records may describe ships, installations, goods, emissions or legal entities without being personal data. Other records may include crew, employees, sole traders, named contacts, identifiers, account data or behavioural information.

If no qualifying personal-data processing exists, an ICO UK GDPR scheme may not be the right destination. ARDS can still pursue technical, sectoral, information-security or other assurance routes. If personal data is present, document the exact processing and the controller/processor roles before choosing the scheme scope.

---

## 2. The ICO model in one page

The ICO framework has three connected scheme elements:

| ICO element | Reusable ARDS shell | New work required |
|---|---|---|
| **Specific certification criteria** | ARDS already has a normative-specification pattern, clause numbering, schemas and conformance vocabulary. | Draft UK GDPR criteria that assess actual processing outcomes, not only artefact validity. |
| **Audit and testing methods** | ARDS has a proposed CLI, error-code model, provenance model and certification test-suite concept. | Build the executable tools and a processing-focused audit method covering legal, organisational and technical evidence. |
| **Scheme manual** | ARDS has an application journey, governance page, mark policy, directory concept, revocation and appeals concepts. | Turn these into controlled, ISO/IEC 17065-compatible operating rules with an independent CB, surveillance, complaints, appeals, ICO communication and continuity. |

For UK GDPR certification, the certification is of a **specific product, process or service’s personal-data processing operations** of a controller or processor. The object must be defined as a ToE. The certification is issued against ICO-approved criteria by a UKAS-accredited CB; it is not created merely by publishing a standard or issuing an AxiomOrdo token.

### Three claims to keep separate

- **ARDS-conformant:** technical interoperability or artefact claim.
- **AxiomOrdo-assessed:** private technical assurance claim under the current ARDS programme.
- **UK GDPR certified:** a defined controller/processor processing activity certified by a UKAS-accredited CB against ICO-approved criteria.

The future module can use the first two as inputs or evidence, but must not imply the third until the ICO/UKAS route is complete.

---

## 3. What ARDS already gives the GDPR build

This is an asset inventory rather than a list of failures.

| Existing ARDS asset | Evidence in repository | Reuse value for a GDPR profile | Adaptation needed |
|---|---|---|---|
| Normative-document shell | `specification.html` defines scope, normative language, references, terms, artefact model, versioning and annexes. | Strong base for a criteria document and controlled technical profile. | Add UK GDPR/DPA 2018/ICO references, applicability decisions, legal review and measurable privacy outcomes. |
| Common metadata envelope | `ards:meta` carries version, schema, type, ID, producer, context and lineage concepts. | Useful for evidence identity, version, source, processing context and integrity. | Add data classification, lawful basis/processing purpose references, privacy status, retention/access restrictions and minimisation rules where appropriate. |
| Six artefact lifecycle | ROR, EA, CV, TB, UCA and AP represent obligation, evidence, verdict, trace, composite and audit package. | Strong fit for linking a privacy requirement, evidence, assessment conclusion and audit record. | Add privacy-specific artefacts or profiles for ToE, processing activity, DPIA, rights request, breach, transfer and corrective action. |
| Provenance and traceability | Trace Bundle and Audit Package are explicitly designed for linked evidence and sealed archives. | Directly useful for accountability, evidence lineage, assessor workpapers and executive-summary generation. | Apply data minimisation, pseudonymisation, access controls, retention and secure deletion; do not place unnecessary personal data in public packages. |
| Normative language | `SHALL`, `SHOULD`, `MAY` language is documented using RFC 2119. | Reusable for objective certification criteria and test rules. | Define each privacy criterion as an observable outcome with evidence, sampling and decision rules. |
| SemVer and RFC process | `specification.html` and `governance.html` describe patch/minor/major releases and RFC stages. | Reusable for criteria versioning, consultation, change history and transition management. | Add legal-watch triggers, ICO/UKAS impact review, certificate transition, reassessment and withdrawal rules. |
| Governance bodies | Standards Board, TAG, domain working groups, Certification Committee and User Council are described. | Gives a starting stakeholder and change-governance map. | Separate standard-setting from certification decisions; add privacy-law expertise, conflict declarations, data-subject voice and independent appeals. |
| Technical conformance ladder | L1–L6 distinguish schema-valid, core, extended, generator, consumer and platform behaviour. | Could remain the technical prerequisite or evidence maturity layer. | Do not present L1–L6 as UK GDPR assurance levels. Define a separate GDPR scheme scope/decision and show how ARDS level contributes. |
| Certification journey | `certification.html` shows pre-application, application, scoping, assessment, remediation, decision, token and directory stages. | Reusable customer journey and evidence-collection sequence. | Replace AxiomOrdo-only assessment/decision with the independent-CB process and add ToE, legal review, complaints, appeals, surveillance and ICO notifications. |
| Mark and registry concepts | `brand.html` and `certified.html` describe marks, validity, revocation, directory and API verification. | Good public-transparency and machine-verification foundation. | Separate ARDS technical marks from any future GDPR mark; publish scope, criteria, CB, validity, limitations and executive summary. |
| Developer documentation | `developer.html` provides CLI examples, JSON output, error codes and integration patterns. | Reusable onboarding and test-report format. | Implement the described tools and add privacy-safe fixtures and assessor workpapers. |
| Open governance/licensing | AOSL-1.0 and public RFC concepts support broad implementation. | Helps build adoption and stakeholder review. | Legal review must distinguish open technical implementation rights from controlled certification marks and scheme-owner obligations. |

### What is already a good fit

The best reuse candidates are:

1. **traceable machine-readable evidence**;
2. **versioned normative requirements**;
3. **testable artefact and API outputs**;
4. **audit-package and provenance concepts**;
5. **open consultation and change control**; and
6. **a public verification/status layer**.

These are exactly the areas where a GDPR scheme can be more useful than a static checklist—provided the underlying criteria assess real processing and the CB remains independent.

---

## 4. What must be new for a UK GDPR module

### New substantive layer

ARDS currently models regulatory compliance evidence. A GDPR profile must model and assess:

- why personal data is processed and under which lawful basis;
- what data subjects experience and what rights routes exist;
- controller, processor, joint-controller, representative and sub-processor roles;
- data minimisation, accuracy, storage limitation and purpose limitation;
- privacy by design and default;
- technical and organisational security measures;
- breach detection, escalation and notification;
- DPIA and risk-to-people analysis;
- special-category and criminal-offence data where applicable;
- international transfers and onward transfers;
- information governance, training, accountability and internal audit; and
- how these outcomes are maintained when the service, law, guidance or risk changes.

### New conformity-assessment layer

The current ARDS programme is an AxiomOrdo technical certification concept. A UK GDPR module additionally needs:

- a defined ToE for each applicant;
- independent technical and legal assessment;
- standardised evaluation methods and justified deviations;
- a certification decision independent from the assessment;
- risk-based surveillance no more than 12 months apart;
- total certificate validity no longer than three years;
- public executive summaries;
- ICO notification and investigation procedures;
- public complaints and appeals accessible to data subjects; and
- a UKAS-accredited CB or a separately established UKAS accreditation route.

### New operational/privacy layer

The scheme itself may process sensitive applicant evidence. Build a DPO-led control set for:

- role and lawful-basis analysis for scheme operations;
- privacy notice and transparent applicant communications;
- ROPA and data inventory;
- DPIA where the scheme or registry creates a high risk;
- controller/processor agreements and sub-processor controls;
- access control, least privilege and assessor confidentiality;
- encryption, pseudonymisation, redaction and key management;
- retention, archive and secure deletion;
- data-subject rights and complaint handling;
- personal-data breach response and notification;
- international transfer controls; and
- evidence access for the CB, ICO and UKAS without uncontrolled publication.

---

## 5. ICO proposal-stage gap analysis, viewed as reuse work

The ICO’s proposal assessment has twelve requirements. ARDS supplies pieces of the presentation and technical shell, but not the GDPR-specific proof.

| ID | ICO proposal requirement | ARDS shell contribution | New GDPR module work | Reuse rating |
|---|---|---|---|---:|
| P-01 | Scheme owner(s), partnerships, legal status and CB accreditation status | AxiomOrdo ownership and governance are named on the site. | Legal-entity pack, ownership, delivery partners, proposed CB and written roles/accreditation status. | Medium |
| P-02 | Scheme-owner eligibility | Standards Board, working groups and design-partner concepts exist. | Eligibility, legal responsibility, resources, senior accountable owner and access to UK privacy/accreditation expertise. | Medium |
| P-03 | No relevant ICO investigation/regulatory action affecting parties | No relevant process is described. | Declarations by scheme owner, partners and CB; disclosure/update procedure. | Low |
| P-04 | Clear operating model aligned with UKAS and conformity standards | Application flow, Certification Committee and directory are described. | Decide scheme owner versus CB; independent assessment/decision/appeals; ISO/IEC 17065 and UK additional-requirements crosswalk. | Medium-low |
| P-05 | Clear subject matter and target market | ARDS has identifiable regulatory-data and compliance-software audiences. | Select one privacy problem, sector, product/service and buyer/data-subject benefit. Do not use “all regulatory software” as the first scheme. | Medium |
| P-06 | Clear scope, inclusions/exclusions and territorial scope | ARDS has domain-pack and version concepts. | Define personal-data processing boundary, UK territorial scope, roles, deployment models, interfaces, transfers, data categories and exclusions. | Medium-low |
| P-07 | Consideration of how information is used | ARDS has evidence/context/provenance concepts. | Data-flow, purpose, lawful basis, recipient, retention, rights, automated-decision and sharing analysis. | Medium |
| P-08 | Special-category/criminal-offence/high-risk processing | No personal-data risk classification. | Explicit in/out decision, Art 9/10 controls, DPIA triggers, safeguards and specialist competence. | Low |
| P-09 | Correct UK GDPR areas applied/disapplied | No UK GDPR legal crosswalk. | UK GDPR/DPA 2018/ICO guidance/code applicability matrix with rationale for every exclusion and a legal change log. | Low |
| P-10 | Benefit to target market and individuals | ARDS articulates interoperability and auditability value. | Evidence improved privacy outcomes, transparency, rights handling, reduced harm and procurement value. | Medium |
| P-11 | Documented research/consultation | User Council, working groups and design partners are a useful channel. | Structured market, consumer/data-subject, controller, processor, industry, auditor and CB research; record dissent and resulting changes. | Medium-high |
| P-12 | Relevant subject, UK data-protection and accredited-framework knowledge | Technical and domain expertise is the strongest existing story. | Add qualified UK privacy/legal, audit, conformity-assessment and decision competence with CPD and independence records. | Medium-low |

### Proposal-stage output

Create `ARDS-UKGDPR-SCHEME-PROPOSAL-001` as a separate controlled document. It should say that ARDS is the technical shell and identify the new GDPR module. Include:

- the qualifying personal-data processing use case;
- target market and data-subject benefit;
- scheme owner and proposed CB roles;
- scope, territorial application and exclusions;
- ToE definition and completed examples;
- data categories, role allocation and high-risk assessment;
- demand, benchmarking and added-value evidence;
- competence and resource plan;
- business/delivery model; and
- the precise relationship between ARDS technical conformance and the proposed GDPR certification decision.

---

## 6. ICO criteria-stage gap analysis, viewed as reuse work

The ICO’s criteria assessment has thirteen requirements. The ARDS specification is reusable as a document container, but its current content cannot be treated as the criteria set.

| ID | ICO criteria requirement | Reusable ARDS material | New module required | Reuse rating |
|---|---|---|---|---:|
| C-01 | Clear, numbered, well-structured documents | Specification sections, annexes and RFC template. | Separate numbered criteria, evaluation-method and scheme-manual documents with controlled approval. | High |
| C-02 | Terms and normative references | ARDS definitions and RFC 2119 use. | Controller/processor/ToE/processing/personal-data/privacy terms; UK GDPR, DPA 2018, ICO guidance and codes. | High-medium |
| C-03 | Accurate scope | Domain-pack/version and artefact scope pattern. | Personal-data-processing scope, territorial limits, product/service versions and exclusions. | Medium |
| C-04 | Defined ToE and justified exclusions | Regulatory context, producer/consumer and artefact identity concepts. | Applicant-specific processing map including systems, interfaces, transfers, roles, protocols, processors, data categories and boundaries. | Medium-low |
| C-05 | Applicable UK GDPR aspects as measurable criteria | Normative language, schemas and validation ideas. | Criteria for Arts 5–49 as applicable, outcome/evidence/test/decision rules and risk-proportionate assessment. | Low |
| C-06 | Accurate law, guidance and statutory-code reflection | RFC/reference/version pattern. | Legal crosswalk, counsel review, ICO guidance/code register, DUAA/UK change watch and update procedure. | Low |
| C-07 | Data-protection governance and accountability | ARDS governance bodies and audit package. | Leadership, policies, training, risk/ROPA/DPIA, complaints, internal audit, corrective action and continual improvement. | Medium-low |
| C-08 | Complete processing lifecycle | ARDS’s obligation-to-audit lifecycle. | Collection, use, enrichment, storage, access, disclosure, transfer, retention, correction, restriction, erasure, backup, disposal and incidents. | Medium |
| C-09 | Guidance notes and examples | Developer guide and worked artefacts. | Privacy implementation guidance, SME paths, evidence examples, anti-patterns and worked ToEs. | Medium-high |
| C-10 | Scale and risk | Six technical levels and domain packs. | Separate privacy-risk classification based on sensitivity, volume, vulnerability, decisions, transfers and potential harm. | Medium-low |
| C-11 | Flexible for different organisations, including SMEs | Self-declared L1–L2 and design-partner model. | Proportionate evidence without weakening outcomes; reusable templates and clear limitations. | Medium |
| C-12 | ISO/IEC 17065 and UK additional-requirements compatibility | Existing governance/process narrative. | CB-facing compatibility matrix, binding evaluation rules, impartiality, public information and management-system controls. | Low-medium |
| C-13 | Likely to improve compliance and benefit people | ARDS claims auditability/interoperability. | Pilot measures for rights traceability, minimisation, retention, access control, transparency, security and harm reduction. | Medium-low |

### UK GDPR content that cannot be inherited from ARDS

The future criteria need a legal applicability matrix rather than a generic “GDPR section”. At minimum, assess the following where relevant to the ToE:

| UK GDPR area | New question for the profile |
|---|---|
| **Art 5 principles** | Can the service demonstrate lawful/fair/transparent processing, purpose limitation, minimisation, accuracy, storage limitation, integrity/confidentiality and accountability? |
| **Arts 6–11** | Is there a lawful basis, and are special-category/criminal-offence conditions handled where applicable? |
| **Arts 12–23** | Can data subjects understand and exercise rights, with traceable, timely and accurate responses? |
| **Arts 25 and 32** | Are privacy by design/default and security controls built into the service, not just described in policy? |
| **Arts 26–29 and 31** | Are controller, processor, joint-controller, representative and sub-processor responsibilities evidenced? |
| **Art 30** | Are records of processing accurate and linked to the ToE? |
| **Arts 33–34** | Are personal-data breaches detected, escalated, assessed and notified appropriately? |
| **Arts 35–36** | Is risk to people assessed and is a DPIA completed/updated where required? |
| **Arts 37–39** | Is the DPO requirement addressed where applicable, including independence and resources? |
| **Arts 44–49** | Are transfers, onward transfers, safeguards, transfer-risk assessments and supplementary measures controlled? |
| **Accountability** | Are leadership, training, policies, risk management, complaints, audit and continual improvement demonstrable? |
| **UK developments** | Is there a legal watch for the Data (Use and Access) Act, DPA 2018 changes, ICO guidance, codes and relevant decisions? |

---

## 7. DPO review: how ARDS should host privacy without becoming privacy by assertion

### DPO finding 1 — keep ARDS neutral

Do not add generic “GDPR compliant” fields to every ARDS artefact. That would create a weak claim and may force irrelevant obligations onto environmental or regulatory records that contain no personal data.

Instead, define an optional, versioned privacy profile with:

- a personal-data indicator and data classification;
- purpose and lawful-basis references where appropriate;
- controller/processor role references;
- minimisation and retention metadata;
- rights/breach/DPIA/transfer evidence references; and
- rules preventing sensitive evidence from being published in a public Audit Package.

### DPO finding 2 — the ToE is the privacy anchor

A GDPR certificate should identify the processing activity, not just “ARDS v1.0” or “Product X”. A good ToE could describe:

> The collection, creation, storage, linkage, access, sharing and export of personal data performed by a named ARDS-enabled compliance service, for a named customer workflow, deployment model, product version, processing role and jurisdiction, including named interfaces and processors, and excluding unrelated customer operations.

This is an example shape only. The actual ToE must follow the processing facts and legal advice.

### DPO finding 3 — evidence must be privacy-safe

The ARDS provenance model is valuable, but evidence can itself contain personal data. The GDPR profile should use a hierarchy:

1. metadata and hashes where full content is unnecessary;
2. pseudonymised or synthetic fixtures for technical tests;
3. redacted extracts for public executive summaries;
4. restricted evidence for the assessor/CB; and
5. full access only where necessary, justified, logged and retained for a defined period.

### DPO finding 4 — technical conformance is evidence, not the legal conclusion

An ARDS L4 Generator could prove that a tool produces valid artefacts. It does not by itself prove lawful processing, rights compliance, correct retention, a valid DPIA or appropriate international transfers. The future scheme should make this relationship explicit in its decision logic.

### DPO minimum control pack for the future scheme

- [ ] Processing inventory and ROPA for scheme/registry operations.
- [ ] Role map: scheme owner, CB, registry operator, applicants, assessors and processors.
- [ ] Privacy notice and applicant information pack.
- [ ] DPIA and risk assessment where required.
- [ ] Evidence classification, redaction and retention schedule.
- [ ] Secure assessor portal or controlled evidence exchange.
- [ ] Access, audit-log, encryption and key-management controls.
- [ ] Rights, complaints and data-subject contact route.
- [ ] Breach response and ICO/CB notification procedure.
- [ ] International-transfer and sub-processor controls.
- [ ] Annual legal/guidance review and change log.

---

## 8. Technical build delta

The repository contains a static website and documentation. It does not contain the implementation of the tools the pages describe. That is not a criticism of ARDS’s design intent; it is a boundary on what can be claimed as already reusable.

| Build item | Reuse from ARDS | New work for GDPR profile |
|---|---|---|
| JSON schema package | URI pattern, metadata envelope and artefact taxonomy. | Implement schemas, privacy-profile schemas, data-classification rules and versioned releases. |
| Validator | Documented command shape, exit codes and error-code convention. | Implement validator, privacy-safe fixtures, legal/control checks and reproducible reports. |
| Evidence graph | Trace Bundle and Audit Package concept. | ToE/processing/DPIA/rights/breach/transfer links, redaction and access controls. |
| Test suite | Proposed conformance-level and negative-test model. | Technical, legal and organisational test cases; assessor workpapers; sampling and consistency tests. |
| Certification token | Token fields, directory and verification concept. | Decide separate token namespaces; real signatures, key discovery, rotation, revocation, CB issuer, ToE, criteria version and validity. |
| Registry | Static directory/API shape and status vocabulary. | Live registry, availability, audit log, public executive summaries, privacy controls and business continuity. |
| Marks | Existing mark-use policy and expiry/revocation concepts. | Separate private ARDS marks from any future GDPR mark; accurate scope and CB attribution; legal protection. |
| CI/CD | Developer guide’s CI example. | Build and secure pipeline; signed releases; provenance/SBOM; independent test review. |
| Change intelligence | ARDS SemVer and RFC process. | Legal/guidance triggers, certificate transitions, reassessment and withdrawal rules. |

### Existing documentation inconsistencies to resolve before reuse

- The example certification token uses `certificateId`, while ARDS metadata examples use `certificationId`.
- The website describes an “independent” programme, but the described technical assessment and decision are AxiomOrdo functions.
- The pages promise a live registry and real-time verification, while the repository contains an illustrative empty-state page and response example.
- Annual renewal is advertised; a future UK GDPR scheme must also document risk-based surveillance and keep total certification validity within the ICO/UK additional-requirements limits.
- The current L1–L6 marks include self-declared levels. They must not be confused with a UK GDPR certification mark.

---

## 9. Operating model options and risk–reward

### Option 1 — ARDS remains technical; GDPR profile is research/pilot only

**Reward:** fast adoption, no regulatory overclaim, builds real artefacts and demand evidence.
**Risk:** no UK GDPR certificate; buyers seeking accredited certification may wait.
**Best use:** immediate next step while scope and CB demand are validated.

### Option 2 — ARDS scheme owner + independent UKAS-accredited CB **(recommended)**

AxiomOrdo owns the criteria, technical shell and brand. An independent CB performs evaluations and makes certification decisions.

**Reward:** high credibility; preserves ARDS’s standards role; avoids rebuilding an accredited CB; supports multiple CBs later.
**Risk:** medium/high coordination risk; less control of audit revenue/customer process; CB must accept the scope and methods.
**Best use:** first production route if a qualifying personal-data use case and market demand are proven.

### Option 3 — AxiomOrdo also becomes the UKAS CB

Requires a separate or appropriately structured UK legal entity, UK location, ISO/IEC 17065, UK additional requirements, impartial personnel, independent decisions, liability cover, management system and UKAS accreditation. The ICO says accreditation can take 6–18 months depending on complexity; UKAS costs must be confirmed directly.

**Reward:** maximum delivery control and potential recurring assurance revenue.
**Risk:** highest cost, longest path and most severe conflict risk; the existing scheme-owner/Certification Committee structure is not enough.
**Best use:** only after the scheme has demand, pilots, funding and clear information barriers.

### Option 4 — ARDS product applies as controller/processor

If AxiomOrdo operates a real ARDS service that processes personal data, it could later apply to an approved scheme for that specific service.

**Reward:** first-party proof point and a realistic pilot object.
**Risk:** does not certify the ARDS standard or solve the scheme-owner/CB question.
**Best use:** later, once an appropriate approved scheme and CB exist.

### Strategic scorecard

Scores are directional: **1 = low, 5 = high**.

| Option | Reuses ARDS shell | Market reward | Effort/cost | Regulatory risk if misstated | Decision |
|---|---:|---:|---:|---:|---|
| Apply using current ARDS package | 5 | 1 | 2 | **5** | **No-go**; it is not a GDPR criteria/scheme pack. |
| Build a GDPR profile and pilot privately | **5** | 3 | 3 | 2 | **Do now**; creates evidence without approval claims. |
| Submit narrow scheme through independent CB | 4 | **5** | 4 | 3 | **Recommended after gates**. |
| Submit broad all-domain GDPR scheme | 3 | 5 theoretical | **5** | **5** | Defer; too much scope and legal variability. |
| Become the CB as well | 2 | 5 | **5** | **5** | Only after separate accreditation investment decision. |
| Map ARDS to existing ISO/security assurance | 4 | 3–4 | 3 | 2 | Parallel option; not an ICO substitute. |

### Principal risks and controls

| Risk | Inherent likelihood / impact | Control |
|---|---|---|
| ARDS technical mark is mistaken for UK GDPR certification | High / very high | Separate namespaces, claims register, website notice and mark rules. |
| No qualifying personal-data processing in the intended scope | Medium / very high | Personal-data inventory and ToE decision gate before criteria build. |
| Scope is too broad to assess consistently | High / high | Start with one sector/use case and explicit exclusions. |
| Existing AxiomOrdo certification is not impartial enough for UK GDPR | High / very high | Independent CB and separation of standard-setting, assessment, decision and appeals. |
| GDPR criteria become a restatement of legislation | High / high | Outcome/evidence/test rules, best-practice controls, pilot and legal review. |
| Scheme evidence creates a personal-data breach | Medium / very high | DPO control pack, synthetic data, redaction, access logging and retention. |
| Criteria become outdated after law/guidance changes | High / high | Legal watch, versioning, transition and reassessment rules. |
| Market does not value the proposed scheme | Medium / high | Interviews, benchmark existing schemes, pilot and willingness-to-adopt evidence. |
| Registry/token cannot prove status | Medium / high | Real signed status, key management, revocation and continuity testing. |
| Pilot results vary by assessor or organisation size | Medium / high | Standard workpapers, calibration, risk-based sampling and independent review. |
| Technical conformance is over-sold as privacy compliance | Medium / high | Criteria explicitly distinguish evidence from certification conclusion. |
| Investment is made before a CB or ICO path is viable | Medium / high | Fund in stages; use G0–G6 stop/go gates. |

---

## 10. Recommended roadmap: build the GDPR module from the ARDS shell

Times are planning ranges, not ICO or UKAS commitments.

| Phase | Window | Reuse focus | New output | Gate |
|---|---:|---|---|---|
| **G0 — Confirm need** | Weeks 0–2 | ARDS domain/use-case inventory. | Personal-data inventory, roles, preliminary ToE and route decision. | Is there a qualifying processing activity? |
| **G1 — Freeze the boundary** | Weeks 2–4 | ARDS terminology and site structure. | Claims register; technical/GDPR mark separation; initial legal scope. | No unsupported GDPR/ICO claims remain. |
| **G2 — Test demand** | Weeks 3–8 | User Council, domain groups and design partners. | Market research, data-subject benefit case, existing-scheme benchmark and CB conversations. | Narrow scope has evidence of demand and added value. |
| **G3 — Design the profile** | Weeks 6–12 | Normative language, schemas, provenance and RFC shell. | `ARDS-UKGDPR` profile, ToE template, article applicability matrix, privacy artefact model. | Every proposed requirement has a legal rationale. |
| **G4 — Design assessment** | Weeks 9–16 | Certification journey, error reports, test-suite concept and directory. | Criteria, evaluation methodology, workpapers, sampling, findings, decision rules, scheme manual and executive-summary template. | Independent CB can understand and challenge the method. |
| **G5 — Build/prove tools** | Parallel, Weeks 4–18 | ARDS URI, validator, token, registry and Audit Package ideas. | Actual schemas, validator, privacy-safe fixtures, signed status, registry, access/audit logs and release controls. | Repeatable technical evidence with no critical privacy flaw. |
| **G6 — Pilot** | Weeks 16–26 | Design partners and domain working groups. | Several volunteer ToEs across size/risk profiles; pilot report; consistency results; revised criteria. | Scheme is fit for purpose and proportionate. |
| **G7 — ICO proposal discussion** | After G6 | Existing governance and controlled docs. | Scheme Proposal; informal ICO discussion; responses and revisions. | ICO accepts progression to scheme development. |
| **G8 — Criteria/UKAS route** | Months 7 onward | ARDS change/registry/document control. | Final criteria and scheme documents; CB/UKAS assessment and remediation. | Criteria approved and accredited delivery path operational. |
| **G9 — Launch and maintain** | After approval/accreditation | Registry, token, evidence graph and change intelligence. | CB-issued certificates, public executive summaries, surveillance, complaints, appeals, legal watch and annual review. | First certificates withstand internal and external review. |

### First 90 days in practical terms

**Days 0–15**

- appoint the DPO/privacy lead, technical lead and accountable programme sponsor;
- inventory personal data in the ARDS service, examples, registry and proposed customer workflows;
- decide whether ARDS is scheme owner, technical-provider, applicant or only a private standard;
- separate technical and future GDPR language on public pages; and
- ask ICO and UKAS for informal scope/accreditation guidance, without presenting the current programme as an application-ready scheme.

**Days 16–45**

- select one candidate processing activity and complete a first ToE;
- interview controllers, processors, buyers, auditors, data-subject/consumer representatives and prospective CBs;
- benchmark existing ICO criteria and non-ICO assurance schemes;
- write the ARDS-to-GDPR architecture and article applicability matrix; and
- resolve token, mark, registry and evidence terminology.

**Days 46–90**

- draft the criteria, evaluation method and scheme-manual outlines;
- build one end-to-end privacy-safe artefact/test slice;
- agree pilot organisations and an independent CB reviewer;
- complete a DPO review of scheme/registry processing; and
- hold a board gate: continue to pilot, narrow the scope, pursue another assurance route or stop the ICO track.

---

## 11. Application evidence pack for the derived scheme

The pack should clearly label what is inherited from ARDS and what is new.

- [ ] `01-scheme-proposal.md/pdf` — purpose, demand, benefit, owner, partners and proposed CB.
- [ ] `02-ards-reuse-architecture.md` — shell components, new GDPR profile, interfaces and non-inherited requirements.
- [ ] `03-scope-and-toe.md` — processing boundaries, roles, systems, interfaces, transfers, versions, data categories and exclusions.
- [ ] `04-ukgdpr-criteria.md` — numbered, measurable, risk-scaled criteria and guidance.
- [ ] `05-legal-crosswalk.md` — UK GDPR/DPA 2018/ICO guidance/code applicability and rationale.
- [ ] `06-evaluation-methodology.md` — technical, legal and organisational assessment, sampling and findings.
- [ ] `07-scheme-manual.md` — operation, CB responsibilities, certification decision, surveillance, changes, complaints, appeals, withdrawal and public information.
- [ ] `08-market-demand.md` — consultation, data-subject benefit, existing-scheme comparison and added value.
- [ ] `09-pilot-report.md` — volunteer ToEs, assessor calibration, limitations and revisions.
- [ ] `10-competence-and-resources.md` — privacy/legal, technical, audit and decision competence/CPD.
- [ ] `11-cb-route.md` — independent-CB agreement or separate UKAS accreditation plan.
- [ ] `12-impartiality.md` — conflicts, information barriers, independence and appeal separation.
- [ ] `13-dpo-privacy-security-pack.md` — ROPA, DPIA, privacy notice, evidence controls, breach, rights, retention and transfers.
- [ ] `14-technical-release-pack.md` — schemas, validator, fixtures, signatures, keys, registry and audit logs.
- [ ] `15-public-transparency-pack.md` — criteria versions, certificate data, executive summaries, mark/token rules and complaints route.
- [ ] `16-claims-register.md` — every public/sales/API claim mapped to evidence and approval status.

---

## 12. Hidden opportunities created by reusing ARDS

### 12.1 A privacy evidence interchange, not a generic GDPR badge

ARDS can make privacy assurance portable by linking processing requirements, evidence, findings, remediation and certificate status in machine-readable form. This is more distinctive than another PDF checklist.

### 12.2 Continuous evidence between CB reviews

A certified service could emit controlled change, processor, breach, rights, retention, key-rotation and criteria-version events. The CB remains the decision-maker, while ARDS makes material changes visible and reviewable.

### 12.3 Data-subject transparency layer

Use the public registry to explain, in plain language, the certified processing, data categories, purposes, rights contact, retention, recipients, limits and expiry—not only the product name and level.

### 12.4 SME-friendly assessment

Reuse L1–L2’s low-friction technical onboarding as preparation, then provide proportionate GDPR evidence paths for smaller processors. Keep the final privacy outcomes constant; reduce unnecessary formality, not assurance.

### 12.5 CB-neutral infrastructure

Make validators, fixtures, evidence schemas, executive-summary generation and status verification usable by multiple CBs. This expands ARDS reach without requiring AxiomOrdo to make every certification decision.

### 12.6 Processor procurement and annual due diligence

A machine-readable ToE, certificate status, criteria version and executive summary could become useful in controller-to-processor selection, renewal and audit workflows.

### 12.7 Privacy-risk extensions for existing domain packs

FuelEU, CBAM, PFAS and ETS packs can add privacy-risk notes only where their real data flows involve people, identifiers, employees, crews, sole traders or contacts. This keeps the domain packs useful without claiming every environmental record is personal data.

### 12.8 International-transfer profile

The ICO recognises certification as a possible Article 46(2)(f) transfer tool. ARDS’s cross-border provenance and registry concepts may support a separate transfer-focused profile, but that needs its own scope, safeguards and approval; it is not an automatic consequence of an ARDS token.

### 12.9 Assurance mappings and auditor enablement

Mappings to ISO/IEC 27001, ISO/IEC 27701, SOC 2, Cyber Essentials or sector assurance can help auditors reuse evidence. The mapping should show gaps and unique ARDS outcomes, not imply equivalence.

### 12.10 Regulatory-change intelligence

Link each profile criterion to source law/guidance, effective date, ARDS field, test case, certificate transition and affected ToEs. This turns ARDS’s existing SemVer/RFC model into a valuable compliance-change service.

### 12.11 Public-interest participation

The existing User Council and Maritime Founding Panel can become evidence sources for practical impact, but a future GDPR module should add meaningful data-subject or consumer representation and publish how their concerns changed the criteria.

### 12.12 Separate open standard from paid assurance

Keep implementation and core schemas open. Charge, where appropriate, for support, testing, CB enablement, training, registry/status, evidence packaging and domain assurance. This protects adoption while funding the assurance layer.

---

## 13. Go/no-go criteria

### Go to pilot when

- the chosen ToE demonstrably involves personal-data processing;
- controller/processor roles and territorial scope are documented;
- at least one independent CB is willing to review the model;
- market research shows a specific unmet need and data-subject benefit;
- the profile distinguishes inherited ARDS controls from new GDPR requirements;
- no public page implies existing ARDS certification is ICO/UK GDPR certification; and
- a DPO/security review approves the pilot evidence-handling design.

### Go to ICO proposal when

- the 12 proposal requirements have documentary evidence;
- all applicable legal areas have been mapped and reviewed;
- the criteria are auditable, scalable and outcome-based;
- the methodology and scheme manual are coherent and CB-reviewable;
- several volunteer organisations have completed a pilot;
- technical reports, evidence graphs and public summaries are reproducible; and
- the delivery and funding model can support surveillance, updates, complaints and registry continuity.

### Stop or change route when

- there is no qualifying personal-data processing;
- the market wants only ARDS technical interoperability;
- no independent CB will support the scope;
- the scheme requires certifying an entire organisation rather than a defined processing activity;
- the cost of accredited delivery outweighs proven demand; or
- the only way to make the claim sound credible is to blur ARDS conformance and UK GDPR certification.

---

## 14. Official source set

Re-check these sources before any filing or public claim:

- [ICO — Certification schemes: detailed guidance](https://ico.org.uk/for-organisations/advice-and-services/certification-schemes/certification-schemes-detailed-guidance/) — current guidance and update history.
- [ICO — How do we develop a certification scheme?](https://ico.org.uk/for-organisations/advice-and-services/certification-schemes/certification-schemes-detailed-guidance/how-do-we-develop-a-certification-scheme/) — scheme elements, market demand, scope, criteria, testing, proposal and criteria assessment.
- [ICO — How do we become a certification body?](https://ico.org.uk/for-organisations/advice-and-services/certification-schemes/certification-schemes-detailed-guidance/how-do-we-become-a-certification-body/) — UKAS, ISO/IEC 17065, UK location, independence, timing and public-directory requirements.
- [ICO — How do we apply for UK GDPR certification?](https://ico.org.uk/for-organisations/advice-and-services/certification-schemes/certification-schemes-detailed-guidance/how-do-we-apply-for-gdpr-certification/) — controller/processor application, ToE, disclosure, breaches and certification effects.
- [ICO — Certification schemes: a guide](https://ico.org.uk/for-organisations/advice-and-services/certification-schemes/certification-schemes-a-guide/) — roles, scope, benefits, maximum three-year validity and practical implications.
- [ICO — UK additional accreditation requirements for certification bodies](https://ico.org.uk/media2/migrated/2617241/uk-additional-accreditation-requiremenets-202002.pdf) — additional requirements for CBs, including impartiality, personnel, ICO notification, evaluation, surveillance, public summaries, records, complaints and appeals.
- [UKAS — Route to accreditation](https://www.ukas.com/the-route-to-accreditation/) — confirm the current process, scope and costs directly with UKAS.
- [ISO — ISO/IEC 17065](https://www.iso.org/standard/46568.html) — conformity-assessment requirements for bodies certifying products, processes and services.

ICO guidance says EDPB guidance is no longer directly relevant or binding in the UK regime, although it may remain useful background. Use current UK law, ICO material, the UK additional requirements and qualified UK counsel as the controlling references.
