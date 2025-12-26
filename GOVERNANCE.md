# Pixsols Constitution — Governance & Amendments

This document defines how the Pixsols Constitution may be amended, reviewed, and ratified.

The Constitution is treated as a binding, non-bypassable reference. Changes are intentionally slow, reviewable, and explicit.

---

## 1. What Counts as an Amendment

An amendment includes any change to:
- Constitutional text in `/constitution`
- Section ordering, numbering, or definitions
- Enforcement language, constraints, or guarantees
- Amendment, ratification, or governance procedures themselves

Non-substantive changes (formatting, spelling) are still treated as amendments.

---

## 2. Amendment Process (Required)

All amendments MUST follow this workflow:

1. Create a new branch from `main`
2. Apply proposed changes in that branch
3. Open a Pull Request (PR) targeting `main`
4. PR must clearly describe:
   - What changed
   - Why the change is necessary
   - Whether it alters scope, authority, or enforcement
5. PR must receive required approvals
6. PR is merged into `main`
7. A new version tag is created (see Versioning)

Direct commits to `main` are prohibited.

---

## 3. Approval Authority

Current approval requirements:
- Minimum approvals required: **1**
- Final approval authority: **Repository owner (Aurionix Labs)**

If additional collaborators are added in the future, approval requirements may be increased, but never reduced without an amendment.

---

## 4. Versioning & Releases

- Ratified versions are tagged using semantic versioning:
  - `v1.0`, `v1.1`, `v1.2`, etc.
- Each merged amendment requires a new release tag
- Release notes must summarize the amendment scope
- The most recent tag represents the active Constitution

---

## 5. Immutability Principle

Once a version is ratified and released:
- It remains permanently accessible
- It may not be altered retroactively
- Supersession only occurs via a newer tagged release

---

## 6. Intent

Governance exists to preserve legitimacy, clarity, and constraint.
Convenience is never a valid reason to bypass this process.
