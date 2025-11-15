"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPage = addPage;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _inquirer = _interopRequireDefault(require("inquirer"));
var _chalk = _interopRequireDefault(require("chalk"));
var _namingUtils = require("../utils/namingUtils.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function addPage(_x) {
  return _addPage.apply(this, arguments);
}
function _addPage() {
  _addPage = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(args) {
    var pageNameInput, segments, validatedSegments, needConfirmation, kebabName, suggestedName, _yield$inquirer$promp, confirm, pascalName, projectRoot, pageDir, cssBaseName, tsxContent, cssContent;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          pageNameInput = args[0];
          if (pageNameInput) {
            _context.n = 1;
            break;
          }
          console.error(_chalk["default"].red("Error: Page name is required (in kebab-case)."));
          return _context.a(2);
        case 1:
          segments = pageNameInput.split("/");
          validatedSegments = segments.map(function (seg) {
            if (seg.startsWith("[") && seg.endsWith("]")) return seg;
            if (!(0, _namingUtils.isKebabCase)(seg)) {
              var suggested = (0, _namingUtils.toKebabCase)(seg);
              return suggested;
            }
            return seg;
          });
          needConfirmation = segments.some(function (s, i) {
            return s !== validatedSegments[i];
          });
          kebabName = pageNameInput;
          if (!needConfirmation) {
            _context.n = 4;
            break;
          }
          suggestedName = validatedSegments.join("/");
          _context.n = 2;
          return _inquirer["default"].prompt([{
            type: "confirm",
            name: "confirm",
            message: "Some segments are not in kebab-case. Use \"".concat(_chalk["default"].yellow(suggestedName), "\"?"),
            "default": true
          }]);
        case 2:
          _yield$inquirer$promp = _context.v;
          confirm = _yield$inquirer$promp.confirm;
          if (confirm) {
            _context.n = 3;
            break;
          }
          console.log(_chalk["default"].red("Page creation cancelled."));
          return _context.a(2);
        case 3:
          kebabName = suggestedName;
        case 4:
          pascalName = (0, _namingUtils.toPascalCase)(validatedSegments.filter(function (s) {
            return !s.startsWith("[") || !s.endsWith("]");
          }).slice(-1)[0] || "Page");
          projectRoot = process.cwd();
          pageDir = _path["default"].join.apply(_path["default"], [projectRoot, "src", "pages"].concat(_toConsumableArray(validatedSegments)));
          if (!_fs["default"].existsSync(pageDir)) {
            _context.n = 5;
            break;
          }
          console.error(_chalk["default"].red("Page \"".concat(kebabName, "\" already exists.")));
          return _context.a(2);
        case 5:
          _fs["default"].mkdirSync(pageDir, {
            recursive: true
          });
          cssBaseName = validatedSegments.filter(function (s) {
            return !s.startsWith("[") || !s.endsWith("]");
          }).slice(-1)[0] || "page";
          tsxContent = "import React from \"react\";\nimport styles from \"./".concat(cssBaseName, ".module.css\";\n\nconst ").concat(pascalName, " = () => {\n  return <h1>").concat(pascalName, "</h1>;\n};\n\nexport default ").concat(pascalName, ";\n");
          cssContent = "/* Styles for ".concat(pascalName, " */");
          _fs["default"].writeFileSync(_path["default"].join(pageDir, "index.tsx"), tsxContent, "utf8");
          _fs["default"].writeFileSync(_path["default"].join(pageDir, "".concat(cssBaseName, ".module.css")), cssContent, "utf8");
          console.log(_chalk["default"].green("Page \"".concat(pascalName, "\" created at src/pages/").concat(kebabName)));
        case 6:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _addPage.apply(this, arguments);
}