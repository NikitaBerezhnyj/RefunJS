"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helpCommand = helpCommand;
var _chalk = _interopRequireDefault(require("chalk"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function helpCommand() {
  console.log(_chalk["default"].bold.cyan("\nRefun CLI - Available Commands\n"));
  console.log(_chalk["default"].green("create") + " " + _chalk["default"].yellow("<project-name>") + "\n  Creates a new project with the given name. You will be prompted to select features to include.");
  console.log(_chalk["default"].green("add-page") + " " + _chalk["default"].yellow("<page-name>") + "\n  Adds a new page to your project. Page name should be in kebab-case. Nested pages can be created using slashes (e.g., blog/post).");
  console.log(_chalk["default"].green("add-component") + " " + _chalk["default"].yellow("<component-name>") + "\n  Adds a new React component to your project. Component name should be in PascalCase.");
  console.log(_chalk["default"].green("install") + " " + _chalk["default"].yellow("<package-names>") + "\n  Installs one or more npm packages into your project. Automatically uses yarn if yarn.lock is present.");
  console.log(_chalk["default"].green("help") + "\n  Displays this help message.");
  console.log(_chalk["default"].cyan("\nExamples:\n") + "  refunjs create my-app\n" + "  refunjs add-page about-us\n" + "  refunjs add-component Header\n" + "  refunjs install react react-dom\n");
  console.log(_chalk["default"].bold.cyan("For more information, visit: https://github.com/NikitaBerezhnyj/RefunJS\n"));
}