import { execSync } from "child_process";

export function installDependencies(
  projectPath,
  dependencies = [],
  devDependencies = []
) {
  try {
    if (dependencies.length > 0)
      execSync(`npm install ${dependencies.join(" ")}`, {
        cwd: projectPath,
        stdio: "inherit",
      });

    if (devDependencies.length > 0)
      execSync(`npm install -D ${devDependencies.join(" ")}`, {
        cwd: projectPath,
        stdio: "inherit",
      });

    execSync("npm install", { cwd: projectPath, stdio: "inherit" });
  } catch (err) {
    console.error("Dependency installation failed.", err);
  }
}
