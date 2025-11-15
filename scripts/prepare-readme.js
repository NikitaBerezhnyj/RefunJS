import { copyFileSync } from "fs";

// Зберігаємо оригінальний README
copyFileSync("README.md", "README.dev.md");
// Копіюємо користувацький README
copyFileSync("docs/README.md", "README.md");
console.log("✓ README для npm підготовлено");
