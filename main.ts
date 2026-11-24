// main.ts — entry for post-x-promote-make-your-own-bounty-01.
//
// The entry itself is a post on X that quotes make.fun's make-your-own-bounty
// post. This program does nothing about the post; it only hands the post's
// address to the grader by copying POST.json from the repository into the
// output directory, where the gate reads it.
//
// Node 22, standard library only. Run locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(repoDir, 'POST.json');
const target = join(outputDir, 'POST.json');

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
  // Success is silent: the gate reads /output/POST.json itself, so this
  // program prints nothing when the copy works.
} catch (error) {
  console.error(
    `Failed to copy POST.json from ${repoDir} to ${outputDir}: ${(error as Error).message}`,
  );
  process.exit(1);
}
