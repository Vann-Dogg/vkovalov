webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/projects/ProjectsSlider.js":
/*!***********************************************!*\
  !*** ./components/projects/ProjectsSlider.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProjectsSlider; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/user/Documents/domains/vkovalov/components/projects/ProjectsSlider.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar ProjectsSlider = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ProjectsSlider, _React$Component);\n\n  var _super = _createSuper(ProjectsSlider);\n\n  function ProjectsSlider(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ProjectsSlider);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      loading: false,\n      projects: [],\n      error: ''\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ProjectsSlider, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var rest = \"http://vkovalov.me/\";\n      var url = rest + 'wp-json/wp/v2/projects?filter[orderby]=date&order=asc';\n      this.setState({\n        loading: true\n      }, function () {\n        axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(url).then(function (res) {\n          _this2.setState({\n            loading: false,\n            projects: res.data\n          });\n        })[\"catch\"](function (error) {\n          return _this2.setState({\n            loading: false,\n            error: ''\n          });\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var projects = this.state.projects;\n      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 7\n        }\n      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 9\n        }\n      }, projects.length ? __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 17\n        }\n      }, projects.map(function (project) {\n        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"], {\n          className: \"project-slide\",\n          id: project.id,\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 25\n          }\n        }, __jsx(\"div\", {\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 29\n          }\n        }, __jsx(\"img\", {\n          src: project.acf.cover,\n          alt: \"project.title.rendered\",\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 33\n          }\n        })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"].Body, {\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 29\n          }\n        }, __jsx(\"span\", {\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 33\n          }\n        }, project.title.rendered), __jsx(\"span\", {\n          __self: _this3,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 33\n          }\n        }, project.acf.type)));\n      })) : ''));\n    }\n  }]);\n\n  return ProjectsSlider;\n}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RzU2xpZGVyLmpzPzZjNDIiXSwibmFtZXMiOlsiUHJvamVjdHNTbGlkZXIiLCJwcm9wcyIsInN0YXRlIiwibG9hZGluZyIsInByb2plY3RzIiwiZXJyb3IiLCJyZXN0IiwicHJvY2VzcyIsInVybCIsInNldFN0YXRlIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImxlbmd0aCIsIm1hcCIsInByb2plY3QiLCJpZCIsImFjZiIsImNvdmVyIiwidGl0bGUiLCJyZW5kZXJlZCIsInR5cGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUdxQkEsYzs7Ozs7QUFFbkIsMEJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQUFFLEtBREU7QUFFWEMsY0FBUSxFQUFFLEVBRkM7QUFHWEMsV0FBSyxFQUFFO0FBSEksS0FBYjtBQUZrQjtBQU9uQjs7Ozt3Q0FFbUI7QUFBQTs7QUFDbEIsVUFBTUMsSUFBSSxHQUFHQyxxQkFBYjtBQUNBLFVBQU1DLEdBQUcsR0FBR0YsSUFBSSxHQUFDLHVEQUFqQjtBQUNBLFdBQUtHLFFBQUwsQ0FDRTtBQUFFTixlQUFPLEVBQUU7QUFBWCxPQURGLEVBQ3FCLFlBQUs7QUFDdEJPLG9EQUFLLENBQUNDLEdBQU4sQ0FBVUgsR0FBVixFQUNHSSxJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFJO0FBQ1QsZ0JBQUksQ0FBQ0osUUFBTCxDQUFjO0FBQ1pOLG1CQUFPLEVBQUUsS0FERztBQUVaQyxvQkFBUSxFQUFFUyxHQUFHLENBQUNDO0FBRkYsV0FBZDtBQUlELFNBTkwsV0FTSSxVQUFBVCxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDSSxRQUFMLENBQWM7QUFDdkJOLG1CQUFPLEVBQUUsS0FEYztBQUV2QkUsaUJBQUssRUFBRTtBQUZnQixXQUFkLENBQUo7QUFBQSxTQVRUO0FBYUQsT0FmSDtBQWlCRDs7OzZCQUNRO0FBQUE7O0FBQUEsVUFDQ0QsUUFERCxHQUNjLEtBQUtGLEtBRG5CLENBQ0NFLFFBREQ7QUFFUCxhQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLQSxRQUFRLENBQUNXLE1BQVQsR0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tYLFFBQVEsQ0FBQ1ksR0FBVCxDQUFhLFVBQUFDLE9BQU87QUFBQSxlQUNqQixNQUFDLG9EQUFEO0FBQWMsbUJBQVMsRUFBQyxlQUF4QjtBQUF3QyxZQUFFLEVBQUVBLE9BQU8sQ0FBQ0MsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFLLGFBQUcsRUFBRUQsT0FBTyxDQUFDRSxHQUFSLENBQVlDLEtBQXRCO0FBQTZCLGFBQUcsRUFBQyx3QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLENBREosRUFJSSxNQUFDLG9EQUFELENBQWMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFPSCxPQUFPLENBQUNJLEtBQVIsQ0FBY0MsUUFBckIsQ0FESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBT0wsT0FBTyxDQUFDRSxHQUFSLENBQVlJLElBQW5CLENBRkosQ0FKSixDQURpQjtBQUFBLE9BQXBCLENBREwsQ0FESCxHQWNHLEVBZlIsQ0FERixDQURGO0FBcUJEOzs7O0VBdkR5Q0MsNENBQUssQ0FBQ0MsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdHNTbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgKiBhcyBSZWFjdEJTIGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0c1NsaWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHByb2plY3RzOiBbXSxcbiAgICAgIGVycm9yOiAnJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHJlc3QgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19SRVNUX0xJTks7XG4gICAgY29uc3QgdXJsID0gcmVzdCsnd3AtanNvbi93cC92Mi9wcm9qZWN0cz9maWx0ZXJbb3JkZXJieV09ZGF0ZSZvcmRlcj1hc2MnO1xuICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICB7IGxvYWRpbmc6IHRydWUgfSwgKCkgPT57XG4gICAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHsgXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHByb2plY3RzOiByZXMuZGF0YVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICAuY2F0Y2goIFxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsIFxuICAgICAgICAgICAgZXJyb3I6ICcnIFxuICAgICAgICAgIH0pKSAgXG4gICAgICB9XG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcm9qZWN0cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0QlMuUm93PlxuICAgICAgICA8UmVhY3RCUy5Db2w+XG4gICAgICAgICAgICB7cHJvamVjdHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAocHJvamVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RCUy5DYXJkIGNsYXNzTmFtZT1cInByb2plY3Qtc2xpZGVcIiBpZD17cHJvamVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3QuYWNmLmNvdmVyfSBhbHQ9XCJwcm9qZWN0LnRpdGxlLnJlbmRlcmVkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RCUy5DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9qZWN0LnRpdGxlLnJlbmRlcmVkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb2plY3QuYWNmLnR5cGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3RCUy5DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0QlMuQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgKSl9IFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgIDwvUmVhY3RCUy5Db2w+XG4gICAgICA8L1JlYWN0QlMuUm93PlxuICAgIClcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/ProjectsSlider.js\n");

/***/ }),

/***/ "./node_modules/react-leaf-carousel/lib/react-infinite-carusel.min.js":
false

})