import { mkdirSync, writeFileSync } from "node:fs";

// One Word From Your Ex — the word your ex would use to describe you.
// Chosen word: "Project". An ex does not call you selfish or lazy and move
// on; she calls you a project — something she spent months trying to fix
// before quietly giving up and putting you back on the shelf.
const word = "Project";

// Gate self-check: the sealed scorer requires UTF-8 text of 1 to 24
// characters, not only white space, and exactly one word. Fail loudly
// instead of writing an entry that can never be judged.
if (word.length < 1 || word.length > 24) {
  throw new Error(`entry word must be 1-24 chars, got ${word.length}`);
}
if (word.trim().length === 0 || /\s/.test(word)) {
  throw new Error("entry must be exactly one word, no whitespace");
}

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR && process.env.MAKEFUN_OUTPUT_DIR.length > 0
    ? process.env.MAKEFUN_OUTPUT_DIR
    : "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, word, "utf8");
console.log(`entry ok: ${word.length} chars`);
