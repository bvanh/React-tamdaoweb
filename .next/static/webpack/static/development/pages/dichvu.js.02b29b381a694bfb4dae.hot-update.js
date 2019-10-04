webpackHotUpdate("static\\development\\pages\\dichvu.js",{

/***/ "./components/filter/filterrating.js":
/*!*******************************************!*\
  !*** ./components/filter/filterrating.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilterRating; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\buianh\\Desktop\\tamdaoweb-nextjs\\components\\filter\\filterrating.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function FilterRating(props) {
  var filterRating = [];

  for (var i = 1; i <= 5; i++) {
    filterRating.push(__jsx("label", {
      className: "form-check",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("input", {
      className: "form-check-input",
      type: "checkbox",
      name: i,
      onChange: props.filterRate(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), __jsx("span", {
      className: "form-check-label",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, i, " sao")));
  }

  return __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, filterRating);
}

/***/ })

})
//# sourceMappingURL=dichvu.js.02b29b381a694bfb4dae.hot-update.js.map