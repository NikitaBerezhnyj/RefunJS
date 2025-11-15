import { renameSync, existsSync, unlinkSync } from "fs";

// Відновлюємо оригінальний README
if (existsSync("README.dev.md")) {
  renameSync("README.dev.md", "README.md");
  console.log("✓ README для розробників відновлено");
}
