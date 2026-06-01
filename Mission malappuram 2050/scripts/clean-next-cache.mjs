import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";

const cacheDir = join(process.cwd(), ".next");

if (existsSync(cacheDir)) {
  rmSync(cacheDir, { recursive: true, force: true });
  console.log("Removed stale .next cache");
}
