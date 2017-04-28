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
      hash = 'cb206b0dac022268c4d9c62c5baf42c212c68089',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\reducers\\index.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 20
        },
        end: {
          line: 8,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0
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

var rootReducer = (++cov_26ye8vj1ul.s[0], (0, _redux.combineReducers)({
  todos: _todos2.default,
  mainFocus: _reducer_mainFocus2.default
}));

exports.default = rootReducer;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(22), RootInstanceProvider = __webpack_require__(23), ReactMount = __webpack_require__(17), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_h4wtnguou = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\reducers\\reducer_mainFocus.js',
      hash = 'f3acf8e836bba0c23b985eabf27419e778c1dfe3',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\reducers\\reducer_mainFocus.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 10,
          column: 1
        }
      },
      '1': {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 47,
          column: 3
        }
      },
      '2': {
        start: {
          line: 15,
          column: 6
        },
        end: {
          line: 21,
          column: 8
        }
      },
      '3': {
        start: {
          line: 46,
          column: 6
        },
        end: {
          line: 46,
          column: 19
        }
      }
    },
    fnMap: {
      '0': {
        name: 'mainFocus',
        decl: {
          start: {
            line: 12,
            column: 24
          },
          end: {
            line: 12,
            column: 33
          }
        },
        loc: {
          start: {
            line: 12,
            column: 64
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 12,
            column: 34
          },
          end: {
            line: 12,
            column: 54
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 12,
            column: 42
          },
          end: {
            line: 12,
            column: 54
          }
        }],
        line: 12
      },
      '1': {
        loc: {
          start: {
            line: 13,
            column: 2
          },
          end: {
            line: 47,
            column: 3
          }
        },
        type: 'switch',
        locations: [{
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 21,
            column: 8
          }
        }, {
          start: {
            line: 45,
            column: 4
          },
          end: {
            line: 46,
            column: 19
          }
        }],
        line: 13
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

exports.default = mainFocus;

var _ActionTypes = __webpack_require__(158);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint linebreak-style: ["error", "windows"] */

var initialState = (++cov_h4wtnguou.s[0], [{
  text: 'initial main focus text',
  completed: false
}]);

function mainFocus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (++cov_h4wtnguou.b[0][0], initialState);
  var action = arguments[1];
  ++cov_h4wtnguou.f[0];
  ++cov_h4wtnguou.s[1];

  switch (action.type) {
    case _ActionTypes.ADD_MAIN_FOCUS:
      ++cov_h4wtnguou.b[1][0];
      ++cov_h4wtnguou.s[2];

      return [{
        completed: false,
        text: action.text
      }].concat(_toConsumableArray(state));

    // case DELETE_TODO:
    //   return state.filter(todo =>
    //     todo.id !== action.id
    //   );

    // case EDIT_TODO:
    //   return state.map(todo =>
    //     todo.id === action.id ?
    //       Object.assign({}, todo, { text: action.text }) :
    //       todo
    //   );

    // case COMPLETE_TODO:
    //   return state.map(todo =>
    //     todo.id === action.id ?
    //       Object.assign({}, todo, { completed: !todo.completed }) :
    //       todo
    //   );

    // case CLEAR_COMPLETED:
    //   return state.filter(todo => todo.completed === false);

    default:
      ++cov_h4wtnguou.b[1][1];
      ++cov_h4wtnguou.s[3];

      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "reducer_mainFocus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }

})
//# sourceMappingURL=0.eaabcd18352f833fc994.hot-update.js.map