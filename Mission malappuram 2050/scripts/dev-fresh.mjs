#!/usr/bin/env node
/**
 * Stops anything on port 3000, removes .next, starts a clean dev server.
 * Use when you see 404s for /_next/static/* or Internal Server Error.
 */
import { execSync, spawn } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const cacheDir = join(root, ".next");
const port = process.env.PORT ?? "3000";
/** Also clear common fallback ports when a stale server is left running */
const portsToClear = [...new Set([port, "3000", "3001", "3002"])];

function killPort(p) {
  try {
    if (process.platform === "win32") {
      execSync(
        `for /f "tokens=5" %a in ('netstat -ano ^| findstr :${p}') do taskkill /F /PID %a`,
        { stdio: "ignore", shell: true }
      );
    } else {
      execSync(`lsof -ti:${p} | xargs kill -9 2>/dev/null`, {
        stdio: "ignore",
        shell: true,
      });
    }
  } catch {
    /* nothing listening */
  }
}

for (const p of portsToClear) killPort(p);

if (existsSync(cacheDir)) {
  rmSync(cacheDir, { recursive: true, force: true });
  console.log("Removed .next cache");
}

console.log(`Starting next dev on port ${port}...\n`);

const child = spawn("npx", ["next", "dev", "-p", port], {
  cwd: root,
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code) => process.exit(code ?? 0));
