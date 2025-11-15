"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installDependencies = installDependencies;
var _child_process = require("child_process");
function installDependencies(projectPath) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var devDependencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  try {
    if (dependencies.length > 0) (0, _child_process.execSync)("npm install ".concat(dependencies.join(" ")), {
      cwd: projectPath,
      stdio: "inherit"
    });
    if (devDependencies.length > 0) (0, _child_process.execSync)("npm install -D ".concat(devDependencies.join(" ")), {
      cwd: projectPath,
      stdio: "inherit"
    });
    (0, _child_process.execSync)("npm install", {
      cwd: projectPath,
      stdio: "inherit"
    });
  } catch (err) {
    console.error("Dependency installation failed.", err);
  }
}