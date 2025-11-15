"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProject = createProject;
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _inquirer = _interopRequireDefault(require("inquirer"));
var _chalk = _interopRequireDefault(require("chalk"));
var _url = require("url");
var _copyDir = require("../utils/copyDir.js");
var _replaceInFiles = require("../utils/replaceInFiles.js");
var _installDependencies = require("../utils/installDependencies.js");
var _mergeFiles = require("../utils/mergeFiles.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
function createProject(_x) {
  return _createProject.apply(this, arguments);
}
function _createProject() {
  _createProject = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(args) {
    var projectName, corePath, answers, projectPath, pkgPath, pkg, _yield$inquirer$promp, selectedFeatures, dependenciesToInstall, devDependenciesToInstall, testFeaturePath, projectPackageJsonPath, srcTests, destTests, testPkgPath, testPkg, projectPkg, i18nFeaturePath, srcDir, filesToMerge, _i, _filesToMerge, _filesToMerge$_i, target, source, i18nPkgPath, i18nPkg;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          projectName = args[0];
          corePath = _path["default"].resolve(process.cwd(), "core");
          if (projectName) {
            _context.n = 2;
            break;
          }
          _context.n = 1;
          return _inquirer["default"].prompt([{
            type: "input",
            name: "projectName",
            message: "Enter your project name:",
            validate: function validate(val) {
              return !!val || "Project name is required";
            }
          }]);
        case 1:
          answers = _context.v;
          projectName = answers.projectName;
        case 2:
          projectPath = _path["default"].resolve(process.cwd(), projectName);
          if (_fs["default"].existsSync(projectPath)) {
            console.error(_chalk["default"].red("Directory \"".concat(projectName, "\" already exists.")));
            process.exit(1);
          }
          console.log(_chalk["default"].cyan("Creating project structure..."));
          (0, _copyDir.copyDir)(corePath, projectPath);
          console.log(_chalk["default"].cyan("Configuring project files..."));
          (0, _replaceInFiles.replaceInFiles)(projectPath, "refunjs-app", projectName);
          pkgPath = _path["default"].join(projectPath, "package.json");
          if (_fs["default"].existsSync(pkgPath)) {
            pkg = JSON.parse(_fs["default"].readFileSync(pkgPath, "utf8"));
            pkg.name = projectName;
            _fs["default"].writeFileSync(pkgPath, JSON.stringify(pkg, null, 2), "utf8");
          }
          _context.n = 3;
          return _inquirer["default"].prompt([{
            type: "checkbox",
            name: "selectedFeatures",
            message: "Select features to include:\n",
            choices: [{
              name: "Tests (Jest)",
              value: "tests"
            }, {
              name: "i18n (localization support)",
              value: "i18n"
            }]
          }]);
        case 3:
          _yield$inquirer$promp = _context.v;
          selectedFeatures = _yield$inquirer$promp.selectedFeatures;
          dependenciesToInstall = [];
          devDependenciesToInstall = [];
          if (selectedFeatures.includes("tests")) {
            console.log(_chalk["default"].green("Adding feature:"), _chalk["default"].yellow("Tests"));
            testFeaturePath = _path["default"].resolve(_dirname, "../../features/test");
            projectPackageJsonPath = _path["default"].join(projectPath, "package.json");
            ["jest.config.ts", "jest.setup.ts", "global.d.ts", "tsconfig.test.json"].forEach(function (file) {
              var src = _path["default"].join(testFeaturePath, file);
              var dest = _path["default"].join(projectPath, file);
              if (_fs["default"].existsSync(src)) _fs["default"].copyFileSync(src, dest);
            });
            srcTests = _path["default"].join(testFeaturePath, "tests");
            destTests = _path["default"].join(projectPath, "tests");
            if (_fs["default"].existsSync(srcTests)) (0, _copyDir.copyDir)(srcTests, destTests);
            testPkgPath = _path["default"].join(testFeaturePath, "package.json");
            if (_fs["default"].existsSync(testPkgPath)) {
              testPkg = JSON.parse(_fs["default"].readFileSync(testPkgPath, "utf8"));
              Object.entries(testPkg.dependencies || {}).forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                  pkg = _ref2[0],
                  ver = _ref2[1];
                return dependenciesToInstall.push("".concat(pkg, "@").concat(ver));
              });
              Object.entries(testPkg.devDependencies || {}).forEach(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2),
                  pkg = _ref4[0],
                  ver = _ref4[1];
                return devDependenciesToInstall.push("".concat(pkg, "@").concat(ver));
              });
            }
            projectPkg = JSON.parse(_fs["default"].readFileSync(projectPackageJsonPath, "utf8"));
            projectPkg.scripts = projectPkg.scripts || {};
            if (!projectPkg.scripts.test) projectPkg.scripts.test = "jest --coverage --passWithNoTests";
            _fs["default"].writeFileSync(projectPackageJsonPath, JSON.stringify(projectPkg, null, 2), "utf8");
          }
          if (selectedFeatures.includes("i18n")) {
            console.log(_chalk["default"].green("Adding feature:"), _chalk["default"].yellow("i18n"));
            i18nFeaturePath = _path["default"].resolve(_dirname, "../../features/i18n");
            srcDir = _path["default"].join(projectPath, "src");
            ["i18n.ts"].forEach(function (file) {
              var src = _path["default"].join(i18nFeaturePath, file);
              var dest = _path["default"].join(srcDir, file);
              if (_fs["default"].existsSync(src) && !_fs["default"].existsSync(dest)) _fs["default"].copyFileSync(src, dest);
            });
            ["utils", "hooks", "locales"].forEach(function (folder) {
              var src = _path["default"].join(i18nFeaturePath, folder);
              var dest = _path["default"].join(srcDir, folder);
              if (_fs["default"].existsSync(src) && !_fs["default"].existsSync(dest)) (0, _copyDir.copyDir)(src, dest);
            });
            filesToMerge = [{
              target: _path["default"].join(projectPath, "src/components/Header/Header.tsx"),
              source: _path["default"].join(i18nFeaturePath, "components/Header/Header.tsx")
            }, {
              target: _path["default"].join(projectPath, "src/components/Header/Header.module.css"),
              source: _path["default"].join(i18nFeaturePath, "components/Header/Header.module.css")
            }, {
              target: _path["default"].join(projectPath, "src/pages/index.tsx"),
              source: _path["default"].join(i18nFeaturePath, "pages/index.tsx")
            }];
            for (_i = 0, _filesToMerge = filesToMerge; _i < _filesToMerge.length; _i++) {
              _filesToMerge$_i = _filesToMerge[_i], target = _filesToMerge$_i.target, source = _filesToMerge$_i.source;
              if (_fs["default"].existsSync(target) && _fs["default"].existsSync(source)) {
                try {
                  (0, _mergeFiles.mergeFiles)(target, source, target);
                } catch (error) {
                  console.error(_chalk["default"].red("\u2717 Merge failed for ".concat(_path["default"].basename(target), ": ").concat(error.message)));
                }
              } else if (_fs["default"].existsSync(source)) {
                _fs["default"].copyFileSync(source, target);
                console.log(_chalk["default"].green("\u2713 Copied ".concat(_path["default"].basename(target))));
              }
            }
            i18nPkgPath = _path["default"].join(i18nFeaturePath, "package.json");
            if (_fs["default"].existsSync(i18nPkgPath)) {
              i18nPkg = JSON.parse(_fs["default"].readFileSync(i18nPkgPath, "utf8"));
              Object.entries(i18nPkg.dependencies || {}).forEach(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2),
                  pkg = _ref6[0],
                  ver = _ref6[1];
                return dependenciesToInstall.push("".concat(pkg, "@").concat(ver));
              });
              Object.entries(i18nPkg.devDependencies || {}).forEach(function (_ref7) {
                var _ref8 = _slicedToArray(_ref7, 2),
                  pkg = _ref8[0],
                  ver = _ref8[1];
                return devDependenciesToInstall.push("".concat(pkg, "@").concat(ver));
              });
            }
          }
          console.log(_chalk["default"].cyan("Installing dependencies..."));
          (0, _installDependencies.installDependencies)(projectPath, dependenciesToInstall, devDependenciesToInstall);
          console.log("\n".concat(_chalk["default"].bold.green("Project created successfully!"), "\n"));
          console.log("To get started:\n" + _chalk["default"].cyan("  cd ".concat(projectName, "\n")) + _chalk["default"].cyan("  npm run dev\n"));
        case 4:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _createProject.apply(this, arguments);
}