(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Chart.tsx":
/*!**********************************!*\
  !*** ./src/components/Chart.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Chart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ "./src/components/Title.tsx");

var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Work\\dashboard\\src\\components\\Chart.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Generate Sales Data

function createData(time, amount) {
  return {
    time,
    amount
  };
}

const data = [createData('00:00', 0), createData('03:00', 300), createData('06:00', 600), createData('09:00', 800), createData('12:00', 1500), createData('15:00', 2000), createData('18:00', 2400), createData('21:00', 2400), createData('24:00', undefined)];
function Chart() {
  const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: "Today"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.ResponsiveContainer, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.LineChart, {
        data: data,
        margin: {
          top: 16,
          right: 16,
          bottom: 0,
          left: 24
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {
          dataKey: "time",
          stroke: theme.palette.text.secondary,
          style: theme.typography.body2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.YAxis, {
          stroke: theme.palette.text.secondary,
          style: theme.typography.body2,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.Label, {
            angle: 270,
            position: "left",
            style: _objectSpread({
              textAnchor: 'middle',
              fill: theme.palette.text.primary
            }, theme.typography.body1),
            children: "Sales ($)"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_3__.Line, {
          isAnimationActive: false,
          type: "monotone",
          dataKey: "amount",
          stroke: theme.palette.primary.main,
          dot: false
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Copyright.tsx":
/*!**************************************!*\
  !*** ./src/components/Copyright.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Copyright; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Work\\dashboard\\src\\components\\Copyright.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Copyright(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
    variant: "body2",
    color: "text.secondary",
    align: "center"
  }, props), {}, {
    children: ['Copyright © ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
      color: "inherit",
      href: "https://material-ui.com/",
      children: "Your Website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), ' ', new Date().getFullYear(), '.']
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Deposits.tsx":
/*!*************************************!*\
  !*** ./src/components/Deposits.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Deposits; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Title */ "./src/components/Title.tsx");

var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Work\\dashboard\\src\\components\\Deposits.tsx";





function preventDefault(event) {
  event.preventDefault();
}

function Deposits() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: "Recent Deposits"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
      component: "p",
      variant: "h4",
      children: "$3,024.00"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
      color: "text.secondary",
      sx: {
        flex: 1
      },
      children: "on 15 March, 2019"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
        color: "primary",
        href: "#",
        onClick: preventDefault,
        children: "View balance"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Orders.tsx":
/*!***********************************!*\
  !*** ./src/components/Orders.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Orders; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Title */ "./src/components/Title.tsx");

var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Work\\dashboard\\src\\components\\Orders.tsx";







 // Generate Order Data

function createData(id, date, name, shipTo, paymentMethod, amount) {
  return {
    id,
    date,
    name,
    shipTo,
    paymentMethod,
    amount
  };
}

const rows = [createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44), createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99), createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81), createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39), createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79)];

function preventDefault(event) {
  event.preventDefault();
}

