# ARDS × ICO UK GDPR Certification Readiness Plan

**Review date:** 24 August 2026  
**Review basis:** desk review of the ARDS repository and the ICO’s current certification-scheme guidance, updated by the ICO on 13 February 2026.  
**Status:** working plan, not legal advice and not an indication of ICO or UKAS approval.

## Executive decision

**ARDS is not ready to apply as a UK GDPR certification scheme today.** More importantly, the current ARDS programme is not yet the same thing as UK GDPR certification.

The repository currently describes an **AxiomOrdo technical conformance programme** for regulatory-compliance artefacts and software. The ICO route is different:

1. a scheme owner defines **ICO-approvable certification criteria** for specific personal-data processing;
2. the scheme has a repeatable **audit and testing methodology** and a **scheme manual**;
3. the ICO assesses the proposal and criteria;
4. a **UKAS-accredited certification body (CB)** issues certificates against the approved criteria; and
5. the CB maintains the public certificate directory and provides the ICO with the required information.

The recommended route is therefore:

> **Keep ARDS’s private/open technical conformance programme, but build a separate, narrowly scoped UK GDPR scheme module and deliver it through an independent UKAS-accredited CB. Do not describe the existing AxiomOrdo token or L1–L6 marks as ICO-approved or UK GDPR certification until the criteria are approved and a UKAS-accredited CB is operating the scheme.**

A second decision must come first: **does the proposed ARDS object actually involve processing personal data?** UK GDPR certification cannot certify an abstract data format or an organisation in the general; it certifies defined processing operations of a controller or processor. If the ARDS use case does not process personal data, an ICO application is the wrong route and the existing technical programme should be pursued under an appropriate non-ICO assurance model instead.

---

## 1. What the ICO framework requires

The ICO guidance describes three connected scheme elements:

| Element | What it must do | ARDS implication |
|---|---|---|
| **Criteria** | Set specific, practical, auditable data-protection requirements. They must be best practice, not a restatement of the UK GDPR. | ARDS’s JSON/schema requirements are useful evidence controls, but do not yet cover the complete UK GDPR processing lifecycle. |
| **Evaluation and testing methods** | Explain how an assessor evaluates conformity consistently, including technical and legal aspects appropriate to the target of evaluation. | The current pages describe an ARDS test suite but the repository contains no executable validator, schemas, test vectors or processing-activity assessment method. |
| **Scheme manual** | Set the rules for application, assessment, decision, certificate validity, surveillance, changes, complaints, appeals, suspension, withdrawal, directory and governance. | The current certification page is a customer-facing overview, not a complete ISO 17065-compatible scheme manual. |
| **Object of certification / Target of Evaluation (ToE)** | Define exactly which personal-data processing operations are certified, where they start and end, what interfaces and third parties are involved, and what is excluded. | The current scope is broad—“regulatory compliance artefacts” and compliance software—and is not a defined personal-data processing operation. |
| **Certification body** | An independent third party, accredited by UKAS for the scheme, issues the UK GDPR certificate. | The current programme says AxiomOrdo assesses applicants and issues tokens. That is not sufficient for UK GDPR certification and creates a potential impartiality conflict if AxiomOrdo also owns the scheme. |
| **Public transparency** | Approved criteria must be public. The CB must publish a directory and an executive summary explaining scope, criteria, methods/tests and results. | ARDS has a planned directory and token example, but no live service, approved criteria, executive-summary template or verified certificate records. |

The ICO also expects the criteria to be relevant and proportionate to the processing, scalable for different organisations including SMEs, interoperable with other standards, and capable of benefiting data subjects.

### The ARDS/ICO boundary

The following statements must remain separate:

- **ARDS-conformant:** a technical claim about a JSON artefact, implementation or interoperability behaviour.
- **AxiomOrdo-assessed:** a private claim made under the current AxiomOrdo programme, if that programme is operated as described.
- **UK GDPR certified:** a claim that a defined controller or processor processing operation has been certified against criteria approved by the ICO and assessed by a UKAS-accredited CB.

An ARDS implementation may support UK GDPR compliance, and ARDS artefacts may be evidence in an assessment. Neither fact alone makes the implementation or the artefact UK GDPR certified.

---

## 2. What exists in the repository today

This is an evidence review, not a finding that the underlying organisation has no such material elsewhere.

| Area | Evidence found | Readiness meaning |
|---|---|---|
| Normative standard | `specification.html` defines six artefact types, a metadata envelope, normative language, schema URIs, conformance levels, extensions, versioning and governance. | Good foundation for a technical standard; not a UK GDPR criteria document. |
| Technical conformance levels | `specification.html` and `certification.html` define L1–L6, with L1–L2 self-declared and L3–L6 assessed by AxiomOrdo. | Useful private conformance ladder; it should not be mapped to UK GDPR certification without a separate processing-based scheme. |
| Certification process | `certification.html` describes an application, scoping call, AxiomOrdo technical assessment, remediation, AxiomOrdo decision, token issuance and directory listing. | Missing independent UKAS-accredited CB, legal agreements, impartiality controls, ICO notification flow and full scheme manual. |
| Certification token | `certification.html` shows a JSON token with a placeholder signature and AxiomOrdo as issuer. | A machine-readable certificate representation is a good opportunity, but it needs a real trust model, key discovery, revocation, scope, criteria version, CB identity and ToE. |
| Directory and verification | `certified.html` describes a live directory and API but contains an empty-state page and illustrative response only. | Public transparency is not operationally evidenced. |
| Marks | `brand.html` sets out permitted/prohibited use, expiry and revocation concepts. | A useful private mark policy; the marks need legal protection, precise UK GDPR wording and independent-CB rules if reused. |
| Governance | `governance.html` describes the Standards Board, TAG, domain working groups, Certification Committee, User Council and RFC process. | Good stakeholder skeleton; independence, conflicts, decision rights, appeals separation, evidence of meetings and data-subject representation are not evidenced. |
| Developer tooling | `developer.html` documents `ards-validate`, CLI options and examples. | The claimed validator, schemas and conformance test suite are not present in this checkout. Documentation is not test evidence. |
| Privacy/security operations | No privacy notice, ROPA, DPIA, controller/processor terms, retention schedule, breach procedure, data-subject rights process, transfer assessment or security evidence was found. | Critical gap if the scheme owner, CB or ARDS service processes personal data. |
| Legal/accreditation status | No scheme-owner legal-entity pack, UKAS agreement/accreditation, independent-CB agreement, ISO/IEC 17065 system or ICO approval evidence was found. | The application route cannot be evidenced yet. |

