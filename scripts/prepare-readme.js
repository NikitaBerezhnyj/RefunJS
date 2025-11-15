import { copyFileSync } from "fs";

copyFileSync("README.md", "README.dev.md");

copyFileSync("docs/README.md", "README.md");
console.log("✓ README для npm підготовлено");
