(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _routes = __webpack_require__(/*! ./routes */ "./src/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _Menu = __webpack_require__(/*! ./components/molecules/Menu */ "./src/components/molecules/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var App = function App() {
  console.log("client");
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_Menu2.default, null),
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _routes2.default.map(function (route, i) {
        return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: 'route-' + i }, route));
      })
    )
  );
};

var _default = (0, _reactHotLoader.hot)(module)(App);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, 'App', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/App.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/App.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/client.js":
/*!***********************!*\
  !*** ./src/client.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _App = __webpack_require__(/*! ./App */ "./src/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

/***/ }),

/***/ "./src/components/atoms/HelloWorld.js":
/*!********************************************!*\
  !*** ./src/components/atoms/HelloWorld.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var HelloWorld = function HelloWorld(_ref) {
  var world = _ref.world;
  return _react2.default.createElement(
    'div',
    null,
    'Hello ',
    world
  );
};

HelloWorld.defaultProps = {
  world: 'World'
};

var _default = HelloWorld;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HelloWorld, 'HelloWorld', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/components/atoms/HelloWorld.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/components/atoms/HelloWorld.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/molecules/Menu.js":
/*!******************************************!*\
  !*** ./src/components/molecules/Menu.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menu = __webpack_require__(/*! antd/es/menu */ "./node_modules/antd/es/menu/index.js");

var _menu2 = _interopRequireDefault(_menu);

__webpack_require__(/*! antd/es/menu/style/css */ "./node_modules/antd/es/menu/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var MyMenu = function MyMenu() {
  return _react2.default.createElement(
    _menu2.default,
    {
      style: { width: 256 },
      defaultSelectedKeys: ['1'],
      mode: 'inline'
    },
    _react2.default.createElement(
      _menu2.default.Item,
      { key: '1' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { href: '/', to: '/' },
        'Home'
      )
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: '2' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { href: '/about', to: '/about' },
        'About'
      )
    ),
    _react2.default.createElement(
      _menu2.default.Item,
      { key: '3' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { href: '/foobar', to: '/foobar' },
        'Non existing page'
      )
    )
  );
};

var _default = MyMenu;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MyMenu, 'MyMenu', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/components/molecules/Menu.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/components/molecules/Menu.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/container/About.js":
/*!********************************!*\
  !*** ./src/container/About.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HelloWorld = __webpack_require__(/*! ../components/atoms/HelloWorld */ "./src/components/atoms/HelloWorld.js");

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var About = function About() {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_HelloWorld2.default, null),
    _react2.default.createElement(_HelloWorld2.default, null),
    _react2.default.createElement(_HelloWorld2.default, null)
  );
};

var _default = About;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(About, 'About', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/container/About.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/container/About.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/container/Home.js":
/*!*******************************!*\
  !*** ./src/container/Home.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "./node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

__webpack_require__(/*! antd/es/button/style/css */ "./node_modules/antd/es/button/style/css.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _HelloWorld = __webpack_require__(/*! ../components/atoms/HelloWorld */ "./src/components/atoms/HelloWorld.js");

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Home = function Home() {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_HelloWorld2.default, null),
    _react2.default.createElement(
      _button2.default,
      { type: 'primary' },
      'Primary Button'
    )
  );
};

var _default = Home;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, 'Home', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/container/Home.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/container/Home.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/container/LoadingPage.js":
/*!**************************************!*\
  !*** ./src/container/LoadingPage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var LoadingPage = function LoadingPage() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading'
  );
};

var _default = LoadingPage;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LoadingPage, 'LoadingPage', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/container/LoadingPage.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/container/LoadingPage.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/container/NotFound.js":
/*!***********************************!*\
  !*** ./src/container/NotFound.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var NotFound = function NotFound() {
  return _react2.default.createElement(
    'div',
    null,
    '404 not found'
  );
};

var _default = NotFound;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotFound, 'NotFound', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/container/NotFound.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/container/NotFound.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactLoadable = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _LoadingPage = __webpack_require__(/*! ./container/LoadingPage */ "./src/container/LoadingPage.js");

var _LoadingPage2 = _interopRequireDefault(_LoadingPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var Home = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return __webpack_require__(/*! ./container/Home */ "./src/container/Home.js");
    });
  },
  loading: _LoadingPage2.default
});

var About = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return __webpack_require__(/*! ./container/About */ "./src/container/About.js");
    });
  },
  loading: _LoadingPage2.default
});

