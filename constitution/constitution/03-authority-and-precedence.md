## Section 3 — Authority and Precedence

This Section defines the authority order, conflict resolution rules, and precedence hierarchy for all Pixsols governance artifacts, policies, implementations, and representations.

This Constitution is the highest binding authority within the Pixsols system and any system claiming compliance with it.

---

### 3.1 Constitutional Supremacy

a) This Constitution overrides any conflicting:
   - policy,
   - contract clause (to the maximum extent legally permitted),
   - spec,
   - playbook,
   - model behavior,
   - UI text,
   - marketing claim,
   - training dataset interpretation,
   - or operational practice.

b) No component may “reinterpret” this Constitution to expand power, reduce safeguards, bypass constraints, or weaken non-negotiable invariants.

c) If a conflict exists, the correct action is to:
   1) stop or degrade the conflicting behavior,
   2) escalate per the applicable escalation path,
   3) correct the lower-authority artifact.

---

### 3.2 Authority Order (Precedence Stack)

When two artifacts conflict, the binding order is:

1) **Constitution & Protocol (01 — Constitution & Protocol)**
2) **Legal & Governance (02 — Legal & Governance)**
3) **Product & Technical (03 — Product & Technical)**
4) **Business & GTM (04 — Business & GTM)**
5) **Archive (05 — Archive)**

Within each category, precedence is:

a) Explicit **non-negotiable invariants** > all other text  
b) Later **ratified** version (under valid amendment procedure) > earlier version  
c) A policy/spec with an explicit scope statement > one without  
d) Signed/attested enforcement rule (policy-as-code) > narrative explanation  
e) Public-facing summaries are non-binding unless explicitly declared binding

---

### 3.3 Interpretation Rules

a) Ambiguity is treated as a failure condition and must be resolved by clarification, not assumption.

b) Where interpretation choices exist, the system must prefer the option that:
   - preserves human agency,
   - increases safety and legibility,
   - reduces irreversible harm,
   - reduces incentives for bypass,
   - and defaults to refusal or dormancy when uncertain.

c) “Spirit of the Constitution” may not be used to override explicit constraints. Only ratified amendments may change authority.

---

### 3.4 Non-Bypassability

a) No actor may route around constitutional constraints by:
   - relabeling the system,
   - splitting functions across services,
   - delegating to third parties,
   - using “external tools,”
   - or operating under an alternative wrapper.

b) Any attempt to bypass precedence rules is treated as a high-severity governance breach and triggers the system’s refusal/degradation behavior and required escalation.

---

### 3.5 Public Claims and Compliance

a) Any claim that a system is “Pixsols-compliant” is invalid unless the system:
   - binds to this Constitution as highest authority,
   - implements enforcement hooks for refusal/degradation,
   - and maintains auditable records of compliance behavior.

b) If a public claim conflicts with enforcement reality, enforcement reality governs and the public claim must be corrected.

---

### 3.6 Amendments and Version Priority

a) Amendments only have force if executed through the required constitutional amendment procedure.

b) Unauthorized edits, emergency changes, or “quick fixes” that weaken invariants are void.

c) In a crisis, the default allowed direction of change is:
   - tighten constraints,
   - reduce authority,
   - freeze, pause, or exit,
   - never expand power or reduce safeguards.