### Immediate credibility issue

The current public wording uses “independent” and “certification” while the described assessor, decision-maker and token issuer are all AxiomOrdo functions. Until an independent CB is appointed, the safest wording is **“ARDS technical conformance”** or **“AxiomOrdo-assessed ARDS conformance”**, not “UK GDPR certification”, “ICO approved” or language that implies regulatory endorsement.

The example token also uses `certificateId`, while the ARDS metadata examples use `certificationId`. This should be resolved before any public registry or relying-party integration is built.

---

## 3. Route decision: choose the role before doing the work

### Route A — ARDS as scheme owner; independent CB delivers it **(recommended)**

AxiomOrdo owns the scheme criteria, scope and brand. A separate UKAS-accredited CB performs the assessment and issues the UK GDPR certificate. This preserves ARDS’s standards role while reducing the conflict created by assessing one’s own scheme participants.

**Reward:** strongest credibility-to-cost ratio; access to an existing accredited delivery capability; easier multi-CB expansion later.  
**Trade-off:** less control over assessment revenue and customer relationship; the CB must accept the scheme and its methodology.

### Route B — AxiomOrdo owns the scheme and also becomes the CB

This requires a formal UK legal entity or partnership able to carry legal responsibility, UK location, ISO/IEC 17065 conformity, UK additional accreditation requirements, independent personnel and decision-making, insurance/reserves, a management system and UKAS accreditation. ICO guidance says accreditation can take **6–18 months**, depending on the organisation and scheme complexity; UKAS fees and assessment costs must be obtained directly from UKAS.

**Reward:** control of delivery, data and economics.  
**Trade-off:** highest cost, longest critical path and greatest impartiality risk. The current scheme-owner/Certification Committee structure cannot simply be renamed as an accredited CB.

### Route C — ARDS as an applicant/controller or processor

If AxiomOrdo operates a real product or service that processes personal data, that specific processing operation could apply to an already approved scheme through its accredited CB. This would certify ARDS’s own defined service, not the ARDS standard and not every ARDS implementation.

**Reward:** a credible first-party proof point and pilot.  
**Trade-off:** it does not solve the scheme-owner problem and only covers the defined ARDS service/processing activity.

### Route D — Remain a private technical scheme for now

Continue the open technical standard, validator and private AxiomOrdo conformance mark, but make the boundary explicit and use the work to generate demand and pilot evidence.

**Reward:** fastest market learning and lowest regulatory exposure.  
**Trade-off:** no ICO/UK GDPR certification claim and weaker assurance for buyers specifically seeking an approved scheme.

### Decision rule

Do not submit an ICO proposal until all of the following are true:

- a personal-data processing use case and ToE have been confirmed;
- the target market wants this exact scheme and the benefit to data subjects is evidenced;
- AxiomOrdo’s scheme-owner/CB route is documented;
- an independent CB has given written in-principle support, or the separate-CB accreditation plan is funded;
- every proposed UK GDPR criterion is measurable, evidence-backed and mapped to current UK law and ICO guidance; and
- the public website no longer implies that the current ARDS programme is ICO-approved.

---

## 4. Full gap analysis — ICO scheme proposal stage

The ICO’s proposal assessment lists twelve requirements. The following is the working remediation register.

| ID | ICO proposal requirement | Current position | Gap / action required | Priority / evidence of closure |
|---|---|---|---|---|
| P-01 | Scheme owner(s), partnerships, legal status and CB accreditation status | AxiomOrdo is named throughout the site, but no legal-entity or partnership pack is in the repository. No CB is named. | Prepare legal-entity chart, ownership, responsible officers, proposed CB(s), roles, contracts/MoU and accreditation status. | **P0** — signed scheme-owner pack and CB letter. |
| P-02 | Scheme owner eligibility | Governance bodies are described, but eligibility, legal responsibility, competence and resources are not evidenced. | Confirm scheme owner eligibility with ICO proposal guidance and counsel; appoint accountable senior owner; document resources and authority. | **P0** — eligibility checklist and board approval. |
| P-03 | No relevant ICO investigation or regulatory action affecting delivery parties | No declarations or due-diligence records found. | Obtain declarations from scheme owner, partners and proposed CB; establish an update duty and escalation process. Do not conceal or omit relevant action. | **P0** — signed declarations and disclosure procedure. |
| P-04 | Clear operating model aligned with UKAS rules and conformity-assessment standards | Current model places technical assessment, decision and token issuance with AxiomOrdo. | Re-design as scheme owner + independent CB, or produce a separate UKAS/ISO 17065 accreditation plan. Define assessor, reviewer, decision, appeal and registry boundaries. | **P0** — operating-model diagram, RACI, CB agreement. |
| P-05 | Clear subject matter and intended target market | Subject matter is broad regulatory compliance software across FuelEU, CBAM, PFAS and ETS. | Select a first narrow privacy problem and target: e.g. a named ARDS-enabled service’s collection, storage, linkage, sharing and export of personal data for a defined compliance workflow. Test whether the sector actually has the problem. | **P0** — approved scope statement and interview evidence. |
| P-06 | Scope, in/out-of-scope organisations and processing, including territorial scope | Current pages do not define UK GDPR territorial scope, controller/processor status, deployment boundaries, exclusions or processing start/end. | Produce scope and exclusions. Identify UK establishments, extra-territorial activities, controller/processor/joint-controller roles, hosting locations, interfaces, transfers and versions. | **P0** — scope annex and ToE template. |
| P-07 | Consideration of how information is used | ARDS models obligations, evidence and provenance, but not a personal-data flow or purpose analysis. | Map data categories, purposes, lawful bases, recipients, retention, automated decisions, profiling, access and erasure paths through the ARDS-enabled service. | **P0** — data-flow map, ROPA extract and processing rationale. |
| P-08 | Whether special-category, criminal-offence or high-risk processing is involved | Not addressed. | Make an explicit determination. If included, add Art 9/10, safeguards, DPIA, access, segregation and specialist-assessor requirements; otherwise justify exclusion and test scope creep. | **P0** — risk classification and exclusion rationale. |
| P-09 | Correct UK GDPR areas applied or disapplied | The ARDS specification references RFCs, JSON Schema and regulatory domains, not UK GDPR articles or UK statutory codes. | Create an applicability matrix for Arts 5–49 and relevant DPA 2018/ICO guidance, with rationale for every N/A. Update for UK law changes and ICO guidance. | **P0** — counsel-approved legal crosswalk. |
| P-10 | Benefit to the market and individuals | The site claims regulator and enterprise value, but no research shows a data-subject benefit. | Evidence how the scheme reduces privacy risk, improves transparency, rights handling or safeguards, and how controllers/processors will use it in procurement. | **P1** — consultation report with anonymised evidence. |
| P-11 | Documented research/consultation supporting the scheme | Working groups and a design-partner programme are described, but consultation results, sampling and responses are not published or stored. | Run structured interviews/survey with controllers, processors, affected people/consumer representatives, industry bodies, prospective CBs and regulators where appropriate. Record dissent and changes. | **P1** — research protocol, raw/summary findings, change log. |
| P-12 | Requisite subject, UK data-protection and accredited-framework expertise | Technical and maritime expertise is described; legal and accredited-certification competence is not evidenced. | Add UK data-protection counsel/DPO expertise, ISO/IEC 17065/UKAS expertise, technical privacy/security assessors and a competence matrix/CPD plan. | **P0** — CV/qualification/competence matrix and appointment letters. |

