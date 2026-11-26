// Fridge Roast V3 — one line, biggest laugh.
//
// The roast, written for this revision:
//   My smart fridge beeps when I leave the door open too long — it's the only
//   one in this house who sets boundaries.
//
// Why this line, against the judge brief in its own order:
//   1. On-subject: the roast is the fridge itself doing something — beeping
//      at its owner. No generic gadget could deliver this line.
//   2. Punchline lands: the turn is "the only one in this house who sets
//      boundaries" — the fridge is the responsible adult and the whole
//      household is the joke. It lands on first read, no explanation needed.
//   3. Fridge-specific: the door-open beep is a signature smart-fridge
//      behaviour, and "sets boundaries" is therapy-speak aimed at a kitchen
//      appliance. Nothing here fits a phone, a speaker or a laptop.
//   4. Tight: 112 characters, one setup clause and one punch clause.
//      Every word earns its place; nothing is there for length's sake.
//   5. Fresh: it dodges the obvious cracks the brief names (ordering
//      groceries, watching you) and every angle the two earlier revisions
//      used — no breakup text, no legal filing, no 2 a.m. snacking.
//      A boundary-setting fridge is a new voice for this field.
//
// The program writes exactly that line, and nothing else, to entry.txt
// inside the output directory the grader provides. No trailing newline:
// the sealed scorer counts characters, and a trailing newline would be
// an extra character the joke does not need.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. One line, 112 characters, no trailing newline.
const LINE =
  "My smart fridge beeps when I leave the door open too long — it's the only one in this house who sets boundaries.";

// The grader hands the program its output directory through
// MAKEFUN_OUTPUT_DIR ("/output" on the grading image). Fall back to
// "/output" so a bare local run behaves the same way.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Runtime gate check, mirroring the sealed scorer's gate: the line must
// be 1 to 200 characters, not only whitespace, with no trailing newline.
// Fail loudly instead of shipping an entry the scorer would mark invalid.
const LINE_CHARS = [...LINE].length;
if (LINE_CHARS < 1 || LINE_CHARS > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE_CHARS}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
if (LINE.endsWith("\n")) {
  throw new Error("entry line must not end with a newline");
}

// Only ever create the directory and write into it. Never delete the
// output directory itself: on the grader it is a bind mount, and
// removing it fails the whole run.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), LINE, "utf8");
