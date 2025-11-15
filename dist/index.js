#!/usr/bin/env node
"use strict";

var _process = require("process");
var _createProject = require("./commands/createProject.js");
var _addPage = require("./commands/addPage.js");
var _addComponent = require("./commands/addComponent.js");
var _installCommand = require("./commands/installCommand.js");
var _helpCommand = require("./commands/helpCommand.js");
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _argv = _toArray(_process.argv),
  command = _argv[2],
  args = _arrayLikeToArray(_argv).slice(3);
switch (command) {
  case "create":
    (0, _createProject.createProject)(args);
    break;
  case "add-page":
    (0, _addPage.addPage)(args);
    break;
  case "add-component":
    (0, _addComponent.addComponent)(args);
    break;
  case "install":
    (0, _installCommand.installCommand)(args);
    break;
  case "help":
    (0, _helpCommand.helpCommand)();
    break;
  default:
    console.log("Unknown command. Available commands: create, add-page, add-component, install, help");
}