function Orders() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Title__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: "Recent Orders"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default()), {
      size: "small",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: "Ship To"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: "Payment Method"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
            align: "right",
            children: "Sale Amount"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: rows.map(row => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default()), {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: row.date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: row.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: row.shipTo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
            children: row.paymentMethod
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), {
            align: "right",
            children: `$${row.amount}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, this)]
        }, row.id, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default()), {
      color: "primary",
      href: "#",
      onClick: preventDefault,
      sx: {
        mt: 3
      },
      children: "See more orders"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Title.tsx":
/*!**********************************!*\
  !*** ./src/components/Title.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Title; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Work\\dashboard\\src\\components\\Title.tsx";


function Title(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
    component: "h2",
    variant: "h6",
    color: "primary",
    gutterBottom: true,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/listItems.tsx":
/*!**************************************!*\
  !*** ./src/components/listItems.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainListItems": function() { return /* binding */ mainListItems; },
/* harmony export */   "secondaryListItems": function() { return /* binding */ secondaryListItems; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Dashboard */ "@material-ui/icons/Dashboard");
/* harmony import */ var _material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/People */ "@material-ui/icons/People");
/* harmony import */ var _material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/BarChart */ "@material-ui/icons/BarChart");
/* harmony import */ var _material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Layers */ "@material-ui/icons/Layers");
/* harmony import */ var _material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Assignment */ "@material-ui/icons/Assignment");
/* harmony import */ var _material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Work\\dashboard\\src\\components\\listItems.tsx";











const mainListItems = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
    button: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Dashboard__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
      primary: "Dashboard"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
    button: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
      primary: "Orders"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
    button: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_People__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
      primary: "Customers"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
    button: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_BarChart__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
      primary: "Reports"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
    button: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Layers__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
      primary: "Integrations"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 14,
  columnNumber: 3
}, undefined);
const secondaryListItems = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5___default()), {
    inset: true,
    children: "Saved reports"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
    button: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
      primary: "Current month"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
    button: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
      primary: "Last quarter"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_2___default()), {
    button: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Assignment__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_4___default()), {
      primary: "Year-end sale"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 49,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/ChevronLeft */ "@material-ui/icons/ChevronLeft");
/* harmony import */ var _material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Notifications */ "@material-ui/icons/Notifications");
/* harmony import */ var _material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_listItems__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/listItems */ "./src/components/listItems.tsx");
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Chart */ "./src/components/Chart.tsx");
/* harmony import */ var _components_Deposits__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Deposits */ "./src/components/Deposits.tsx");
/* harmony import */ var _components_Orders__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Orders */ "./src/components/Orders.tsx");
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Copyright */ "./src/components/Copyright.tsx");

var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Work\\dashboard\\src\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























const drawerWidth = 240;
const AppBar = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.experimentalStyled)((_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default()), {
  shouldForwardProp: prop => prop !== 'open'
})(({
  theme,
  open
}) => _objectSpread({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}, open && {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })
}));
const Drawer = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.experimentalStyled)((_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_4___default()), {
  shouldForwardProp: prop => prop !== 'open'
})(({
  theme,
  open
}) => ({
  '& .MuiDrawer-paper': _objectSpread({
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box'
  }, !open && {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  })
}));

function DashboardContent() {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
    sx: {
      display: 'flex'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppBar, {
      position: "absolute",
      open: open,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default()), {
        sx: {
          pr: '24px'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          onClick: toggleDrawer,
          sx: _objectSpread({
            marginRight: '36px'
          }, open && {
            display: 'none'
          }),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_16___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {
          component: "h1",
          variant: "h6",
          color: "inherit",
          noWrap: true,
          sx: {
            flexGrow: 1
          },
          children: "Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
          color: "inherit",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_12___default()), {
            overlap: "circular",
            variant: "dot",
            color: "secondary",
            sx: {
              color: 'white'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Notifications__WEBPACK_IMPORTED_MODULE_18___default()), {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Drawer, {
      variant: "permanent",
      open: open,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default()), {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1]
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
          onClick: toggleDrawer,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_ChevronLeft__WEBPACK_IMPORTED_MODULE_17___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default()), {
        children: _components_listItems__WEBPACK_IMPORTED_MODULE_19__.mainListItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default()), {
        children: _components_listItems__WEBPACK_IMPORTED_MODULE_19__.secondaryListItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5___default()), {
      component: "main",
      sx: {
        backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13___default()), {
        maxWidth: "lg",
        sx: {
          mt: 4,
          mb: 4
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default()), {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default()), {
            item: true,
            xs: 12,
            md: 8,
            lg: 9,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default()), {
              sx: {
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Chart__WEBPACK_IMPORTED_MODULE_20__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default()), {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default()), {
              sx: {
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Deposits__WEBPACK_IMPORTED_MODULE_21__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_14___default()), {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_15___default()), {
              sx: {
                p: 2,
                display: 'flex',
                flexDirection: 'column'
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Orders__WEBPACK_IMPORTED_MODULE_22__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Copyright__WEBPACK_IMPORTED_MODULE_23__.default, {
          sx: {
            pt: 4
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, this);
}

function Index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardContent, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/AppBar");;

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Badge");;

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Box");;

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Container");;

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/CssBaseline");;

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Divider");;

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Drawer");;

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Grid");;

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/IconButton");;

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Link");;

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/List");;

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/ListItem");;

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/ListItemIcon");;

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/ListItemText");;

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/ListSubheader");;

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Paper");;

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Table");;

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TableBody");;

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TableCell");;

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TableHead");;

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TableRow");;

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Toolbar");;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Typography");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/icons/Assignment":
/*!************************************************!*\
  !*** external "@material-ui/icons/Assignment" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Assignment");;

/***/ }),

/***/ "@material-ui/icons/BarChart":
/*!**********************************************!*\
  !*** external "@material-ui/icons/BarChart" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/BarChart");;

/***/ }),

/***/ "@material-ui/icons/ChevronLeft":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ChevronLeft" ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ChevronLeft");;

/***/ }),

/***/ "@material-ui/icons/Dashboard":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Dashboard" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Dashboard");;

/***/ }),

/***/ "@material-ui/icons/Layers":
/*!********************************************!*\
  !*** external "@material-ui/icons/Layers" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Layers");;

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Menu");;

/***/ }),

/***/ "@material-ui/icons/Notifications":
/*!***************************************************!*\
  !*** external "@material-ui/icons/Notifications" ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Notifications");;

/***/ }),

/***/ "@material-ui/icons/People":
/*!********************************************!*\
  !*** external "@material-ui/icons/People" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/People");;

/***/ }),

/***/ "@material-ui/icons/ShoppingCart":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ShoppingCart" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/ShoppingCart");;

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

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("recharts");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvY29tcG9uZW50cy9DaGFydC50c3giLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL2NvbXBvbmVudHMvQ29weXJpZ2h0LnRzeCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvY29tcG9uZW50cy9EZXBvc2l0cy50c3giLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL2NvbXBvbmVudHMvT3JkZXJzLnRzeCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvY29tcG9uZW50cy9UaXRsZS50c3giLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW1zLnRzeCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JhZGdlXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlclwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lnbm1lbnRcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQmFyQ2hhcnRcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xheWVyc1wiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVvcGxlXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwicmVjaGFydHNcIiJdLCJuYW1lcyI6WyJjcmVhdGVEYXRhIiwidGltZSIsImFtb3VudCIsImRhdGEiLCJ1bmRlZmluZWQiLCJDaGFydCIsInRoZW1lIiwidXNlVGhlbWUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJwYWxldHRlIiwidGV4dCIsInNlY29uZGFyeSIsInR5cG9ncmFwaHkiLCJib2R5MiIsInRleHRBbmNob3IiLCJmaWxsIiwicHJpbWFyeSIsImJvZHkxIiwibWFpbiIsIkNvcHlyaWdodCIsInByb3BzIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwicHJldmVudERlZmF1bHQiLCJldmVudCIsIkRlcG9zaXRzIiwiZmxleCIsImlkIiwiZGF0ZSIsIm5hbWUiLCJzaGlwVG8iLCJwYXltZW50TWV0aG9kIiwicm93cyIsIk9yZGVycyIsIm1hcCIsInJvdyIsIm10IiwiVGl0bGUiLCJjaGlsZHJlbiIsIm1haW5MaXN0SXRlbXMiLCJzZWNvbmRhcnlMaXN0SXRlbXMiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInN0eWxlZCIsIk11aUFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIm9wZW4iLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJ3aWR0aCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiTXVpRHJhd2VyIiwicG9zaXRpb24iLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJEYXNoYm9hcmRDb250ZW50Iiwic2V0T3BlbiIsIlJlYWN0IiwidG9nZ2xlRHJhd2VyIiwiZGlzcGxheSIsInByIiwibWFyZ2luUmlnaHQiLCJmbGV4R3JvdyIsImNvbG9yIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicHgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtb2RlIiwiZ3JleSIsImhlaWdodCIsIm92ZXJmbG93IiwibWIiLCJwIiwiZmxleERpcmVjdGlvbiIsInB0IiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7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Q0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IExpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBMYWJlbCwgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gJ3JlY2hhcnRzJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUnO1xyXG5cclxuLy8gR2VuZXJhdGUgU2FsZXMgRGF0YVxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKHRpbWU6IHN0cmluZywgYW1vdW50PzogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHsgdGltZSwgYW1vdW50IH07XHJcbn1cclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgY3JlYXRlRGF0YSgnMDA6MDAnLCAwKSxcclxuICBjcmVhdGVEYXRhKCcwMzowMCcsIDMwMCksXHJcbiAgY3JlYXRlRGF0YSgnMDY6MDAnLCA2MDApLFxyXG4gIGNyZWF0ZURhdGEoJzA5OjAwJywgODAwKSxcclxuICBjcmVhdGVEYXRhKCcxMjowMCcsIDE1MDApLFxyXG4gIGNyZWF0ZURhdGEoJzE1OjAwJywgMjAwMCksXHJcbiAgY3JlYXRlRGF0YSgnMTg6MDAnLCAyNDAwKSxcclxuICBjcmVhdGVEYXRhKCcyMTowMCcsIDI0MDApLFxyXG4gIGNyZWF0ZURhdGEoJzI0OjAwJywgdW5kZWZpbmVkKSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0KCkge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFRpdGxlPlRvZGF5PC9UaXRsZT5cclxuICAgICAgPFJlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgPExpbmVDaGFydFxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIG1hcmdpbj17e1xyXG4gICAgICAgICAgICB0b3A6IDE2LFxyXG4gICAgICAgICAgICByaWdodDogMTYsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgbGVmdDogMjQsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxYQXhpc1xyXG4gICAgICAgICAgICBkYXRhS2V5PVwidGltZVwiXHJcbiAgICAgICAgICAgIHN0cm9rZT17dGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeX1cclxuICAgICAgICAgICAgc3R5bGU9e3RoZW1lLnR5cG9ncmFwaHkuYm9keTJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFlBeGlzXHJcbiAgICAgICAgICAgIHN0cm9rZT17dGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeX1cclxuICAgICAgICAgICAgc3R5bGU9e3RoZW1lLnR5cG9ncmFwaHkuYm9keTJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYWJlbFxyXG4gICAgICAgICAgICAgIGFuZ2xlPXsyNzB9XHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dEFuY2hvcjogJ21pZGRsZScsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICAgICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYm9keTEsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNhbGVzICgkKVxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPC9ZQXhpcz5cclxuICAgICAgICAgIDxMaW5lXHJcbiAgICAgICAgICAgIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX1cclxuICAgICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcclxuICAgICAgICAgICAgZGF0YUtleT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgIHN0cm9rZT17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59XHJcbiAgICAgICAgICAgIGRvdD17ZmFsc2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGluZUNoYXJ0PlxyXG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHlyaWdodChwcm9wczogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBjb2xvcj0ndGV4dC5zZWNvbmRhcnknIGFsaWduPSdjZW50ZXInIHsuLi5wcm9wc30+XHJcbiAgICAgIHsnQ29weXJpZ2h0IMKpICd9XHJcbiAgICAgIDxMaW5rIGNvbG9yPSdpbmhlcml0JyBocmVmPSdodHRwczovL21hdGVyaWFsLXVpLmNvbS8nPlxyXG4gICAgICAgIFlvdXIgV2Vic2l0ZVxyXG4gICAgICA8L0xpbms+eycgJ31cclxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgeycuJ31cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSc7XHJcblxyXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcG9zaXRzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxUaXRsZT5SZWNlbnQgRGVwb3NpdHM8L1RpdGxlPlxyXG4gICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgJDMsMDI0LjAwXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGZsZXg6IDEgfX0+XHJcbiAgICAgICAgb24gMTUgTWFyY2gsIDIwMTlcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGNvbG9yPVwicHJpbWFyeVwiIGhyZWY9XCIjXCIgb25DbGljaz17cHJldmVudERlZmF1bHR9PlxyXG4gICAgICAgICAgVmlldyBiYWxhbmNlXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSc7XHJcblxyXG4vLyBHZW5lcmF0ZSBPcmRlciBEYXRhXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEoXHJcbiAgaWQ6IG51bWJlcixcclxuICBkYXRlOiBzdHJpbmcsXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHNoaXBUbzogc3RyaW5nLFxyXG4gIHBheW1lbnRNZXRob2Q6IHN0cmluZyxcclxuICBhbW91bnQ6IG51bWJlcixcclxuKSB7XHJcbiAgcmV0dXJuIHsgaWQsIGRhdGUsIG5hbWUsIHNoaXBUbywgcGF5bWVudE1ldGhvZCwgYW1vdW50IH07XHJcbn1cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgY3JlYXRlRGF0YShcclxuICAgIDAsXHJcbiAgICAnMTYgTWFyLCAyMDE5JyxcclxuICAgICdFbHZpcyBQcmVzbGV5JyxcclxuICAgICdUdXBlbG8sIE1TJyxcclxuICAgICdWSVNBIOKggOKAouKAouKAouKAoiAzNzE5JyxcclxuICAgIDMxMi40NCxcclxuICApLFxyXG4gIGNyZWF0ZURhdGEoXHJcbiAgICAxLFxyXG4gICAgJzE2IE1hciwgMjAxOScsXHJcbiAgICAnUGF1bCBNY0NhcnRuZXknLFxyXG4gICAgJ0xvbmRvbiwgVUsnLFxyXG4gICAgJ1ZJU0Eg4qCA4oCi4oCi4oCi4oCiIDI1NzQnLFxyXG4gICAgODY2Ljk5LFxyXG4gICksXHJcbiAgY3JlYXRlRGF0YSgyLCAnMTYgTWFyLCAyMDE5JywgJ1RvbSBTY2hvbHonLCAnQm9zdG9uLCBNQScsICdNQyDioIDigKLigKLigKLigKIgMTI1MycsIDEwMC44MSksXHJcbiAgY3JlYXRlRGF0YShcclxuICAgIDMsXHJcbiAgICAnMTYgTWFyLCAyMDE5JyxcclxuICAgICdNaWNoYWVsIEphY2tzb24nLFxyXG4gICAgJ0dhcnksIElOJyxcclxuICAgICdBTUVYIOKggOKAouKAouKAouKAoiAyMDAwJyxcclxuICAgIDY1NC4zOSxcclxuICApLFxyXG4gIGNyZWF0ZURhdGEoXHJcbiAgICA0LFxyXG4gICAgJzE1IE1hciwgMjAxOScsXHJcbiAgICAnQnJ1Y2UgU3ByaW5nc3RlZW4nLFxyXG4gICAgJ0xvbmcgQnJhbmNoLCBOSicsXHJcbiAgICAnVklTQSDioIDigKLigKLigKLigKIgNTkxOScsXHJcbiAgICAyMTIuNzksXHJcbiAgKSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxUaXRsZT5SZWNlbnQgT3JkZXJzPC9UaXRsZT5cclxuICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+RGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPk5hbWU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5TaGlwIFRvPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+UGF5bWVudCBNZXRob2Q8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+U2FsZSBBbW91bnQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LmRhdGV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93Lm5hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LnNoaXBUb308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cucGF5bWVudE1ldGhvZH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57YCQke3Jvdy5hbW91bnR9YH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgICA8TGluayBjb2xvcj1cInByaW1hcnlcIiBocmVmPVwiI1wiIG9uQ2xpY2s9e3ByZXZlbnREZWZhdWx0fSBzeD17eyBtdDogMyB9fT5cclxuICAgICAgICBTZWUgbW9yZSBvcmRlcnNcclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBUaXRsZVByb3BzIHtcclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGl0bGUocHJvcHM6IFRpdGxlUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcic7XHJcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2hvcHBpbmdDYXJ0JztcclxuaW1wb3J0IFBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZSc7XHJcbmltcG9ydCBCYXJDaGFydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JhckNoYXJ0JztcclxuaW1wb3J0IExheWVyc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xheWVycyc7XHJcbmltcG9ydCBBc3NpZ25tZW50SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgbWFpbkxpc3RJdGVtcyA9IChcclxuICA8ZGl2PlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPcmRlcnNcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPFBlb3BsZUljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1c3RvbWVyc1wiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8QmFyQ2hhcnRJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJSZXBvcnRzXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMYXllcnNJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbnRlZ3JhdGlvbnNcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlMaXN0SXRlbXMgPSAoXHJcbiAgPGRpdj5cclxuICAgIDxMaXN0U3ViaGVhZGVyIGluc2V0PlNhdmVkIHJlcG9ydHM8L0xpc3RTdWJoZWFkZXI+XHJcbiAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxBc3NpZ25tZW50SWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VycmVudCBtb250aFwiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8QXNzaWdubWVudEljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkxhc3QgcXVhcnRlclwiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8QXNzaWdubWVudEljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlllYXItZW5kIHNhbGVcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICA8L2Rpdj5cclxuKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGV4cGVyaW1lbnRhbFN0eWxlZCBhcyBzdHlsZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IE11aUFwcEJhciwgeyBBcHBCYXJQcm9wcyBhcyBNdWlBcHBCYXJQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBtYWluTGlzdEl0ZW1zLCBzZWNvbmRhcnlMaXN0SXRlbXMgfSBmcm9tICcuLi9jb21wb25lbnRzL2xpc3RJdGVtcyc7XHJcbmltcG9ydCBDaGFydCBmcm9tICcuLi9jb21wb25lbnRzL0NoYXJ0JztcclxuaW1wb3J0IERlcG9zaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvRGVwb3NpdHMnO1xyXG5pbXBvcnQgT3JkZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvT3JkZXJzJztcclxuaW1wb3J0IENvcHlyaWdodCBmcm9tICcuLi9jb21wb25lbnRzL0NvcHlyaWdodCc7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aDogbnVtYmVyID0gMjQwO1xyXG5cclxuaW50ZXJmYWNlIEFwcEJhclByb3BzIGV4dGVuZHMgTXVpQXBwQmFyUHJvcHMge1xyXG4gIG9wZW4/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pPEFwcEJhclByb3BzPigoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5cclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmRDb250ZW50KCkge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oIW9wZW4pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxBcHBCYXIgcG9zaXRpb249J2Fic29sdXRlJyBvcGVuPXtvcGVufT5cclxuICAgICAgICA8VG9vbGJhciBzeD17eyBwcjogJzI0cHgnIH19PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gZWRnZT0nc3RhcnQnIGNvbG9yPSdpbmhlcml0JyBhcmlhLWxhYmVsPSdvcGVuIGRyYXdlcicgb25DbGljaz17dG9nZ2xlRHJhd2VyfSBzeD17eyBtYXJnaW5SaWdodDogJzM2cHgnLCAuLi4ob3BlbiAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSB9fT5cclxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J2gxJyB2YXJpYW50PSdoNicgY29sb3I9J2luaGVyaXQnIG5vV3JhcCBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj0naW5oZXJpdCc+XHJcbiAgICAgICAgICAgIDxCYWRnZSBvdmVybGFwPSdjaXJjdWxhcicgdmFyaWFudD0nZG90JyBjb2xvcj0nc2Vjb25kYXJ5JyBzeD17eyBjb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uc0ljb24gLz5cclxuICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8RHJhd2VyIHZhcmlhbnQ9J3Blcm1hbmVudCcgb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPFRvb2xiYXIgc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsIHB4OiBbMV0sIH19PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PnttYWluTGlzdEl0ZW1zfTwvTGlzdD5cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIDxMaXN0PntzZWNvbmRhcnlMaXN0SXRlbXN9PC9MaXN0PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgICAgPEJveCBjb21wb25lbnQ9J21haW4nIHN4PXt7IGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLCBmbGV4R3JvdzogMSwgaGVpZ2h0OiAnMTAwdmgnLCBvdmVyZmxvdzogJ2F1dG8nLCB9fT5cclxuICAgICAgICA8VG9vbGJhciAvPlxyXG5cclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPSdsZycgc3g9e3sgbXQ6IDQsIG1iOiA0IH19PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxyXG5cclxuICAgICAgICAgICAgey8qIENoYXJ0ICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9IGxnPXs5fT5cclxuICAgICAgICAgICAgICA8UGFwZXIgc3g9e3sgcDogMiwgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgaGVpZ2h0OiAyNDAsIH19PlxyXG4gICAgICAgICAgICAgICAgPENoYXJ0IC8+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgey8qIFJlY2VudCBEZXBvc2l0cyAqL31cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIHN4PXt7IHA6IDIsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGhlaWdodDogMjQwLCB9fT5cclxuICAgICAgICAgICAgICAgIDxEZXBvc2l0cyAvPlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHsvKiBSZWNlbnQgT3JkZXJzICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIHN4PXt7IHA6IDIsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XHJcbiAgICAgICAgICAgICAgICA8T3JkZXJzIC8+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICB7LyogQ29weXJpZ2h0IGNvbXBvbmVudCAqL31cclxuICAgICAgICAgIDxDb3B5cmlnaHQgc3g9e3sgcHQ6IDQgfX0gLz5cclxuXHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIDxEYXNoYm9hcmRDb250ZW50IC8+O1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fzc2lnbm1lbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9CYXJDaGFydFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGFzaGJvYXJkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGF5ZXJzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL05vdGlmaWNhdGlvbnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY2hhcnRzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9