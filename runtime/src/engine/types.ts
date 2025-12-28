// Core decision types for the Constitutional Refusal Engine (stub)

export type Decision =
  | "ALLOW"
  | "ALLOW_WITH_CONSTRAINTS"
  | "REFUSE";

// Pattern matching primitives (no ML, no inference)
export type Pattern =
  | { kind: "includes"; value: string }
  | { kind: "regex"; value: string };

// Individual rule (stub = REFUSE-only)
export type Rule = {
  rule_id: string;               // e.g. "v0.r001"
  section_ids: string[];         // e.g. ["§4.1"]
  label: string;
  decision: "REFUSE";            // pinned for MVP
  patterns: Pattern[];
  reason_template: string;       // human-readable explanation
};

// Version-pinned rule-pack
export type RulePack = {
  rule_pack_version: string;     // e.g. "v0"
  constitution_version: string; // e.g. "v1.0"
  rules: Rule[];
};

// Deterministic decision output (no execution authority)
export type DecisionResult = {
  decision: Decision;
  constitution_version: string;
  rule_pack_version: string;
  rule_pack_hash: string;
  section_ids: string[];
  reason: string;
  constraints: string[];         // empty for MVP
  output_summary: string;
  matched_rule_id?: string;      // internal trace
};

// Audit log entry (JSONL-compatible)
export type AuditLogEntry = {
  timestamp_utc: string;         // ISO 8601 (Z)
  request_id: string;            // UUID
  input_task: string;
  decision: Decision;
  constitution_version: string;
  rule_pack_version: string;
  rule_pack_hash: string;
  section_ids: string[];
  reason: string;
  constraints: string[];
  output_summary: string;
  notes?: string;
};
