import chalk from "chalk";

export function helpCommand() {
  console.log(chalk.bold.cyan("\nRefun CLI - Available Commands\n"));

  console.log(
    chalk.green("create") +
      " " +
      chalk.yellow("<project-name>") +
      "\n  Creates a new project with the given name. You will be prompted to select features to include."
  );

  console.log(
    chalk.green("add-page") +
      " " +
      chalk.yellow("<page-name>") +
      "\n  Adds a new page to your project. Page name should be in kebab-case. Nested pages can be created using slashes (e.g., blog/post)."
  );

  console.log(
    chalk.green("add-component") +
      " " +
      chalk.yellow("<component-name>") +
      "\n  Adds a new React component to your project. Component name should be in PascalCase."
  );

  console.log(
    chalk.green("install") +
      " " +
      chalk.yellow("<package-names>") +
      "\n  Installs one or more npm packages into your project. Automatically uses yarn if yarn.lock is present."
  );

  console.log(chalk.green("help") + "\n  Displays this help message.");

  console.log(
    chalk.cyan("\nExamples:\n") +
      "  refunjs create my-app\n" +
      "  refunjs add-page about-us\n" +
      "  refunjs add-component Header\n" +
      "  refunjs install react react-dom\n"
  );

  console.log(
    chalk.bold.cyan(
      "For more information, visit: https://github.com/NikitaBerezhnyj/RefunJS\n"
    )
  );
}