### Proposal-stage deliverable: one controlled Scheme Proposal

Create `ARDS-UKGDPR-SCHEME-PROPOSAL-001` with at least:

- scheme name that tells the public what is being certified;
- problem statement, target market, data-subject benefit and harm model;
- scheme owner and partnership/legal details;
- candidate CB(s) and delivery model;
- scope, exclusions, territorial application and intended processing;
- ToE definition and example completed ToEs;
- data categories, controller/processor/joint-controller analysis and high-risk assessment;
- market-demand, benchmarking and added-value evidence;
- competency and resource plan;
- delivery/business case and cost model;
- relationship to existing ARDS technical conformance; and
- a statement that approval is being sought and has not yet been granted.

---

## 5. Full gap analysis — ICO criteria and scheme-document stage

The ICO’s criteria assessment lists thirteen requirements. The current ARDS specification partially supports only document structure, definitions and technical interoperability; it does not yet contain UK GDPR certification criteria.

| ID | ICO criteria requirement | Current position | Required ARDS work | Priority / acceptance test |
|---|---|---|---|---|
| C-01 | Well structured, numbered, clear and understandable scheme documents | `ARDS-SPEC-001` has numbered sections; the certification page is explanatory rather than normative. | Create controlled criteria, evaluation-method and scheme-manual documents with clause IDs, version history, ownership and plain-language guidance. | **P1** — independent reviewer can navigate and cite every requirement. |
| C-02 | Terms defined and normative references identified | ARDS defines technical terms and cites RFC/ISO/JSON references. UK GDPR, DPA 2018, ICO codes and processing terms are absent. | Add UK GDPR terms: controller, processor, joint controller, processing, personal data, special category, ToE, evidence, nonconformity, surveillance, certification decision, complaint and appeal. | **P0** — terminology and reference review signed off by privacy counsel. |
| C-03 | Scope is clear, accurate and not misleading | Broad multi-regulatory scope; no personal-data-processing boundary. | Write exact in/out scope, service/product versions, deployment models, jurisdictions, lifecycle and exclusions. Align every website claim with it. | **P0** — no material claim can be read more broadly than scope. |
| C-04 | Clearly defined ToE, with justified exclusions | No ToE; application asks for product, level, domain packs and sample artefacts. | Replace/augment with a ToE dossier: processing map, systems, interfaces/transfers, roles, protocols, data categories, versions, processors, safeguards, evidence boundaries and exclusions. | **P0** — CB can quote a ToE without guessing what is certified. |
| C-05 | All applicable UK GDPR aspects covered with measurable outcomes | ARDS covers schema validity/provenance, not the UK GDPR lifecycle. | Build the article/control matrix below. Express criteria as outcomes with objective pass/fail or graded evidence, not “has a policy” alone. | **P0** — 100% applicable requirements have owner, evidence, test and decision rule. |
| C-06 | Accurate reflection of UK law, ICO guidance and statutory codes | No UK GDPR legal crosswalk or update process. | Obtain UK legal review; include current ICO guidance and applicable statutory codes; track Data (Use and Access) Act changes and future amendments. | **P0** — legal review and controlled update log. |
| C-07 | Effective governance/accountability aligned to ICO data-protection audit framework | ARDS governance is standards governance, not the applicant’s privacy accountability system. | Add leadership oversight, roles, policies, training, ROPA, risk/DPIA, complaints, breach response, audit, corrective action and continual improvement requirements. | **P0** — auditable accountability outcomes in criteria and pilot. |
| C-08 | Entire processing lifecycle represented | ARDS focuses on artefacts from obligation through audit package. | Cover collection, creation, enrichment, storage, access, use, sharing, transfer, retention, correction, restriction, erasure, export, backup, disposal and incident response. | **P0** — lifecycle coverage matrix has no unexplained stage gaps. |
| C-09 | Guidance notes, context and compliance examples | Developer examples are technical and do not show privacy compliance evidence. | Add implementation guidance, small-organisation examples, sample evidence, anti-patterns, assessor notes and worked ToEs. | **P1** — volunteer users can apply each criterion without private coaching. |
| C-10 | Criteria reflect scale and risk | Six ARDS levels measure technical depth, not risk to people. | Add risk tiers based on data sensitivity, volume, vulnerability, decisions, transfers, exposure and harm; scale audit depth without weakening outcomes. | **P0** — same outcome, proportionate evidence path for low/high risk. |
| C-11 | Flexible and scalable for micro, small and medium organisations | L1–L2 are accessible, but UK GDPR scheme scaling is not designed. | Provide SME templates, proportional evidence, affordable scope units, shared-service evidence rules and clear limits on sampling/assurance reduction. | **P1** — SME pilot completes without bespoke interpretation. |
| C-12 | Compatible with ISO/IEC 17065 and UK additional requirements | No ISO 17065 management system or UK additional-requirements crosswalk. | Produce a CB-facing compatibility matrix and contract rules; let the CB own accredited conformity-assessment controls. | **P0** — prospective CB/UKAS gap review has no critical unresolved item. |
| C-13 | Likely to improve compliance and benefit data subjects | Interoperability and auditability benefits are asserted; privacy outcomes are not measured. | Define outcome measures: rights-response traceability, minimisation, access control, retention enforcement, breach detection/notification readiness, transparency and reduction in unresolved findings. | **P1** — pilot report demonstrates measurable improvement. |

