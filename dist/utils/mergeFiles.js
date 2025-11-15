"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.analyzeChanges = analyzeChanges;
exports.mergeFiles = mergeFiles;
var _fs = require("fs");
var _diff = require("diff");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function mergeFiles(baseFilePath, incomingFilePath) {
  var outputFilePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  try {
    var baseContent = (0, _fs.readFileSync)(baseFilePath, "utf-8");
    var incomingContent = (0, _fs.readFileSync)(incomingFilePath, "utf-8");
    if (baseContent === incomingContent) {
      if (outputFilePath) (0, _fs.writeFileSync)(outputFilePath, baseContent, "utf-8");
      return baseContent;
    }
    var diff = (0, _diff.diffLines)(baseContent, incomingContent);
    var mergedContent = "";
    var _iterator = _createForOfIteratorHelper(diff),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var part = _step.value;
        if (!part.removed) mergedContent += part.value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (outputFilePath) (0, _fs.writeFileSync)(outputFilePath, mergedContent, "utf-8");
    return mergedContent;
  } catch (error) {
    console.error("Error while merging files: ".concat(error.message));
    throw error;
  }
}
function analyzeChanges(baseFilePath, incomingFilePath) {
  try {
    var baseContent = (0, _fs.readFileSync)(baseFilePath, "utf-8");
    var incomingContent = (0, _fs.readFileSync)(incomingFilePath, "utf-8");
    var diff = (0, _diff.diffLines)(baseContent, incomingContent);
    var added = 0,
      removed = 0,
      unchanged = 0;
    var _iterator2 = _createForOfIteratorHelper(diff),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var part = _step2.value;
        var lines = part.value.split("\n").length - 1;
        if (part.added) added += lines;else if (part.removed) removed += lines;else unchanged += lines;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return {
      added: added,
      removed: removed,
      unchanged: unchanged,
      hasChanges: added > 0 || removed > 0
    };
  } catch (error) {
    console.error("Error while analyzing changes: ".concat(error.message));
    throw error;
  }
}