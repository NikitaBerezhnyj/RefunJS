import { spawn } from "child_process";

export function installCommand(args) {
  if (args.length === 0) {
    console.log("Please specify at least one package to install.");
    return;
  }

  const npm = spawn("npm", ["install", ...args], { stdio: "inherit" });

  npm.on("close", (code) => {
    if (code === 0) console.log("Installation completed successfully!");
    else console.error(`npm exited with code ${code}`);
  });
}
