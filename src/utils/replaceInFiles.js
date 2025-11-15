import fs from "fs";
import path from "path";

export function replaceInFiles(dir, search, replace) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      replaceInFiles(filePath, search, replace);
    } else {
      try {
        let content = fs.readFileSync(filePath, "utf8");
        if (content.includes(search)) {
          content = content.replace(new RegExp(search, "g"), replace);
          fs.writeFileSync(filePath, content, "utf8");
        }
      } catch {}
    }
  }
}
