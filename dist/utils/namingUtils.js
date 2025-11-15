"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isKebabCase = isKebabCase;
exports.isPascalCase = isPascalCase;
exports.toKebabCase = toKebabCase;
exports.toPascalCase = toPascalCase;
function isPascalCase(str) {
  return /^[A-Z][A-Za-z0-9]+$/.test(str);
}
function toPascalCase(str) {
  return str.split("-").map(function (s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }).join("");
}
function isKebabCase(str) {
  return /^[a-z][a-z0-9\-]*$/.test(str);
}
function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}