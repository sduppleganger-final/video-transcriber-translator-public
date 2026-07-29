import { readFile, writeFile } from "node:fs/promises";

const [filePath, previousOrigin, nextOrigin] = process.argv.slice(2);

if (!filePath || !previousOrigin || !nextOrigin) {
  throw new Error(
    "Usage: node scripts/set-public-origin.mjs <file> <previous-origin> <next-origin>",
  );
}

const source = await readFile(filePath, "utf8");

if (!source.includes(previousOrigin)) {
  throw new Error(`Expected origin was not found: ${previousOrigin}`);
}

const revised = source.replaceAll(previousOrigin, nextOrigin);
await writeFile(filePath, revised, "utf8");

console.log(`Updated ${filePath} to use ${nextOrigin}`);
