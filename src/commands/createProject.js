import path from "path";
import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { copyDir } from "../utils/copyDir.js";
import { replaceInFiles } from "../utils/replaceInFiles.js";
import { installDependencies } from "../utils/installDependencies.js";
import { mergeFiles } from "../utils/mergeFiles.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject(args) {
  let projectName = args[0];
  const corePath = path.resolve(process.cwd(), "core");

  if (!projectName) {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Enter your project name:",
        validate: (val) => !!val || "Project name is required",
      },
    ]);
    projectName = answers.projectName;
  }

  const projectPath = path.resolve(process.cwd(), projectName);
  if (fs.existsSync(projectPath)) {
    console.error(chalk.red(`Directory "${projectName}" already exists.`));
    process.exit(1);
  }

  console.log(chalk.cyan("Creating project structure..."));
  copyDir(corePath, projectPath);

  console.log(chalk.cyan("Configuring project files..."));
  replaceInFiles(projectPath, "refunjs-app", projectName);

  const pkgPath = path.join(projectPath, "package.json");
  if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    pkg.name = projectName;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), "utf8");
  }

  const { selectedFeatures } = await inquirer.prompt([
    {
      type: "checkbox",
      name: "selectedFeatures",
      message: "Select features to include:\n",
      choices: [
        { name: "Tests (Jest)", value: "tests" },
        { name: "i18n (localization support)", value: "i18n" },
      ],
    },
  ]);

  const dependenciesToInstall = [];
  const devDependenciesToInstall = [];

  if (selectedFeatures.includes("tests")) {
    console.log(chalk.green("Adding feature:"), chalk.yellow("Tests"));
    const testFeaturePath = path.resolve(__dirname, "../../features/test");
    const projectPackageJsonPath = path.join(projectPath, "package.json");

    [
      "jest.config.ts",
      "jest.setup.ts",
      "global.d.ts",
      "tsconfig.test.json",
    ].forEach((file) => {
      const src = path.join(testFeaturePath, file);
      const dest = path.join(projectPath, file);
      if (fs.existsSync(src)) fs.copyFileSync(src, dest);
    });

    const srcTests = path.join(testFeaturePath, "tests");
    const destTests = path.join(projectPath, "tests");
    if (fs.existsSync(srcTests)) copyDir(srcTests, destTests);

    const testPkgPath = path.join(testFeaturePath, "package.json");
    if (fs.existsSync(testPkgPath)) {
      const testPkg = JSON.parse(fs.readFileSync(testPkgPath, "utf8"));
      Object.entries(testPkg.dependencies || {}).forEach(([pkg, ver]) =>
        dependenciesToInstall.push(`${pkg}@${ver}`)
      );
      Object.entries(testPkg.devDependencies || {}).forEach(([pkg, ver]) =>
        devDependenciesToInstall.push(`${pkg}@${ver}`)
      );
    }

    const projectPkg = JSON.parse(
      fs.readFileSync(projectPackageJsonPath, "utf8")
    );
    projectPkg.scripts = projectPkg.scripts || {};
    if (!projectPkg.scripts.test)
      projectPkg.scripts.test = "jest --coverage --passWithNoTests";
    fs.writeFileSync(
      projectPackageJsonPath,
      JSON.stringify(projectPkg, null, 2),
      "utf8"
    );
  }

  if (selectedFeatures.includes("i18n")) {
    console.log(chalk.green("Adding feature:"), chalk.yellow("i18n"));
    const i18nFeaturePath = path.resolve(__dirname, "../../features/i18n");
    const srcDir = path.join(projectPath, "src");

    ["i18n.ts"].forEach((file) => {
      const src = path.join(i18nFeaturePath, file);
      const dest = path.join(srcDir, file);
      if (fs.existsSync(src) && !fs.existsSync(dest))
        fs.copyFileSync(src, dest);
    });

    ["utils", "hooks", "locales"].forEach((folder) => {
      const src = path.join(i18nFeaturePath, folder);
      const dest = path.join(srcDir, folder);
      if (fs.existsSync(src) && !fs.existsSync(dest)) copyDir(src, dest);
    });

    const filesToMerge = [
      {
        target: path.join(projectPath, "src/components/Header/Header.tsx"),
        source: path.join(i18nFeaturePath, "components/Header/Header.tsx"),
      },
      {
        target: path.join(
          projectPath,
          "src/components/Header/Header.module.css"
        ),
        source: path.join(
          i18nFeaturePath,
          "components/Header/Header.module.css"
        ),
      },
      {
        target: path.join(projectPath, "src/pages/index.tsx"),
        source: path.join(i18nFeaturePath, "pages/index.tsx"),
      },
    ];

    for (const { target, source } of filesToMerge) {
      if (fs.existsSync(target) && fs.existsSync(source)) {
        try {
          mergeFiles(target, source, target);
        } catch (error) {
          console.error(
            chalk.red(
              `✗ Merge failed for ${path.basename(target)}: ${error.message}`
            )
          );
        }
      } else if (fs.existsSync(source)) {
        fs.copyFileSync(source, target);
        console.log(chalk.green(`✓ Copied ${path.basename(target)}`));
      }
    }

    const i18nPkgPath = path.join(i18nFeaturePath, "package.json");
    if (fs.existsSync(i18nPkgPath)) {
      const i18nPkg = JSON.parse(fs.readFileSync(i18nPkgPath, "utf8"));
      Object.entries(i18nPkg.dependencies || {}).forEach(([pkg, ver]) =>
        dependenciesToInstall.push(`${pkg}@${ver}`)
      );
      Object.entries(i18nPkg.devDependencies || {}).forEach(([pkg, ver]) =>
        devDependenciesToInstall.push(`${pkg}@${ver}`)
      );
    }
  }

  console.log(chalk.cyan("Installing dependencies..."));
  installDependencies(
    projectPath,
    dependenciesToInstall,
    devDependenciesToInstall
  );

  console.log(`\n${chalk.bold.green("Project created successfully!")}\n`);
  console.log(
    `To get started:\n` +
      chalk.cyan(`  cd ${projectName}\n`) +
      chalk.cyan(`  npm run dev\n`)
  );
}
