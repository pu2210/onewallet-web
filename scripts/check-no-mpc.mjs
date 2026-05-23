#!/usr/bin/env node
/* No-MPC residual gate.
 * Fails (exit 1) if any "MPC" or "multi-party" term appears in shipped surfaces.
 * The product custody model is Shamir's Secret Sharing / Multi-Share — the public
 * narrative must not carry stale MPC terminology across site, corpus, and llms feeds.
 *
 * Standalone by design: it does NOT live in shared/banned-claims.js, because that
 * BANNED list is also imported by the assistant Worker's claim filter — banning "MPC"
 * there would make the live bot refuse user messages that merely contain "MPC".
 *
 * Run:  node scripts/check-no-mpc.mjs
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');

// Same shipped set as check-claim-safety.mjs (parity), plus the build source
// so corpus chapters can't reintroduce MPC into the generated json.
const FILES = [
  'index.html',
  'whitepaper.html',
  'llms.txt',
  'llms-full.txt',
  'assets/assistant-knowledge.js',
  'assets/assistant-knowledge.json',
  'assets/i18n.js',
  'scripts/build-assistant-corpus.mjs'
];

const PATTERNS = [
  /\bMPC\b/i,
  /multi-?part(y|ie)/i
];

let failures = 0;

for (const rel of FILES) {
  const path = resolve(ROOT, rel);
  if (!existsSync(path)) continue;
  const lines = readFileSync(path, 'utf8').split('\n');
  lines.forEach((text, i) => {
    for (const re of PATTERNS) {
      const m = re.exec(text);
      if (m) {
        console.error(`✗ ${rel}:${i + 1}  → "${m[0]}"`);
        failures++;
        break; // one hit per line is enough to flag it
      }
    }
  });
}

if (failures > 0) {
  console.error(`\n${failures} MPC/multi-party residual hit(s). Rebrand to Shamir / Multi-Share terminology.`);
  process.exit(1);
}
console.log('✓ no-mpc: no MPC / multi-party residue in shipped surfaces.');
