(function() {
var exports = {};
exports.id = "pages/Dashboard";
exports.ids = ["pages/Dashboard"];
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

/***/ "./src/pages/Dashboard.tsx":
/*!*********************************!*\
  !*** ./src/pages/Dashboard.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Dashboard; }
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

var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Work\\dashboard\\src\\pages\\Dashboard.tsx";

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
      lineNumber: 84,
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
            lineNumber: 88,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
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
          lineNumber: 90,
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
              lineNumber: 95,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
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
            lineNumber: 103,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default()), {
        children: _components_listItems__WEBPACK_IMPORTED_MODULE_19__.mainListItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default()), {
        children: _components_listItems__WEBPACK_IMPORTED_MODULE_19__.secondaryListItems
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
        lineNumber: 112,
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
                lineNumber: 120,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
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
                lineNumber: 127,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
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
                lineNumber: 134,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Copyright__WEBPACK_IMPORTED_MODULE_23__.default, {
          sx: {
            pt: 4
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

function Dashboard() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardContent, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 150,
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
var __webpack_exports__ = (__webpack_exec__("./src/pages/Dashboard.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvY29tcG9uZW50cy9DaGFydC50c3giLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL2NvbXBvbmVudHMvQ29weXJpZ2h0LnRzeCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvY29tcG9uZW50cy9EZXBvc2l0cy50c3giLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL2NvbXBvbmVudHMvT3JkZXJzLnRzeCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvY29tcG9uZW50cy9UaXRsZS50c3giLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkLy4vc3JjL2NvbXBvbmVudHMvbGlzdEl0ZW1zLnRzeCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvLi9zcmMvcGFnZXMvRGFzaGJvYXJkLnRzeCIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RyYXdlclwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvblwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXJcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Bc3NpZ25tZW50XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0JhckNoYXJ0XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0XCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Rhc2hib2FyZFwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9MYXllcnNcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zXCIiLCJ3ZWJwYWNrOi8vZGFzaGJvYXJkL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZVwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnRcIiIsIndlYnBhY2s6Ly9kYXNoYm9hcmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Rhc2hib2FyZC9leHRlcm5hbCBcInJlY2hhcnRzXCIiXSwibmFtZXMiOlsiY3JlYXRlRGF0YSIsInRpbWUiLCJhbW91bnQiLCJkYXRhIiwidW5kZWZpbmVkIiwiQ2hhcnQiLCJ0aGVtZSIsInVzZVRoZW1lIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJ0eXBvZ3JhcGh5IiwiYm9keTIiLCJ0ZXh0QW5jaG9yIiwiZmlsbCIsInByaW1hcnkiLCJib2R5MSIsIm1haW4iLCJDb3B5cmlnaHQiLCJwcm9wcyIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInByZXZlbnREZWZhdWx0IiwiZXZlbnQiLCJEZXBvc2l0cyIsImZsZXgiLCJpZCIsImRhdGUiLCJuYW1lIiwic2hpcFRvIiwicGF5bWVudE1ldGhvZCIsInJvd3MiLCJPcmRlcnMiLCJtYXAiLCJyb3ciLCJtdCIsIlRpdGxlIiwiY2hpbGRyZW4iLCJtYWluTGlzdEl0ZW1zIiwic2Vjb25kYXJ5TGlzdEl0ZW1zIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzdHlsZWQiLCJNdWlBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJvcGVuIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0Iiwid2lkdGgiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIk11aURyYXdlciIsInBvc2l0aW9uIiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiRGFzaGJvYXJkQ29udGVudCIsInNldE9wZW4iLCJSZWFjdCIsInRvZ2dsZURyYXdlciIsImRpc3BsYXkiLCJwciIsIm1hcmdpblJpZ2h0IiwiZmxleEdyb3ciLCJjb2xvciIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInB4IiwiYmFja2dyb3VuZENvbG9yIiwibW9kZSIsImdyZXkiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm1iIiwicCIsImZsZXhEaXJlY3Rpb24iLCJwdCIsIkRhc2hib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FB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Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoicGFnZXMvRGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IExpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBMYWJlbCwgUmVzcG9uc2l2ZUNvbnRhaW5lciB9IGZyb20gJ3JlY2hhcnRzJztcclxuaW1wb3J0IFRpdGxlIGZyb20gJy4vVGl0bGUnO1xyXG5cclxuLy8gR2VuZXJhdGUgU2FsZXMgRGF0YVxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKHRpbWU6IHN0cmluZywgYW1vdW50PzogbnVtYmVyKSB7XHJcbiAgcmV0dXJuIHsgdGltZSwgYW1vdW50IH07XHJcbn1cclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgY3JlYXRlRGF0YSgnMDA6MDAnLCAwKSxcclxuICBjcmVhdGVEYXRhKCcwMzowMCcsIDMwMCksXHJcbiAgY3JlYXRlRGF0YSgnMDY6MDAnLCA2MDApLFxyXG4gIGNyZWF0ZURhdGEoJzA5OjAwJywgODAwKSxcclxuICBjcmVhdGVEYXRhKCcxMjowMCcsIDE1MDApLFxyXG4gIGNyZWF0ZURhdGEoJzE1OjAwJywgMjAwMCksXHJcbiAgY3JlYXRlRGF0YSgnMTg6MDAnLCAyNDAwKSxcclxuICBjcmVhdGVEYXRhKCcyMTowMCcsIDI0MDApLFxyXG4gIGNyZWF0ZURhdGEoJzI0OjAwJywgdW5kZWZpbmVkKSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0KCkge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFRpdGxlPlRvZGF5PC9UaXRsZT5cclxuICAgICAgPFJlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICAgICAgPExpbmVDaGFydFxyXG4gICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgIG1hcmdpbj17e1xyXG4gICAgICAgICAgICB0b3A6IDE2LFxyXG4gICAgICAgICAgICByaWdodDogMTYsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgbGVmdDogMjQsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxYQXhpc1xyXG4gICAgICAgICAgICBkYXRhS2V5PVwidGltZVwiXHJcbiAgICAgICAgICAgIHN0cm9rZT17dGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeX1cclxuICAgICAgICAgICAgc3R5bGU9e3RoZW1lLnR5cG9ncmFwaHkuYm9keTJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFlBeGlzXHJcbiAgICAgICAgICAgIHN0cm9rZT17dGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeX1cclxuICAgICAgICAgICAgc3R5bGU9e3RoZW1lLnR5cG9ncmFwaHkuYm9keTJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYWJlbFxyXG4gICAgICAgICAgICAgIGFuZ2xlPXsyNzB9XHJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dEFuY2hvcjogJ21pZGRsZScsXHJcbiAgICAgICAgICAgICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcclxuICAgICAgICAgICAgICAgIC4uLnRoZW1lLnR5cG9ncmFwaHkuYm9keTEsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNhbGVzICgkKVxyXG4gICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgPC9ZQXhpcz5cclxuICAgICAgICAgIDxMaW5lXHJcbiAgICAgICAgICAgIGlzQW5pbWF0aW9uQWN0aXZlPXtmYWxzZX1cclxuICAgICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcclxuICAgICAgICAgICAgZGF0YUtleT1cImFtb3VudFwiXHJcbiAgICAgICAgICAgIHN0cm9rZT17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59XHJcbiAgICAgICAgICAgIGRvdD17ZmFsc2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGluZUNoYXJ0PlxyXG4gICAgICA8L1Jlc3BvbnNpdmVDb250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvcHlyaWdodChwcm9wczogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2JvZHkyJyBjb2xvcj0ndGV4dC5zZWNvbmRhcnknIGFsaWduPSdjZW50ZXInIHsuLi5wcm9wc30+XHJcbiAgICAgIHsnQ29weXJpZ2h0IMKpICd9XHJcbiAgICAgIDxMaW5rIGNvbG9yPSdpbmhlcml0JyBocmVmPSdodHRwczovL21hdGVyaWFsLXVpLmNvbS8nPlxyXG4gICAgICAgIFlvdXIgV2Vic2l0ZVxyXG4gICAgICA8L0xpbms+eycgJ31cclxuICAgICAge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cclxuICAgICAgeycuJ31cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSc7XHJcblxyXG5mdW5jdGlvbiBwcmV2ZW50RGVmYXVsdChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlcG9zaXRzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxUaXRsZT5SZWNlbnQgRGVwb3NpdHM8L1RpdGxlPlxyXG4gICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgJDMsMDI0LjAwXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IGZsZXg6IDEgfX0+XHJcbiAgICAgICAgb24gMTUgTWFyY2gsIDIwMTlcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGNvbG9yPVwicHJpbWFyeVwiIGhyZWY9XCIjXCIgb25DbGljaz17cHJldmVudERlZmF1bHR9PlxyXG4gICAgICAgICAgVmlldyBiYWxhbmNlXHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keSc7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3cnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9UaXRsZSc7XHJcblxyXG4vLyBHZW5lcmF0ZSBPcmRlciBEYXRhXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEoXHJcbiAgaWQ6IG51bWJlcixcclxuICBkYXRlOiBzdHJpbmcsXHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIHNoaXBUbzogc3RyaW5nLFxyXG4gIHBheW1lbnRNZXRob2Q6IHN0cmluZyxcclxuICBhbW91bnQ6IG51bWJlcixcclxuKSB7XHJcbiAgcmV0dXJuIHsgaWQsIGRhdGUsIG5hbWUsIHNoaXBUbywgcGF5bWVudE1ldGhvZCwgYW1vdW50IH07XHJcbn1cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgY3JlYXRlRGF0YShcclxuICAgIDAsXHJcbiAgICAnMTYgTWFyLCAyMDE5JyxcclxuICAgICdFbHZpcyBQcmVzbGV5JyxcclxuICAgICdUdXBlbG8sIE1TJyxcclxuICAgICdWSVNBIOKggOKAouKAouKAouKAoiAzNzE5JyxcclxuICAgIDMxMi40NCxcclxuICApLFxyXG4gIGNyZWF0ZURhdGEoXHJcbiAgICAxLFxyXG4gICAgJzE2IE1hciwgMjAxOScsXHJcbiAgICAnUGF1bCBNY0NhcnRuZXknLFxyXG4gICAgJ0xvbmRvbiwgVUsnLFxyXG4gICAgJ1ZJU0Eg4qCA4oCi4oCi4oCi4oCiIDI1NzQnLFxyXG4gICAgODY2Ljk5LFxyXG4gICksXHJcbiAgY3JlYXRlRGF0YSgyLCAnMTYgTWFyLCAyMDE5JywgJ1RvbSBTY2hvbHonLCAnQm9zdG9uLCBNQScsICdNQyDioIDigKLigKLigKLigKIgMTI1MycsIDEwMC44MSksXHJcbiAgY3JlYXRlRGF0YShcclxuICAgIDMsXHJcbiAgICAnMTYgTWFyLCAyMDE5JyxcclxuICAgICdNaWNoYWVsIEphY2tzb24nLFxyXG4gICAgJ0dhcnksIElOJyxcclxuICAgICdBTUVYIOKggOKAouKAouKAouKAoiAyMDAwJyxcclxuICAgIDY1NC4zOSxcclxuICApLFxyXG4gIGNyZWF0ZURhdGEoXHJcbiAgICA0LFxyXG4gICAgJzE1IE1hciwgMjAxOScsXHJcbiAgICAnQnJ1Y2UgU3ByaW5nc3RlZW4nLFxyXG4gICAgJ0xvbmcgQnJhbmNoLCBOSicsXHJcbiAgICAnVklTQSDioIDigKLigKLigKLigKIgNTkxOScsXHJcbiAgICAyMTIuNzksXHJcbiAgKSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIHByZXZlbnREZWZhdWx0KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3JkZXJzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxUaXRsZT5SZWNlbnQgT3JkZXJzPC9UaXRsZT5cclxuICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+RGF0ZTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsPk5hbWU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5TaGlwIFRvPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIDxUYWJsZUNlbGw+UGF5bWVudCBNZXRob2Q8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+U2FsZSBBbW91bnQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtyb3dzLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LmRhdGV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93Lm5hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93LnNoaXBUb308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cucGF5bWVudE1ldGhvZH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj57YCQke3Jvdy5hbW91bnR9YH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgICA8TGluayBjb2xvcj1cInByaW1hcnlcIiBocmVmPVwiI1wiIG9uQ2xpY2s9e3ByZXZlbnREZWZhdWx0fSBzeD17eyBtdDogMyB9fT5cclxuICAgICAgICBTZWUgbW9yZSBvcmRlcnNcclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuXHJcbmludGVyZmFjZSBUaXRsZVByb3BzIHtcclxuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGl0bGUocHJvcHM6IFRpdGxlUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInByaW1hcnlcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvVHlwb2dyYXBoeT5cclxuICApO1xyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xyXG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcic7XHJcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2hvcHBpbmdDYXJ0JztcclxuaW1wb3J0IFBlb3BsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZSc7XHJcbmltcG9ydCBCYXJDaGFydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0JhckNoYXJ0JztcclxuaW1wb3J0IExheWVyc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xheWVycyc7XHJcbmltcG9ydCBBc3NpZ25tZW50SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudCc7XHJcblxyXG5leHBvcnQgY29uc3QgbWFpbkxpc3RJdGVtcyA9IChcclxuICA8ZGl2PlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPcmRlcnNcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgPFBlb3BsZUljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1c3RvbWVyc1wiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8QmFyQ2hhcnRJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJSZXBvcnRzXCIgLz5cclxuICAgIDwvTGlzdEl0ZW0+XHJcbiAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMYXllcnNJY29uIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbnRlZ3JhdGlvbnNcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWNvbmRhcnlMaXN0SXRlbXMgPSAoXHJcbiAgPGRpdj5cclxuICAgIDxMaXN0U3ViaGVhZGVyIGluc2V0PlNhdmVkIHJlcG9ydHM8L0xpc3RTdWJoZWFkZXI+XHJcbiAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxBc3NpZ25tZW50SWNvbiAvPlxyXG4gICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VycmVudCBtb250aFwiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8QXNzaWdubWVudEljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkxhc3QgcXVhcnRlclwiIC8+XHJcbiAgICA8L0xpc3RJdGVtPlxyXG4gICAgPExpc3RJdGVtIGJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICA8QXNzaWdubWVudEljb24gLz5cclxuICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlllYXItZW5kIHNhbGVcIiAvPlxyXG4gICAgPC9MaXN0SXRlbT5cclxuICA8L2Rpdj5cclxuKTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGV4cGVyaW1lbnRhbFN0eWxlZCBhcyBzdHlsZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IE11aUFwcEJhciwgeyBBcHBCYXJQcm9wcyBhcyBNdWlBcHBCYXJQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IHsgbWFpbkxpc3RJdGVtcywgc2Vjb25kYXJ5TGlzdEl0ZW1zIH0gZnJvbSAnLi4vY29tcG9uZW50cy9saXN0SXRlbXMnO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFydCc7XHJcbmltcG9ydCBEZXBvc2l0cyBmcm9tICcuLi9jb21wb25lbnRzL0RlcG9zaXRzJztcclxuaW1wb3J0IE9yZGVycyBmcm9tICcuLi9jb21wb25lbnRzL09yZGVycyc7XHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9Db3B5cmlnaHQnO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGg6IG51bWJlciA9IDI0MDtcclxuXHJcbmludGVyZmFjZSBBcHBCYXJQcm9wcyBleHRlbmRzIE11aUFwcEJhclByb3BzIHtcclxuICBvcGVuPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KTxBcHBCYXJQcm9wcz4oKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuXHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZnVuY3Rpb24gRGFzaGJvYXJkQ29udGVudCgpIHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKCFvcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPSdhYnNvbHV0ZScgb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPFRvb2xiYXIgc3g9e3sgcHI6ICcyNHB4JyB9fT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9J3N0YXJ0JyBjb2xvcj0naW5oZXJpdCcgYXJpYS1sYWJlbD0nb3BlbiBkcmF3ZXInIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0gc3g9e3sgbWFyZ2luUmlnaHQ6ICczNnB4JywgLi4uKG9wZW4gJiYgeyBkaXNwbGF5OiAnbm9uZScgfSkgfX0+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PSdoMScgdmFyaWFudD0naDYnIGNvbG9yPSdpbmhlcml0JyBub1dyYXAgc3g9e3sgZmxleEdyb3c6IDEgfX0+XHJcbiAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9J2luaGVyaXQnPlxyXG4gICAgICAgICAgICA8QmFkZ2Ugb3ZlcmxhcD0nY2lyY3VsYXInIHZhcmlhbnQ9J2RvdCcgY29sb3I9J3NlY29uZGFyeScgc3g9e3sgY29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPERyYXdlciB2YXJpYW50PSdwZXJtYW5lbnQnIG9wZW49e29wZW59PlxyXG4gICAgICAgIDxUb29sYmFyIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLCBweDogWzFdLCB9fT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD57bWFpbkxpc3RJdGVtc308L0xpc3Q+XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8TGlzdD57c2Vjb25kYXJ5TGlzdEl0ZW1zfTwvTGlzdD5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgIDxCb3ggY29tcG9uZW50PSdtYWluJyBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT4gdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF0gOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSwgZmxleEdyb3c6IDEsIGhlaWdodDogJzEwMHZoJywgb3ZlcmZsb3c6ICdhdXRvJywgfX0+XHJcbiAgICAgICAgPFRvb2xiYXIgLz5cclxuXHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nbGcnIHN4PXt7IG10OiA0LCBtYjogNCB9fT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDaGFydCAqL31cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fSBsZz17OX0+XHJcbiAgICAgICAgICAgICAgPFBhcGVyIHN4PXt7IHA6IDIsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGhlaWdodDogMjQwLCB9fT5cclxuICAgICAgICAgICAgICAgIDxDaGFydCAvPlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBSZWNlbnQgRGVwb3NpdHMgKi99XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgIDxQYXBlciBzeD17eyBwOiAyLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBoZWlnaHQ6IDI0MCwgfX0+XHJcbiAgICAgICAgICAgICAgICA8RGVwb3NpdHMgLz5cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogUmVjZW50IE9yZGVycyAqL31cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxQYXBlciBzeD17eyBwOiAyLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxyXG4gICAgICAgICAgICAgICAgPE9yZGVycyAvPlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgey8qIENvcHlyaWdodCBjb21wb25lbnQgKi99XHJcbiAgICAgICAgICA8Q29weXJpZ2h0IHN4PXt7IHB0OiA0IH19IC8+XHJcblxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICByZXR1cm4gPERhc2hib2FyZENvbnRlbnQgLz47XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXNzaWdubWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0JhckNoYXJ0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hldnJvbkxlZnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9EYXNoYm9hcmRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MYXllcnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTm90aWZpY2F0aW9uc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Blb3BsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVjaGFydHNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=