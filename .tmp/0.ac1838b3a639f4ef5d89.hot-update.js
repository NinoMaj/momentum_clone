webpackHotUpdate(0,{

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(22), RootInstanceProvider = __webpack_require__(23), ReactMount = __webpack_require__(17), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_26ye8vj1ul = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\reducers\\index.js',
      hash = '35e12f53848c60ecd7fce13d38dd68b134042aed',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\reducers\\index.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 36
        }
      },
      '1': {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 10,
          column: 2
        }
      },
      '2': {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 40
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0
    },
    f: {},
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var _redux = __webpack_require__(110);

var _todos = __webpack_require__(568);

var _todos2 = _interopRequireDefault(_todos);

var _reducer_mainFocus = __webpack_require__(625);

var _reducer_mainFocus2 = _interopRequireDefault(_reducer_mainFocus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

++cov_26ye8vj1ul.s[0];


console.log('mainFocus', _reducer_mainFocus2.default);

var rootReducer = (++cov_26ye8vj1ul.s[1], (0, _redux.combineReducers)({
  todos: _todos2.default,
  mainFocus: _reducer_mainFocus2.default
}));

++cov_26ye8vj1ul.s[2];
console.log('rootReducer', rootReducer);

exports.default = rootReducer;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }

})
//# sourceMappingURL=0.ac1838b3a639f4ef5d89.hot-update.js.map