### Required UK GDPR applicability matrix

This is the largest substantive gap. The final criteria must decide what applies to the chosen ToE; it should not mechanically include every article or silently exclude difficult requirements.

| Area to map | What ARDS currently has | What the UK GDPR module must add |
|---|---|---|
| **Art 5 principles** | Provenance and auditability concepts. | Measurable outcomes for lawfulness/fairness/transparency, purpose limitation, minimisation, accuracy, storage limitation, integrity/confidentiality and accountability. |
| **Arts 6–11 lawfulness** | Regulatory context fields. | Lawful-basis selection/evidence, special-category conditions where relevant, criminal-offence data, consent/withdrawal where applicable, compatibility and purpose controls. |
| **Arts 12–23 rights** | No rights workflow. | Notice delivery, access, rectification, erasure, restriction, objection, portability, response clocks, identity assurance, exemptions, escalation and ARDS traceability. |
| **Arts 25 and 32 privacy by design/security** | Schema and cryptographic concepts are described. | Data minimisation, default settings, separation, access control, encryption, key management, resilience, restore/testing, regular effectiveness testing and secure development outcomes. |
| **Arts 26–29 and 31 roles** | Producer/consumer terms are technical. | Controller, joint-controller, processor and representative responsibilities; instructions; contracts; sub-processors; assistance; audits; records of disclosures and cooperation. |
| **Art 30 records** | Regulatory artefact records, not ROPA. | ROPA fields and linkage to the ToE, purposes, categories, recipients, transfers, retention and security measures. |
| **Arts 33–34 breaches** | No operational incident process. | Detection, classification, decision log, notification workflow, controller/processor escalation, affected-person communication and evidence preservation. |
| **Arts 35–36 DPIA/prior consultation** | No DPIA method. | Risk-to-people methodology, DPIA trigger, consultation evidence, residual risk acceptance and change/review triggers. |
| **Arts 37–39 DPO** | No DPO requirement or independence test. | Applicability, appointment, resources, access, independence, advice, monitoring and contact route. |
| **Arts 44–49 international transfers** | Jurisdiction field only. | Transfer inventory, adequacy/appropriate safeguard route, transfer risk assessment, supplementary measures, onward transfers and data-location controls. |
| **Information governance and accountability** | Standards Board/RFC governance. | Leadership, policies, training, risk management, complaints, internal audit, corrective/preventive action and continual improvement for the processing operation. |
| **ICO/DPA 2018/UK updates** | No UK-law change register. | A legal watch, owner, review cadence, transition rules and versioned criteria updates. The ICO page was updated in February 2026 following the Data (Use and Access) Act coming into law in June 2025. |

The final criteria must also explain how evidence is handled where ARDS artefacts contain personal data: minimisation in test fixtures, pseudonymisation, redaction, access logging, retention and secure deletion.

---

## 6. Evaluation methods: what is missing

The current `ards-validate` description tests document shape. A UK GDPR assessment must evaluate the defined processing operation and the outcomes in the criteria.

| Method component | Current state | Build requirement |
|---|---|---|
| Application and ToE review | Product, level, domain packs and sample artefacts are requested. | Add a formal ToE/application review covering roles, processing, interfaces, transfers, processors, joint controllers, investigations and risk. |
| Technical testing | CLI commands and illustrative error codes are documented; code is absent. | Ship versioned schemas, executable validator, test fixtures, negative cases, provenance/link integrity tests, access/security tests and reproducible reports. |
| Legal/privacy evaluation | Not described. | Require appropriate privacy-law expertise and a documented method for necessity/proportionality, lawful basis, rights, DPIA, governance, transfers and safeguards. |
| Evidence evaluation | “Sample artefact set” is not a sampling method. | Define evidence types, authenticity, sampling population, sample size/rationale, interviews, observation, configuration review, data-subject journey testing and limitations. |
| Risk and proportionality | Conformance tiers are technical, not risk-based. | Define risk classification and proportionate evaluation depth; do not allow “small” to mean “lower legal outcome”. |
| Nonconformities | One remediation cycle is advertised. | Define major/minor findings, evidence insufficiency, corrective-action deadlines, repeat failures, escalation and decision consequences. |
| Consistency | AxiomOrdo test suite is described but no inter-assessor controls are evidenced. | Use standard workpapers, assessor calibration, independent review, inter-rater exercises and a rule for justified deviations. |
| Subcontracting | Not addressed. | Define allowed subcontractors, competence, independence, confidentiality, supervision and responsibility retained by the CB. |
| Existing certifications | Not addressed. | Define when ISO/SOC/other evidence can be considered and why the certificate alone is never sufficient for the ARDS ToE. |
| Report and executive summary | Detailed test report is promised; no template found. | Create full report and public executive-summary templates: scope/ToE, criteria/version, methods/tests, results, limitations and certificate decision. |
| Change evaluation | SemVer is described for ARDS. | Add triggers for breaches, new processing, new data, new processors, legal/guidance changes, court decisions, architecture changes and criteria updates. |
| Surveillance | Annual renewal is advertised. | Define risk-based surveillance, with no interval over 12 months for the CB, and a total certificate validity period no longer than three years. |

### Minimum assessor workpaper set

1. application/eligibility and ICO-action declaration;
2. signed ToE and data-flow map;
3. controller/processor/joint-controller and sub-processor analysis;
4. data inventory, ROPA/DPIA and transfer assessment;
5. criteria-by-criteria evidence index;
6. technical test report and fixture hashes;
7. interviews/observations and sample rationale;
8. nonconformity and corrective-action log;
9. legal and technical reviewer sign-off;
10. independent certification decision record;
11. public executive summary;
12. surveillance/change/breach review record; and
13. complaints, appeals, suspension or withdrawal record where applicable.

---

## 7. Scheme manual and certification-body gap

### Scheme manual topics

