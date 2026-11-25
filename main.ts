// One Line, No Deadline Met — make.fun bounty u-markk-st-one-line-no-deadline-met-6adc00ce
// Writes a single-line joke excusing a missed deadline to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I outsourced the deadline to Future Me, and Future Me just handed in his resignation.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space, and a single line. Fail loudly instead of shipping
// an entry the judge never sees.
if (!LINE.trim() || LINE.length > 200 || LINE.includes("\n")) {
  console.error(`Invalid entry line (${LINE.length} chars)`);
  process.exit(1);
}

const out = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${out}/entry.txt`);