var NotFound = (0, _reactLoadable2.default)({
  loader: function loader() {
    return Promise.resolve().then(function () {
      return __webpack_require__(/*! ./container/NotFound */ "./src/container/NotFound.js");
    });
  },
  loading: _LoadingPage2.default
});

var routes = [{
  path: '/',
  component: Home,
  exact: true
}, {
  path: '/about',
  component: About,
  exact: true
}, {
  component: NotFound
}];

var _default = routes;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, 'Home', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/routes.js');
  reactHotLoader.register(About, 'About', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/routes.js');
  reactHotLoader.register(NotFound, 'NotFound', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/routes.js');
  reactHotLoader.register(routes, 'routes', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/routes.js');
  reactHotLoader.register(_default, 'default', 'C:/Users/Peter/Development/Gits/react-universal-boilerplate/src/routes.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

},[["./src/client.js","manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvSGVsbG9Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL0Fib3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvSG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL0xvYWRpbmdQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvTm90Rm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy5qcyJdLCJuYW1lcyI6WyJBcHAiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicm91dGUiLCJpIiwibW9kdWxlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdmlnYXRvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiLCJIZWxsb1dvcmxkIiwid29ybGQiLCJkZWZhdWx0UHJvcHMiLCJNeU1lbnUiLCJ3aWR0aCIsIkFib3V0IiwiSG9tZSIsIkxvYWRpbmdQYWdlIiwiTm90Rm91bmQiLCJsb2FkZXIiLCJsb2FkaW5nIiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsImV4YWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sU0FBTkEsR0FBTSxHQUFNO0FBQ2hCQyxVQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLFNBQVE7QUFBQTtBQUFBO0FBQ04sdURBRE07QUFFTjtBQUFBO0FBQUE7QUFDRyx1QkFBT0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBUUMsQ0FB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SWVBLFE7Ozs7Ozs7Ozs7Ozs7MEJBSlRBLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZOOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1GLE9BQU8sNkJBQVM7QUFDcEJHLFVBQVE7QUFBQTtBQUFBLGlDQUE0QyxpREFBNUM7QUFBQTtBQUFBLEdBRFk7QUFFcEJDO0FBRm9CLENBQVQsQ0FBYjs7QUFLQSxJQUFNTCxRQUFRLDZCQUFTO0FBQ3JCSSxVQUFRO0FBQUE7QUFBQSxpQ0FBNkMsbURBQTdDO0FBQUE7QUFBQSxHQURhO0FBRXJCQztBQUZxQixDQUFULENBQWQ7O0FBS0EsSUFBTUYsV0FBVyw2QkFBUztBQUN4QkMsVUFBUTtBQUFBO0FBQUEsaUNBQWlELHlEQUFqRDtBQUFBO0FBQUEsR0FEZ0I7QUFFeEJDO0FBRndCLENBQVQsQ0FBakI7O0FBTUEsSUFBTUMsU0FBUyxDQUNiO0FBQ0VDLFFBQU0sR0FEUjtBQUVFQyxhQUFXUCxJQUZiO0FBR0VRLFNBQU87QUFIVCxDQURhLEVBTWI7QUFDRUYsUUFBTSxRQURSO0FBRUVDLGFBQVdSLEtBRmI7QUFHRVMsU0FBTztBQUhULENBTmEsRUFXYjtBQUNFRCxhQUFXTDtBQURiLENBWGEsQ0FBZjs7ZUFnQmVHLE07Ozs7Ozs7Ozs7Ozs7MEJBaENUTCxJOzBCQUtBRCxLOzBCQUtBRyxROzBCQU1BRyxNIiwiZmlsZSI6ImFzc2V0cy9hcHAuZTc5N2JlNDI3Yy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcic7XHJcbmltcG9ydCB7XHJcbiAgU3dpdGNoLFxyXG4gIFJvdXRlLFxyXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9jb21wb25lbnRzL21vbGVjdWxlcy9NZW51JztcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5SVU5USU1FX0VOVik7XHJcbiAgcmV0dXJuICg8RnJhZ21lbnQ+XHJcbiAgICA8TWVudSAvPlxyXG4gICAgPFN3aXRjaD5cclxuICAgICAge3JvdXRlcy5tYXAoKHJvdXRlLCBpKSA9PiAoXHJcbiAgICAgICAgPFJvdXRlIGtleT17YHJvdXRlLSR7aX1gfSB7Li4ucm91dGV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICA8L1N3aXRjaD5cclxuICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShBcHApO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgKFxyXG4gICAgPFJvdXRlcj5cclxuICAgICAgPEFwcCAvPlxyXG4gICAgPC9Sb3V0ZXI+XHJcbiAgKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSxcclxuKTtcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3NlcnZpY2Utd29ya2VyLmpzJyk7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEhlbGxvV29ybGQgPSAoeyB3b3JsZCB9KSA9PiAoXHJcbiAgPGRpdj5IZWxsbyB7d29ybGR9PC9kaXY+XHJcbik7XHJcblxyXG5IZWxsb1dvcmxkLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3b3JsZDogJ1dvcmxkJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlbGxvV29ybGQ7XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICdhbnRkJztcclxuXHJcbmNvbnN0IE15TWVudSA9ICgpID0+IChcclxuICA8TWVudVxyXG4gICAgc3R5bGU9e3sgd2lkdGg6IDI1NiB9fVxyXG4gICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycxJ119XHJcbiAgICBtb2RlPVwiaW5saW5lXCJcclxuICA+XHJcbiAgICA8TWVudS5JdGVtIGtleT1cIjFcIj48TGluayBocmVmPVwiL1wiIHRvPVwiL1wiID5Ib21lPC9MaW5rPjwvTWVudS5JdGVtPlxyXG4gICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+PExpbmsgaHJlZj1cIi9hYm91dFwiIHRvPVwiL2Fib3V0XCIgPkFib3V0PC9MaW5rPjwvTWVudS5JdGVtPlxyXG4gICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+PExpbmsgaHJlZj1cIi9mb29iYXJcIiB0bz1cIi9mb29iYXJcIiA+Tm9uIGV4aXN0aW5nIHBhZ2U8L0xpbms+PC9NZW51Lkl0ZW0+XHJcbiAgPC9NZW51PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlNZW51O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbXMvSGVsbG9Xb3JsZCc7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IChcclxuICA8RnJhZ21lbnQ+XHJcbiAgICA8SGVsbG9Xb3JsZCAvPlxyXG4gICAgPEhlbGxvV29ybGQgLz5cclxuICAgIDxIZWxsb1dvcmxkIC8+XHJcbiAgPC9GcmFnbWVudD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztccmltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4uL2NvbXBvbmVudHMvYXRvbXMvSGVsbG9Xb3JsZCc7XHJccmNvbnN0IEhvbWUgPSAoKSA9PiAoXHIgIDxGcmFnbWVudD5cciAgICA8SGVsbG9Xb3JsZCAvPlxyICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIj5QcmltYXJ5IEJ1dHRvbjwvQnV0dG9uPlxyICA8L0ZyYWdtZW50PlxyKTtcclxyZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvYWRpbmdQYWdlID0gKCkgPT4gKFxyXG4gIDxkaXY+TG9hZGluZzwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1BhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IChcclxuICA8ZGl2PjQwNCBub3QgZm91bmQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xyXG4iLCJpbXBvcnQgTG9hZGFibGUgZnJvbSAncmVhY3QtbG9hZGFibGUnO1xyXG5pbXBvcnQgTG9hZGluZ1BhZ2UgZnJvbSAnLi9jb250YWluZXIvTG9hZGluZ1BhZ2UnO1xyXG5cclxuY29uc3QgSG9tZSA9IExvYWRhYmxlKHtcclxuICBsb2FkZXI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImhvbWVcIiAqLyAnLi9jb250YWluZXIvSG9tZScpLFxyXG4gIGxvYWRpbmc6IExvYWRpbmdQYWdlLFxyXG59KTtcclxuXHJcbmNvbnN0IEFib3V0ID0gTG9hZGFibGUoe1xyXG4gIGxvYWRlcjogKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiYWJvdXRcIiAqLyAnLi9jb250YWluZXIvQWJvdXQnKSxcclxuICBsb2FkaW5nOiBMb2FkaW5nUGFnZSxcclxufSk7XHJcblxyXG5jb25zdCBOb3RGb3VuZCA9IExvYWRhYmxlKHtcclxuICBsb2FkZXI6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIm5vdF9mb3VuZFwiICovICcuL2NvbnRhaW5lci9Ob3RGb3VuZCcpLFxyXG4gIGxvYWRpbmc6IExvYWRpbmdQYWdlLFxyXG59KTtcclxuXHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgY29tcG9uZW50OiBIb21lLFxyXG4gICAgZXhhY3Q6IHRydWUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2Fib3V0JyxcclxuICAgIGNvbXBvbmVudDogQWJvdXQsXHJcbiAgICBleGFjdDogdHJ1ZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGNvbXBvbmVudDogTm90Rm91bmQsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==