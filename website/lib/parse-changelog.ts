import fs from "node:fs";
import path from "node:path";
import { cache } from "react";

export const parseChangeLog = cache(() => {
const changelogPath = path.join(process.cwd(), "..", "CHANGELOG.md");
  const changelogContent = fs.readFileSync(changelogPath, "utf-8");
  const changelogLines = changelogContent.split("\n");

  const changelog = [];
  let currentVersion: { version: string; changes: { type: string; details: string[] }[] } | null = null;

  for (const line of changelogLines) {
    if (line.startsWith("## ")) {
      currentVersion = { version: line.replace("## ", "").trim(), changes: [] };
      changelog.push(currentVersion);
    } else if (line.startsWith("### ")) {
      currentVersion?.changes.push({ type: line.replace("### ", "").trim(), details: [] });
    } else if (line.startsWith("- ")) {
      currentVersion?.changes[currentVersion.changes.length - 1].details.push(line.replace("- ", "").trim());
    }
  }

  return changelog;
});