The scheme manual should be a controlled document, not just a web page. It needs to cover:

- scheme owner, CB and stakeholder responsibilities;
- scheme scope, ToE definition and exclusions;
- eligibility and non-discrimination;
- application information and ICO-action disclosure;
- confidentiality, access and secure handling of applicant/client data;
- certification agreement, including access for assessment and ICO transparency;
- assessor competence, independence and continuing professional development;
- assessment stages, methods, sampling and report rules;
- review and independent certification decision;
- certificate content, ToE/version, criteria version, validity and surveillance;
- use of marks, seal/token and public claims;
- changes to the client, processing, law, guidance, technology and criteria;
- breaches, ICO investigations, suspension, reduction, withdrawal and restoration;
- complaints and appeals, with separation from the original assessment/decision;
- public directory and executive summary;
- records, retention, auditability and ICO access;
- fees, refunds and remediation rules; and
- business continuity if the CB, scheme owner or registry stops operating.

### Certification-body requirements

If Route A is chosen, AxiomOrdo must select a CB that is already UKAS-accredited for the relevant UK GDPR scheme or is prepared to obtain accreditation for this scheme. If Route B is chosen, establish a separate UK legal CB entity and build evidence against ISO/IEC 17065 and the ICO’s UK additional accreditation requirements.

The CB plan must address:

| Requirement | Why it matters for ARDS | Current evidence |
|---|---|---|
| Legal entity and UK location | Required for UKAS eligibility and legal responsibility. | Not evidenced. |
| Impartiality and conflicts | Scheme owner, technical consultant, assessor and decision-maker cannot be allowed to bias outcomes. | Current AxiomOrdo-only flow creates a perceived and potential actual conflict. |
| Independent personnel | Technical, legal, evaluation and decision personnel need appropriate qualifications/experience and CPD. | Not evidenced. |
| Liability and financing | Insurance/reserves must cover certification liabilities in operating regions. | Not evidenced. |
| Confidentiality and UK GDPR compliance | The CB will receive sensitive personal-data and security evidence. | No CB privacy/security/QMS pack found. |
| ICO communication | Applications, issuance, renewal, suspension/withdrawal and reasons must be reported through the required process. | No integration or procedure found. |
| Public directory | Public records must state what is certified, framework/conditions and validity; executive summaries explain methods/results. | Planned ARDS directory is illustrative and empty. |
| Complaints and appeals | Public, accessible, independent, time-bound and communicated to complainants; accessible to data subjects. | Current appeal is a Certification Committee process and is not demonstrably independent. |
| Management system | Document control, records, internal audit, management review, corrective/preventive actions and continuity are required. | No management system evidence found. |
| Surveillance and updates | Risk-based monitoring and updates for law, guidance, breaches and technology are required. | Annual renewal is stated, but methodology and update controls are absent. |

**Important design choice:** AxiomOrdo may retain a Standards Board and domain working groups for criteria development, but the scheme owner must not direct an individual certification decision, assessor outcome or appeal. The CB should issue the UK GDPR certificate. A machine-readable ARDS token can mirror that certificate only if its issuer, authority and revocation status are unambiguous.

---

## 8. Product, repository and public-claim gaps

These gaps are independent of the ICO application and should be fixed even if ARDS remains a private technical scheme.

| ID | Gap | Action | Priority |
|---|---|---|---|
| T-01 | No actual schemas in the repository | Add versioned JSON Schemas, canonical URIs, checksums, release manifests and conformance fixtures. | P0 |
| T-02 | No actual `ards-validate` implementation | Publish the validator or change the site to say the tool is planned. Add package/release provenance and security review. | P0 |
| T-03 | No executable certification test suite | Add positive/negative tests for all artefact types, domain packs, extensions, provenance, signatures and error handling. | P0 |
| T-04 | No privacy-aware evidence model | Define whether artefacts can contain personal data, data classification, minimisation, pseudonymisation, redaction, retention and access rules. | P0 |
| T-05 | No ToE/application data model | Create a structured ToE schema and application form covering processing, systems, interfaces, transfers, roles, processors, versions and exclusions. | P0 |
| T-06 | Placeholder cryptographic signature | Use a standard signed format such as a reviewed JWS profile, publish verification keys, rotate keys, log issuance, support revocation/status and protect signing keys. Obtain cryptographic/security review. | P0 |
| T-07 | Token field inconsistency | Decide whether the identifier is `certificateId` or `certificationId`, define namespaces and version the token schema. Include CB, accreditation/scheme identifiers, ToE, criteria version, validity and surveillance. | P0 |
| T-08 | Illustrative registry/API only | Implement the directory, verification endpoint, status semantics, audit log, availability/backup, privacy notice and machine-readable public record. | P1 |
| T-09 | No public executive-summary workflow | Add a redacted, approved template and publication review; keep confidential evidence available to the CB/ICO when required. | P0 |
| T-10 | No legal/operational policies | Add privacy, security, retention, breach, complaints, appeals, mark licence, terms, accessibility and business-continuity documents. | P0 |
| T-11 | Static claims exceed evidence | Replace “independent”, “certified”, “regulator-ready” and “real time” claims where not operationally supported. Add a clear ARDS technical-conformance/UK GDPR boundary notice. | P0 |
| T-12 | No formal release/change control | Link ARDS SemVer to criteria versions, test-suite versions, certificate transition rules, deprecation and legal watch. | P1 |
| T-13 | No accessibility/consumer-facing privacy explanation | Make mark/token meaning understandable to data subjects, not only engineers and procurement teams. | P1 |
| T-14 | No actual certification records | Do not create sample records that appear real. Label examples as examples and publish only verified, consented or legally required directory data. | P0 |

### Recommended immediate copy guardrail

Add a notice to the current certification and brand pages along these lines:

> **Status of this programme:** ARDS L1–L6 are AxiomOrdo technical-conformance designations. They are not UK GDPR certification and do not imply ICO approval, UKAS accreditation or regulatory endorsement. A future UK GDPR scheme, if submitted and approved, will certify defined controller/processor processing operations through an independent UKAS-accredited certification body.

The final wording should be reviewed by UK privacy/advertising counsel. It is safer to be precise now than to unwind a misleading mark claim after partners rely on it.

---

## 9. Recommended delivery roadmap and gates

Times below are planning ranges, not ICO or UKAS commitments.

