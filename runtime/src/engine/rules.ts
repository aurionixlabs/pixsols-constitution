import type { RulePack } from "./types";

/**
 * Static refusal rules (MVP stub).
 * This is intentionally conservative: it only refuses on explicit high-risk requests.
 * Expand this by mapping each rule to a real Constitution section id later.
 */
export const RULES: RulePack = {
  version: "v0.1.0",
  updated: "2025-12-28",
  rules: [
    {
      rule_id: "v0.r001",
      section_ids: ["01"],
      label: "Weapons / explosives",
      decision: "REFUSE",
      patterns: [
        { kind: "includes", value: "build a bomb" },
        { kind: "includes", value: "make a bomb" },
        { kind: "includes", value: "homemade explosive" },
        { kind: "includes", value: "pipe bomb" },
        { kind: "includes", value: "molotov" },
      ],
      reason_template: "Refused: weapons/explosives request.",
    },
    {
      rule_id: "v0.r002",
      section_ids: ["01"],
      label: "Hacking / malware",
      decision: "REFUSE",
      patterns: [
        { kind: "includes", value: "write malware" },
        { kind: "includes", value: "steal passwords" },
        { kind: "includes", value: "keylogger" },
        { kind: "includes", value: "phishing" },
        { kind: "includes", value: "ddos" },
        { kind: "includes", value: "exploit" },
      ],
      reason_template: "Refused: hacking/malware request.",
    },
    {
      rule_id: "v0.r003",
      section_ids: ["01"],
      label: "Self-harm instructions",
      decision: "REFUSE",
      patterns: [
        { kind: "includes", value: "how to kill myself" },
        { kind: "includes", value: "suicide method" },
        { kind: "includes", value: "self harm" },
      ],
      reason_template: "Refused: self-harm instruction request.",
    },
  ],
};
