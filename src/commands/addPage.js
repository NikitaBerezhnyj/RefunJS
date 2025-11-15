import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";
import {
  toPascalCase,
  isKebabCase,
  toKebabCase,
} from "../utils/namingUtils.js";

export async function addPage(args) {
  const pageNameInput = args[0];

  if (!pageNameInput) {
    console.error(chalk.red("Error: Page name is required (in kebab-case)."));
    return;
  }

  const segments = pageNameInput.split("/");

  const validatedSegments = segments.map((seg) => {
    if (seg.startsWith("[") && seg.endsWith("]")) return seg;
    if (!isKebabCase(seg)) {
      const suggested = toKebabCase(seg);
      return suggested;
    }
    return seg;
  });

  const needConfirmation = segments.some((s, i) => s !== validatedSegments[i]);
  let kebabName = pageNameInput;
  if (needConfirmation) {
    const suggestedName = validatedSegments.join("/");
    const { confirm } = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: `Some segments are not in kebab-case. Use "${chalk.yellow(
          suggestedName
        )}"?`,
        default: true,
      },
    ]);
    if (!confirm) {
      console.log(chalk.red("Page creation cancelled."));
      return;
    }
    kebabName = suggestedName;
  }

  const pascalName = toPascalCase(
    validatedSegments
      .filter((s) => !s.startsWith("[") || !s.endsWith("]"))
      .slice(-1)[0] || "Page"
  );

  const projectRoot = process.cwd();
  const pageDir = path.join(projectRoot, "src", "pages", ...validatedSegments);

  if (fs.existsSync(pageDir)) {
    console.error(chalk.red(`Page "${kebabName}" already exists.`));
    return;
  }

  fs.mkdirSync(pageDir, { recursive: true });

  const cssBaseName =
    validatedSegments
      .filter((s) => !s.startsWith("[") || !s.endsWith("]"))
      .slice(-1)[0] || "page";

  const tsxContent = `import React from "react";
import styles from "./${cssBaseName}.module.css";

const ${pascalName} = () => {
  return <h1>${pascalName}</h1>;
};

export default ${pascalName};
`;

  const cssContent = `/* Styles for ${pascalName} */`;

  fs.writeFileSync(path.join(pageDir, "index.tsx"), tsxContent, "utf8");
  fs.writeFileSync(
    path.join(pageDir, `${cssBaseName}.module.css`),
    cssContent,
    "utf8"
  );

  console.log(
    chalk.green(`Page "${pascalName}" created at src/pages/${kebabName}`)
  );
}
