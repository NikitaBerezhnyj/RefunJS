import { readFileSync, writeFileSync } from "fs";
import { diffLines } from "diff";

export function mergeFiles(
  baseFilePath,
  incomingFilePath,
  outputFilePath = null
) {
  try {
    const baseContent = readFileSync(baseFilePath, "utf-8");
    const incomingContent = readFileSync(incomingFilePath, "utf-8");

    if (baseContent === incomingContent) {
      if (outputFilePath) writeFileSync(outputFilePath, baseContent, "utf-8");
      return baseContent;
    }

    const diff = diffLines(baseContent, incomingContent);
    let mergedContent = "";

    for (const part of diff) {
      if (!part.removed) mergedContent += part.value;
    }

    if (outputFilePath) writeFileSync(outputFilePath, mergedContent, "utf-8");
    return mergedContent;
  } catch (error) {
    console.error(`Error while merging files: ${error.message}`);
    throw error;
  }
}

export function analyzeChanges(baseFilePath, incomingFilePath) {
  try {
    const baseContent = readFileSync(baseFilePath, "utf-8");
    const incomingContent = readFileSync(incomingFilePath, "utf-8");
    const diff = diffLines(baseContent, incomingContent);

    let added = 0,
      removed = 0,
      unchanged = 0;

    for (const part of diff) {
      const lines = part.value.split("\n").length - 1;
      if (part.added) added += lines;
      else if (part.removed) removed += lines;
      else unchanged += lines;
    }

    return { added, removed, unchanged, hasChanges: added > 0 || removed > 0 };
  } catch (error) {
    console.error(`Error while analyzing changes: ${error.message}`);
    throw error;
  }
}