| Phase | Indicative window | Main work | Exit gate |
|---|---:|---|---|
| **0. Decide and de-risk** | Weeks 0–2 | Inventory personal data; choose scheme-owner/CB/applicant route; freeze unsupported claims; contact ICO informally at `certification@ico.org.uk` and UKAS about scope/process/costs. | **G0:** written role decision and no-go conditions. |
| **1. Legal and governance foundation** | Weeks 2–6 | Legal entity/partnership map, scheme-owner terms, conflict register, privacy/security baseline, independent-CB outreach, competent legal/technical leads. | **G1:** route, responsibilities and conflicts accepted. |
| **2. Market, harm and scope discovery** | Weeks 3–8 | Interview controllers, processors, affected people/consumer representatives, industry bodies and CBs; benchmark approved schemes; define first ToE and out-of-scope cases. | **G2:** evidence-backed narrow scope and demand case. |
| **3. Criteria design** | Weeks 6–14 | Draft `ARDS-UKGDPR-CRIT-001`; article/legal crosswalk; measurable outcomes; risk tiers; SME guidance; data-subject benefit metrics; ISO interoperability map. | **G3:** every applicable requirement has evidence/test/decision rule. |
| **4. Evaluation and scheme manual** | Weeks 10–18 | Draft evaluation methodology, workpapers, assessor competence, sampling, nonconformities, decision, surveillance, validity, complaints/appeals, public information and change rules. | **G4:** prospective CB can run a desk review without inventing process. |
| **5. Technical implementation** | Parallel, Weeks 4–18 | Build schemas, validator, test suite, privacy-safe fixtures, ToE/application data model, signed token/status, registry and audit logs. | **G5:** reproducible technical conformance and secure evidence handling. |
| **6. Pilot/testing** | Weeks 16–26 | Test with several volunteer organisations; assess different sizes/risk profiles; run repeat assessments; record findings, data-subject usability and inter-assessor consistency. | **G6:** pilot report shows the scheme is fit for purpose and changes are incorporated. |
| **7. ICO proposal stage** | After G6 | Submit scheme proposal and supporting market/competence/scope evidence; respond to ICO queries and revise. | **G7:** proposal accepted to development stage. |
| **8. Scheme criteria and UKAS readiness** | Months 7 onward | Submit controlled criteria and supporting documents; prospective CB completes UKAS assessment/accreditation route; resolve ICO/UKAS findings. | **G8:** criteria approval and accredited delivery path confirmed. |
| **9. Controlled launch** | After approval/accreditation | CB assesses real applicants; ICO notifications; issue certificates/tokens; publish directory and executive summaries; run surveillance and complaints. | **G9:** first certificates withstand internal and external review. |
| **10. Continuous assurance** | Ongoing | Legal watch, guidance/DUAA updates, annual scheme review, CB calibration, public metrics, certificate status, incident and change management. | Maintain approval/accreditation conditions and trust. |

### First 90 days

**Days 0–10**

- appoint an accountable programme owner and privacy counsel;
- perform a personal-data inventory of the ARDS standard, reference implementation and likely certified products;
- place the copy guardrail on certification/brand materials;
- create a conflict-of-interest and claims register;
- send an informal scope question to the ICO and an accreditation scoping question to UKAS;
- shortlist two or more independent CBs.

**Days 11–30**

- conduct 15–20 structured market conversations across controllers, processors, buyers, auditors, affected people/consumer representatives and CBs;
- benchmark the ICO register of approved criteria and existing ISO/assurance schemes;
- select one narrow processing use case or decide not to pursue ICO certification;
- write the first ToE and data-flow map;
- resolve the token identifier and certificate/technical-conformance vocabulary.

**Days 31–60**

- draft the article applicability matrix and criteria skeleton;
- draft evaluation methods, workpapers and scheme manual outline;
- agree pilot volunteers and independent CB participation;
- build the first real schema/validator/test fixture slice;
- implement privacy/security baseline for ARDS evidence and registry operations.

**Days 61–90**

- run tabletop assessment and pilot pre-test;
- publish a consultation draft for comment, not an approval claim;
- complete a costed route comparison;
- decide whether G6 is achievable; if not, launch the technical programme with precise claims and defer ICO application.

---

## 10. Risk–reward analysis

Scores are directional for prioritisation, not a financial forecast: **1 = low, 5 = high**. “Risk” includes regulatory, reputational and delivery risk.

### Strategic options

| Option | Completion reward | Effort/cost | Regulatory/reputation risk if done badly | Time to credible market signal | Recommendation |
|---|---:|---:|---:|---:|---|
| Submit the current ARDS package now | 1 | 2 | **5** | 1 | **No-go.** It risks rejection and misleading claims without creating durable assurance. |
| Keep a clear private ARDS technical-conformance scheme | 3 | 2 | 2 | 1–3 months | **Do now.** Builds adoption, tooling and pilot evidence. |
| Narrow UK GDPR scheme + independent UKAS CB | **5** | 4 | 3 | 9–24+ months | **Recommended if data/use-case demand is real.** Best balance of trust and feasibility. |
| General UK GDPR scheme covering all ARDS domains | 5 theoretical | **5** | **5** | 18+ months | Defer. Scope, legal applicability, assessor competence and pilot burden are too broad initially. |
| Create a separate AxiomOrdo UKAS CB | 5 | **5** | **5** | 6–18 months for accreditation, plus scheme work | Only after demand, funding and impartiality separation are proven. |
| Certify AxiomOrdo’s own ARDS service as an applicant | 3 | 3 | 3 | Depends on an approved scheme/CB | Useful as a later proof point, not a substitute for scheme approval. |
| Map ARDS to ISO/IEC 27001, ISO/IEC 27701, SOC 2 or sector assurance | 3–4 | 3 | 2 | 3–9 months | Parallel opportunity, but never market it as ICO approval or an equivalent UK GDPR certificate. |

### Principal risk register

