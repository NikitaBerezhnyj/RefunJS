#!/usr/bin/env node
import { argv } from "process";
import { createProject } from "./commands/createProject.js";
import { addPage } from "./commands/addPage.js";
import { addComponent } from "./commands/addComponent.js";
import { installCommand } from "./commands/installCommand.js";
import { helpCommand } from "./commands/helpCommand.js";

const [, , command, ...args] = argv;

switch (command) {
  case "create":
    createProject(args);
    break;
  case "add-page":
    addPage(args);
    break;
  case "add-component":
    addComponent(args);
    break;
  case "install":
    installCommand(args);
    break;
  case "help":
    helpCommand();
    break;
  default:
    console.log(
      "Unknown command. Available commands: create, add-page, add-component, install, help"
    );
}
