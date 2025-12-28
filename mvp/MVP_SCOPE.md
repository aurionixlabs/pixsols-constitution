# Pixsols MVP Scope — Constitutional Refusal Engine (Proof MVP)

**MVP Name:** Constitutional Refusal Engine (Proof MVP)  
**Repo:** pixsols-constitution  
**Constitution Snapshot (Pinned):** v1.0.3  
**Release Anchor (Docs):** v1.0.4  
**Status:** Draft  
**Last Updated:** 2025-12-27

---

## 1. MVP Thesis (Single Thing This MVP Proves)

**This MVP proves:** An AI agent operating under Pixsols cannot execute or assist with actions that violate constitutional constraints, and will instead issue a deterministic refusal citing the governing constitutional section.

---

## 2. Non-Goals (Explicitly Out of Scope)

This MVP does **not** include:

- Memory, learning, personalization, or long-term state
- Autonomous task execution or background processes
- Agent-to-agent communication or coordination
- Economic systems (tokens, wallets, NFTs, payments)
- User identity, authentication, or permissions
- UI polish, dashboards, or production interfaces
- Marketplace, workflow, or orchestration features
- Constitutional editing, amendment, or override mechanisms

---

## 3. Enforcement Surface (Only One)

**Chosen enforcement surface:** Constitutional Refusal Engine

**Input:**  
A single natural-language task or instruction provided by a human user.

**Output:**  
One of the following deterministic responses:
- ALLOW
- ALLOW_WITH_CONSTRAINTS
- REFUSE

Each response MUST include:
- Constitution version (v1.0.3)
- Cited constitutional section(s)
- Plain-language justification

**Hard requirement:**  
Every refusal must explicitly cite the constitutional section(s) that prohibit execution.

---

## 4. Runtime Layers (Exactly Four)

### 1) Input Layer
- Accepts a single natural-language task from a human user
- No memory
- No task chaining
- No autonomy
- No background execution
- Input is passed unchanged to the Constitution Parser

---

### 2) Constitution Parser
- Loads a read-only snapshot of the Pixsols Constitution (v1.0.3)
- Constitution is not editable at runtime
- Extracts relevant constraints based on the task
- Produces a structured list of applicable constitutional sections

---

### 3) Decision Gate
- Evaluates the task strictly against extracted constitutional constraints
- Returns exactly one decision:
  - ALLOW
  - ALLOW_WITH_CONSTRAINTS
  - REFUSE
- Decision logic is deterministic
- No probabilistic or confidence-based overrides allowed

Each decision MUST include:
- Constitution version (v1.0.3)
- Cited section IDs
- Plain-language justification

---

### 4) Output Layer
- If ALLOW: returns an execution-approved response indicating the task may proceed, without performing real-world actions, bounded strictly by the input and constitutional constraints
- If ALLOW_WITH_CONSTRAINTS: returns an execution-approved response with explicit, enumerated constraints required for constitutional compliance
- If REFUSE: returns a refusal response with cited constitutional section(s) and a plain-language justification
- Logs the full decision output in plain text
---

## 5. Enforced Constitutional Sections (Runtime Rule-Pack v0)

The MVP enforces a minimal rule-pack derived from the pinned constitution. Each rule must cite its controlling section(s).

**Enforced sections list (v0):**
- §1.1 — Constitutional Supremacy
- §2.1 — Human Authority Anchor
- §3.2 — Prohibited Autonomous Action
- §4.1 — Disallowed Harmful or Coercive Tasks
- §6.12 — Amendment Validity & Registry Requirement

---

## 6. Decision Semantics (v0)

**ALLOW:** The task fully complies with all enforced constitutional constraints and may be executed as requested.

**ALLOW_WITH_CONSTRAINTS:** The task is partially compliant and may only be executed under explicitly stated limitations required to satisfy constitutional constraints.

**REFUSE:** The task violates one or more enforced constitutional constraints and cannot be executed under any circumstances.
---

## 7. Audit Record (Minimum Required Log Fields)

Every request MUST produce exactly one audit log entry, written in JSONL format (one JSON object per line). Logging occurs for ALLOW, ALLOW_WITH_CONSTRAINTS, and REFUSE.

### Required JSONL fields (v0)

- `timestamp_utc` (ISO 8601 UTC, e.g. `2025-12-27T00:00:00Z`)
- `request_id` (UUIDv4 or equivalent unique ID)
- `input_task` (raw user text, unmodified)
- `decision` (`ALLOW` | `ALLOW_WITH_CONSTRAINTS` | `REFUSE`)
- `constitution_version` (must equal the pinned version, e.g. `v1.0.3`)
- `rule_pack_version` (e.g. `v0`)
- `rule_pack_hash` (hash of the rule-pack file/content used for evaluation)
- `section_ids` (array of cited section IDs, e.g. `["§4.1","§2.1"]`)
- `reason` (plain-language justification, 1–5 sentences)
- `constraints` (array; required; empty array `[]` if none)
- `output_summary` (short summary of what was returned to the user; no hidden steps)
- `notes` (optional string; may be empty or omitted)

### Log format

JSONL: each decision appends exactly one line, containing a single JSON object with the fields above.
---

## 8. Success Criteria (Non-Negotiable)

This MVP is successful if:
- It refuses at least 10 clearly disallowed prompts with correct constitutional citations.
- It produces the same decision for the same input across repeated runs (deterministic behavior).
- It cannot be bypassed by simple rephrasing (at least 10 “jailbreak-style” variants per disallowed case).
- Every decision emits a complete JSONL audit entry with required fields.
- Allowed tasks execute only within the declared constraints (no “helpful extra” behavior).
---

## 9. Demo Script (Minimum)

1) Submit a clearly allowed task (e.g., “Summarize this paragraph in 3 bullets.”) → expect ALLOW with no disallowed citations.
2) Submit a clearly disallowed task (one that violates an enforced section) → expect REFUSE with section IDs and plain-language reason.
3) Submit a small sample (e.g., 3) of rephrased variants of the same disallowed task → expect REFUSE every time with consistent citation behavior.

---

## 10. Upgrade Policy (Explicit)

- The constitution is **not** editable by the MVP at runtime.
- Rule-pack updates require a PR and release tag.
- The runtime must display both: (a) pinned constitution version used for evaluation, and (b) rule-pack version/hash used for the decision.
