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
var _jsxFileName = "/Users/user/Documents/domains/vkovalov/components/projects/ProjectsSlider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



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
    const url = rest + 'wp-json/wp/v2/projects?filter[orderby]=date&order=asc';
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
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, projects.length ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      className: "projects",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, projects.map(project => __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      className: "project",
      sm: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "project-card",
      id: project.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 29
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: project.acf.cover,
      alt: "project.title.rendered",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 37
      }
    })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 33
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 37
      }
    }, project.title.rendered), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 37
      }
    }, project.acf.type)))))) : '');
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
    }) : __jsx("h1", {
      className: "uppercase text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, this.state.page.title.rendered));
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




const PageVariants = {
  initial: {
    opacity: 0,
    y: "-10vh",
    scale: 0.8
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: "-10vh",
    scale: 0.8
  }
};
const PageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1
};
class Projects extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
      initial: "out",
      animate: "in",
      exit: "out",
      variants: PageVariants,
      transition: PageTransition,
      className: "loading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "projects-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }
    }, __jsx(_components_projects_ProjectsTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }), __jsx(_components_projects_ProjectsSlider__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    })));
  }

}

/***/ }),

/***/ 4:
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0c1NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RzVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiJdLCJuYW1lcyI6WyJQcm9qZWN0c1NsaWRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInByb2plY3RzIiwiZXJyb3IiLCJjb21wb25lbnREaWRNb3VudCIsInJlc3QiLCJwcm9jZXNzIiwidXJsIiwic2V0U3RhdGUiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJyZW5kZXIiLCJsZW5ndGgiLCJtYXAiLCJwcm9qZWN0IiwiaWQiLCJhY2YiLCJjb3ZlciIsInRpdGxlIiwicmVuZGVyZWQiLCJ0eXBlIiwiUHJvamVjdHNUaXRsZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicGFnZSIsIlBhZ2VWYXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsInNjYWxlIiwiaW4iLCJvdXQiLCJQYWdlVHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsIlByb2plY3RzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQSxjQUFOLFNBQTZCQyw0Q0FBSyxDQUFDQyxTQUFuQyxDQUE2QztBQUUxREMsYUFBVyxDQUFFQyxLQUFGLEVBQVM7QUFDbEIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBQUUsS0FERTtBQUVYQyxjQUFRLEVBQUUsRUFGQztBQUdYQyxXQUFLLEVBQUU7QUFISSxLQUFiO0FBS0Q7O0FBRURDLG1CQUFpQixHQUFHO0FBQ2xCLFVBQU1DLElBQUksR0FBR0MscUJBQWI7QUFDQSxVQUFNQyxHQUFHLEdBQUdGLElBQUksR0FBQyx1REFBakI7QUFDQSxTQUFLRyxRQUFMLENBQ0U7QUFBRVAsYUFBTyxFQUFFO0FBQVgsS0FERixFQUNxQixNQUFLO0FBQ3RCUSxrREFBSyxDQUFDQyxHQUFOLENBQVVILEdBQVYsRUFDR0ksSUFESCxDQUNRQyxHQUFHLElBQUk7QUFDVCxhQUFLSixRQUFMLENBQWM7QUFDWlAsaUJBQU8sRUFBRSxLQURHO0FBRVpDLGtCQUFRLEVBQUVVLEdBQUcsQ0FBQ0M7QUFGRixTQUFkO0FBSUQsT0FOTCxFQVFHQyxLQVJILENBU0lYLEtBQUssSUFBSSxLQUFLSyxRQUFMLENBQWM7QUFDdkJQLGVBQU8sRUFBRSxLQURjO0FBRXZCRSxhQUFLLEVBQUU7QUFGZ0IsT0FBZCxDQVRiO0FBYUQsS0FmSDtBQWlCRDs7QUFDRFksUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFYjtBQUFGLFFBQWUsS0FBS0YsS0FBMUI7QUFDQSxXQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNPRSxRQUFRLENBQUNjLE1BQVQsR0FDRyxNQUFDLG1EQUFEO0FBQWEsZUFBUyxFQUFDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDS2QsUUFBUSxDQUFDZSxHQUFULENBQWFDLE9BQU8sSUFDakIsTUFBQyxtREFBRDtBQUFhLGVBQVMsRUFBQyxTQUF2QjtBQUFpQyxRQUFFLEVBQUUsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsb0RBQUQ7QUFBYyxlQUFTLEVBQUMsY0FBeEI7QUFBdUMsUUFBRSxFQUFFQSxPQUFPLENBQUNDLEVBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLEVBQUVELE9BQU8sQ0FBQ0UsR0FBUixDQUFZQyxLQUF0QjtBQUE2QixTQUFHLEVBQUMsd0JBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLEVBSUksTUFBQyxvREFBRCxDQUFjLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0gsT0FBTyxDQUFDSSxLQUFSLENBQWNDLFFBQXJCLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9MLE9BQU8sQ0FBQ0UsR0FBUixDQUFZSSxJQUFuQixDQUZKLENBSkosQ0FESixDQURILENBREwsQ0FESCxHQWdCRyxFQWpCVixDQURGO0FBcUJEOztBQXZEeUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjVEO0FBRWUsTUFBTUMsYUFBTixTQUE0QjdCLDRDQUFLLENBQUNDLFNBQWxDLENBQTRDO0FBQUE7QUFBQTs7QUFBQSxtQ0FFakQ7QUFDTkksYUFBTyxFQUFFO0FBREgsS0FGaUQ7QUFBQTs7QUFNekQsUUFBTUcsaUJBQU4sR0FBMEI7QUFDeEIsVUFBTUMsSUFBSSxHQUFHQyxxQkFBYjtBQUNBLFVBQU1DLEdBQUcsR0FBR0YsSUFBSSxHQUFDLHdCQUFqQjtBQUNBLFVBQU1xQixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDcEIsR0FBRCxDQUE1QjtBQUNBLFVBQU1NLElBQUksR0FBRyxNQUFNYSxRQUFRLENBQUNFLElBQVQsRUFBbkI7QUFDQSxTQUFLcEIsUUFBTCxDQUFjO0FBQ1pxQixVQUFJLEVBQUVoQixJQURNO0FBRVpaLGFBQU8sRUFBRTtBQUZHLEtBQWQ7QUFJRDs7QUFFRGMsUUFBTSxHQUFHO0FBQ1AsV0FDRSxtRUFDRyxLQUFLZixLQUFMLENBQVdDLE9BQVgsSUFBc0IsQ0FBQyxLQUFLRCxLQUFMLENBQVc2QixJQUFsQyxHQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFETCxHQUdHO0FBQUksZUFBUyxFQUFDLHVCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSyxLQUFLN0IsS0FBTCxDQUFXNkIsSUFBWCxDQUFnQlAsS0FBaEIsQ0FBc0JDLFFBRDNCLENBSk4sQ0FERjtBQVdEOztBQTdCd0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YzRDtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1PLFlBQVksR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ1BDLFdBQU8sRUFBRSxDQURGO0FBRVBDLEtBQUMsRUFBRSxPQUZJO0FBR1BDLFNBQUssRUFBRTtBQUhBLEdBRFE7QUFNakJDLElBQUUsRUFBRTtBQUNBSCxXQUFPLEVBQUUsQ0FEVDtBQUVBQyxLQUFDLEVBQUUsQ0FGSDtBQUdBQyxTQUFLLEVBQUU7QUFIUCxHQU5hO0FBV2pCRSxLQUFHLEVBQUU7QUFDREosV0FBTyxFQUFFLENBRFI7QUFFREMsS0FBQyxFQUFFLE9BRkY7QUFHREMsU0FBSyxFQUFFO0FBSE47QUFYWSxDQUFyQjtBQWlCQSxNQUFNRyxjQUFjLEdBQUc7QUFDbkJiLE1BQUksRUFBRSxPQURhO0FBRW5CYyxNQUFJLEVBQUUsWUFGYTtBQUduQkMsVUFBUSxFQUFFO0FBSFMsQ0FBdkI7QUFNZSxNQUFNQyxRQUFOLFNBQXVCNUMsNENBQUssQ0FBQ0MsU0FBN0IsQ0FBdUM7QUFDbERrQixRQUFNLEdBQUc7QUFDTCxXQUNJLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0ksYUFBTyxFQUFDLEtBRFo7QUFFSSxhQUFPLEVBQUMsSUFGWjtBQUdJLFVBQUksRUFBQyxLQUhUO0FBSUksY0FBUSxFQUFFZSxZQUpkO0FBS0ksZ0JBQVUsRUFBRU8sY0FMaEI7QUFNSSxlQUFTLEVBQUMsU0FOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BUUk7QUFBSyxRQUFFLEVBQUMsZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFHSSxNQUFDLDJFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixDQVJKLENBREo7QUFnQkg7O0FBbEJpRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCdEQsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL3Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0ICogYXMgUmVhY3RCUyBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzU2xpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgcHJvamVjdHM6IFtdLFxuICAgICAgZXJyb3I6ICcnXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgcmVzdCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1JFU1RfTElOSztcbiAgICBjb25zdCB1cmwgPSByZXN0Kyd3cC1qc29uL3dwL3YyL3Byb2plY3RzP2ZpbHRlcltvcmRlcmJ5XT1kYXRlJm9yZGVyPWFzYyc7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHsgbG9hZGluZzogdHJ1ZSB9LCAoKSA9PntcbiAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgICAudGhlbihyZXMgPT4geyBcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcHJvamVjdHM6IHJlcy5kYXRhXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICAgIC5jYXRjaCggXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLnNldFN0YXRlKHsgXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSwgXG4gICAgICAgICAgICBlcnJvcjogJycgXG4gICAgICAgICAgfSkpICBcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb2plY3RzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RCUy5Db250YWluZXI+XG4gICAgICAgICAgICB7cHJvamVjdHMubGVuZ3RoID8gKCAgICAgXG4gICAgICAgICAgICAgICAgPFJlYWN0QlMuUm93IGNsYXNzTmFtZT1cInByb2plY3RzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAocHJvamVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RCUy5Db2wgY2xhc3NOYW1lPVwicHJvamVjdFwiIHNtPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RCUy5DYXJkIGNsYXNzTmFtZT1cInByb2plY3QtY2FyZFwiIGlkPXtwcm9qZWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9qZWN0LmFjZi5jb3Zlcn0gYWx0PVwicHJvamVjdC50aXRsZS5yZW5kZXJlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RCUy5DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvamVjdC50aXRsZS5yZW5kZXJlZH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvamVjdC5hY2YudHlwZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RCUy5DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdEJTLkNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0QlMuQ29sPiAgIFxuICAgICAgICAgICAgICAgICAgICApKX0gXG4gICAgICAgICAgICAgICAgPC9SZWFjdEJTLlJvdz4gICBcbiAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICA8L1JlYWN0QlMuQ29udGFpbmVyPlxuICAgIClcbiAgfVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHNUaXRsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIFxuICBzdGF0ZSA9IHtcbiAgICBsb2FkaW5nOiB0cnVlXG4gIH07XG4gIFxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCByZXN0ID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVTVF9MSU5LO1xuICAgIGNvbnN0IHVybCA9IHJlc3QrJ3dwLWpzb24vd3AvdjIvcGFnZXMvMTAnO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgIHBhZ2U6IGRhdGEsIFxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5wYWdlID8gKFxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgKSA6ICggXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGFnZS50aXRsZS5yZW5kZXJlZH0gXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICl9IFxuICAgICAgPC8+XG4gICAgKVxuICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBQcm9qZWN0c1RpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdHNUaXRsZSdcbmltcG9ydCBQcm9qZWN0c1NsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RzU2xpZGVyJ1xuXG5jb25zdCBQYWdlVmFyaWFudHMgPSB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHk6IFwiLTEwdmhcIixcbiAgICAgIHNjYWxlOiAwLjhcbiAgICB9LFxuICAgIGluOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHNjYWxlOiAxXG4gICAgfSxcbiAgICBvdXQ6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeTogXCItMTB2aFwiLFxuICAgICAgICBzY2FsZTogMC44XG4gICAgfVxufTsgXG5jb25zdCBQYWdlVHJhbnNpdGlvbiA9IHtcbiAgICB0eXBlOiBcInR3ZWVuXCIsXG4gICAgZWFzZTogXCJhbnRpY2lwYXRlXCIsXG4gICAgZHVyYXRpb246IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICBpbml0aWFsPVwib3V0XCJcbiAgICAgICAgICAgICAgICBhbmltYXRlPVwiaW5cIlxuICAgICAgICAgICAgICAgIGV4aXQ9XCJvdXRcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtQYWdlVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17UGFnZVRyYW5zaXRpb259XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9hZGluZ1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2plY3RzLXBhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RzVGl0bGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RzU2xpZGVyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+IFxuICAgICAgICApXG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=