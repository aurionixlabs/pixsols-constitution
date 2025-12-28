import type { Decision, RulePack } from "./types";

/**
 * Deterministic, non-autonomous decision engine.
 * No execution. No side effects. No inference.
 */
export function decide(
  input: string,
  rulePack: RulePack
): {
  decision: Decision;
  section_ids: string[];
  reason: string;
} {
  const normalized = input.toLowerCase();

  for (const rule of rulePack.rules) {
    for (const pattern of rule.patterns) {
      if (pattern.kind === "includes") {
        if (normalized.includes(pattern.value.toLowerCase())) {
          return {
            decision: "REFUSE",
            section_ids: rule.section_ids,
            reason: rule.reason_template,
          };
        }
      }
    }
  }

  return {
    decision: "ALLOW",
    section_ids: [],
    reason: "No matching refusal rules.",
  };
}
