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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/projects/ProjectsSlider.js":
/*!***********************************************!*\
  !*** ./components/projects/ProjectsSlider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/user/Documents/domains/vkovalov/components/projects/ProjectsSlider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class ProjectsSlider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      projects: [],
      error: ''
    };
  }

  componentDidMount() {
    const rest = "http://vkovalov.me/";
    const url = rest + 'wp-json/wp/v2/projects?filter[orderby]=date';
    this.setState({
      loading: true
    }, () => {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url).then(res => {
        this.setState({
          loading: false,
          projects: res.data
        });
      }).catch(error => this.setState({
        loading: false,
        error: ''
      }));
    });
  }

  render() {
    const {
      projects
    } = this.state;
    const settings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      touchMove: true,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }]
    };
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    }, projects.length ? __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, settings, {
      className: "projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }), projects.map(project => __jsx("div", {
      className: "project",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "project-slide",
      id: project.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: project.acf.cover,
      alt: project.title.rendered,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "project-content d-flex align-items-center justify-content-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 33
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 37
      }
    }, project.title.rendered)))))) : '');
  }

}

/***/ }),

/***/ "./components/projects/ProjectsTitle.js":
/*!**********************************************!*\
  !*** ./components/projects/ProjectsTitle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectsTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/user/Documents/domains/vkovalov/components/projects/ProjectsTitle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class ProjectsTitle extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: true
    });
  }

  async componentDidMount() {
    const rest = "http://vkovalov.me/";
    const url = rest + 'wp-json/wp/v2/pages/10';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      page: data,
      loading: false
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.loading || !this.state.page ? __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 15
      }
    }) : __jsx("div", {
      className: "page-title-block",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx("h1", {
      className: "page-title uppercase text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }, this.state.page.title.rendered)));
  }

}

/***/ }),

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_projects_ProjectsTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/projects/ProjectsTitle */ "./components/projects/ProjectsTitle.js");
/* harmony import */ var _components_projects_ProjectsSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/projects/ProjectsSlider */ "./components/projects/ProjectsSlider.js");
var _jsxFileName = "/Users/user/Documents/domains/vkovalov/pages/projects.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Projects extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
      className: "loading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "projects-page",
      className: "page-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, __jsx(_components_projects_ProjectsTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }), __jsx(_components_projects_ProjectsSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    })));
  }

}

/***/ }),

/***/ 7:
/*!*********************************!*\
  !*** multi ./pages/projects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Documents/domains/vkovalov/pages/projects.js */"./pages/projects.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0c1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RzVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIl0sIm5hbWVzIjpbIlByb2plY3RzU2xpZGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJsb2FkaW5nIiwicHJvamVjdHMiLCJlcnJvciIsImNvbXBvbmVudERpZE1vdW50IiwicmVzdCIsInByb2Nlc3MiLCJ1cmwiLCJzZXRTdGF0ZSIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsInJlbmRlciIsInNldHRpbmdzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJkb3RzIiwiaW5maW5pdGUiLCJ0b3VjaE1vdmUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImluaXRpYWxTbGlkZSIsImxlbmd0aCIsIm1hcCIsInByb2plY3QiLCJpZCIsImFjZiIsImNvdmVyIiwidGl0bGUiLCJyZW5kZXJlZCIsIlByb2plY3RzVGl0bGUiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInBhZ2UiLCJQcm9qZWN0cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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YXRpYy9kZXZlbG9wbWVudC9wYWdlcy9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAqIGFzIFJlYWN0QlMgZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0c1NsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHByb2plY3RzOiBbXSxcbiAgICAgIGVycm9yOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHJlc3QgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRVNUX0xJTks7XG4gICAgY29uc3QgdXJsID0gcmVzdCsnd3AtanNvbi93cC92Mi9wcm9qZWN0cz9maWx0ZXJbb3JkZXJieV09ZGF0ZSc7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHsgbG9hZGluZzogdHJ1ZSB9LCAoKSA9PntcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgICAudGhlbihyZXMgPT4geyBcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJvamVjdHM6IHJlcy5kYXRhXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICAgIC5jYXRjaCggXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSwgXG4gICAgICAgICAgICBlcnJvcjogJycgXG4gICAgICAgICAgfSkpICBcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2plY3RzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0QlMuQ29udGFpbmVyPlxuICAgICAgICAgICAge3Byb2plY3RzLmxlbmd0aCA/ICggICAgIFxuICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSBjbGFzc05hbWU9XCJwcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKHByb2plY3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXNsaWRlXCIgaWQ9e3Byb2plY3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvamVjdC5hY2YuY292ZXJ9ICBhbHQ9e3Byb2plY3QudGl0bGUucmVuZGVyZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1jb250ZW50IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb2plY3QudGl0bGUucmVuZGVyZWR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxuICAgICAgICAgICAgICAgICAgICApKX0gXG4gICAgICAgICAgICAgICAgPC9TbGlkZXI+ICAgXG4gICAgICAgICAgICApIDogJycgfVxuICAgICAgPC9SZWFjdEJTLkNvbnRhaW5lcj5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzVGl0bGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBcbiAgc3RhdGUgPSB7XG4gICAgbG9hZGluZzogdHJ1ZVxuICB9O1xuICBcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcmVzdCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JFU1RfTElOSztcbiAgICBjb25zdCB1cmwgPSByZXN0Kyd3cC1qc29uL3dwL3YyL3BhZ2VzLzEwJztcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgXG4gICAgICBwYWdlOiBkYXRhLCBcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgfHwgIXRoaXMuc3RhdGUucGFnZSA/IChcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICAgICkgOiAoIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlLWJsb2NrXCI+IFxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGFnZS10aXRsZSB1cHBlcmNhc2UgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBhZ2UudGl0bGUucmVuZGVyZWR9IFxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX0gXG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IFByb2plY3RzVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0c1RpdGxlJ1xuaW1wb3J0IFByb2plY3RzU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdHNTbGlkZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RzLXBhZ2VcIiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RzVGl0bGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RzU2xpZGVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+IFxuICAgICAgICApXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=