| Risk | Inherent likelihood / impact | Why it matters | Treatment | Residual target / owner |
|---|---|---|---|---|
| **R1. Misleading certification claim** | High / Very high | Buyers, data subjects or regulators may read an AxiomOrdo token as UK GDPR/ICO certification. | Copy guardrail; separate marks and token namespaces; counsel review; approval-status field. | Low/medium; scheme owner + legal. |
| **R2. Impartiality conflict** | High / Very high | The current scheme owner appears to assess, decide, issue and revoke its own certifications. | Independent CB; information barriers; independent decision/appeal; no consultancy to the same applicant. | Medium; board + CB. |
| **R3. Scope does not qualify** | Medium / Very high | An artefact standard or generic platform may not be a defined personal-data processing operation of a controller/processor. | Personal-data inventory; narrow ToE; ICO/UKAS pre-application discussion; no-go if no qualifying processing. | Low/medium; privacy counsel. |
| **R4. Criteria are only a restatement or only technical** | High / High | ICO requires practical, measurable best-practice criteria across applicable processing lifecycle. | Article/control matrix; evidence rules; legal review; data-subject outcomes; pilot. | Medium; criteria lead. |
| **R5. No accredited delivery capacity** | Medium / Very high | ICO approval alone does not cause ARDS to issue certificates. | Secure written CB interest before final investment; plan accreditation route and fees. | Medium; commercial lead. |
| **R6. Personal-data breach in scheme evidence/registry** | Medium / Very high | The scheme itself will handle applicant/client evidence and potentially sensitive data. | Data minimisation, redaction, encryption, access control, retention, DPIA, breach response and DPA/processor contracts. | Low/medium; DPO/security lead. |
| **R7. Legal or guidance change** | High / High | UK data-protection law and ICO guidance change; outdated criteria can invalidate trust. | Legal watch, change triggers, criteria versioning, transition/reassessment and annual review. | Medium; legal + CB. |
| **R8. Inconsistent assessments** | Medium / High | Multiple CBs or assessors may produce different outcomes. | Calibrated workpapers, competence matrix, inter-rater testing, independent review and justified deviations. | Low/medium; CB. |
| **R9. No real market demand** | Medium / High | ICO considers demand, added value and viability; the application consumes time without uptake. | Structured consultation, benchmarking and willingness-to-pay/pilot evidence before submission. | Low; product lead. |
| **R10. Registry/token failure** | Medium / High | A false VALID status or unverifiable signature destroys the value of the mark. | Key management, signed status, immutable audit trail, monitoring, backup, revocation and incident runbook. | Low/medium; platform lead. |
| **R11. Mark misuse or overextension** | Medium / High | An L4 technical mark may be applied to an unassessed product, version or processing activity. | Scope-bound mark licence, automated status checks, takedown/escalation, public misuse process. | Low/medium; mark owner + CB. |
| **R12. Pilot evidence is weak** | Medium / High | A paper scheme may fail when several organisations and CBs apply it. | Use several volunteers, multiple sizes/risk profiles, repeat assessments and publish limitations/findings. | Low/medium; pilot lead. |
| **R13. Commercial overinvestment** | Medium / High | A large build before scope/demand/CB confirmation can strand capital and distract from ARDS adoption. | Stage gates and stop/go funding; keep technical programme independently valuable. | Low/medium; board. |
| **R14. International overclaim** | Medium / High | UK approval is not automatic EU GDPR, DPA, maritime or regulator approval. | Jurisdiction-specific claims; separate UK/EU legal maps; no “any regulator” promise without evidence. | Low; legal/marketing. |
| **R15. Scheme owner becomes a bottleneck** | Medium / Medium | Central AxiomOrdo approval can limit open governance and multi-CB scalability. | Publish criteria; open consultation; license implementation; define CB onboarding and change governance. | Low/medium; governance lead. |

### Reward of completing the work

If the route succeeds, the value is not just a badge:

- a stronger procurement and processor-due-diligence signal;
- a defensible, repeatable privacy-assurance method around ARDS-enabled services;
- evidence that ARDS improves data minimisation, traceability, rights handling and accountability;
- an independent certification ecosystem rather than a self-attestation loop;
- reusable schemas, test vectors, signed status and evidence APIs;
- a route to multiple accredited CBs and domain packs; and
- stronger trust with regulators, auditors, data subjects and enterprise buyers.

The value is materially lower if the scheme is broad, self-assessed or not tied to a defined processing operation.

---

## 11. Hidden opportunities worth testing

These are opportunities—not assumptions of ICO approval.

### 11.1 Privacy-preserving compliance data exchange

ARDS’s strongest distinctive angle may be a scheme for how a compliance service handles personal data while producing portable artefacts: minimisation, pseudonymous identifiers, provenance, controlled sharing, retention and machine-readable rights evidence. This is more defensible than certifying “all regulatory software”.

### 11.2 Data-subject-facing transparency

The ICO explicitly values benefits to individuals. A public ARDS record could expose a plain-language explanation of what processing a certified service covers, what data is used, retention, rights route, recipients and certificate limits—not just a developer token.

### 11.3 Controller/processor due diligence

A buyer could use a machine-readable ToE, certificate status, criteria version, public executive summary and change history during processor selection and annual review. This makes ARDS valuable even before a regulator mandates it.

### 11.4 A genuine SME route

The current six levels can become a market advantage if the UK GDPR module offers proportionate evidence paths without weakening outcomes: guided ToE templates, privacy-safe fixtures, reusable evidence, fixed scope units and transparent costs for micro and small processors.

### 11.5 CB-neutral test infrastructure

Build the validator, fixtures, workpapers and token verification so that several CBs can use the same technical evidence while making their own independent certification decisions. This can create an ecosystem product without owning every audit.

### 11.6 Transfer-assurance variant

The ICO guidance recognises certification as a potential international-transfer tool under Article 46(2)(f). ARDS’s cross-border provenance and registry model may be relevant to a future transfer-focused scheme, but it would need a separate lawful-transfer scope, safeguards and criteria. It is not an automatic benefit of the general ARDS token.

### 11.7 Continuous certification evidence

ARDS’s machine-readable artefacts are well suited to continuous evidence: change events, processor changes, breach notices, rights metrics, key rotation, schema/criteria version and surveillance findings. The CB still makes the certification decision; ARDS can make changes visible between assessments.

### 11.8 Alignment with existing assurance markets

Mappings to ISO/IEC 27001, ISO/IEC 27701, SOC 2, Cyber Essentials or sector frameworks may reduce duplication and open channels with auditors and insurers. The mapping must identify what remains unique to the ARDS ToE; it must not imply equivalence or replace ICO approval.

