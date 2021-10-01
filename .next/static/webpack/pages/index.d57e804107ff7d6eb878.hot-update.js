"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/index.js");
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Chart */ "./src/components/Chart.tsx");
/* harmony import */ var _components_Copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Copyright */ "./src/components/Copyright.tsx");
/* harmony import */ var _components_Deposits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Deposits */ "./src/components/Deposits.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ "./src/components/Layout.tsx");
/* harmony import */ var _components_Orders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Orders */ "./src/components/Orders.tsx");
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-translate/useTranslation */ "./node_modules/next-translate/lib/esm/useTranslation.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Brlan\\Documents\\Coding\\Portfolio\\projects\\mui-dash\\src\\pages\\index.tsx",
    _s = $RefreshSig$();

// @ts-ignore
// @ts-ignore
// @ts-ignore














function DashboardContent() {
  _s();

  var _useTranslation = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__.default)(),
      lang = _useTranslation.lang;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(lang),
      lng = _useState[0],
      setLng = _useState[1];

  var _useTranslation2 = (0,next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__.default)('home'),
      t = _useTranslation2.t;

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setLng(lang);
  }, [lng]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: "main",
    sx: {
      display: 'flex'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
      component: "main",
      sx: {
        backgroundColor: function backgroundColor(theme) {
          return theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
        },
        flexGrow: 1,
        width: '100vw',
        height: '100vh',
        overflow: 'auto'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_10__.default, {
        maxWidth: "lg",
        sx: {
          mt: 4,
          mb: 4
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
          container: true,
          spacing: 3,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
            item: true,
            xs: 12,
            md: 8,
            lg: 9,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_12__.default, {
              sx: {
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Chart__WEBPACK_IMPORTED_MODULE_1__.default, {
                content: t
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
            item: true,
            xs: 12,
            md: 4,
            lg: 3,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_12__.default, {
              sx: {
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Deposits__WEBPACK_IMPORTED_MODULE_3__.default, {
                data: t
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_12__.default, {
              sx: {
                p: 2,
                display: 'flex',
                flexDirection: 'column'
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Orders__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
          container: true // spacing={3}
          ,
          sx: {
            height: '50px',
            marginTop: '0.7rem'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_11__.default, {
            item: true,
            xs: 12,
            sx: {
              paddingBottom: 0
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__.default, {
              sx: {
                p: 2,
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 0
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Copyright__WEBPACK_IMPORTED_MODULE_2__.default, {
                data: t
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

_s(DashboardContent, "1sI4Qk8gNw5gjlYnAFcBiI+10NE=", false, function () {
  return [next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__.default, next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_6__.default];
});

_c = DashboardContent;
;
var __N_SSG = true;
function Index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(DashboardContent, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 10
  }, this);
}
_c2 = Index;
; // @ts-ignore
// @ts-ignore

var _c, _c2;

$RefreshReg$(_c, "DashboardContent");
$RefreshReg$(_c2, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDU3ZTgwNDEwN2ZmN2Q2ZWI4NzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNjLGdCQUFULEdBQTRCO0FBQUE7O0FBQzFCLHdCQUFlRCxzRUFBYyxFQUE3QjtBQUFBLE1BQU1FLElBQU4sbUJBQU1BLElBQU47O0FBQ0Esa0JBQW9CZCwrQ0FBUSxDQUFDYyxJQUFELENBQTVCO0FBQUEsTUFBS0MsR0FBTDtBQUFBLE1BQVVDLE1BQVY7O0FBQ0EseUJBQWNKLHNFQUFjLENBQUMsTUFBRCxDQUE1QjtBQUFBLE1BQVFLLENBQVIsb0JBQVFBLENBQVI7O0FBRUFoQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGUsSUFBQUEsTUFBTSxDQUFDRixJQUFELENBQU47QUFDRCxHQUZRLEVBRU4sQ0FBQ0MsR0FBRCxDQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyxzREFBRDtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLE1BQUUsRUFBRTtBQUFFRyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUExQjtBQUFBLDRCQUdFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLDhEQUFDLHNEQUFEO0FBQ0UsZUFBUyxFQUFDLE1BRFo7QUFFRSxRQUFFLEVBQUU7QUFDRkMsUUFBQUEsZUFBZSxFQUFFLHlCQUFDQyxLQUFEO0FBQUEsaUJBQVdBLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxJQUFkLEtBQXVCLE9BQXZCLEdBQ3hCRixLQUFLLENBQUNDLE9BQU4sQ0FBY0UsSUFBZCxDQUFtQixHQUFuQixDQUR3QixHQUV4QkgsS0FBSyxDQUFDQyxPQUFOLENBQWNFLElBQWQsQ0FBbUIsR0FBbkIsQ0FGYTtB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S0ZHLGdCQUFBQSxRQUFRLEVBQUUsVUFMUjtBQU1GQyxnQkFBQUEsVUFBVSxFQUFFLFFBTlY7QUFPRkMsZ0JBQUFBLGNBQWMsRUFBRSxRQVBkO0FBUUZDLGdCQUFBQSxNQUFNLEVBQUU7QUFSTixlQUROO0FBQUEscUNBWUUsOERBQUMsMERBQUQ7QUFBVyxvQkFBSSxFQUFFcEI7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5RkQ7O0dBbEdRSjtVQUNRRCxvRUFFREE7OztLQUhQQztBQWtHUjs7QUFFYyxTQUFTeUIsS0FBVCxHQUFpQjtBQUM5QixzQkFBTyw4REFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtNQUZ1QkE7QUFFdkIsRUFHRDtBQWtDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQHRzLWlnbm9yZVxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbi8vIEB0cy1pZ25vcmVcbiAgICBpbXBvcnQgX19sb2FkTmFtZXNwYWNlcyBmcm9tICduZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlcydcbi8vIEB0cy1pZ25vcmVcbiAgICBcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcclxuaW1wb3J0IENoYXJ0IGZyb20gJ0AvY29tcG9uZW50cy9DaGFydCc7XHJcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnQC9jb21wb25lbnRzL0NvcHlyaWdodCc7XHJcbmltcG9ydCBEZXBvc2l0cyBmcm9tICdAL2NvbXBvbmVudHMvRGVwb3NpdHMnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgT3JkZXJzIGZyb20gJ0AvY29tcG9uZW50cy9PcmRlcnMnO1xyXG5pbXBvcnQgQ29weXJpZ2h0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NvcHlyaWdodCc7XHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICduZXh0LXRyYW5zbGF0ZS91c2VUcmFuc2xhdGlvbic7XHJcblxyXG5mdW5jdGlvbiBEYXNoYm9hcmRDb250ZW50KCkge1xyXG4gIGxldCB7IGxhbmcgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcbiAgbGV0IFtsbmcsIHNldExuZ10gPSB1c2VTdGF0ZShsYW5nKTtcclxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdob21lJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMbmcobGFuZyk7XHJcbiAgfSwgW2xuZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBjbGFzc05hbWU9J21haW4nIHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuXHJcbiAgICAgIHsvKiBOYXZiYXIgJiBTaWRlYmFyIGNvbXBvbmVudCAqL31cclxuICAgICAgPExheW91dCAvPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgY29tcG9uZW50PSdtYWluJ1xyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT4gdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgd2lkdGg6ICcxMDB2dycsXHJcbiAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9J2xnJyBzeD17eyBtdDogNCwgbWI6IDQgfX0+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XHJcblxyXG4gICAgICAgICAgICB7LyogQ2hhcnQgY29tcG9uZW50ICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9IGxnPXs5fT5cclxuICAgICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIHA6IDIsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2hhcnQgY29udGVudD17dH0gLz5cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICB7LyogRGVwb3NpdHMgY29tcG9uZW50ICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9IGxnPXszfT5cclxuICAgICAgICAgICAgICA8UGFwZXJcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIHA6IDIsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMjQwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGVwb3NpdHMgZGF0YT17dH0gLz5cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICB7LyogT3JkZXJzIGNvbXBvbmVudCAqL31cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgcDogMixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8T3JkZXJzIC8+XHJcbiAgICAgICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIHsvKiBDb3B5cmlnaHQgY29tcG9uZW50IChmb290ZXIpICovfVxyXG4gICAgICAgICAgPEdyaWRcclxuICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgIC8vIHNwYWNpbmc9ezN9XHJcbiAgICAgICAgICAgIHN4PXt7IGhlaWdodDogJzUwcHgnLCBtYXJnaW5Ub3A6ICcwLjdyZW0nIH19PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgcGFkZGluZ0JvdHRvbTogMCB9fT5cclxuICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICBwOiAyLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDb3B5cmlnaHQgZGF0YT17dH0gLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIHJldHVybiA8RGFzaGJvYXJkQ29udGVudCAvPlxyXG59O1xyXG5cblxuLy8gQHRzLWlnbm9yZVxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4ge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHByb3BzOiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC4uLihhd2FpdCBfX2xvYWROYW1lc3BhY2VzKHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLi4uY3R4LFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBwYXRobmFtZTogJy9pbmRleCcsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIGxvYWRlck5hbWU6ICdnZXRTdGF0aWNQcm9wcycsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC4uLl9faTE4bkNvbmZpZyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB9KSlcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB9XG4vLyBAdHMtaWdub3JlXG4gICAgICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgICB9XG4vLyBAdHMtaWdub3JlXG4gICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiVG9vbGJhciIsIkNvbnRhaW5lciIsIkdyaWQiLCJQYXBlciIsIkNoYXJ0IiwiQ29weXJpZ2h0IiwiRGVwb3NpdHMiLCJMYXlvdXQiLCJPcmRlcnMiLCJ1c2VUcmFuc2xhdGlvbiIsIkRhc2hib2FyZENvbnRlbnQiLCJsYW5nIiwibG5nIiwic2V0TG5nIiwidCIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVtZSIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsImZsZXhHcm93Iiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIm10IiwibWIiLCJwIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpblRvcCIsInBhZGRpbmdCb3R0b20iLCJwb3NpdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJvdHRvbSIsIkluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==