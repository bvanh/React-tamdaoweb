module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\buianh\\Desktop\\tamdaoweb-nextjs\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Footer() {
  return __jsx("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("div", {
    className: "row footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 map diachi1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237668.46215686825!2d105.60187001338616!3d21.446113474791144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134e87a32044fcb%3A0xcb6b2ad2ed13ec5a!2zVGFtIMSQ4bqjbywgVsSpbmggUGjDumMsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1562607171383!5m2!1svi!2s",
    width: "100%",
    height: "100%",
    frameBorder: 0,
    style: {
      border: 0
    },
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-6 map diachi",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    className: "text-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("b", {
    style: {
      paddingRight: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\u0110\u1ECBa ch\u1EC9:"), "Th\u1ECB Tr\u1EA5n Tam \u0110\u1EA3o-H\u1EE3p Ch\xE2u-V\u0129nh Ph\xFAc"), __jsx("p", {
    className: "text-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("b", {
    style: {
      paddingRight: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Website:"), "http://tamdao.vinhphuc.vn"), __jsx("p", {
    className: "text-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("b", {
    style: {
      paddingRight: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\u0110i\u1EC7n tho\u1EA1i:"), "0211.3853831"), __jsx("p", {
    className: "text-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("b", {
    style: {
      paddingRight: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Fax:"), "0211.3853831"), __jsx("p", {
    className: "text-footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("b", {
    style: {
      paddingRight: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Email:"), "ubndtamdao@vinhphuc.vn")), __jsx("div", {
    className: "col-sm-2 p-0 icon-media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    className: "nav-link link-media",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: "static/img/facebook.png",
    className: "icon-media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("img", {
    src: "static/img/instagram.png",
    className: "icon-media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("img", {
    src: "static/img/twitter.png",
    className: "icon-media",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\buianh\\Desktop\\tamdaoweb-nextjs\\components\\menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Menu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return __jsx("header", {
      className: "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("ul", {
      className: "nav justify-content-end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("img", {
      src: "static/img/facebook.png",
      className: "icon1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("img", {
      src: "static/img/instagram.png",
      className: "icon1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }))), __jsx("li", {
      className: "nav-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("img", {
      src: "static/img/twitter.png",
      className: "icon1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      light: true,
      expand: "md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/index",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("img", {
      src: "static/img/icon-mountain.png",
      alt: "anh logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx("p", {
      className: "text-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Tam \u0110\u1EA3o-Travel"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
      onClick: this.toggle.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
      isOpen: this.state.isOpen,
      navbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
      className: "ml-auto",
      navbar: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/index",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link text-menu li-menu",
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Trang Ch\u1EE7", __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/gioithieu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link text-menu li-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Gi\u1EDBi Thi\u1EC7u"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/dichvu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link text-menu li-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "D\u1ECBch V\u1EE5"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/tintuc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link text-menu li-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Tin T\u1EE9c"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/lienhe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("a", {
      className: "nav-link text-menu li-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Li\xEAn H\u1EC7")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/gioithieu.js":
/*!****************************!*\
  !*** ./pages/gioithieu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gioithieu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/menu */ "./components/menu.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\buianh\\Desktop\\tamdaoweb-nextjs\\pages\\gioithieu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Gioithieu() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("link", {
    href: "static/style/style-gioithieu.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("link", {
    href: "static/style/style-menu.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Tamdaoweb-Gi\u1EDBi thi\u1EC7u")), __jsx(_components_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "section1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("nav", {
    "aria-label": "breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("ol", {
    className: "breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("li", {
    className: "breadcrumb-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    href: "index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Trang ch\u1EE7")), __jsx("li", {
    className: "breadcrumb-item active",
    "aria-current": "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Gi\u1EDBi Thi\u1EC7u"))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    href: "#c1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "1.Gi\u1EDBi Thi\u1EC7u v\u1EC1 Tam \u0110\u1EA3o")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    href: "#c2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "2.T\u1EDBi Tam \u0110\u1EA3o b\u1EB1ng c\xE1ch n\xE0o")), __jsx("p", {
    style: {
      marginBottom: '0 !important'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    href: "#c3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "3.\u0102n-Ch\u01A1i Tam \u0110\u1EA3o"))), __jsx("div", {
    className: "gt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Tam \u0110\u1EA3o v\u1EDBi kh\xED h\u1EADu tho\xE1ng m\xE1t, phong c\u1EA3nh h\u1EEFu t\xECnh t\u1EEB l\xE2u \u0111\xE3 l\xE0 m\u1ED9t \u0111\u1ECBa \u0111i\u1EC3m du l\u1ECBch \u0111\u01B0\u1EE3c kh\xF4ng \xEDt ng\u01B0\u1EDDi \u01B0a th\xEDch v\xE0 l\u1EF1a ch\u1ECDn cho k\xEC ngh\u1EC9 c\u1EE7a m\xECnh. Gi\u1EDD h\xE3y c\xF9ng \u201Cgi\u1EAFt t\xFAi\u201D cho m\xECnh nh\u1EEFng kinh nghi\u1EC7m du l\u1ECBch Tam \u0110\u1EA3o m\u1EDBi nh\u1EA5t qua b\xE0i vi\u1EBFt sau nh\xE9! "))), __jsx("div", {
    className: "noidung",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h4", {
    id: "c1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "1.V\u1EC1 Tam \u0110\u1EA3o"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Tam \u0110\u1EA3o n\u1EB1m c\xE1ch th\xE0nh ph\u1ED1 H\xE0 N\u1ED9i kho\u1EA3ng 80km, n\u01A1i \u0111\xE2y \u0111\u01B0\u1EE3c ng\u01B0\u1EDDi Ph\xE1p ph\xE1t hi\u1EC7n v\xE0 ti\u1EBFn h\xE0nh c\u1EA3i t\u1EA1o t\u1EEB nh\u1EEFng n\u0103m cu\u1ED1i th\u1EBF k\u1EF7 XIX. H\xE0ng lo\u1EA1t nh\u1EEFng c\xF4ng tr\xECnh nh\u01B0: bi\u1EC7t th\u1EF1, s\xE0n nh\u1EA3y, b\u1EC3 b\u01A1i, s\xE2n ch\u01A1i, kh\xE1ch s\u1EA1n \u1EDF Tam \u0110\u1EA3o c\xF9ng nh\xE0 h\xE0ng s\u1EA7m u\u1EA5t \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng l\xEAn, nh\u01B0ng tr\u1EA3i qua bao th\u0103ng tr\u1EA7m l\u1ECBch s\u1EED c\u0169ng kh\xF4ng c\xF2n l\u1EA1i bao nhi\xEAu."), __jsx("img", {
    src: "./static/img/thuvien1.jpg",
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("p", {
    style: {
      paddingTop: '.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Th\u1ECB tr\u1EA5n Tam \u0110\u1EA3o c\xF3 di\u1EC7n t\xEDch h\u01A1n 214ha, g\u1ED3m 2 th\xF4n, trong \u0111\xF3, \u0111a ph\u1EA7n nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m du l\u1ECBch n\u1ED5i ti\u1EBFng \u0111\u1EC1u n\u1EB1m \u1EDF th\xF4n 1. Khu du l\u1ECBch Tam \u0110\u1EA3o \u0111\u01B0\u1EE3c bao b\u1ECDc b\u1EDFi nh\u1EEFng c\xE1nh r\u1EEBng nguy\xEAn sinh n\xEAn c\xF3 kh\xED h\u1EADu m\xE1t m\u1EBB, k\u1EBFt h\u1EE3p v\u1EDBi c\u1EA3nh s\u1EAFc thi\xEAn nhi\xEAn v\u1EEBa th\u01A1 m\u1ED9ng, v\u1EEBa huy\u1EC1n \u1EA3o \u0111em l\u1EA1i cho du kh\xE1ch nhi\u1EC1u cung b\u1EADc c\u1EA3m x\xFAc."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Th\u1EDDi ti\u1EBFt \u1EDF Tam \u0110\u1EA3o \u0111em \u0111\u1EBFn cho du kh\xE1ch nhi\u1EC1u tr\u1EA3i nghi\u1EC7m \u0111\u1ED9c \u0111\xE1o nh\u01B0 nh\u1EEFng c\u01A1n gi\xF3 xu\xE2n khe kh\u1EBD th\u1ED5i l\xFAc bu\u1ED5i s\u1EDBm, tr\u01B0a \u0111\u1EBFn k\xE9o theo nh\u1EEFng tia n\u1EAFng \u1EA5m c\u1EE7a m\xF9a h\u1EA1, bu\u1ED5i chi\u1EC1u \u0111\u1EBFn ph\u1EA3ng ph\u1EA5t nh\u1EEFng c\u01A1n gi\xF3 heo may g\u1ECDi m\xF9a thu v\u1EC1 v\xE0 khi m\xE0n \u0111\xEAm ch\u1EE3t bu\xF4ng xu\u1ED1ng mang theo ch\xFAt gi\xE1 l\u1EA1nh c\u1EE7a ng\xE0y \u0111\xF4ng. V\xEC v\u1EADy l\u1EF1a ch\u1ECDn m\u1ED9t kh\xE1ch s\u1EA1n \u1EDF Tam \u0110\u1EA3o \u0111\u1EC3 ngh\u1EC9 ng\u01A1i, th\u01B0 gi\xE3n l\xE0 \u0111i\u1EC1u du kh\xE1ch ch\u1EAFc ch\u1EAFn kh\xF4ng th\u1EC3 b\u1ECF qua."), __jsx("h4", {
    id: "c2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "2.T\u1EDBi Tam \u0110\u1EA3o b\u1EB1ng c\xE1ch n\xE0o?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "\u0110\u1EC3 di chuy\u1EC3n t\u1EDBi Tam \u0110\u1EA3o, c\xE1c b\u1EA1n c\xF3 th\u1EC3 l\u1EF1a ch\u1ECDn nhi\u1EC1u lo\u1EA1i h\xECnh ph\u01B0\u01A1ng ti\u1EC7n kh\xE1c nhau:"), __jsx("p", {
    style: {
      marginBottom: '.5rem !important',
      paddingLeft: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, " *V\u1EDBi \xF4 t\xF4 ri\xEAng v\xE0 xe m\xE1y: C\xE1c b\u1EA1n \u0111i theo h\u01B0\u1EDBng C\u1EA7u Th\u0103ng Long h\u01B0\u1EDBng B\u1EAFc Th\u0103ng Long N\u1ED9i b\xE0i -> \u0111i kho\u1EA3ng 25 km \u0111\u1EBFn \u0111o\u1EA1n giao gi\u1EEFa qu\u1ED1c l\u1ED9 2 v\xE0 \u0111\u01B0\u1EDDng AH 4 v\u1EDBi \u0111\u01B0\u1EDDng B\u1EAFc Th\u0103ng Long N\u1ED9i B\xE0i -> C\xE1c b\u1EA1n r\u1EBD tr\xE1i \u0111\u1EC3 \u0111i \u0111\u01B0\u1EDDng qu\u1ED1c l\u1ED9 2 kho\u1EA3ng 200m -> r\u1EBD ti\u1EBFp \u0111\u01B0\u1EDDng qu\u1ED1c l\u1ED9 H\xE0 N\u1ED9i \u2013 L\xE0o Cai kho\u1EA3ng 25 km -> \u0111\u1EBFn ch\u1ED7 v\xF2ng xuy\u1EBFn huy\u1EC7n Tam D\u01B0\u01A1ng, t\u1EC9nh V\u0129nh Ph\xFAc, c\xE1c b\u1EA1n \u0111i theo h\u01B0\u1EDBng \u0111\u01B0\u1EDDng qu\u1ED1c l\u1ED9 2B kho\u1EA3ng 20 km n\u1EEFa l\xE0 \u0111\u1EBFn khu trung t\xE2m c\u1EE7a Tam \u0110\u1EA3o"), __jsx("p", {
    style: {
      marginBottom: '.5rem !important',
      paddingLeft: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, " *V\u1EDBi xe bu\xFDt: C\xE1c b\u1EA1n l\u1EF1a ch\u1ECDn xe 58 (\u0111i\u1EC3m trung chuy\u1EC3n Long Bi\xEAn) ho\u1EB7c xe 07 (\u0111i\u1EC3m trung chuy\u1EC3n C\u1EA7u Gi\u1EA5y) t\u1EDBi M\xEA Linh Plaza. Sau \u0111\xF3 c\xE1c b\u1EA1n b\u1EAFt ti\u1EBFp xe 01 t\u1EDBi b\u1EBFn xe V\u0129nh Y\xEAn. Sau \u0111\xF3 c\xE1c b\u1EA1n b\u1EAFt tuy\u1EBFn xe 07 t\u1EEB V\u0129nh Y\xEAn t\u1EDBi T\xE2y Thi\xEAn. Tr\xEAn \u0111\u01B0\u1EDDng \u0111i, c\xE1c b\u1EA1n nh\u1EDB nh\u1EDD anh ph\u1EE5 xe d\u1EEBng \u1EDF \u0111i\u1EC3m \u0111\u1ED7 g\u1EA7n Tam \u0110\u1EA3o nh\u1EA5t"), __jsx("p", {
    style: {
      marginBottom: '.5rem !important',
      paddingLeft: '1rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, " * V\u1EDBi xe kh\xE1ch: C\xE1c b\u1EA1n c\xF3 th\u1EC3 b\u1EAFt xe \u1EDF b\u1EBFn xe M\u1EF9 \u0110\xECnh \u0111i chuy\u1EBFn H\xE0 N\u1ED9i \u2013 V\u0129nh Y\xEAn, H\xE0 N\u1ED9i \u2013 Y\xEAn B\xE1i, H\xE0 N\u1ED9i \u2013 Vi\u1EC7t Tr\xEC, xe s\u1EBD ch\u1EA1y \u0111\u1EBFn th\xE0nh ph\u1ED1 V\u0129nh Y\xEAn. T\u1EEB V\u0129nh Y\xEAn, c\xE1c b\u1EA1n b\u1EAFt taxi ho\u1EB7c xe \xF4m \u0111\u1EC3 l\xEAn t\u1EDBi Tam \u0110\u1EA3o."), __jsx("img", {
    src: "./static/img/camnhan4.jpg",
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("h4", {
    style: {
      margin: 0,
      paddingTop: '1rem'
    },
    id: "c3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "3.\u0102n Ch\u01A1i Tam \u0110\u1EA3o"), __jsx("h6", {
    style: {
      marginTop: '.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "3.1 Nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m \u0111\u1EB9p"), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-signal",
    style: {
      paddingRight: '0.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx("b", {
    id: "tth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Th\xE1p truy\u1EC1n h\xECnh")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Cao 93 m tr\xEAn \u0111\u1EC9nh Thi\xEAn Nh\u1ECB v\u1EDBi \u0111\u1ED9 cao 1.375 m. \xD0\u01B0\u1EDDng \u0111i l\xEAn tuy v\u1EA5t v\u1EA3 nh\u01B0ng l\xE3ng m\u1EA1n, n\xEAn th\u01A1. D\u1ECDc \u0111\u01B0\u1EDDng l\xEAn l\xE0 hoa phong lan, hoa c\xFAc qu\u1EF3 v\xE0 c\xE1c lo\xE0i hoa d\u1EA1i kh\xF4ng t\xEAn kh\xE1c n\u1EDF \u0111\u1EA7y l\u1ED1i \u0111i, t\u1ECFa h\u01B0\u01A1ng th\u01A1m l\u1EA1, m\u1EA7u s\u1EAFc r\u1EF1c r\u1EE1\u2026 L\xEAn t\u1EDBi \u0111\u1EC9nh, ph\xF3ng t\u1EA7m m\u1EAFt ra b\u1ED1n ph\xEDa l\xE0 m\xEAnh m\xF4ng tr\u1EDDi, \u0111\u1EA5t, gi\xF3, m\xE2y\u2026"), __jsx("img", {
    src: "./static/img/thaptruyenhinh2.jpg",
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("p", {
    style: {
      paddingTop: '.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "\u0110\u1EC3 chinh ph\u1EE5c t\xF2a th\xE1p b\u1EA1n c\u1EA7n leo h\u1EBFt 1.394 b\u1EADc thang \u0111\xE1, \u0111\u01B0\u1EDDng \u0111i tuy v\u1EA5t v\u1EA3 nh\u01B0ng khi ch\u1EE9ng ki\u1EBFn c\u1EA3nh s\u1EAFc \u0111\u1EB9p n\xEAn th\u01A1, n\xEAn h\u1ECDa \u1EDF n\u01A1i \u0111\xE2y s\u1EBD khi\u1EBFn b\u1EA1n qu\xEAn h\u1EBFt \u0111i m\u1EC7t m\u1ECFi. D\u1ECDc \u0111\u01B0\u1EDDng \u0111i l\xE0 v\xF4 v\xE0n lo\xE0i hoa khoe s\u1EAFc th\u1EAFm, ong b\u01B0\u1EDBm bay th\xE0nh t\u1EEBng \u0111\xE0n\u2026 \u0110\u1EB7c bi\u1EC7t l\xE0 khung c\u1EA3nh th\xE1p truy\u1EC1n h\xECnh \u1EA9n hi\u1EC7n trong m\xE0n s\u01B0\u01A1ng huy\u1EC1n \u1EA3o s\u1EBD khi\u1EBFn c\xE1c b\u1EA1n th\xEDch m\xEA cho m\xE0 xem. Nh\u1EDB chu\u1EA9n b\u1ECB m\xE1y \u1EA3nh \u0111\u1EC3 \u201Ct\xE1c nghi\u1EC7p\u201D nh\xE9."), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-building",
    style: {
      paddingRight: '0.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("b", {
    id: "qg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Qu\xE1n Gi\xF3")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\u0110\xE2y l\xE0 qu\xE1n cafe v\xF4 c\xF9ng \u0111\u1ED9c \u0111\xE1o m\xE0 \u0111\u1EBFn Tam \u0110\u1EA3o c\xE1c b\u1EA1n nh\u1EA5t \u0111\u1ECBnh ph\u1EA3i gh\xE9 th\u0103m m\u1ED9t l\u1EA7n. S\u1EDF d\u0129 \u0111\u01B0\u1EE3c g\u1ECDi l\xE0 qu\xE1n Gi\xF3 b\u1EDFi n\u01A1i \u0111\xE2y \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng n\u1EB1m nh\xF4 ra tr\xEAn nh\u1EEFng v\xE1ch n\xFAi cheo leo v\xE0 kh\xF4ng c\xF3 m\xE1i che, nh\u01B0ng ng\u1ED3i tuy\u1EC7t kh\xF4ng c\xF3 c\u1EA3m gi\xE1c n\u1EAFng n\xF3ng kh\xF3 ch\u1ECBu do nh\u1EEFng c\u01A1n gi\xF3 d\u1ECBu m\xE1t t\u1EEB ph\xEDa d\u01B0\u1EDBi n\xFAi th\u1ED5i l\xEAn."), __jsx("img", {
    src: "./static/img/quangio1.jpg",
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("p", {
    style: {
      paddingTop: '.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "\u0110\u1EBFn v\u1EDBi n\u01A1i \u0111\xE2y b\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c tr\u1EA3i nghi\u1EC7m c\u1EA3m gi\xE1c k\xEDch th\xEDch nh\u01B0 \u0111\u01B0\u1EE3c l\u01A1 l\u1EEDng gi\u1EEFa tr\u1EDDi m\xE2y v\xF4 c\xF9ng th\xFA v\u1ECB. L\u01B0u \xFD r\u1EB1ng b\u1EA1n n\xEAn \u0111\u1EBFn s\u1EDBm n\u1EBFu mu\u1ED1n c\xF3 view \u0111\u1EB9p v\xEC qu\xE1n kh\xF4ng c\xF3 nhi\u1EC1u ch\u1ED7 ng\u1ED3i."), __jsx("img", {
    src: "./static/img/quangiohoanghon.jpg",
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("p", {
    style: {
      paddingTop: '.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Ho\xE0ng h\xF4n tr\xEAn Tam \u0111\u1EA3o!"), __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-synagogue",
    style: {
      paddingRight: '0.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("b", {
    id: "ntd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Nh\xE0 th\u1EDD \u0111\xE1")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Nh\xE0 th\u1EDD \u0111\xE1 c\u1ED5 Tam \u0110\u1EA3o \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng t\u1EEB n\u0103m 1906 ngay \u0111\u01B0\u1EDDng l\xEAn n\xFAi Thi\xEAn Nh\u1ECB. Ban \u0111\u1EA7u \u0111\xE2y ch\u1EC9 l\xE0 m\xF4 h\xECnh nh\xE0 s\xE0n l\u1EE3p l\xE1 \u0111\u01B0\u1EE3c ng\u01B0\u1EDDi Ph\xE1p d\u1EF1ng l\xEAn. M\xE3i \u0111\u1EBFn n\u0103m 1937 nh\xE0 th\u1EDD m\u1EDBi \u0111\u01B0\u1EE3c x\xE2y d\u1EF1ng ki\xEAn c\u1ED1 l\u1EA1i b\u1EB1ng \u0111\xE1 theo l\u1ED1i ki\u1EBFn tr\xFAc Gothic \u0111i\u1EC3n h\xECnh."), __jsx("img", {
    src: "./static/img/nhathoda3.jpg",
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("p", {
    style: {
      paddingTop: '.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "\u0110\xE2y l\xE0 m\u1ED9t trong s\u1ED1 nh\u1EEFng c\xF4ng tr\xECnh ki\u1EBFn tr\xFAc c\u1ED5 \u1EDF Tam \u0110\u1EA3o c\xF2n t\u1ED3n t\u1EA1i sau s\u1EF1 t\xE0n ph\xE1 c\u1EE7a chi\u1EBFn tranh. Nh\xE0 th\u1EDD c\u1ED5 s\u1EBD l\xE0 \u0111i\u1EC3m \u0111\u1EBFn kh\xE1 th\xFA v\u1ECB trong h\xE0nh tr\xECnh kh\xE1m ph\xE1 Tam \u0110\u1EA3o c\u1EE7a b\u1EA1n, kh\xE1ch s\u1EA1n g\u1EA7n nh\xE0 th\u1EDD \u0111\xE1 c\u1ED5 Tam \u0110\u1EA3o l\xE0 l\u1EF1a ch\u1ECDn tuy\u1EC7t v\u1EDDi cho b\u1EA1n kh\xF4ng ch\u1EC9 ng\u1EAFm nh\xECn \u0111\u01B0\u1EE3c to\xE0n c\u1EA3nh Tam \u0110\u1EA3o huy\u1EC1n b\xED, m\u1ED9ng m\u01A1 m\xE0 c\xF2n c\xF3 th\u1EC3 s\xE1ng t\u1EA1o r\u1EA5t nhi\u1EC1u b\u1EE9c h\xECnh \u0111\u1EB9p. B\u1EADt m\xED v\u1EDBi c\xE1c b\u1EA1n, \u0111\xE2y c\u0169ng ch\xEDnh l\xE0 m\u1ED9t trong nh\u1EEFng \u0111\u1ECBa \u0111i\u1EC3m ch\u1EE5p \u1EA3nh c\u01B0\u1EDBi, \u1EA3nh ngh\u1EC7 thu\u1EADt \u0111\u01B0\u1EE3c m\u1ECDi ng\u01B0\u1EDDi r\u1EA5t y\xEAu th\xEDch \u0111\xF3."), __jsx("img", {
    src: "./static/img/nhathoda5.jpg",
    className: "img-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), __jsx("p", {
    style: {
      paddingTop: '.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "C\xF9ng \u0111i v\xE0 check-in n\xE0o!"), __jsx("hr", {
    id: "hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("button", {
    id: "btn-hide",
    onclick: "anNoidung()",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "Xem th\xEAm", __jsx("i", {
    className: "far fa-hand-point-down",
    style: {
      paddingLeft: '.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  })), __jsx("div", {
    id: "noidung-an",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-water",
    style: {
      paddingRight: '0.5rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Th\xE1c B\u1EA1c"))))), __jsx("div", {
    className: "col-sm-4 img-side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("h5", {
    className: "tieude-thuvien",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "Th\u01B0 Vi\u1EC7n \u1EA2nh"), __jsx("p", {
    style: {
      paddingTop: '2rem !important',
      margin: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Nh\xE0 Th\u1EDD \u0110\xE1")), __jsx("hr", {
    className: "hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx("div", {
    id: "carouselExampleInterval",
    className: "carousel slide show",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-item active",
    "data-interval": 20000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/nhathoda6.png",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien2.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/nhathoda7.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": 5000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien5.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien6.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien7.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleInterval",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleInterval",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Next"))), __jsx("div", {
    id: "carouselExampleInterval9",
    className: "carousel slide hide",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-item active",
    "data-interval": 40000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/nhathoda6.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": 4000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/nhathoda7.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien2.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien5.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien6.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleInterval9",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleInterval9",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Next"))), __jsx("p", {
    style: {
      paddingTop: '5rem !important',
      margin: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Qu\xE1n Gi\xF3")), __jsx("hr", {
    className: "hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }), __jsx("div", {
    id: "carouselExampleInterval1",
    className: "carousel slide show",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-item active",
    "data-interval": 40000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/quangio3.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/quangio4.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/quangio5.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": 4000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien5.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/quangio6.png",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien7.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleInterval1",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleInterval1",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "Next"))), __jsx("div", {
    id: "carouselExampleInterval8",
    className: "carousel slide hide",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-item active",
    "data-interval": 40000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/quangio3.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": 4000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/quangio4.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/quangio5.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien5.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien7.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleInterval8",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleInterval8",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "Next"))), __jsx("p", {
    style: {
      paddingTop: '5rem !important',
      margin: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "Th\xE1p Truy\u1EC1n H\xECnh")), __jsx("hr", {
    className: "hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }), __jsx("div", {
    id: "carouselExampleInterval2",
    className: "carousel slide show",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-item active",
    "data-interval": 50000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tth1.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tth1.png",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tth2.png",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": 5000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tth3.png",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/quangio6.png",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/anhthuvien7.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleInterval2",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleInterval2",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "Next"))), __jsx("div", {
    id: "carouselExampleInterval7",
    className: "carousel slide hide",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-item active",
    "data-interval": 40000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tth1.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": 4000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tth1.png",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tth2.png",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tth3.png",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tth3.png",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleInterval7",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleInterval7",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, "Next"))), __jsx("p", {
    style: {
      paddingTop: '5rem !important',
      margin: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, "Th\xE1c B\u1EA1c")), __jsx("hr", {
    className: "hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }), __jsx("div", {
    id: "carouselExampleInterval3",
    className: "carousel slide show",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-item active",
    "data-interval": 40000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac.png",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac1.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac2.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": 4000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac2.png",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac1.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac2.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleInterval3",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleInterval3",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, "Next"))), __jsx("div", {
    id: "carouselExampleInterval6",
    className: "carousel slide hide",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-item active",
    "data-interval": 40000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": 4000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac.png",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac1.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac2.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/thacbac2.png",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleInterval6",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleInterval6",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: this
  }, "Next"))), __jsx("p", {
    style: {
      paddingTop: '5rem !important',
      margin: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }, "Thi\u1EC1n Vi\u1EC7n Tr\xFAc L\xE2m")), __jsx("hr", {
    className: "hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }), __jsx("div", {
    id: "carouselExampleInterval4",
    className: "carousel slide show",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-item active",
    "data-interval": 40000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tvtl.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tvtl1.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tvtl2.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": 4000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tvtl3.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/quangio6.png",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485
    },
    __self: this
  })), __jsx("div", {
    className: "col-sm-4 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tvtl4.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: this
  }))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleInterval4",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleInterval4",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, "Next"))), __jsx("div", {
    id: "carouselExampleInterval5",
    className: "carousel slide hide",
    "data-ride": "carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }, __jsx("div", {
    className: "carousel-item active",
    "data-interval": 40000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tvtl.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": 4000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tvtl3.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tvtl1.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tvtl2.jpg",
    className: "img-fluid",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528
    },
    __self: this
  })))), __jsx("div", {
    className: "carousel-item",
    "data-interval": "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 ks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, __jsx("img", {
    src: "./static/img/tvtl4.jpg",
    className: "card-img-top",
    alt: "...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }))))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleInterval5",
    role: "button",
    "data-slide": "prev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleInterval5",
    role: "button",
    "data-slide": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }), __jsx("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, "Next"))), __jsx("h5", {
    className: "tieude-thuvien",
    style: {
      marginTop: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549
    },
    __self: this
  }, "Video"), __jsx("iframe", {
    width: "100%",
    height: true,
    src: "https://www.youtube.com/embed/D6H6mYRaEqY",
    frameBorder: 0,
    autoPlay: 1,
    allow: "accelerometer; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }), __jsx("iframe", {
    width: "100%",
    height: true,
    src: "https://www.youtube.com/embed/GAeBmeYnOIQ",
    frameBorder: 0,
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }))))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556
    },
    __self: this
  }));
}

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/gioithieu.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\buianh\Desktop\tamdaoweb-nextjs\pages\gioithieu.js */"./pages/gioithieu.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=gioithieu.js.map