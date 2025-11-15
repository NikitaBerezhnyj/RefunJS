import { renameSync, existsSync, unlinkSync } from "fs";

if (existsSync("README.dev.md")) {
  renameSync("README.dev.md", "README.md");
  console.log("✓ README для розробників відновлено");
}
