webpackHotUpdate("static\\development\\pages\\dichvu.js",{

/***/ "./components/filter/filterprice.js":
/*!******************************************!*\
  !*** ./components/filter/filterprice.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterPrice; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\buianh\\Desktop\\tamdaoweb-nextjs\\components\\filter\\filterprice.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function FilterPrice(props) {
  var printFilter = [];

  for (var i = 5; i <= 30; i += 5) {
    printFilter.push(__jsx("label", {
      className: "form-check",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("input", {
      className: "form-check-input",
      type: "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("span", {
      className: "form-check-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "T\u1EEB ", (i + '00000').toLocaleString())));
  }

  return __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, printFilter);
}

/***/ })

})
//# sourceMappingURL=dichvu.js.37c5c7b3d7582df933aa.hot-update.js.map