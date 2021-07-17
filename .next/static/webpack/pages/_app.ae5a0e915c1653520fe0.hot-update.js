self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/lib/theme.ts":
/*!**************************!*\
  !*** ./src/lib/theme.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var font = "'Lato', sans-serif";
var theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    primary: {
      main: '#246EB9'
    },
    secondary: {
      main: '#4CB944'
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
      "default": '#FDFFFC'
    }
  },
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 82
    },
    h2: {
      fontSize: 66
    },
    h3: {
      fontSize: 54
    },
    h4: {
      fontSize: 45
    },
    h5: {
      fontSize: 36
    },
    h6: {
      fontSize: 26
    },
    subtitle1: {
      fontSize: 24
    },
    subtitle2: {
      fontSize: 22
    },
    body1: {
      fontSize: 20
    },
    body2: {
      fontSize: 18
    }
  }
});
theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.responsiveFontSizes)(theme);
/* harmony default export */ __webpack_exports__["default"] = (theme);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi90aGVtZS50cyJdLCJuYW1lcyI6WyJmb250IiwidGhlbWUiLCJjcmVhdGVUaGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwid2FybmluZyIsImluZm8iLCJzdWNjZXNzIiwiYmFja2dyb3VuZCIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5IiwiaDEiLCJmb250U2l6ZSIsImgyIiwiaDMiLCJoNCIsImg1IiwiaDYiLCJzdWJ0aXRsZTEiLCJzdWJ0aXRsZTIiLCJib2R5MSIsImJvZHkyIiwicmVzcG9uc2l2ZUZvbnRTaXplcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQSxJQUFNQSxJQUFJLEdBQUcsb0JBQWI7QUFFQSxJQUFJQyxLQUFLLEdBQUdDLHFFQUFXLENBQUM7QUFDdEJDLFNBQU8sRUFBRTtBQUNQQyxXQUFPLEVBQUU7QUFDUEMsVUFBSSxFQUFFO0FBREMsS0FERjtBQUlQQyxhQUFTLEVBQUU7QUFDVEQsVUFBSSxFQUFFO0FBREcsS0FKSjtBQU9QRSxTQUFLLEVBQUU7QUFDTEYsVUFBSSxFQUFFO0FBREQsS0FQQTtBQVVQRyxXQUFPLEVBQUU7QUFDUEgsVUFBSSxFQUFFO0FBREMsS0FWRjtBQWFQSSxRQUFJLEVBQUU7QUFDSkosVUFBSSxFQUFFO0FBREYsS0FiQztBQWdCUEssV0FBTyxFQUFFO0FBQ1BMLFVBQUksRUFBRTtBQURDLEtBaEJGO0FBbUJQTSxjQUFVLEVBQUU7QUFDVixpQkFBUztBQURDO0FBbkJMLEdBRGE7QUF3QnRCQyxZQUFVLEVBQUU7QUFDVkMsY0FBVSxFQUFFYixJQURGO0FBRVZjLE1BQUUsRUFBRTtBQUNGQyxjQUFRLEVBQUU7QUFEUixLQUZNO0FBS1ZDLE1BQUUsRUFBRTtBQUNGRCxjQUFRLEVBQUU7QUFEUixLQUxNO0FBUVZFLE1BQUUsRUFBRTtBQUNGRixjQUFRLEVBQUU7QUFEUixLQVJNO0FBV1ZHLE1BQUUsRUFBRTtBQUNGSCxjQUFRLEVBQUU7QUFEUixLQVhNO0FBY1ZJLE1BQUUsRUFBRTtBQUNGSixjQUFRLEVBQUU7QUFEUixLQWRNO0FBaUJWSyxNQUFFLEVBQUU7QUFDRkwsY0FBUSxFQUFFO0FBRFIsS0FqQk07QUFvQlZNLGFBQVMsRUFBRTtBQUNUTixjQUFRLEVBQUU7QUFERCxLQXBCRDtBQXVCVk8sYUFBUyxFQUFFO0FBQ1RQLGNBQVEsRUFBRTtBQURELEtBdkJEO0FBMEJWUSxTQUFLLEVBQUU7QUFDTFIsY0FBUSxFQUFFO0FBREwsS0ExQkc7QUE2QlZTLFNBQUssRUFBRTtBQUNMVCxjQUFRLEVBQUU7QUFETDtBQTdCRztBQXhCVSxDQUFELENBQXZCO0FBMkRBZCxLQUFLLEdBQUd3Qiw2RUFBbUIsQ0FBQ3hCLEtBQUQsQ0FBM0I7QUFFQSwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFlNWEwZTkxNWMxNjUzNTIwZmUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGNyZWF0ZVRoZW1lLFxyXG4gIHJlc3BvbnNpdmVGb250U2l6ZXNcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCBmb250ID0gXCInTGF0bycsIHNhbnMtc2VyaWZcIlxyXG5cclxubGV0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogJyMyNDZFQjknXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjNENCOTQ0J1xyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46ICcjRjA2NTQzJ1xyXG4gICAgfSxcclxuICAgIHdhcm5pbmc6IHtcclxuICAgICAgbWFpbjogJyNGNUVFOUUnXHJcbiAgICB9LFxyXG4gICAgaW5mbzoge1xyXG4gICAgICBtYWluOiAnIzE2YzlmZidcclxuICAgIH0sXHJcbiAgICBzdWNjZXNzOiB7XHJcbiAgICAgIG1haW46ICcjMTZmZjRjJ1xyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJyNGREZGRkMnXHJcbiAgICB9XHJcbiAgfSxcclxuICB0eXBvZ3JhcGh5OiB7XHJcbiAgICBmb250RmFtaWx5OiBmb250LFxyXG4gICAgaDE6IHtcclxuICAgICAgZm9udFNpemU6IDgyXHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgZm9udFNpemU6IDY2XHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFNpemU6IDU0XHJcbiAgICB9LFxyXG4gICAgaDQ6IHtcclxuICAgICAgZm9udFNpemU6IDQ1XHJcbiAgICB9LFxyXG4gICAgaDU6IHtcclxuICAgICAgZm9udFNpemU6IDM2XHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgZm9udFNpemU6IDI2XHJcbiAgICB9LFxyXG4gICAgc3VidGl0bGUxOiB7XHJcbiAgICAgIGZvbnRTaXplOiAyNFxyXG4gICAgfSxcclxuICAgIHN1YnRpdGxlMjoge1xyXG4gICAgICBmb250U2l6ZTogMjJcclxuICAgIH0sXHJcbiAgICBib2R5MToge1xyXG4gICAgICBmb250U2l6ZTogMjBcclxuICAgIH0sXHJcbiAgICBib2R5Mjoge1xyXG4gICAgICBmb250U2l6ZTogMThcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG50aGVtZSA9IHJlc3BvbnNpdmVGb250U2l6ZXModGhlbWUpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9