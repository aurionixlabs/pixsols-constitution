import { decide } from "./engine/decide";
import { RULES } from "./engine/rules";

// Temporary manual input for MVP testing
const input = process.argv.slice(2).join(" ");

if (!input) {
  console.log("Usage: npm run dev -- \"your text here\"");
  process.exit(0);
}

const result = decide(input, RULES);

console.log(JSON.stringify(result, null, 2));
