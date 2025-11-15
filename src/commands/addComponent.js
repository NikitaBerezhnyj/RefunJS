import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";
import { toPascalCase, isPascalCase } from "../utils/namingUtils.js";

export async function addComponent(args) {
  const componentNameInput = args[0];

  if (!componentNameInput) {
    console.error(chalk.red("Error: Component name is required (PascalCase)."));
    return;
  }

  let componentName = componentNameInput;

  if (!isPascalCase(componentName)) {
    const suggested = toPascalCase(componentName);

    const { confirm } = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: `Component name should be PascalCase. Use "${chalk.yellow(
          suggested
        )}" instead?`,
        default: true,
      },
    ]);

    if (!confirm) {
      console.log(chalk.red("Component creation cancelled."));
      return;
    } else {
      componentName = suggested;
    }
  }

  const projectRoot = process.cwd();
  const componentDir = path.join(
    projectRoot,
    "src",
    "components",
    componentName
  );

  if (fs.existsSync(componentDir)) {
    console.error(chalk.red(`Component "${componentName}" already exists.`));
    return;
  }

  fs.mkdirSync(componentDir, { recursive: true });

  const tsxContent = `import React from "react";
import styles from "./${componentName}.module.css";

const ${componentName} = () => {
  return <div>${componentName}</div>;
};

export default ${componentName};
`;

  const cssContent = `/* Styles for ${componentName} */\n`;

  fs.writeFileSync(
    path.join(componentDir, `${componentName}.tsx`),
    tsxContent,
    "utf8"
  );
  fs.writeFileSync(
    path.join(componentDir, `${componentName}.module.css`),
    cssContent,
    "utf8"
  );

  console.log(
    chalk.green(
      `Component "${componentName}" created at src/components/${componentName}/${componentName}.tsx`
    )
  );
}
