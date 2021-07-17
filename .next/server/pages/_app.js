(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/theme.ts":
/*!**************************!*\
  !*** ./src/lib/theme.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const font = "'Lato', sans-serif";
let theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      main: '#246EB9'
    },
    secondary: {
      main: '#16ff4c'
    },
    error: {
      main: '#F06543'
    },
    warning: {
      main: '#F5EE9E'
    },
    info: {
      main: '#16c9ff'
    },
    success: {
      main: '#16ff4c'
    },
    background: {
      default: '#FDFFFC'
    }
  },
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 74
    },
    h2: {
      fontSize: 62
    },
    h3: {
      fontSize: 50
    },
    h4: {
      fontSize: 42
    },
    h5: {
      fontSize: 32
    },
    h6: {
      fontSize: 24
    },
    subtitle1: {
      fontSize: 22
    },
    subtitle2: {
      fontSize: 20
    },
    body1: {
      fontSize: 18
    },
    body2: {
      fontSize: 16
    }
  }
});
theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.responsiveFontSizes)(theme);
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cache": function() { return /* binding */ cache; },
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/cache */ "@emotion/cache");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/theme */ "./src/lib/theme.ts");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles/globals.scss */ "./src/scss/globals.scss");
/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Work\\dashboard\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const cache = _emotion_cache__WEBPACK_IMPORTED_MODULE_7___default()({
  key: 'css',
  prepend: true
});
const title = 'NextJs | Material-dashboard';
const keywords = 'Keywords for seo';
const description = 'Describe what this site does/provides';
function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.CacheProvider, {
    value: cache,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1 width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "keywords",
        content: keywords
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
      theme: _lib_theme__WEBPACK_IMPORTED_MODULE_8__.default,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
        key: router.route,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/scss/globals.scss":
/*!*******************************!*\
  !*** ./src/scss/globals.scss ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@emotion/react");;

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/CssBaseline");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvbGliL3RoZW1lLnRzIiwid2VicGFjazovL2Rhc2hib2FyZC8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAZW1vdGlvbi9jYWNoZVwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBlbW90aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZm9udCIsInRoZW1lIiwiY3JlYXRlVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsIndhcm5pbmciLCJpbmZvIiwic3VjY2VzcyIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJoMSIsImZvbnRTaXplIiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsInN1YnRpdGxlMSIsInN1YnRpdGxlMiIsImJvZHkxIiwiYm9keTIiLCJyZXNwb25zaXZlRm9udFNpemVzIiwiY2FjaGUiLCJjcmVhdGVDYWNoZSIsImtleSIsInByZXBlbmQiLCJ0aXRsZSIsImtleXdvcmRzIiwiZGVzY3JpcHRpb24iLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwi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QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFTRSw4REFBQyxtRUFBRDtBQUFlLFdBQUssRUFBRWhDLCtDQUF0QjtBQUFBLDhCQUNFLDhEQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFEQUFDLFNBQUQsa0NBQWVvQyxTQUFmO0FBQTBCLFdBQUcsRUFBRUMsTUFBTSxDQUFDRSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNELDRDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGNyZWF0ZVRoZW1lLFxyXG4gIHJlc3BvbnNpdmVGb250U2l6ZXNcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCBmb250ID0gXCInTGF0bycsIHNhbnMtc2VyaWZcIlxyXG5cclxubGV0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJyMyNDZFQjknXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjMTZmZjRjJ1xyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46ICcjRjA2NTQzJ1xyXG4gICAgfSxcclxuICAgIHdhcm5pbmc6IHtcclxuICAgICAgbWFpbjogJyNGNUVFOUUnXHJcbiAgICB9LFxyXG4gICAgaW5mbzoge1xyXG4gICAgICBtYWluOiAnIzE2YzlmZidcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiB7XHJcbiAgICAgIG1haW46ICcjMTZmZjRjJ1xyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJyNGREZGRkMnXHJcbiAgICB9XHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBmb250RmFtaWx5OiBmb250LFxyXG4gICAgaDE6IHtcclxuICAgICAgZm9udFNpemU6IDc0XHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgZm9udFNpemU6IDYyXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFNpemU6IDUwXHJcbiAgICB9LFxyXG4gICAgaDQ6IHtcclxuICAgICAgZm9udFNpemU6IDQyXHJcbiAgICB9LFxyXG4gICAgaDU6IHtcclxuICAgICAgZm9udFNpemU6IDMyXHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgZm9udFNpemU6IDI0XHJcbiAgICB9LFxyXG4gICAgc3VidGl0bGUxOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyMlxyXG4gICAgfSxcclxuICAgIHN1YnRpdGxlMjoge1xyXG4gICAgICBmb250U2l6ZTogMjBcclxuICAgIH0sXHJcbiAgICBib2R5MToge1xyXG4gICAgICBmb250U2l6ZTogMThcclxuICAgIH0sXHJcbiAgICBib2R5Mjoge1xyXG4gICAgICBmb250U2l6ZTogMTZcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG50aGVtZSA9IHJlc3BvbnNpdmVGb250U2l6ZXModGhlbWUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyAvKiwgQXBwQ29udGV4dCAqLyB9IGZyb20gJ25leHQvYXBwJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSdcclxuaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJ1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnQC9saWIvdGhlbWUnXHJcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5zY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhY2hlID0gY3JlYXRlQ2FjaGUoeyBrZXk6ICdjc3MnLCBwcmVwZW5kOiB0cnVlIH0pXHJcblxyXG5jb25zdCB0aXRsZSA9ICdOZXh0SnMgfCBNYXRlcmlhbC1kYXNoYm9hcmQnXHJcbmNvbnN0IGtleXdvcmRzID0gJ0tleXdvcmRzIGZvciBzZW8nXHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gJ0Rlc2NyaWJlIHdoYXQgdGhpcyBzaXRlIGRvZXMvcHJvdmlkZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wczogQXBwUHJvcHMpIHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17Y2FjaGV9PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5wbmcnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MSB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0na2V5d29yZHMnIGNvbnRlbnQ9e2tleXdvcmRzfSAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtyb3V0ZXIucm91dGV9IC8+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvQ2FjaGVQcm92aWRlcj5cclxuICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY2FjaGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9