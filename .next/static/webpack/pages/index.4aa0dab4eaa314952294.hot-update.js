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
                lineNumber: 111,
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
    lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGFhMGRhYjRlYWEzMTQ5NTIyOTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBLFNBQVNjLGdCQUFULEdBQTRCO0FBQUE7O0FBQzFCLHdCQUFlRCxzRUFBYyxFQUE3QjtBQUFBLE1BQU1FLElBQU4sbUJBQU1BLElBQU47O0FBQ0Esa0JBQW9CZCwrQ0FBUSxDQUFDYyxJQUFELENBQTVCO0FBQUEsTUFBS0MsR0FBTDtBQUFBLE1BQVVDLE1BQVY7O0FBQ0EseUJBQWNKLHNFQUFjLENBQUMsTUFBRCxDQUE1QjtBQUFBLE1BQVFLLENBQVIsb0JBQVFBLENBQVI7O0FBRUFoQixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGUsSUFBQUEsTUFBTSxDQUFDRixJQUFELENBQU47QUFDRCxHQUZRLEVBRU4sQ0FBQ0MsR0FBRCxDQUZNLENBQVQ7QUFJQSxzQkFDRSw4REFBQyxzREFBRDtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQXNCLE1BQUUsRUFBRTtBQUFFRyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUExQjtBQUFBLDRCQUdFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLDhEQUFDLHNEQUFEO0FBQ0UsZUFBUyxFQUFDLE1BRFo7QUFFRSxRQUFFLEVBQUU7QUFDRkMsUUFBQUEsZUFBZSxFQUFFLHlCQUFDQyxLQUFEO0FBQUEsaUJBQVdBLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxJQUFkLEtBQXVCLE9BQXZCLEdBQ3hCRixLQUFLLENBQUNDLE9BQU4sQ0FBY0UsSUFBZCxDQUFtQixHQUFuQixDQUR3QixHQUV4QkgsS0FBSyxDQUFDQyxPQUFOLENBQWNFLElBQWQsQ0FBbUIsR0FBbkIsQ0FGYTtB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S0ZDLGdCQUFBQSxVQUFVLEVBQUUsUUFMVjtBQU1GQyxnQkFBQUEsY0FBYyxFQUFFLFFBTmQ7QUFPRkMsZ0JBQUFBLE1BQU0sRUFBRTtBQVBOLGVBRE47QUFBQSxxQ0FXRSw4REFBQywwREFBRDtBQUFXLG9CQUFJLEVBQUVwQjtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdGRDs7R0FqR1FKO1VBQ1FELG9FQUVEQTs7O0tBSFBDO0FBaUdSOztBQUVjLFNBQVN5QixLQUFULEdBQWlCO0FBQzlCLHNCQUFPLDhEQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEO01BRnVCQTtBQUV2QixFQUdEO0FBa0NBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBAdHMtaWdub3JlXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuLy8gQHRzLWlnbm9yZVxuICAgIGltcG9ydCBfX2xvYWROYW1lc3BhY2VzIGZyb20gJ25leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzJ1xuLy8gQHRzLWlnbm9yZVxuICAgIFxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSAnQC9jb21wb25lbnRzL0NoYXJ0JztcclxuaW1wb3J0IENvcHlyaWdodCBmcm9tICdAL2NvbXBvbmVudHMvQ29weXJpZ2h0JztcclxuaW1wb3J0IERlcG9zaXRzIGZyb20gJ0AvY29tcG9uZW50cy9EZXBvc2l0cyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBPcmRlcnMgZnJvbSAnQC9jb21wb25lbnRzL09yZGVycyc7XHJcbmltcG9ydCBDb3B5cmlnaHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ29weXJpZ2h0JztcclxuaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ25leHQtdHJhbnNsYXRlL3VzZVRyYW5zbGF0aW9uJztcclxuXHJcbmZ1bmN0aW9uIERhc2hib2FyZENvbnRlbnQoKSB7XHJcbiAgbGV0IHsgbGFuZyB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICBsZXQgW2xuZywgc2V0TG5nXSA9IHVzZVN0YXRlKGxhbmcpO1xyXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2hvbWUnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldExuZyhsYW5nKTtcclxuICB9LCBbbG5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNsYXNzTmFtZT0nbWFpbicgc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG5cclxuICAgICAgey8qIE5hdmJhciAmIFNpZGViYXIgY29tcG9uZW50ICovfVxyXG4gICAgICA8TGF5b3V0IC8+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBjb21wb25lbnQ9J21haW4nXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD0nbGcnIHN4PXt7IG10OiA0LCBtYjogNCB9fT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDaGFydCBjb21wb25lbnQgKi99XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0gbGc9ezl9PlxyXG4gICAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgcDogMixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDaGFydCBjb250ZW50PXt0fSAvPlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBEZXBvc2l0cyBjb21wb25lbnQgKi99XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgIDxQYXBlclxyXG4gICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgcDogMixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEZXBvc2l0cyBkYXRhPXt0fSAvPlxyXG4gICAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBPcmRlcnMgY29tcG9uZW50ICovfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFBhcGVyXHJcbiAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICBwOiAyLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxPcmRlcnMgLz5cclxuICAgICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgey8qIENvcHlyaWdodCBjb21wb25lbnQgKGZvb3RlcikgKi99XHJcbiAgICAgICAgICA8R3JpZFxyXG4gICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgLy8gc3BhY2luZz17M31cclxuICAgICAgICAgICAgc3g9e3sgaGVpZ2h0OiAnNTBweCcsIG1hcmdpblRvcDogJzAuN3JlbScgfX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyBwYWRkaW5nQm90dG9tOiAwIH19PlxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgIHA6IDIsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENvcHlyaWdodCBkYXRhPXt0fSAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIDxEYXNoYm9hcmRDb250ZW50IC8+XHJcbn07XHJcblxuXG4vLyBAdHMtaWdub3JlXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgcHJvcHM6IHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLi4uKGF3YWl0IF9fbG9hZE5hbWVzcGFjZXMoe1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAuLi5jdHgsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2luZGV4Jyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbG9hZGVyTmFtZTogJ2dldFN0YXRpY1Byb3BzJyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLi4uX19pMThuQ29uZmlnLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBsb2FkTG9jYWxlRnJvbTogKGwsIG4pID0+IGltcG9ydChgQG5leHQtdHJhbnNsYXRlLXJvb3QvbG9jYWxlcy8ke2x9LyR7bn1gKS50aGVuKG0gPT4gbS5kZWZhdWx0KSxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIH0pKVxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgfVxuLy8gQHRzLWlnbm9yZVxuICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJUb29sYmFyIiwiQ29udGFpbmVyIiwiR3JpZCIsIlBhcGVyIiwiQ2hhcnQiLCJDb3B5cmlnaHQiLCJEZXBvc2l0cyIsIkxheW91dCIsIk9yZGVycyIsInVzZVRyYW5zbGF0aW9uIiwiRGFzaGJvYXJkQ29udGVudCIsImxhbmciLCJsbmciLCJzZXRMbmciLCJ0IiwiZGlzcGxheSIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5IiwiZmxleEdyb3ciLCJ3aWR0aCIsImhlaWdodCIsIm92ZXJmbG93IiwibXQiLCJtYiIsInAiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwicGFkZGluZ0JvdHRvbSIsInBvc2l0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYm90dG9tIiwiSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9