webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/carousel.js":
/*!********************************!*\
  !*** ./components/carousel.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slideshow; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data */ "./components/data.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\buianh\\Desktop\\tamdaoweb-nextjs\\components\\carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Slideshow =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Slideshow, _React$Component);

  function Slideshow(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Slideshow);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Slideshow).call(this, props));
    _this.state = {
      items: _data__WEBPACK_IMPORTED_MODULE_6__["default"].items,
      translatevalue: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Slideshow, [{
    key: "nextCarousel",
    value: function nextCarousel(newTranslatevalue) {
      if (newTranslatevalue < 400) {
        newTranslatevalue += 100;
      }

      if (newTranslatevalue >= 400) {
        newTranslatevalue = 0;
      }

      this.setState({
        translatevalue: newTranslatevalue
      });
    }
  }, {
    key: "prevCarousel",
    value: function prevCarousel(newTranslatevalue) {
      if (newTranslatevalue <= 300 && newTranslatevalue > 0) {
        newTranslatevalue -= 100;
      }

      this.setState({
        translatevalue: newTranslatevalue
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var newTranslatevalue = this.state.translatevalue;
      setInterval(function () {
        if (newTranslatevalue < 400) {
          newTranslatevalue += 25;
        }

        if (newTranslatevalue >= 400) {
          newTranslatevalue = 0;
        }

        _this2.setState({
          translatevalue: newTranslatevalue
        });
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var list = this.state.items;
      var newTranslatevalue = this.state.translatevalue;
      var printlist2 = list.map(function (item, index) {
        return __jsx("div", {
          className: "col-sm-3 ks",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, __jsx("img", {
          src: item.src,
          className: "card-img-top",
          alt: item.ten,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }), __jsx("a", {
          href: "#",
          className: "card-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, item.ten), __jsx("div", {
          className: "gia-ks",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, __jsx("p", {
          className: "gia",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, item.gia), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
          href: "/chitiet",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, __jsx("a", {
          className: "btn-chitiet chitiet",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, __jsx("button", {
          className: "btn-chitiet",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "Chi ti\u1EBFt")))));
      });
      return __jsx("div", {
        id: "carouselExampleInterval",
        className: "carousel slide",
        "data-ride": "carousel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("div", {
        className: "carousel-demo",
        style: {
          transform: "translateX(-".concat(newTranslatevalue, "%)")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, printlist2), __jsx("a", {
        className: "carousel-control-prev",
        role: "button",
        onClick: function onClick() {
          return _this3.prevCarousel(newTranslatevalue);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx("span", {
        className: "carousel-control-prev-icon",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), __jsx("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Previous")), __jsx("a", {
        className: "carousel-control-next",
        role: "button",
        onClick: function onClick() {
          return _this3.nextCarousel(newTranslatevalue);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("span", {
        className: "carousel-control-next-icon",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), __jsx("span", {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Next")));
    }
  }]);

  return Slideshow;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.1090d26b257143da0ccf.hot-update.js.map