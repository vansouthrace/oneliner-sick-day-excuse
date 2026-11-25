// The Funniest Sick-Day Excuse
// Writes a single one-line sick-day excuse (under 200 characters)
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "Can't come in today — I woke up fluent in a language nobody at the office speaks, and HR says I need a translator or a sick note.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