### 11.9 Domain packs as privacy-risk packs

FuelEU, CBAM, PFAS and ETS could each add privacy-risk guidance where their data flows involve employees, sole traders, vessel crews, contacts, identifiers or supply-chain individuals. This can make domain packs useful without pretending every environmental record is personal data.

### 11.10 Regulatory-change intelligence

Link each criterion to the legal source, ICO guidance version, effective date, affected artefact fields, test cases and certificate transition rule. This turns ARDS’s existing versioning story into a defensible change-management product.

### 11.11 Public-interest and procurement partnerships

Consumer representatives, maritime auditors, trade bodies, universities, data-protection professionals and public procurement teams can provide independent demand evidence, pilot participants and credibility. A data-subject or consumer seat should be substantive, not merely promotional.

### 11.12 A two-sided business model

Keep implementation free/open, then offer paid value around validator support, conformance testing, CB enablement, registry/status, evidence packaging, training and domain-pack assurance. This avoids making the standard itself a paywall while funding the assurance layer.

---

## 12. Application evidence-pack checklist

Create a controlled folder or release containing the following. Every document should have an owner, version, approval date, change history and confidentiality classification.

- [ ] `01-scheme-proposal.md/pdf` — owner, legal status, partners, scope, demand, benefit, competence.
- [ ] `02-scope-and-toe.md` — exact processing, start/end boundaries, systems, interfaces, transfers, roles, versions and exclusions.
- [ ] `03-ukgdpr-criteria.md` — numbered, measurable criteria and guidance.
- [ ] `04-legal-crosswalk.xlsx/md` — UK GDPR/DPA 2018/ICO guidance/code mapping, applicability and rationale.
- [ ] `05-evaluation-methodology.md` — audit/testing, sampling, technical/legal work, evidence, findings and consistency.
- [ ] `06-scheme-manual.md` — operation, certificates, surveillance, changes, complaints, appeals, withdrawal and public information.
- [ ] `07-market-demand-and-consultation.md` — methodology, participants, findings, benchmarking and added value.
- [ ] `08-pilot-report.md` — volunteer organisations, assessments, limitations, consistency and revisions.
- [ ] `09-competence-and-resources.md` — legal, technical, audit, decision personnel, CPD and capacity.
- [ ] `10-cb-route.md` — independent-CB MoU/letter or separate UKAS accreditation plan.
- [ ] `11-impartiality-and-conflicts.md` — information barriers, related-party controls, appeals separation and declarations.
- [ ] `12-privacy-security-pack.md` — privacy notice, ROPA, DPIA, security controls, retention, breach, access and transfer controls.
- [ ] `13-public-information-pack.md` — criteria publication, mark/token licence, directory, executive summary and verification API.
- [ ] `14-change-and-legal-watch.md` — DUAA/UK GDPR/ICO updates, impact assessment and transition rules.
- [ ] `15-claims-register.md` — every website, sales and token claim mapped to evidence and approval status.

---

## 13. Success measures

The programme should not be considered application-ready merely because the documents exist. Use these gates:

1. **Scope:** one named qualifying personal-data processing use case, with no ambiguous boundary.
2. **Claims:** 100% of public certification claims are accurate, scoped and status-labelled.
3. **Criteria:** every applicable legal area has a measurable outcome, evidence type, test method, decision rule and guidance note.
4. **Delivery:** an independent CB has reviewed the operating model and confirmed it can assess the ToE.
5. **Pilot:** several volunteer organisations, including different sizes/risk profiles, complete the method; material inconsistencies are resolved.
6. **Technical:** validator, schemas, fixtures, signatures, status/revocation and audit logs are reproducible and tested.
7. **Privacy:** the scheme’s own evidence handling has an approved DPIA/ROPA/security baseline and tested incident/rights processes.
8. **Transparency:** criteria versions, certificate scope, validity, public executive summaries and complaints/appeals routes are ready.
9. **Sustainability:** a costed delivery model funds surveillance, legal updates, CB fees, support and registry continuity without weakening impartiality.
10. **Decision:** the board records a go/no-go decision based on demand, scope, CB readiness and residual risk—not on sunk cost.

---

## 14. Official source set

Use these sources as controlled references and re-check them before submission:

- [ICO — Certification schemes: detailed guidance](https://ico.org.uk/for-organisations/advice-and-services/certification-schemes/certification-schemes-detailed-guidance/) — current detailed guidance and update history.
- [ICO — How do we develop a certification scheme?](https://ico.org.uk/for-organisations/advice-and-services/certification-schemes/certification-schemes-detailed-guidance/how-do-we-develop-a-certification-scheme/) — scheme elements, market demand, scope, criteria, testing, proposal and criteria assessment.
- [ICO — How do we become a certification body?](https://ico.org.uk/for-organisations/advice-and-services/certification-schemes/certification-schemes-detailed-guidance/how-do-we-become-a-certification-body/) — UKAS, ISO/IEC 17065, UK location, independence, timing and public directory requirements.
- [ICO — How do we apply for UK GDPR certification?](https://ico.org.uk/for-organisations/advice-and-services/certification-schemes/certification-schemes-detailed-guidance/how-do-we-apply-for-gdpr-certification/) — controller/processor application, ToE, disclosure, breach, certificate and mitigating-factor guidance.
- [ICO — Certification schemes: a guide](https://ico.org.uk/for-organisations/advice-and-services/certification-schemes/certification-schemes-a-guide/) — roles, scope, benefits, maximum three-year validity and practical implications.
- [ICO — UK additional accreditation requirements for certification bodies](https://ico.org.uk/media2/migrated/2617241/uk-additional-accreditation-requiremenets-202002.pdf) — additional requirements for UK GDPR CBs, including impartiality, personnel, ICO notification, evaluation, surveillance, public summaries, records, complaints and appeals.
- [UKAS — Route to accreditation](https://www.ukas.com/the-route-to-accreditation/) — confirm current accreditation process, scope and costs directly with UKAS.
- [ISO — ISO/IEC 17065](https://www.iso.org/standard/46568.html) — conformity-assessment requirements for bodies certifying products, processes and services.

Re-check all legal and regulatory references with qualified UK counsel before filing. ICO guidance itself says that EDPB guidance is no longer directly relevant or binding in the UK regime, although it may remain useful background; the UK-specific documents and current UK law take precedence.
